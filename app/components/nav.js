"use client";
import latestChanges from "./functions/latestChanges.js";

import { useEffect, useState, useRef } from "react";
export default function Nav() {
    const [date, setDate] = useState("Thursday, 1 January, 1970");

    const [latest, setLatest] = useState({ ago: "", date: "", message: "" });

    const [isLoaded, setIsLoaded] = useState(false);

    const [aboutHeight, setAboutHeight] = useState(0);

    const [aboutToggled, setAboutToggled] = useState(false);

    const ref = useRef(null);
    const ref2 = useRef(null);

    function toggleAbout() {
        setAboutToggled(!aboutToggled);
        console.log(aboutToggled);
    }

    useEffect(() => {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        setDate(new Date().toLocaleDateString("en-US", options));

        // ##############
        // document.body.classList.add("bg-alternate")

        latestChanges().then((result) => {
            setLatest(result);
        });

        setAboutHeight(ref.current.clientHeight);
        ref.current.classList.remove("absolute");
        setTimeout(function () {
            setIsLoaded(true);
        }, 100);
    }, []);
    return (
        <>
            <div
                ref={ref2}
                style={{
                    marginTop: `-${!aboutToggled ? aboutHeight + 1 : 0}px`,
                    transition: `${isLoaded ? ".3s" : "none"}`,
                }}
                className="z-[5] "
            >
                <div
                    className="border=text border-b-[1px] absolute z-[-5]"
                    ref={ref}
                >
                    About content.
                </div>
                <div className="flex">
                    <div className="cell border=text px-6 py-4 h-full">
                        <a
                            href="/"
                            className="font-semibold text-2xl sm:text-4xl md:text-5xl hover:underline"
                        >
                            zaneg.net
                        </a>
                    </div>
                    <div className="spacer flex-grow"></div>
                    <div className="cell border=text px-6 py-4">
                        <button
                            className="font-bold text-lg sm:text-3xl md:text-5xl h-full "
                            onClick={toggleAbout}
                        >
                            about
                        </button>
                    </div>
                </div>
            </div>
            <div className="border=text border-b-[1px] border-t-[1px] sticky top-0 px-6 py-2 bg-alternate glass">
                <p className="text-sm font-semibold capitalized">
                    {date}.
                    <a
                        href="/latest-changes"
                        className="hover:underline font-medium pl-3 ml-3 border-l-[1px] border=text"
                    >
                        Last updated {latest.ago}
                    </a>
                </p>
            </div>
        </>
    );
}
