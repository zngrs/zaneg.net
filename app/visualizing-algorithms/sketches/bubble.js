"use client";
import React, { useState, useRef } from "react";
import { Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

export default function Page(props) {
    const sketch = (p5) => {
        const [width, height] = [props.width, props.height];

        let arr = [];
        let isSorting = false;
        let started = false;
        let restartButton;

        p5.setup = () => {
            p5.createCanvas(width, height);
            arr = new Array(width);
            for (let i = 0; i < arr.length; i++) {
                arr[i] = Math.random() * height;
            }
            restartButton = p5.createButton("Start");
            restartButton.addClass("p5--button");
            restartButton.mousePressed(restartDrawing);
        };

        const restartDrawing = () => {
            isSorting = true;
            started = true;
            for (let i = 0; i < arr.length; i++) {
                arr[i] = Math.random() * height;
            }
            restartButton.html("Restart Sorting");
        };

        p5.draw = () => {
            p5.background(0);
            let startColor = [235, 154, 32];
            let endColor = [83, 136, 264];

            for (let i = 0; i < arr.length; i++) {
                let ratio = arr[i] / height// Calculate the ratio between 0 and 1

                // Interpolate the RGB values based on the ratio
                let interpolatedColor = [
                    startColor[0] + (endColor[0] - startColor[0]) * ratio,
                    startColor[1] + (endColor[1] - startColor[1]) * ratio,
                    startColor[2] + (endColor[2] - startColor[2]) * ratio,
                ];

                p5.stroke(
                    interpolatedColor[0],
                    interpolatedColor[1],
                    interpolatedColor[2]
                );
                p5.line(i, height, i, height - arr[i]);
            }

            if (isSorting) {
                let isSwapped = false;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > arr[i + 1]) {
                        let temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] = temp;
                        isSwapped = true;
                    }
                }
                if (!isSwapped) {
                    isSorting = false;
                    restartButton.html("Restart");
                }
            }
        };
    };

    return (
        <div>
            <NextReactP5Wrapper sketch={sketch} />
        </div>
    );
}
