import CVDownloadButton from "../components/CVDownload";

function page() {
  return (
    <div className="border-2 border-green-300 h-screen text-center p-8">
      <h1>Welcome to my website!</h1>
      <p>This is a simple React component.</p>
      <CVDownloadButton
        cvUrl="@FrontendEngineer.pdf"
        fileName="Samuel's_CV.pfd"
      />
    </div>
  );
}

export default page;
