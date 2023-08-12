import React from "react";

export default function Pseudo(props) {
    let indents = Array(props.steps.length);
    let currentIndent = 0; // Set initial currentIndent to 0
    for (let i = 0; i < indents.length; i++) {
        if (props.steps[i].includes("{")) {
            currentIndent += 2;
        } else if (props.steps[i].includes("}")) {
            currentIndent -= 2;
        } else if (currentIndent < 0) {
            currentIndent = 0;
        } //shouldn't happen but just in case
        indents[i] = currentIndent;
    }

    return (
        <>
            <div className="font-mono bg-gray-100 rounded p-3">
                <p className="font-mono italic text-sm">{props.inputs[0]}</p>
                {props.steps.map((step, index) => (
                    <p
                        className="whitespace-pre-wrap font-mono text-sm ml-2"
                        key={index}
                    >
                        {index + 1}){" ".repeat(indents[index])}
                        {step == "}" ? "  " : ""}
                        {step}
                    </p>
                ))}
            </div>
        </>
    );
}
