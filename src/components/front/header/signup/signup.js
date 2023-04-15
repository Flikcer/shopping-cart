import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Check if any fields are empty
    if (!formData.username) {
      newErrors.username = "Please enter a username";
    }
    if (!formData.email) {
      newErrors.email = "Please enter an email";
    }
    if (!formData.password) {
      newErrors.password = "Please enter a password";
    }

    // Update errors state with any new errors
    setErrors(newErrors);

    // If there are no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission here
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <div className="error">{errors.username}</div>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
