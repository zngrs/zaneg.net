"use client";
import Nav from "./components/nav";
import ascii from "./components/ascii--1";
import { useEffect, useState } from "react";

function fakeTerminal() {
    return (
        <>
            <div className=" w-screen max-w-[450px] fake-term--subtle my-3">
                <div
                    className="px-2 px-2 text-white font-mono border-[2px] border-white flex justify-center"
                    style={{ backgroundColor: "blue", fontFamily: "Courier" }}
                >
                    Command prompt
                    <div className="flex-grow" />
                    <div className="text-xs my-1 px-1 bg-gray-400 aspect-square h-[fit-content] text-black fake-term--subtle mx-1">
                        _
                    </div>
                    <div className="text-xs my-1 px-1 bg-gray-400 aspect-square h-[fit-content] text-black fake-term--subtle">
                        x
                    </div>
                </div>
                <div style={{fontFamily: "Courier"}} className="bg-black p-2 border-[2px] text-white">
                  Invalid adress.<br/>guest@fw22.net:~
                </div>
            </div>
        </>
    );
}

export default function NotFound() {
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    const handleInputChange = (event) => {
        setUrl(event.target.value);
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      let formattedUrl = url.trim();
      
      if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
        formattedUrl = "https://" + formattedUrl;
      }
    
      window.open(formattedUrl, "_blank");
    };

    return (
        <div className="h-screen relative " style={{backgroundColor: "#018281"}}>
            <Nav />
            <div className="content--1 ">
                <div className="absolute left-5 bottom-5 max-w-[300px]">
                    <img src="https://ia904708.us.archive.org/16/items/mma_face_defense_of_mail_34828/34828.jpg"></img>
                </div>
                <div className="absolute left-10 bottom-10 max-w-[300px]">
                    <img src="https://ia904708.us.archive.org/16/items/mma_face_defense_of_mail_34828/34828.jpg"></img>
                </div>
                <div className="absolute left-16 bottom-16 max-w-[300px]">
                    <img src="https://ia904708.us.archive.org/16/items/mma_face_defense_of_mail_34828/34828.jpg"></img>
                </div>
                <div className="absolute right-6 bottom-[50%] max-w-[600px]">
                    <img src="https://ia802507.us.archive.org/0/items/dr_text-page-to-the-world-wide-web-business-and-beyond-10447002/10447002.jpg"></img>
                </div>
                <div className="absolute left-0 top-20 max-w-[600px] px-3 max-w-[100%] ">
                    {fakeTerminal()}
                </div>
            </div>
            <div className="bg-text--1 absolute left-[20%] bottom-[50%]">
                <pre style={{ fontFamily: "monospace", userSelect: "none" }}>
                    {ascii.join("\n")}
                </pre>
            </div>{" "}
            <div className="bg-text--1 absolute left-[40%] bottom-[40%]">
                <pre style={{ fontFamily: "monospace", userSelect: "none" }}>
                    {ascii.join("\n")}
                </pre>
            </div>
            <div className="font-serif w-screen h-[fit-content] overflow-hidden z-[10] max-w-[500px] bg-white border-[1px] border-black absolute mx-auto my-auto left-0 right-0 top-[50%] bottom-[50%] centered-text fake-term--subtle">
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        value={url}
                        onChange={handleInputChange}
                        className="font-mono mx-4 mt-2 w-[100%]"
                    />
                    <div className="px-4 py-2">
                        <h3 className="font-semibold font-serif">
                            The page cannot be found.{" "}
                        </h3>
                        <p className="font-serif">
                            The page you are looking for might have been
                            removed, had its name changed, or is temporarily
                            unavailable.
                        </p>
                        <div className="h-[1px] bg-black my-3"></div>
                        <p className="font-serif">Please try the following:</p>
                        <ul className="font-serif ml-4 my-3 list-disc">
                            <li className="font-serif ">
                                If you typed the page address in the Address
                                bar, make sure that it is spelled correctly.
                            </li>
                            <li className="font-serif ">
                                Open the{" "}
                                <a
                                    href="/"
                                    className="font-serif text-red-500 underline"
                                >
                                    fw22.net
                                </a>{" "}
                                home page, and then look for links to the
                                information you want.
                            </li>
                            <li className="font-serif ">
                                Click the{" "}
                                <span className="font-serif text-red-500">
                                    back
                                </span>{" "}
                                button to try another link
                            </li>
                            <li className="font-serif">
                                Search the web for a different web page.
                            </li>
                        </ul>
                    </div>

                </form>
            </div>
        </div>
    );
}
