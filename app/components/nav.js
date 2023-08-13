"use client";
import { useEffect, useState } from "react";
export default function Nav() {
    const [date, setDate] = useState("Thursday, 1 January, 1970");
    useEffect(() => {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        setDate(new Date().toLocaleDateString("en-US", options));
    }, []);
    return (
        <>
            <div className="">
                <div className="flex">
                    <div className="cell border=text px-6 py-4 h-full">
                        <a
                            href="/"
                            className="font-semibold text-5xl hover:underline"
                        >
                            <span className="font-extralight">://</span>
                            zaneg.net
                        </a>
                    </div>
                    <div className="spacer flex-grow"></div>
                    <div className="cell border=text">
                        <button className="font-bold text-5xl px-5 py-4 h-full ">
                            about
                        </button>
                    </div>
                </div>
                <div className="border=text border-b-[1px] border-t-[1px]  px-4 py-2">
                    <p className="font-serif">
                        {date}.
                        <span className="pl-3 ml-3 border-l-[1px] border=text font-serif">
                            {"last updated 4 days ago."}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}
