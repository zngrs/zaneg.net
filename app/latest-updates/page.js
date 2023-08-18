"use client";
import { useEffect, useState } from "react";
import Nav from "../components/nav";
import AiOutlineDown from "../components/AiOutlineDown";

async function getData() {
    const res = await fetch(
        "https://api.github.com/repos/zngrs/zaneg.net/commits"
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

async function allChanges() {
    const data = await getData();

    let r = data;
    return r;
}

// function AiOutlineDown() {
//     const [isExpanded, setIsExpanded] = useState(false);
//     return (
//         <svg
//             onClick={() => {
//                 setIsExpanded(!isExpanded);
//             }}
//             className="cursor-pointer down-arrow"
//             stroke="currentColor"
//             fill="currentColor"
//             strokeWidth={0}
//             viewBox="0 0 1024 1024"
//             height="1em"
//             width="1em"
//             style={{transform: `${isExpanded ? "rotate(90deg)" : "rotate(0deg)"}`}}
//         >
//             <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
//         </svg>
//     );
// }

export default function Updates() {
    const [allChangesJson, setAllChangesJson] = useState([]);
    useEffect(() => {
        document.title = "Latest updates - Zane";

        allChanges().then((result) => {
            setAllChangesJson(result);
            console.log(result);
        });
    }, []);

    return (
        <>
            <Nav />
            <div className="mt-10">
                {allChangesJson.map((user, i, length) => (
                    <>
                        <div key={i} className="mx-3 my-6 sm:flex display-block">
                            <p
                                style={{
                                    filter:
                                        i % 2 == 0
                                            ? "brightness(1)"
                                            : "brightness(1.5)",
                                }}
                                className="flex-grow font-light dark:text-gray-300 text-gray-700"
                            >
                                {new Date(
                                    user.commit.author.date
                                ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                })}
                            </p>
                            <div className="">
                                <p
                                    onClick={() => {
                                        console.log(this);
                                    }}
                                    style={{
                                        filter:
                                            i % 2 == 0
                                                ? "brightness(1)"
                                                : "brightness(1.5)",
                                    }}
                                    className="dark:text-gray-300 my-6 ml-4 sm:ml-0 sm:my-0 text-gray-700 mr-8 italic"
                                >
                                    <span className="sm:hidden inline-block">-&nbsp;</span>"{user.commit.message}"
                                </p>
                            </div>
                        </div>

                        <div
                            style={{
                                display:
                                    i == allChangesJson.length - 1
                                        ? "none"
                                        : "block",
                            }}
                            key={i + "a"}
                            className="border-zinc-500 border-b-[1px] h-[1px] my-2"
                        ></div>
                    </>
                ))}
            </div>
        </>
    );
}
