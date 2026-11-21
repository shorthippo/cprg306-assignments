"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    if (user) {
        return (
            <main>
                <h1>Welcome, {user.displayName} ({user.email})</h1>
                <button onClick={firebaseSignOut}>Logout</button>
                <Link href="/week-9/shopping-list">Go to Shopping List</Link>
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