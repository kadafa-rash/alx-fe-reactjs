import React, { useState } from "react";

const RegistrationForm = () => {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Submitted Data:", { username, email, password });

    
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => alert("User registered successfully!"))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>User Registration (Controlled Form)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}     
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}        
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}     
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
