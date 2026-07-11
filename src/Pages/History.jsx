import React, { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clearing, setClearing] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchHistory();
  }, []);

  // Fetch Chat History
  const fetchHistory = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${API_URL}/history`);
      

      // Supports both:
      // res.data = [...]
      // res.data.history = [...]
      setHistory( res.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  // Clear All History
  const clearHistory = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to clear all chat history?"
    );

    if (!confirmDelete) return;

    try {
      setClearing(true);

      await axios.delete(`${API_URL}/clear`);

      setHistory([]);
    } catch (error) {
      console.error("Error clearing history:", error);
      alert("Failed to clear history.");
    } finally {
      setClearing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Chat History
            </h1>
            <p className="mt-1 text-gray-500">
              View your previous AI conversations.
            </p>
          </div>

          <button
            onClick={clearHistory}
            disabled={history.length === 0 || clearing}
            className={`rounded-lg px-5 py-3 font-medium transition-all duration-300
              ${
                history.length === 0 || clearing
                  ? "cursor-not-allowed bg-gray-300 text-gray-500"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
          >
            {clearing ? "Clearing..." : "🗑 Clear History"}
          </button>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : history.length === 0 ? (

          /* Empty State */
          <div className="rounded-xl bg-white p-10 text-center shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">
              No Chat History
            </h2>

            <p className="mt-3 text-gray-500">
              Your previous conversations will appear here.
            </p>
          </div>

        ) : (

          /* History Cards */
          
<div className="space-y-4">
  {history
    .filter((chat) => chat.role !== "system")
    .map((chat, index) => (
      <div
        key={index}
        className={`flex ${
          chat.role === "user" ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`max-w-3xl rounded-2xl px-5 py-4 shadow-md ${
            chat.role === "user"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          <p className="mb-2 text-xs font-semibold uppercase opacity-70">
            {chat.role === "user" ? "You" : "AI Assistant"}
          </p>

          <p className="whitespace-pre-wrap break-words">
            {chat.content}
          </p>
        </div>
      </div>
    ))}
</div>
        )}
      </div>
    </div>
  );
}

export default History;