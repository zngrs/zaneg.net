import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { rust } from "@codemirror/lang-rust";
import { githubDarkInit } from "@uiw/codemirror-theme-github";
import "react-tabs/style/react-tabs.css";

export default function Codedemo(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div style={{ backgroundColor: "#34323D" }} className="p-2 mb-8">
      <Tabs
        selectedIndex={activeTabIndex}
        onSelect={setActiveTabIndex}
        className="custom-tabs"
      >
        <TabList className="custom-tab-list">
          {props.examples.map((example, index) => (
            <Tab
              key={index}
              className={`custom-tab ${
                index === activeTabIndex ? "active-tab" : ""
              }`}
            >
              {example.lang}
            </Tab>
          ))}
        </TabList>
        {props.examples.map((example, index) => (
          <TabPanel key={index}>
            <CodeMirror
              value={example.value}
              editable={false}
              theme={githubDarkInit({
                settings: {
                  caret: "#c6c6c6",
                  fontFamily: "monospace",
                },
              })}
              extensions={[example.lang === "rust" ? rust() : javascript()]}
            />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
