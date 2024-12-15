import React, { useState } from "react";
import "../App.css";

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border-2 border-gray-300 rounded-lg"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border-2 border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border-2 border-gray-300 rounded-lg"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-sm mt-4 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-blue-500 cursor-pointer"
            onClick={toggleAuthMode}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};
export default Auth;
