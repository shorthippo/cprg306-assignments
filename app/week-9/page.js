
"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-pink-50 p-8 text-gray-900 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">
        Shopping List
      </h1>

      {user ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">
            Welcome, {user.displayName} ({user.email})
          </p>

          <Link
            href="/week-9/shopping-list"
            className="bg-pink-500 text-white px-6 py-3 rounded-lg"
          >
            Go to Shopping List
          </Link>

          <button
            onClick={handleLogout}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg"
        >
          Sign in with GitHub
        </button>
      )}
    </main>
  );
}
