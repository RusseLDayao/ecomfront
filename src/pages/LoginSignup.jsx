import React from 'react';

const LoginSignup = () => {
  return (
    <div className="loginsignup flex flex-col items-center justify-center h-screen bg-white py-12"> {/* Mobile-first layout */}
      <div className="logInSignUpContainer w-full max-w-sm rounded-lg bg-black px-8 py-10 shadow-md"> {/* Adapts to screen width, rounded corners, subtle shadow */}
        <h1 className="text-2xl font-bold text-white mb-8">Sign up</h1>
        <div className="LogInSignupField flex flex-col gap-6"> {/* Increased gap for clarity on smaller screens */}
          <input
            className="h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black required:"
            type="text"
            placeholder="Enter a Username"
          />
          <input
            className="h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black required:"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            className="h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black required:"
            type="password"
            placeholder="Enter your Password"
          />
        </div>
        <button className="w-full h-12 mt-8 rounded-md bg-red-500 text-white font-bold text-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Continue
        </button>
        <p className="text-white text-sm mt-6 flex items-center gap-2">
          Already have an account? <span className="text-red-500 font-medium">Login Here</span>
        </p>
        <div className="logInSignUp-agree flex items-center mt-4 gap-2 text-sm text-white">
          <input type="checkbox" name="" id="" className="rounded focus:ring-2 focus:ring-indigo-500" />
          <p>By continuing, I agree to the terms of use & privacy policies</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
