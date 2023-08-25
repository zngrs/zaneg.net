export default function Footer() {
    return (
        <>
            <footer className="relative border=text border-t-[1px] px-6 py-8">
                <h1 className="font-semibold text-lg py-2">zaneg.net</h1>
                <ul className="ml-2">
                    <li className="py-3">
                        <a
                        target={"_blank"}
                            href="https://github.com/zngrs/zaneg.net"
                            className="hover:underline flex center block text-subtle font-medium"
                        >
                            View this website's repo on GitHub
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                                </g>
                            </svg>
                        </a>
                    </li>

                    <li className="py-3">
                        <a
                        target={"_blank"}
                            href="https://zngrs.github.io/zaneg.net--assets/"
                            className="hover:underline flex center block text-subtle font-medium"
                        >
                            View this website's static assets
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>
                                </g>
                            </svg>
                        </a>
                    </li>
                </ul>
                <img
                    className="absolute z-[-100] top-0 left-0 w-[35%] h-[100%]"
                    src="https://zngrs.github.io/zaneg.net--assets/static/imgs/IMG_2538.jpeg"
                    alt="nature background"
                ></img>
            </footer>
        </>
    );
}
