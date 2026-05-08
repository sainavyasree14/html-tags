import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    toast.success("Registered Successfully ");
    /*navigate is used to navigate from one component to other*/
    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <button className="btn btn-primary">Register</button>
        <button className="btn btn-primary">Cancel</button>
      </form>

      <p className="mt-3">
        Already have account? <Link to="/login">Login</Link>
      </p>

      <ToastContainer />
    </div>
  );
}

export default Register;