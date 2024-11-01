"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage(
          "Your message was sent successfully! I will reply you within 4 business days."
        );
      } else {
        setResponseMessage("Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-slate-400 shadow-lg rounded-lg p-8 mt-12 border-animated">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Get in Touch
      </h2>

      {responseMessage ? (
        <p className="text-center text-gray-600 text-lg mt-6">{responseMessage}</p>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <p className="text-center text-lg text-gray-600 mb-10">
            Let me know how I can help you with your SaaS development needs!
          </p>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-black"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-black"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 h-40 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-black"
              placeholder="Tell me about your project needs..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-950 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
