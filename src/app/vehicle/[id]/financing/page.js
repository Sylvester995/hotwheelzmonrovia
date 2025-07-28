"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TestDrivePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
  e.preventDefault();
  const message = encodeURIComponent(
    `Financing Consultation Request:
     Name: ${form.name}
     Email: ${form.email}
     Phone: ${form.phone}
     Date: ${form.date}
     Time: ${form.time}`
  );
  window.open(`https://wa.me/231881582130?text=${message}`, "_blank");

    // OPTIONAL: also send to email using Formspree:
    // fetch("https://formspree.io/f/yourFormId", { method: "POST", ... })

    // Redirect or show a thank you message
    alert("Your request has been sent via WhatsApp!");
    router.push("/"); // or wherever you want to send the user
  }

  return (
    <main className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Schedule a Financing Consultation</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input required name="name" type="text" placeholder="Full Name" className="p-2 border rounded" value={form.name} onChange={handleChange} />
        <input required name="email" type="email" placeholder="Email Address" className="p-2 border rounded" value={form.email} onChange={handleChange} />
        <input required name="phone" type="tel" placeholder="Phone Number" className="p-2 border rounded" value={form.phone} onChange={handleChange} />
        <input required name="date" type="date" className="p-2 border rounded" value={form.date} onChange={handleChange} />
        <input required name="time" type="time" className="p-2 border rounded" value={form.time} onChange={handleChange} />
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Send via WhatsApp</button>
        <button type="button" className="bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300" onClick={() => router.back()}>Cancel</button>
      </form>
    </main>
  );
}
