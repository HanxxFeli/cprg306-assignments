"use client";


// Import the useUserAuth hook
import { useUserAuth } from "../../contexts/AuthContext";
import Link from "next/link";


export default function Page() { 
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Handle login
  const handleLogin = async () => {
    try {
      await gitHubSignIn()
    } catch (error) {
      console.error("Error logging in:", error)
    }
  }

    // Handle logout
  const handleLogout = async () => {
    try {
      await firebaseSignOut()
    } catch (error) {
      console.error("Error logging out:", error)
    }
  }

  // not logged in user
  if (!user) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-2xl font-semibold mb-4">Welcome to the Shopping List App</h1>
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login with GitHub
        </button>
      </main>
    )
  }

  //logged in user
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h2 className="text-2xl font-semibold mb-4">
        Welcome, {user.displayName} ({user.email})
      </h2>

      <div className="flex gap-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>

        <Link
          href="/week-10/shopping-list"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Go to Shopping List
        </Link>
      </div>
    </main>
  )
}


 
