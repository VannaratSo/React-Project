// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import angkor from "../assets/angkorwat.png";

export default function Login() {
  const navigate = useNavigate();
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      // --- Replace this block with your real API call ---
      await new Promise((res) => setTimeout(res, 700));
      if (email !== "user@example.com" || password !== "password") {
        throw new Error("Invalid credentials. Try user@example.com / password");
      }
      // --- On success, call auth.login() so app knows user is signed in ---
      auth.login("fake-token");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${angkor})` }}
    >
      <div className="w-full max-w-2xl flex items-center justify-center">
        <div className="hidden md:flex md:w-1/2 h-[520px] items-center justify-center">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-6">Welcome Back</h2>
            <p className="text-sm text-gray-300 max-w-sm">
              Sign in to access your dashboard.
            </p>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 backdrop-blur-md bg-white/20 dark:bg-gray-900/40 border border-white/20 dark:border-gray-700/40
                     rounded-3xl shadow-lg p-8"
          role="region"
          aria-label="Login form"
        >
          <h1 className="text-2xl font-semibold mb-6 text-white">Sign in</h1>

          {error && (
            <div className="mb-4 text-sm text-red-200 bg-red-900/30 p-3 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Your password"
                autoComplete="current-password"
                required
              />
            </label>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-200">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded bg-white/10"
                />
                Remember me
              </label>
              <Link
                to="/forgot"
                className="text-sm text-blue-200 hover:underline"
              >
                Forgot?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-900 text-white font-medium shadow-md disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <div className="mt-6 text-sm text-center text-gray-200">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </div>

          {/* small footer inside card */}
          <div className="mt-6 text-xs text-gray-300/80 text-center">
            By continuing you agree to our{" "}
            <span className="underline">Terms</span> and{" "}
            <span className="underline">Privacy</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
