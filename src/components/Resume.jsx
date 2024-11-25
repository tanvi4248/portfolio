export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/Tanvi Patel_Resume.pdf`; // Path to the file in the public folder
    link.download = "Tanvi Patel_Resume.pdf"; // Suggested filename
    link.click();
  };
  return (
    <button
      className="download-btn rounded-full bg-orange-600 px-3 py-1.5"
      onClick={handleDownload}
    >
      Download Resume
    </button>
  );
}
