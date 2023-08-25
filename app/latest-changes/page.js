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
        <div className="relative">
            <Nav />
        <div className=" ml-6 mt-5 "> 
        <div className="text-3xl font-medium ">Latest changes on <span className="text-blue-500 font-semibold">zaneg.net:</span></div>
        </div>
            <div className="mt-5">
                {allChangesJson.map((user, i, length) => (
                    <>
                        <div key={i} className="mx-6 my-6 sm:flex display-block">
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
                            >
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}
