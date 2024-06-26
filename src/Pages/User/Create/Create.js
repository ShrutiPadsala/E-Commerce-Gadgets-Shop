import React, { useEffect } from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { ImgConfig } from "../../../Media/imgConfig";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Create = () => {
  const INITIAL_DATA = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
  };

  const [agreed, setAgreed] = useState(false);
  const [newUser, setNewUser] = useState(INITIAL_DATA);
  const navigate = useNavigate();

  // onchange
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(newUser);
  };
  // onsubmit
  const handleSubmit = (e) => {
    const validateUser =
      newUser?.firstName &&
      newUser?.lastName &&
      newUser?.email &&
      newUser?.phoneNo;
    if (!agreed) {
      toast.error("Please Accept Privacy Policy");
    } else {
      if (!validateUser) {
        toast.error("Please Fill Required Data");
      } else {
        toast.success("Registration Completed");
        setNewUser(INITIAL_DATA);
        setAgreed(false);
        navigate("/login");
        // window.location.reload();
      }
    }
  };

  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <img src={ImgConfig?.ContactImage} alt="" />{" "}
          </div>
          <div className="col-12 col-md-8">
            <div className="isolate bg-white px-2 py-11 sm:py-11 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                <img
                  className="mx-auto h-10 w-auto"
                  src={ImgConfig?.BrandLogo}
                  alt="Your Company"
                />
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Create your account
                </h2>
                <span>
                  Already Have an Account? <Link to={"/login"}>Login Now</Link>
                </span>
              </div>
              <form className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        value={newUser?.firstName}
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        value={newUser?.lastName}
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={newUser?.email}
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phoneNo"
                        id="phone-number"
                        onChange={handleChange}
                        value={newUser?.phoneNo}
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                    <div className="flex h-6 items-center">
                      <Switch
                        checked={agreed}
                        onChange={setAgreed}
                        className={classNames(
                          agreed ? "bg-indigo-600" : "bg-gray-200",
                          "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        )}
                      >
                        <span className="sr-only">Agree to policies</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            agreed ? "translate-x-3.5" : "translate-x-0",
                            "h-4 w-4 transform rounded-full bg-white shadow-lg ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                          )}
                        />
                      </Switch>
                    </div>
                    <Switch.Label className="text-sm leading-6 text-gray-600">
                      By selecting this, you agree to our{" "}
                      <a href="#" className="font-semibold text-indigo-600">
                        privacy&nbsp;policy
                      </a>
                      .
                    </Switch.Label>
                  </Switch.Group>
                </div>
                <div className="mt-10">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Let's talk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
