import React, { useState } from "react";
import { sendContactForm } from "../../../MyAPI/api";
import { useRouter } from "next/router";
import {
  hideLoader,
  showLoader,
} from "../../../redux/features/loader/loaderSlice";
import store from "../../../redux/store";
import {
  ErrorToast,
  SuccessToast,
} from "../../../utils/alert/notificationAlert";

const FormSection = () => {
  let router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    let value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.name) {
      ErrorToast("Name is required");
    } else if (!userData.email) {
      ErrorToast("Email is required");
    } else if (!userData.phone) {
      ErrorToast("Mobile number is required");
    } else if (!userData.message) {
      ErrorToast("Description is required");
    } else {
      try {
        store.dispatch(showLoader());
        let mailResult = await sendContactForm(userData);
        store.dispatch(hideLoader());
        SuccessToast("Contact Mail send success!");
        router.push("/");
      } catch (error) {
        ErrorToast("Mail send fail, Please try again.");
        store.dispatch(hideLoader());
      }
    }
  };
  return (
    <div className="flex items-center justify-center px-8 py-14">
      <div className="container max-w-screen-lg mx-auto ">
        <div>
          <h2 className="text-xl font-semibold text-primary dark:text-white">
            Keep in touch with us
          </h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-white">
            We response withing 24 hours.
          </p>

          <div className="p-4 px-4 bg-white rounded shadow-lg dark:bg-gray-800 md:p-8 ">
            <div className="grid grid-cols-1 gap-8 text-sm gap-y-4 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 text-sm gap-y-2 md:grid-cols-5 dark:text-white">
                    <div className="md:col-span-5">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={userData.name}
                        onChange={handleChange}
                        className="h-10 !outline-none border  mt-1 rounded px-4 w-full bg-main dark:bg-gray-700"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={userData.email}
                        onChange={handleChange}
                        className="h-10 !outline-none border  mt-1 rounded px-4 w-full bg-main dark:bg-gray-700"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        className="h-10 mt-1 rounded border px-4 w-full !outline-none bg-main dark:bg-gray-700"
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="message">Description</label>
                      <textarea
                        id="message"
                        value={userData.message}
                        onChange={handleChange}
                        rows="4"
                        name="message"
                        className="block p-2.5 px-4 mt-1 w-full text-sm !outline-none border   rounded-lg bg-main dark:bg-gray-700 dark:text-white  "
                      ></textarea>
                    </div>

                    <div className="text-right md:col-span-5">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          className="px-4 py-2 font-bold text-white rounded bg-primary dark:bg-gray-700 hover:bg-secondary"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="text-gray-600 dark:text-white">
                <h2 className="text-4xl font-bold text-primary dark:text-white">
                  Address
                </h2>
                <h3 className="mb-2 text-xl font-semibold dark:text-white">
                  Bangladesh Office:
                </h3>
                <p className="py-0.5">
                  Address: House No: 42(2nd floor) Ghashipara,
                </p>
                <p className="py-0.5">Word No: 02, Ikbal School Mor</p>
                <p className="py-0.5">
                  Post Code: 5200, Sadar, Dinajpur. Bangladesh
                </p>
                <p className="py-0.5">E-mail: info@graphicsviewpoint.com</p>
                <p className="py-0.5">
                  Skype ID: live:graphicsviewpoint24@gmail.com
                </p>
                <p className="py-0.5">Phone: +8801328613629</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
