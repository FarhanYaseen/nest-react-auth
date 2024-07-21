import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Welcome() {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="w-full flex justify-between p-4 bg-white shadow">
        <div className="text-xl font-bold text-gray-800">Farhan Yaseen</div>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        >
          Logout
        </button>
      </nav>

      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-4">
          Welcome to the Application!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          You are successfully logged in. Explore the features of our
          application.
        </p>
      </main>

      <footer className="w-full p-4 bg-white shadow mt-auto">
        <div className="text-sm text-gray-600 text-center">
          &copy; 2024 Farhan Yaseen. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Welcome;
