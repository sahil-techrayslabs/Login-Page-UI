const RegisterForm = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Register Now</h2>
        <p className="mb-4 text-gray-500">
          You may use social sites for a more fluid experience
        </p>
        <button
      className="w-full py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition flex items-center justify-center"
    >
      <img
        src="./assets/icons8-google-logo-48.svg"
        alt="Google Logo"
        className="w-5 h-5 mr-2"
      />
      Register with Google
    </button>
        <p className="text-center text-gray-500 mb-4">or Register using your phone number</p>
        <input
          type="text"
          placeholder="+880-0000-0000-0000"
          className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Create account
        </button>
        <p className="mt-4 text-center text-gray-500">
          Already have an account? <a href="#" className="text-blue-500 hover:underline">Log In</a>
        </p>
      </div>
    );
  };
  
  export default RegisterForm;
  