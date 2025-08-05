import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { LuStethoscope } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import { serverUrl } from "../main";
import { useAuth } from "../Context/Authprovider";
import { toast } from "react-toastify";
const Login = () => {
  const [loading, setloading] = useState(false);
  const [authuser, setauthuser] = useAuth();
  const naviagete = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };
    console.log(userinfo);
    setloading(true);
    try {
      const response = await axios.post(
        `${serverUrl}/api/auth/login`,
        userinfo,
        { withCredentials: true }
      );
      localStorage.setItem("data", JSON.stringify(response.data));
      setauthuser(response.data);
      console.log(response.data);
      setloading(false);
      toast("Login successfully...");
      naviagete("/");
    } catch (error) {
      setloading(false);
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-cyan-600 rounded-full p-3">
            <LuStethoscope className="text-white text-2xl" />
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Prescription Pro
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Digital Prescription Management
        </p>
        <h3 className="text-lg font-medium text-cyan-600">Welcome Back</h3>
        <p className="text-sm text-gray-500 mb-6">
          Sign in to your medical portal
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="doctor@hospital.com"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm font-bold">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm font-bold">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-6">
          Dont have an account?{" "}
          <Link to={"/signup"} className="text-cyan-600 font-medium">
            Sign Up
          </Link>
        </p>
        <p className="text-xs text-gray-400 mt-6">
          © 2025 WebChain IT. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
