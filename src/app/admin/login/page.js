"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("adminLoggedIn", "true");
      // Add a short delay before navigating to admin dashboard
      setTimeout(() => {
        router.push("/admin");
      }, 150); // 150ms is typically enough
    }
    // For prototype: instantly "log in" on any credentials
    router.push("/admin");
  }

  return (
    <main className="max-w-sm mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 rounded-xl p-6 shadow flex flex-col gap-4 text-gray-400"
      >
        <input 
          type="text"
          placeholder="Username :"
          className="p-2 rounded border"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password :"
          className="p-2 rounded border"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Log In
        </button>
      </form>
    </main>
  );
}
