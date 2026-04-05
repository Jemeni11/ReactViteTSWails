import { useState } from "react";
import { Greet } from "./wailsjs/go/main/App";

export default function App() {
  const [name, setName] = useState("");
  const [resultText, setResultText] = useState("Please enter your name below 👇");

  function greet() {
    // Calls the Go method bound by Wails
    Greet(name).then((result) => setResultText(result));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-4 text-zinc-900 transition-colors duration-300 dark:bg-zinc-900 dark:text-white">
      <div className="mb-12 flex items-center gap-8">
        <img src="/react.svg" alt="React logo" className="size-24 animate-[spin_10s_linear_infinite]" />
        <span className="text-4xl font-bold text-zinc-400 dark:text-zinc-600">+</span>
        <img src="/vite.svg" alt="Vite logo" className="size-24 transition-transform hover:scale-110" />
        <span className="text-4xl font-bold text-zinc-400 dark:text-zinc-600">+</span>
        <img src="/wails.png" alt="Wails logo" className="size-24 transition-transform hover:scale-110" />
      </div>

      <h1 className="mb-8 text-4xl font-bold">React + Vite + Wails</h1>

      <div className="w-full max-w-md space-y-6 rounded-xl border border-zinc-700 bg-zinc-800 p-8 text-center shadow-lg">
        <p className="min-h-8 text-xl font-medium text-emerald-600 dark:text-emerald-400">{resultText}</p>

        <div className="flex gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && greet()}
            autoComplete="off"
            placeholder="Enter your name"
            className="flex-1 rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2 text-zinc-900 transition-colors focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          />
          <button
            onClick={greet}
            className="rounded-lg bg-emerald-600 px-6 py-2 font-medium text-white transition-colors hover:bg-emerald-500"
          >
            Greet
          </button>
        </div>

        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
          Edit <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-900">src/App.tsx</code> or{" "}
          <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-900">app.go</code> to test Hot Module Replacement.
        </p>
      </div>
    </main>
  );
}
