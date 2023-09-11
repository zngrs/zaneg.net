import Image from "next/image";
import Nav from "./components/nav";
import Footer from "./components/footer";

export default function Home() {
    return (
        <>
            <Nav />
            <div className="px-6 min-h-screen">
                <div className="py-4">
                    <h1 className="text-3xl font-semibold capitalize">Minor items</h1>
                </div>
            </div>
            <Footer/>
        </>
    );
}
