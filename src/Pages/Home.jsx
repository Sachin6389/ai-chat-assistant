import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await axios.post(`${API_URL}/chat`, {
        message: message,
      });
      console.log("Response from server:", res);

      const data = await res.data
;

      setResponse(data.reply ||  "No response from server");
    } catch (error) {
      console.error(error);
      setResponse("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 ">
      <h1 className="text-3xl font-bold mb-6">
        AI Chat Assistant
      </h1>

      <form onSubmit={sendMessage} className="space-y-4">
        <textarea
          rows={5}
          className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {response && (
        <div className="mt-8 p-5 border rounded-lg bg-gray-100">
          <h2 className="font-bold text-lg mb-2">AI Response</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default Home;