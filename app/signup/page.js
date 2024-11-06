"use client";

import Image from "next/image";
import cart from "./../../public/cart.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically send `formData` to an API or authentication service
      console.log("Form submitted:", formData);

      // After successful form submission, navigate to the desired website
      // You can change this URL to wherever you want to redirect
      router.push("http://localhost:3000/");

      // If you want to navigate to an internal route instead, use:
      // router.push("/dashboard");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleGoogleSignUp = () => {
    // Navigate to Google sign-up or authentication URL
    router.push("https://accounts.google.com");
  };

  return (
    <div className="mt-12 mb-24 flex">
      <div className="w-1/2">
        <Image
          className="bg-primary-1000 h-[650px] w-[650px]"
          src={cart}
          alt="Shopping cart illustration"
        />
      </div>
      <div className="w-1/2 flex flex-col items-center w-full max-w-md p-8 mx-auto bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
        <p className="text-gray-600 mb-6">Enter your details below</p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone Number"
            value={formData.emailOrPhone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none transition duration-300"
          >
            Create Account
          </button>
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full py-2 border border-gray-300 text-gray-700 bg-white rounded flex items-center justify-center hover:bg-gray-100 transition duration-300"
          >
            <img
              src="/path/to/google-logo.png"
              alt="Google logo"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-red-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
