"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main className="min-h-screen bg-emerald-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8">Shopping List App</h1>

      {user ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-emerald-900">
            Welcome, {user.displayName || user.email} ({user.email})
          </p>
          <Link
            href="/week-9/shopping-list"
            className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800"
          >
            Continue to your Shopping List
          </Link>
          <button
            onClick={handleSignOut}
            className="bg-white text-emerald-800 border border-emerald-700 px-4 py-2 rounded hover:bg-emerald-50"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleSignIn}
          className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800"
        >
          Login with GitHub
        </button>
      )}
    </main>
  );
}