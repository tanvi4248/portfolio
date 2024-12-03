import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setStatus("");

    const formData = { name, email, message };

    try {
      const response = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          message: "Message sent successfully!",
          type: "success",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus({
          message: "Something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch {
      setStatus({
        message: "Error sending message. Please try again later.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="Contact" className="contact-form mb-16 max-[480px]:mb-8">
      <h3 className="text-xxl max-[480px]:text-xl text-center main-title font-bold pb-10 max-[480px]:pb-6">
        Contact Me
      </h3>
      {status.message && (
        <p
          className={`status-message p-4 text-center rounded-lg mx-5 ${
            status.type === "success"
              ? "bg-green-100 text-green-700 border border-green-400"
              : "bg-red-100 text-red-700 border border-red-400"
          }`}
        >
          {status.message}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-6 max-w-lg mx-auto bg-stone-900 rounded-lg shadow-md"
      >
        {/* Name Input */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-zinc-300 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-zinc-300 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-zinc-300 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="px-4 text-gray-900  py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 bg-orange-700 text-white font-semibold rounded-full hover:bg-orange-600 disabled:bg-gray-300"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
