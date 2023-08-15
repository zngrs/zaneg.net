"use client";
import { useEffect, useState } from "react";
import allChanges from "../components/functions/allChanges";
import Nav from "../components/nav";

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

            {allChangesJson.map((user, i, length) => (
                <>
                    <div key={i} className="mx-3 my-6 flex">
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
                                style={{
                                    filter:
                                        i % 2 == 0
                                            ? "brightness(1)"
                                            : "brightness(1.5)",
                                }}
                                className="dark:text-gray-300 text-gray-700 mr-8"
                            >
                                {user.commit.message}
                            </p>
                        </div>
                    </div>

                    <div className="border=text border-b-[1px] h-[1px]"></div>
                </>
            ))}
        </>
    );
}
