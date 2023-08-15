"use client";
import latestChanges from "./functions/latestChanges.js";

import { useEffect, useState } from "react";
export default function Nav() {
    const [date, setDate] = useState("Thursday, 1 January, 1970");

    const [latest, setLatest] = useState({"ago" : "", "date": "", "message": ""});
    useEffect(() => {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        setDate(new Date().toLocaleDateString("en-US", options));

        // ##############

        let latestChange;

        latestChanges().then((result) => {
        setLatest(result);
        });

        console.log(latestChange);
    }, []);
    return (
        <>
            <div className="">
                <div className="flex">
                    <div className="cell border=text px-6 py-4 h-full">
                        <a
                            href="/"
                            className="font-semibold text-lg sm:text-3xl md:text-5xl hover:underline"
                        >
                            zaneg.net
                        </a>
                    </div>
                    <div className="spacer flex-grow"></div>
                    <div className="cell border=text px-6 py-4">
                        <button className="font-bold text-lg sm:text-3xl md:text-5xl h-full ">
                            about
                        </button>
                    </div>
                </div>
                <div className="border=text border-b-[1px] border-t-[1px]  px-4 py-2">
                    <p className="font-serif md:text-base sm:text-sm text-xs">
                        {date}.
                        <a href="/latest-updates" className="pl-3 ml-3 border-l-[1px] border=text font-serif">
                            Last updated {latest.ago}
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
