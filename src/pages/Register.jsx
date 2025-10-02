import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import angkor from "../assets/angkorwat.png";
export default function Register() {
  const navigate = useNavigate();
  const auth = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      // --- Simulated API request ---
      await new Promise((res) => setTimeout(res, 700));
      // In a real app, send data to backend here
      auth.login("fake-register-token");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[url('/bg-pattern.png')] bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${angkor})` }}
    >
      <div className="w-full max-w-2xl flex items-center justify-center">
        <div
          className="w-full md:w-3/4 backdrop-blur-md bg-white/20 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/40
                     rounded-3xl shadow-lg p-8"
          role="region"
          aria-label="Register form"
        >
          <h1 className="text-2xl font-semibold mb-6 text-white">
            Create Account
          </h1>

          {error && (
            <div className="mb-4 text-sm text-red-200 bg-red-900/30 p-3 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm text-gray-200">Full Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300 outline-none border border-white/10 focus:border-blue-400 transition"
                placeholder="narat"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-200">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300 outline-none border border-white/10 focus:border-blue-400 transition"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-200">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300 outline-none border border-white/10 focus:border-blue-400 transition"
                placeholder="Create a password"
                autoComplete="new-password"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-200">Confirm Password</span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300 outline-none border border-white/10 focus:border-blue-400 transition"
                placeholder="Re-enter your password"
                autoComplete="new-password"
                required
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-900 text-white font-medium shadow-md disabled:opacity-60"
            >
              {loading ? "Creating account…" : "Register"}
            </button>
          </form>

          <div className="mt-6 text-sm text-center text-gray-200">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-200 hover:underline">
              Login
            </Link>
          </div>

          <div className="mt-6 text-xs text-gray-300/80 text-center">
            By signing up you agree to our{" "}
            <span className="underline">Terms</span> and{" "}
            <span className="underline">Privacy</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
