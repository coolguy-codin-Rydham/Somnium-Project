import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-around items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4 justify-center">
        <h1 className="text-4xl font-bold text-gray-700">Hogwarts</h1>
        <p className="text-gray-500">Learn and Grow</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Sign Up
        </h2>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
