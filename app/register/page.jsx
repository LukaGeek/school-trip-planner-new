"use client";

import Link from "next/link";
import Image from "next/image";
import GoogleLogin from "@/app/components/Login/Google/login";
import FacebookLogin from "@/app/components/Login/Facebook/login";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client/react";
import { ADD_USER } from "@/graphql/mutations";

import heroImage from "@/assets/hero-bus-trip.jpg";

export default function RegisterClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();
  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    setError(null);

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      setPending(false);
      return;
    }

    try {
      const { data, errors } = await addUser({
        variables: {
          name: form.name,
          email: form.email,
          password: form.password,
        },
      });

      if (!errors) router.push("/login");
      else setError(errors[0]?.message || "Something went wrong");
    } catch (err) {
      setError(err.message || "Something went wrong");
    }

    setPending(false);
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

      {/* Register Card */}
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
          <span className="text-sm text-white/90">
            Join Georgia&apos;s #1 School Trip Platform
          </span>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">
            Create Your Account
          </h1>

          <p className="text-sm text-white/70">
            Already registered?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              Sign In
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
          {[
            { id: "name", label: "Full Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "password", label: "Password", type: "password" },
            {
              id: "confirmPassword",
              label: "Confirm Password",
              type: "password",
            },
          ].map((field) => (
            <div key={field.id}>
              <label className="block text-sm text-white/80 mb-2">
                {field.label}
              </label>

              <input
                type={field.type}
                required
                disabled={pending}
                value={form[field.id]}
                onChange={(e) =>
                  setForm({ ...form, [field.id]: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}

          {/* Button */}
          <button
            type="submit"
            disabled={pending}
            className="w-full py-3 rounded-xl font-semibold text-white bg-linear-to-r from-blue-500 to-purple-600 hover:scale-[1.02] transition shadow-lg"
          >
            {pending ? "Registering..." : "Create Account"}
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

        {/* Social */}
        <div className="mt-6 flex flex-col gap-3">
          <GoogleLogin />
          <FacebookLogin />
        </div>
      </div>
    </section>
  );
}
