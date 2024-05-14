import React from "react";
import { Link } from "react-router-dom";
import "./Chechout.css";

import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { GiCash } from "react-icons/gi";
import { FaRegCreditCard } from "react-icons/fa6";
import { SiCryptpad } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  {
    id: 1,
    name: "India",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: " Iceland",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Germany",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Japan ",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Italy",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "mali",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "Nepal",
    avatar:
      "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    name: "Spain",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    name: " Canada",
    avatar:
      "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    name: "Brazil",
    avatar:
      "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Chechout = () => {
  const [selected, setSelected] = useState(people[3]);
  return (
    <div className="container">
      <div className="row my-4 p-4">
        <div className="col-4 d-flex justify-content-end align-items-center">
          <Bs1CircleFill className="fs-3 me-2 text-secondary" />
          <h3 className="d-flex justify-content-end align-items-center mb-0 fw-normal ">
            {" "}
            <Link
              to={"/cart"}
              className="text-decoration-none text-secondary fw-normal"
            >
              {" "}
              Shopping Cart
            </Link>
          </h3>
          <BsArrowRightShort className="fs-2 ms-5 text-secondary" />
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <Bs2CircleFill className="fs-3 me-2 text-black" />
          <h3 className="d-flex justify-content-end align-items-center mb-0 text-secondary fw-normal">
            {" "}
            <Link
              to={"/chechout"}
              className="text-decoration-none text-black fw-semibold"
            >
              Checkout Details{" "}
            </Link>
          </h3>
          <BsArrowRightShort className="fs-2 ms-5 text-secondary" />
        </div>
        <div className=" col-4 d-flex justify-content-start align-items-center">
          <Bs3CircleFill className="fs-3 me-2 text-secondary" />
          <h3 className="d-flex justify-content-end align-items-center mb-0 text-secondary fw-normal">
            {" "}
            <Link
              to={"/order"}
              className="text-decoration-none text-secondary fw-normal"
            >
              Order Complete{" "}
            </Link>
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-6 py-5 ">
          <div className="border-2 p-4 rounded-5">
            <div className="fs-4 fw-fw-bolder">
              <span>Billing details</span>
              <hr />
            </div>
            <div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Company name (optional)
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                      <>
                        <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                          Country / Region *
                        </Listbox.Label>
                        <div className="relative mt-2">
                          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900   ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                              <span className="ml-3 block truncate">
                                {selected.name}
                              </span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                              <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm list-unstyled">
                              {people.map((person) => (
                                <Listbox.Option
                                  key={person.id}
                                  className={({ active }) =>
                                    classNames(
                                      active
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-900",
                                      "relative cursor-default select-none py-2 pl-3 pr-9"
                                    )
                                  }
                                  value={person}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          selected
                                            ? "font-semibold"
                                            : "font-normal",
                                          "ml-3 block truncate"
                                        )}
                                      >
                                        {person.name}
                                      </span>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active
                                              ? "text-white"
                                              : "text-indigo-600",
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                          )}
                                        >
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="text"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Street address *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name=" text"
                      id="company"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="text"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Postcode / ZIP *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="zip"
                      name="zip"
                      id=" number"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="text"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Town / City *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="zip"
                      name="zip"
                      id=" number"
                      autoComplete="zip"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900   ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 s  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email address *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 py-5 ">
          <div className="border-2 p-4 rounded-5">
            <div className="fs-4 fw-fw-bolder">
              <span>Cart totals</span>
              <hr />
            </div>

            <table className="w-100">
              <thead>
                <tr>
                  <th className="pb-3 p-3 text-primary  ">Product</th>
                  <th className="pb-3 p-3 text-primary">Subtotal</th>
                </tr>

                <tr>
                  <td className="py-3 p-3">
                    <span className="">Xbox One × 1</span>
                  </td>
                  <td className="p-3">
                    <span> $499.00</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 p-3">
                    <span>Android Phone × 1</span>
                  </td>
                  <td className="p-3">
                    <span>$599.00</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 p-3">
                    <span className="fw-bold">Subtotal</span>
                  </td>
                  <td className="p-3">
                    <span className="fw-bold">$1,098.00</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 p-3">
                    <span className="fw-bold">Total</span>
                  </td>
                  <td className="p-3">
                    <span className="fw-bold fs-4">$1,098.00</span>
                  </td>
                </tr>
              </thead>
            </table>

            <div className="fw-bolder py-4">
              <h5>
                <span>other payment options</span>
              </h5>
            </div>
            <div>
              <ul className=" list-unstyled">
                <li className="mb-3 d-flex justify-content-between align-items-center  fs-5  ">
                  <div className="d-flex align-items-center">
                    <GiCash />
                    <span className="ms-2 fw-bolder fs-5">
                      Cash on Delivery
                    </span>
                  </div>
                  <button>
                     <FaAngleDown />
                  </button>
                </li>

                <li className="mb-3 d-flex justify-content-between align-items-center  fs-5">
                <div className="d-flex align-items-center">
                  <FaRegCreditCard />
                  <span className="ms-2 fw-bolder  fs-5 ">
                    Debit / Credit Card
                  </span>
                  </div>
                  <button>
                     <FaAngleDown />
                  </button>
                </li>

                <li className="mb-3 d-flex justify-content-between align-items-center  fs-5 ">
                <div className="d-flex align-items-center">
                  <SiCryptpad />
                  <span className="ms-2 fw-bolder fs-5 ">Crypto</span>
                  </div>
                  <button>
                     <FaAngleDown />
                  </button>
                </li>

                <li className="mb-3 d-flex justify-content-between align-items-center  fs-5 ">
                <div className="d-flex align-items-center">
                  <GiReceiveMoney />
                  <span className="ms-2 fw-bolder fs-5 ">EMI / Pay Later</span>
                  </div>
                  <button>
                     <FaAngleDown />
                  </button>
                </li>
              </ul>
            </div><hr/>
            <div className="d-flex justify-content-between">
              <div><span className="fs-3 fw-bolder text-primary">$27.0</span></div>
              <button type="button" class="btn btn-primary py-2 px-5 rounded-pill"> Pay Now</button>
            </div>



            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chechout;
