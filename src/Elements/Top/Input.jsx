import React, { useState } from "react";

const Input = () => {
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData)) {
      document.getElementById("email").classList.add("border-light-red");
      const errorEl = document.getElementById("error");
      errorEl.classList.add("-bottom-8");
      errorEl.classList.remove("opacity-0");
    } else {
      document.getElementById("email").classList.remove("border-light-red");
      const errorEl = document.getElementById("error");
      errorEl.classList.remove("-bottom-8");
      errorEl.classList.add("opacity-0");
    }
  };

  return (
    <form
      className="flex mt-10 w-full relative md:flex-col gap-[20px]  md:text-sm"
      onSubmit={handleSubmit}
    >
      <input
        id="email"
        type="email"
        placeholder="Your Email Address..."
        className="w-full border border-solid border-gray text-gray px-6 rounded-full md:py-[12px]"
        name="email"
        value={formData}
        onChange={handleChange}
        title="email@gmail.com"
      />
      <input
        type="submit"
        value="Notify Me"
        className="bg-blue text-white font-semibold px-[60px] py-[18px] md:py-[12px] rounded-full cursor-pointer shadow-xl hover:opacity-80 transition-opacity ease-in-out duration-500"
      />
      <span
        id="error"
        className="absolute left-8 opacity-0 transition-all text-light-red font-semibold italic"
      >
        Incorrect Email
      </span>
    </form>
  );
};

export default Input;
