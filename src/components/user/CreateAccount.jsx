import { useState } from "react";

export default function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating account with:", { firstName, lastName, email, phone });
    // Add account creation logic here
  };

  return (
    <div className="max-w-3xl mx-auto mt-26 px-6 py-12">
      <h1 className="text-6xl font-bold text-center text-orange-500 mb-10">
        Create Account
      </h1>

      <div className="mb-8 py-6">
        <p className="text-center text-gray-600 text-2xl">
          Create your account to apply for jobs, manage your profile, and receive updates.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-8 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-8 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-8 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-12">
          <input
            type="tel"
            placeholder="Phone (optional)"
            className="w-full px-8 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full md:w-auto mx-auto block px-10 py-3 bg-orange-500 text-white text-lg font-semibold rounded-4xl hover:bg-orange-600 transition-colors"
          >
            CREATE ACCOUNT
          </button>
        </div>
      </form>

      <div className="text-center text-lg mt-8 my-4">
        <span className="text-gray-600">Already have an account? </span>
        <a href="/signin" className="text-orange-500 hover:text-orange-600">
          Sign in
        </a>
        <span className="text-gray-600">.</span>
      </div>

      <div className="mx-4 text-center text-sm text-gray-500 mt-6">
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="#" className="text-orange-500 hover:text-orange-700">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="text-orange-500 hover:text-orange-700">
          Terms of Service
        </a>{" "}
        apply.
      </div>
    </div>
  );
}
