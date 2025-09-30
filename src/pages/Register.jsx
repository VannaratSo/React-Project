import { Link } from "react-router-dom";
import Button from "../components/Button";
import angkor from "../assets/angkorwat.png";
export default function Register() {
  return (
    <div
      className="relative bg-cover bg-center py-40 flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${angkor})` }}
    >
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-md">
          Register
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-white/90 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-white/90 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-white/90 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <Button type="submit" variant="gradient" className="w-full">
            Register
          </Button>
        </form>

        <p className="text-center text-sm text-white/80 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
