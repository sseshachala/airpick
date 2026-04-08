"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint || !email) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email,
          source: "airpick-waitlist"
        })
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = dark
    ? "flex-1 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none"
    : "flex-1 rounded-full border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/35 outline-none";

  const buttonClass = dark
    ? "rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90 disabled:opacity-60"
    : "rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60";

  const messageClass = dark
    ? "mt-3 text-sm text-white/70"
    : "mt-3 text-sm text-black/60";

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          className={inputClass}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={buttonClass}
        >
          {status === "loading" ? "Joining..." : "Join waitlist"}
        </button>
      </div>

      {status === "success" && (
        <p className={messageClass}>You’re on the list.</p>
      )}
      {status === "error" && (
        <p className={dark ? "mt-3 text-sm text-red-300" : "mt-3 text-sm text-red-600"}>
          Please set your Formspree endpoint and try again.
        </p>
      )}
    </form>
  );
}
