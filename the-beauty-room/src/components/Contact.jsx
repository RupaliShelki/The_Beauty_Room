import React from "react";

function Contact() {
  return (
    <div className="w-full h-[100vh] bg-white flex gap-[6%] px-[6%] py-[4%]">
      <div className="w-[50%] bg-pink-300 p-[3%]">
        <span className="text-pink-950 font-bold text-2xl">Get in Touch</span>
        <p className="text-pink-800">
          For bookings or inquiries, please fill out the form below or reach out via WhatsApp.
        </p>

        <form className="mt-10">
          {/* Name */}
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            autoComplete="given-name"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-pink-600"
          />

          {/* Phone Number */}
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mt-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-pink-600"
          />

          {/* Email */}
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mt-2">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-pink-600"
          />

          {/* Event Type */}
          <label htmlFor="event" className="block text-sm font-medium text-gray-900 mt-2">
            Event Type
          </label>
          <select
            id="event"
            name="event"
            autoComplete="event-name"
            className="w-full appearance-none rounded-md bg-white py-1.5 px-3 text-base text-gray-900  outline-1 outline-gray-300 focus:outline-2 focus:outline-pink-600"
          >
            <option>Wedding/Reception</option>
            <option>Birthday</option>
            <option>Shoot</option>
            <option>Other</option>
          </select>

          {/* Event Date */}
          <label htmlFor="date" className="block text-sm font-medium text-gray-900 mt-2">
            Event Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900  outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-pink-600"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="w-[50%] bg-pink-300"></div>
    </div>
  );
}

export default Contact;
