"use client";
import Nav from "./components/nav.js";
import CustomFooter from "./components/customFooter.js"
import GridItem from "./components/gridItem.js";

import { posts } from "./posts/posts.js";
console.log(posts, "text");
export default function Home() {
    return (
        <>
            <div className="relative">
                <Nav />
                <div className="min-h-screen p-6 ">
                    <h1 className="text-2xl capitalize font-semibold">
                        All projects:
                    </h1>

                    <div className="grid grid-cols-3 grid-rows-5 gap-3">
                        <div className="col-span-2 row-span-2">
                            <a href={posts[0].adress}>
                                <GridItem title={posts[0].title} />
                            </a>
                        </div>
                        <div className="col-start-3"></div>
                        <div className="col-start-3 row-start-2"></div>
                    </div>
                </div>
            </div>
            <CustomFooter/>
        </>
    );
}
