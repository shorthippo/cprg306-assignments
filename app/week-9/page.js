// Part 5: landing page starts
// Import the useUserAuth hook

"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

// Use the useUserAuth hook to get the user object and the login and logout functions
export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

return (
    <div>

        <h1>Assignment 9 - Welcome to the Shopping List App</h1>

        {!user && 
            <button onClick={gitHubSignIn}>Sign In with GitHub</button>}

        {user && 
            <button onClick={firebaseSignOut}>Sign Out of GitHub</button>
        }

        {user && (
            <p>Welcome, {user.displayName} ({user.email})
            </p>
        )}

        {user && <Link href="/week-9/shopping-list">Shopping List</Link>}
    </div>
)}
// Part 5: landing page ends