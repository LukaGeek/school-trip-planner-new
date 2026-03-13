"use client";

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function GoogleLogin() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="group flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 py-3 font-medium text-white backdrop-blur-md transition hover:bg-white/10"
    >
      <FaGoogle className="h-5 w-5 text-red-400 group-hover:scale-110 transition" />
      Continue with Google
    </button>
  );
}
