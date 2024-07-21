import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <header>
        <h1 className="text-5xl font-bold text-blue-900 mb-6" role="banner">
          Welcome to Our Application
        </h1>
      </header>
      <main>
        <p className="text-lg text-gray-700 mb-8" role="contentinfo">
          Please sign in or sign up to continue.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/signin"
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            aria-label="Sign In"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            aria-label="Sign Up"
          >
            Sign Up
          </Link>
        </div>
      </main>
      <footer className="mt-8">
        <p className="text-sm text-gray-600">&copy; 2024 Farhan Yaseen</p>
      </footer>
    </div>
  );
}

export default Home;
