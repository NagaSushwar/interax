"use client";

import { useState } from "react";
import Image from "next/image"; // Make sure to import Image properly
import cart from "./../../public/cart.png";

export default function Page() {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add validation or send the data to an API here
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="mt-12 mb-24 flex">
      <div className="w-1/2">
        <Image
          className="bg-primary-1000 h-[650px] w-[650px]"
          src={cart}
          alt="Cart image"
        />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 w-1/2">
        <div className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Log in to Exclusive
            </h2>
          </div>
          <div>Enter your details below</div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-9">
            <div className="space-y-2">
              <label
                htmlFor="emailOrPhone"
                className="block text-sm font-medium text-gray-700"
              >
                Email or Phone Number
              </label>
              <input
                type="text"
                id="emailOrPhone"
                name="emailOrPhone"
                placeholder="Enter your email or phone number"
                value={formData.emailOrPhone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                required
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
              >
                Log In
              </button>
              <a
                href="#"
                className="text-sm text-red-500 hover:text-red-600 transition-colors"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
