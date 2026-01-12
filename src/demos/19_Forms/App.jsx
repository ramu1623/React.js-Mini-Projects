import { useState } from "react";

function App() {
  // 1️⃣ Single state object for entire form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    agree: false,
  });

  // 2️⃣ Error state for validation
  const [error, setError] = useState("");

  // 3️⃣ Generic change handler (works for all inputs)
  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  // 4️⃣ Submit handler
  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload

    // 5️⃣ Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Invalid email address");
      return;
    }

    if (!formData.agree) {
      setError("You must agree to terms");
      return;
    }

    setError("");

    // 6️⃣ Final form data (API call usually here)
    console.log("Form Submitted:", formData);

    // 7️⃣ Reset form
    setFormData({
      name: "",
      email: "",
      password: "",
      gender: "",
      agree: false,
    });
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />

        {/* Select */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br /><br />

        {/* Checkbox */}
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree to terms
        </label>
        <br /><br />

        {/* Error Message */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
