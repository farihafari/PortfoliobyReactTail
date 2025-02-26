"use client";
import { useState, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Header from "./Header";


const validateForm = async (prevState, formData) => {
  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const password = formData.get("password")?.trim();

  const errors = {};

  if (!name) errors.name = "Name is required!";
  else if (name.length < 3) errors.name = "Name must be at least 3 characters!";

  if (!email) errors.email = "Email is required!";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email format!";

  if (!password) errors.password = "Password is required!";
  else if (password.length < 6) errors.password = "Password must be at least 6 characters!";

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  return { success: "Form submitted successfully!" };
};


const SubmitButton = ({ isValid }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending || !isValid}
      className={`w-full py-2 rounded-md text-white ${
        pending || !isValid ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
      }`}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};


const Register = () => {
  const [state, formAction] = useFormState(validateForm, {});
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = "";
    if (name === "name") {
      if (!value.trim()) error = "Name is required!";
      else if (value.length < 3) error = "Name must be at least 3 characters!";
    }
    if (name === "email") {
      if (!value.trim()) error = "Email is required!";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email format!";
    }
    if (name === "password") {
      if (!value.trim()) error = "Password is required!";
      else if (value.length < 6) error = "Password must be at least 6 characters!";
    }

    setErrors({ ...errors, [name]: error });
  };


  const isValid = Object.values(formData).every((val) => val.trim() !== "") &&
                  Object.values(errors).every((err) => err === "");


  useEffect(() => {
    if (state && !state.success) {
      setErrors(state);
    }
  }, [state]);

  return (
    <>
    <Header/>
    <div className="h-screen flex justify-center items-center">
      <form action={formAction} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-2"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

       
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-2"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

    
        <label className="block mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded-md mb-2"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

       
        {state?.success && <p className="text-green-500">{state.success}</p>}

      
        <SubmitButton isValid={isValid} />
      </form>
    </div>
    </>
  );
};

export default Register;
