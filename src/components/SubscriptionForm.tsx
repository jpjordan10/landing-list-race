"use client";
import { EMAIL_REGEX } from "@/utils/mail.regex";
import { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!EMAIL_REGEX.test(email)) {
      alert("Invalid Email");
      return;
    }
    handleSubmit();
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setEmail("");

      alert(data.message);
    } catch (error) {
      alert("There's an error trying to create an account");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      name="subscription-form"
      className="flex flex-col md:flex-row gap-7 md:gap-0"
      onSubmit={(e) => {
        e.preventDefault();
        validateForm();
      }}
    >
      <input
        type="email"
        placeholder="Enter your email here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow p-4 rounded md:rounded-l border border-gray-300"
      />
      <button
        disabled={loading}
        type="submit"
        className="p-4 bg-red-500 hover:bg-red-600 transition duration-300 text-white rounded-r disabled:opacity-55 disabled:cursor-not-allowed disabled:pointer-events-none"
      >
        Create Account
      </button>
    </form>
  );
};
export default SubscriptionForm;
