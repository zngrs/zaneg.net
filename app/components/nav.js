"use client";
import { useEffect, useState, useRef } from "react";

export default function Nav() {
  const [currentRoute, setCurrentRoute] = useState("");
  const [navIsShow, setNavIsShow] = useState(false);
  const [contextHeight, setContextHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setCurrentRoute(window.location.pathname);

    setContextHeight(ref.current.clientHeight)
  }, []);

  function context() {
    return (
      <div ref={ref} className="context border-b-gray-500 border-b-[1px] px-6 py-4 bg-white">
        <p>
          This is some content that would usually be hidden on my nav.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="transition-transform sticky top-0 w-screen z-[2]">
        <div className="relative transition-transform" style={{ transform: `translateY(${navIsShow ? contextHeight + 2 : 0}px)` }}>
          <div className="absolute w-full bottom-[100%]">{context()}</div>
          <div className="px-6 py-4 bg-gray-50 border-b-gray-500 border-b-[1px] shadow-md flex items-center">
            <h1 className="flex-grow truncate tracking-tighter text-5xl font-bold pb-[5px]">
              <a className="hover:underline" title="Home" href="/">fw22.net</a>
              <span className="font-light sm:inline-block hidden">
                {currentRoute}
              </span>
            </h1>
            <div className="h-[100%] flex items-center">
              <button title={(navIsShow ? "less" : "more") + " info"} onClick={() => { setNavIsShow(!navIsShow) }}>{navIsShow ? "less" : "more"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
