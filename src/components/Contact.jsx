import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isOpen, setIsOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const onSubmit = async (data) => {
    const formData = {
      access_key: "555d2dd2-9139-4a0b-bf2c-06753e613718",
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      const res = await axios.post("https://api.web3forms.com/submit", formData);

      if (res.data.success) {
        setPopupMessage("Your message has been sent successfully!");
        reset();
      } else {
        setPopupMessage("Failed! " + res.data.message);
      }
      setIsOpen(true);
    } catch (error) {
      console.error(error);
      setPopupMessage("Something went wrong, please try again!");
      setIsOpen(true);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 md:px-20 my-20">
      <h1 className="text-5xl font-bold text-center mb-3 text-gray-800">Contact Me</h1>
      <p className="text-gray-600 text-center mb-12">
        I’d love to hear from you! Fill out the form below and I’ll get back to you.
      </p>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-2xl w-full max-w-lg p-10 rounded-3xl border border-gray-200"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
            Send a Message
          </h2>

          {/* Name */}
          <div className="flex flex-col mb-6">
            <label className="mb-2 font-medium text-gray-700">Full Name</label>
            <input
              {...register("name", { required: true })}
              className={`rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${
                errors.name ? "border-red-500" : ""
              }`}
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col mb-6">
            <label className="mb-2 font-medium text-gray-700">Email Address</label>
            <input
              {...register("email", { required: true })}
              className={`rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">This field is required</span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col mb-8">
            <label className="mb-2 font-medium text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              className={`rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Write your message..."
              rows="5"
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-3 rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center relative">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {popupMessage.includes("✅") ? "Success!" : "Error"}
            </h2>
            <p className="text-gray-600 mb-6">{popupMessage}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition-all shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
