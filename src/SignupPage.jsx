import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Preloader from "./Preloader";
import Mainlayout from "./Mainlayout";
import { Footer } from "./Contents";

const schema = yup
  .object({
    firstName: yup.string().required("Firstname is required!"),
    lastName: yup.string().required("Lastname is required!"),
    password: yup
      .string()
      .required("Please enter a password!")
      .min(6, "Password must be at least 6 characters!")
      .max(10, "Password must not be more than 10 characters!"),
    ConfirmPassword: yup
      .string()
      .required("Please enter a confirmed  password!")
      .oneOf([yup.ref("password")], "Passwords do not match!"),
  })
  .required();

function SignInForm() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [preloading, setPreloading] = useState(true);
  const handleClick = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset(); // Call reset to clear the form inputs
  };
  const Input = [
    {
      id: 0,
      type: "firstName",
      inputs: "text",
      label: "Firstname",
      placeholder: "Firstname",
    },
    {
      id: 1,
      type: "lastName",
      inputs: "text",
      label: "Lastname",
      placeholder: "Lastname",
    },
    {
      id: 2,
      type: "password",
      inputs: "password",
      label: "Password",
      placeholder: "Password",
    },
    {
      id: 3,
      type: "ConfirmPassword",
      inputs: "password",
      label: "Confirm Password",
      placeholder: "Confirm Password",
    },
  ];

  return (
    <>
      {preloading ? (
        <Preloader />
      ) : (
        <Mainlayout>
          <div className=" container w-[100%] md:w-[60%] h-[auto] pb-9 lg:h-[auto] lg:pb-10 md:h-[auto] bg-slate-200 shadow-md rounded-lg mt-9 mx-auto pt-16">
            <h1 className=" text-4xl font-medium text-slate-950 px-6 pb-6 text-center">
              Get Started
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" bg-white w-[91%] md:w-[90%] lg:w-[70%] h-[700px] md:h-[700px] mx-auto rounded-lg shadow-lg flex  pt-10 flex-col px-5 md:px-14"
            >
              <h1 className="text-4xl font-bold text-left pb-4">Sign Up</h1>
              {Input.map((input) => (
                <div key={input.id} className=" w-[100%] h-auto  mb-3 ">
                  <label className=" text-lg font-semibold text-zinc-800 pb-2">
                    {input.label}
                  </label>
                  <br />
                  <input
                    autoComplete="off"
                    type={input.inputs}
                    {...register(input.type)}
                    className=" bg-slate-100 h-8 w-[90%] invalid:border-red-600 px-3 py-6 text-lg font-[400] rounded-md border-2 border-gray-400"
                    placeholder={input.placeholder}
                  />
                  <br />
                  <span className="text-red-500 font-semibold text-md  pl-1 pt-2  mt-2 sm:mt-0">
                    {errors[input.type]?.message}
                  </span>
                </div>
              ))}
              <div className="flex justify-between gap-1 md:gap-0 w-[85%] sm:w-[60%] lg:w-[70%]  h-[20] mb-3">
                <h2 className=" text-base font-medium">
                  Already have an Account?
                </h2>
                <h2 className=" text-lg font-medium text-indigo-600 cursor-pointer underline">
                  <Link to="/login">Log In</Link>
                </h2>
              </div>
              <button
                onClick={handleClick}
                type="submit"
                className=" relative bg-sky-900 text-white ml-1  font-semibold p-4 rounded-lg w-[200px]
              overflow-hidden
               "
              >
                Sign In
                <span
                  className={`absolute bg-slate-300 p-3 opacity-0 top-0 right-30 rounded-full  ${
                    isAnimating
                      ? "w-[140px] animate-ping opacity-100 h-[140px] right-10"
                      : ""
                  }`}
                ></span>
              </button>
            </form>
          </div>
          <Footer />
        </Mainlayout>
      )}
    </>
  );
}

export default SignInForm;
