"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import GoogleLogin from "../components/Login/Google/login";
import FacebookLogin from "../components/Login/Facebook/login";

import heroImage from "@/assets/hero-bus-trip.jpg";

export default function LoginClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push("/");
    } else if (res?.status === 401) {
      setError("Invalid credentials");
      setPending(false);
    } else {
      setError("Something went wrong");
      setPending(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="School trip background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Sign In to Your Account
          </h1>

          <p className="text-sm text-white/70">
            Not registered?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              Register now
            </Link>
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-500/20 border border-red-400 text-red-300 px-4 py-3 rounded-xl mb-4 text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-white/80 mb-2">
              Email Address
            </label>

            <input
              type="email"
              required
              disabled={pending}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80 mb-2">Password</label>

            <input
              type="password"
              required
              disabled={pending}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-white/80">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/20 bg-white/10"
              />
              Remember me
            </label>

            <Link href="/recover" className="text-blue-400 hover:text-blue-300">
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={pending}
            className="w-full py-3 rounded-xl font-semibold text-white bg-linear-to-r from-blue-500 to-purple-600 hover:scale-[1.02] transition shadow-lg"
          >
            {pending ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20" />
          </div>

          <div className="relative flex justify-center text-sm text-white/70 px-2">
            Or continue with
          </div>
        </div>

        {/* Social Login */}
        <div className="mt-6 flex flex-col gap-3">
          <GoogleLogin />
          <FacebookLogin />
        </div>
      </div>
    </section>
  );
}
