"use client"
import { useState } from "react";
export default function Nav() {
    const [first, setfirst] = useState(false)
    return <>
        <div className="flex border=text border-b-[1px]">
            <div className="cell border=text px-6 py-4 h-full">
                <h1 className="font-bold text-5xl">ZANE</h1>
            </div>
            <div className="spacer flex-grow"></div>
             <div className="cell border=text">
                <button className="font-bold text-5xl px-5 py-4 h-full">ABOUT</button>
            </div>           
        </div>
    </>;
}
