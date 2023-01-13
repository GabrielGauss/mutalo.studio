import React, { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";
import { db } from "../db/firebaseConfig.js";
import Alert from "@material-tailwind/react";
import Alerta from "./Alerta";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("message Succesful");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div class="text-right">
        <button
          class="text-white bg-pink-400 hover:bg-pink-500 focus:ring-3 focus:ring-pink-300 font-medium rounded-lg text-sm px-6 py-2.5 mr-2 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800"
          type="button"
          data-drawer-target="drawer-contact"
          data-drawer-show="drawer-contact"
          aria-controls="drawer-contact"
          onClick={() => setShowModal(true)}
        >
          Contact
        </button>
      </div>
      {showModal ? (
        <>
          <div
            id="drawer-contact"
            class="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 bg-opacity-30 backdrop-blur-md dark:bg-gray-800 transition-transform left-0 top-0 bg-blur-xl"
            tabindex="-1"
            aria-labelledby="drawer-contact-label"
            aria-hidden="true"
          >
            <h5
              id="drawer-label"
              class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
            >
              <svg
                class="w-5 h-5 mr-2"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Contact us
            </h5>
            <button
              type="button"
              data-drawer-dismiss="drawer-contact"
              aria-controls="drawer-contact"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setShowModal(false)}
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close menu</span>
            </button>

            {/* FORMULARIO */}

            <form class="mb-6" onSubmit={handleSubmit}>
              <div class="mb-6">
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="subject"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tell us who you are"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>

                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@YourCompany.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-6">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tell us what can we do for you"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                class="text-white bg-violet-600 hover:bg-violet-700 w-full focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800 block"
                style={{
                  background: loader ? "#f9b0fc" : " rgb(240, 57, 179)",
                }}
              >
                Send Message
              </button>
            </form>

            {/* FIN FORMULARIO */}

            <h2 className="block  text-center mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 py-6">
              Or just
            </h2>
            <button
              type="submit"
              class="text-white bg-violet-600 hover:bg-violet-700 w-full focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-6 py-3 mr-4 mt-2 mb-8 dark:bg-violet-600 dark:hover:bg-violet-700 focus:outline-none dark:focus:ring-violet-800 block"
            >
              <a
                href=" https://calendly.com/gabrielveron134/30min "
                target={"_blank"}
              >
                Set an Apointment
              </a>
            </button>
            <div className="text-center p-10">
              <SocialLinks />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
