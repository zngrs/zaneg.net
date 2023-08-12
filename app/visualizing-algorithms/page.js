"use client";
import { useRef, useEffect, useState } from "react";
import Nav from "../components/nav";
import Bubble from "./sketches/bubble";
import Psuedo from "../components/pseudo";
import Codedemo from "../components/codedemo";

const exampleCode = {
    bubble: {
        rust: `fn bubble_sort(a: Vec<i32>) -> Vec<i32> {
    let mut returned = a;
    let l = returned.len();
    for i in 0..l - 1 {
        for j in 0..l - i - 1 {
            if returned[j] > returned[j + 1] {
                returned.swap(j, j + 1); // swap is a built-in method of Rust
            }                            // which swaps based on index
        }
    }
    return returned;
}`,
        javascript: `function bubbleSort(a) {
    let returned = a.slice();
    let l = returned.length;
    for (let i = 0; i < l - 1; i++) {
        for (let j = 0; j < l - i - 1; j++) {
            if (returned[j] > returned[j + 1]) {
                [returned[j], returned[j + 1]] = [returned[j + 1], returned[j]];
            }
        }
    }
    return returned;
}
`,
    },
};

export default function VizualisingAlgorithms() {
    const canvasRef = useRef(null);
    const [canvasWidth, setCanvasWidth] = useState(0);
    const [canvasHeight, setCanvasHeight] = useState(0);

    useEffect(() => {
        setCanvasWidth(canvasRef.current.clientWidth);
        setCanvasHeight(canvasRef.current.clientHeight);
    }, []);

    return (
        <>
            <Nav />
            <div className="mx-3 my-2">
                <p className="font-semibold leading-loose text-justify indent-4">
                    The best way to interpret how seemingly complex algorithm
                    works is by visualizing them. It&apos;s sometimes difficult to
                    see the intricate details and relationships without a visual
                    representation. Visualizations provide a clear and concise
                    way to grasp concepts from little to increasing complexity
                    and make them more accessible to our understanding.
                </p>
                <hr className="mt-2"></hr>
            </div>
            <div className="min-h-screen flex p-3 mr-3 relative">
                <div ref={canvasRef} className="w-[50%] relative">
                    <div className="sticky top-0">
                        <Bubble width={canvasWidth} height={canvasHeight} />
                    </div>
                </div>
                <div className="w-[50%] ml-6">
                    <h1 className="font-bold text-2xl mt-2">Bubble Sort</h1>
                    <h2 className="mb-2">
                        O(n<sup>2</sup>)
                    </h2>
                    <p className="ll indent-4">
                        Starting with the simplest, Bubble Sort provides an easy
                        way to sort a vector, but with increasingly poor
                        efficiency as said vector scales in length.
                    </p>
                    <Psuedo
                        inputs={["Input: arr[int]"]}
                        steps={[
                            "length = arr.len()",
                            "for i from 0 to n - 1 {",
                            "for j from 0 to n - 1 - i {",
                            "if arr[j] > arr[j + 1] {",
                            "swap(arr[j], arr[j + 1])",
                            "}",
                            "}",
                            "}",
                        ]}
                    />
                    <p className="ll indent-4 my-2">
                        Bubble sort is a basic sorting algorithm that compares
                        and swaps adjacent elements until the entire sequence is
                        sorted. It repeatedly moves the larger elements towards
                        the end, similar to bubbles rising to the surface, hence
                        the name bubble sort.
                    </p>
                    <h1 className="font-semibold text-xl my-2">Examples:</h1>
                    <Codedemo
                        examples={[
                            { value: exampleCode.bubble.rust, lang: "rust" },
                            {
                                value: exampleCode.bubble.javascript,
                                lang: "javascript",
                            },
                        ]}
                    />
                </div>
            </div>
        </>
    );
}
