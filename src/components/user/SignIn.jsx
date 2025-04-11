import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing in with:", email, password);
  };

  return (
    <div className="max-w-3xl mx-auto mt-26 px-6 py-12">
      <h1 className="text-6xl font-bold text-center text-orange-500 mb-10">
        Account Sign In
      </h1>

      <div className="mb-8 py-6">
        <p className="text-center text-gray-600 text-2xl">
          Sign in to your account to access your profile, history, and any
          private pages you've been granted access to.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
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
            type="password"
            placeholder="Password"
            className="w-full px-8 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full md:w-auto mx-auto block px-10 py-3 bg-orange-500 text-white text-lg font-semibold rounded-4xl hover:bg-orange-600 transition-colors"
          >
            SIGN IN
          </button>
        </div>
      </form>

      <div className="text-center text-lg  mt-8 my-4">
        <a
          href="/reset-password"
          className="text-orange-500 hover:text-orange-600"
        >
          Reset password
        </a>
      </div>

      <div className="mx-4  text-center text-lg">
        <span className="text-gray-600">Not a member? </span>
        <a
          href="/create-account"
          className="text-orange-500 hover:text-orange-600"
        >
          Create account
        </a>
        <span className="text-gray-600">.</span>
      </div>
    </div>
  );
}
