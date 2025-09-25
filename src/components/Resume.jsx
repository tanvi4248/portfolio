export default function Resume() {
  const handleRedirect = () => {
    window.open("/Tanvi Patel_Resume.pdf", "_blank");
  };

  return (
    <button
      className="download-btn rounded-full bg-orange-600 px-3 py-1.5"
      onClick={handleRedirect}
    >
      View Resume
    </button>
  );
}
