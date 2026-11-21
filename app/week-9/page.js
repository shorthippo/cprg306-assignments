"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    if (user) {
    return (
        <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center gap-6">
            <h1 className="text-3xl font-bold text-fuchsia-900">
                Welcome, {user.displayName}!
            </h1>
            <p className="text-fuchsia-700">
                {user.email}
            </p>
            <button
                onClick={firebaseSignOut}
                className="bg-pink-300 hover:bg-pink-400 text-fuchsia-950 font-semibold px-6 py-3 rounded-xl" >
                Logout 
            </button>
            <Link
                href="/week-9/shopping-list"
                className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-6 py-3 rounded-xl">
                Go to Shopping List
            </Link>
        </main>
    );
    }
    return (
        <main>
            <h1>Welcome to the Shopping List App</h1>
            <button onClick={gitHubSignIn}>Login with GitHub</button>
        </main>
    );
}