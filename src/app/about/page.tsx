'use client'

// import Image from "next/image";
import CVDownloadButton from "../components/CVDownload";



function page() {
    return (
        <div className="h-screen w-screen text-center p-4 my-8 ">
            <h1>Welcome to my website!</h1>
            <h2>
            About Samuel Ogbaje
            </h2>
            <p>This is a simple React component.</p>
            {/* <button onClick={() => alert('Hello, world!')}>Click me!</button> */}
            <p>
                <a href="https://github.com/SamuelOgbaje">
                    Github Profile
                </a>
            </p>
           <button>
           </button>
           <CVDownloadButton  cvUrl="@/FrontendEngineer.pdf" fileName="SamuelOgbaje_cv.pdf"/>
        </div>
    );
}

export default page;