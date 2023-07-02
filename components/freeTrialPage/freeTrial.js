import axios from "axios";
import { useRef, useState } from "react";
import { GiLetterBomb } from "react-icons/gi";
import { ErrorToast, SuccessToast } from "../../utils/alert/notificationAlert";
import { IsEmail, IsEmpty } from "../../utils/formValidation/formValidation";
import {
  hideLoader,
  showLoader,
} from "../../redux/features/loader/loaderSlice";
import store from "../../redux/store";
import { useRouter } from "next/router";

const FreeTrialSection = () => {
  let router = useRouter();
  let [freeTialFiles, setFreeTrialFiles] = useState("");

  let nameRef,
    emailRef,
    companyNameRef,
    websiteRef,
    countryRef,
    serviceRef,
    returnFileAsRef,
    instructionRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = nameRef.value;
    let email = emailRef.value;
    let companyName = companyNameRef.value;
    let website = websiteRef.value;
    let country = countryRef.value;
    let service = serviceRef.value;
    let returnFileAs = returnFileAsRef.value;
    let instruction = instructionRef.value;
    if (!IsEmpty(name)) {
      ErrorToast("Name is required");
    } else if (!IsEmpty(email)) {
      ErrorToast("Email is required");
    } else if (!IsEmail(email)) {
      ErrorToast("Invalid Email address");
    } else if (!IsEmpty(country)) {
      ErrorToast("Country is required");
    } else if (service == "Select Job Title") {
      ErrorToast("Services is required");
    } else if (returnFileAs == "Select File Type") {
      ErrorToast("Retrun file output is required");
    } else if (!IsEmpty(freeTialFiles)) {
      ErrorToast("Image or Zip file is required");
    } else {
      var formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("country", country);
      formData.append("companyName", companyName);
      formData.append("website", website);
      formData.append("services", service);
      formData.append("returnFileAs", returnFileAs);
      formData.append("instruction", instruction);
      formData.append("images", freeTialFiles);
      for (var key of Object.keys(freeTialFiles)) {
        formData.append("images", freeTialFiles[key]);
      }
      store.dispatch(showLoader());
      let res = await axios.post(process.env.SendEmailApi, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status == "200" && res.data.status === "success") {
        store.dispatch(hideLoader());
        nameRef.value = "";
        emailRef.value = "";
        countryRef.value = "";
        companyNameRef.value = "";
        websiteRef.value = "";
        serviceRef.value = "Select Job Title";
        returnFileAsRef.value = "Select File Type";
        instructionRef.value = "";
        setFreeTrialFiles("");
        SuccessToast("Free-trial send success! Thanks.");
        router.push("/");
      } else if (res.data.status === "fail") {
        store.dispatch(hideLoader());
        ErrorToast("Request fail, Please try again.");
      }
    }
  };

  return (
    <div className="px-4 py-14">
      <section className="max-w-4xl mx-auto bg-white rounded-md shadow-[inset_-12px_-8px_40px_#46464620] dark:bg-gray-800">
        <div className="flex flex-col md:flex-row">
          <div className="w-full text-center rounded-t-lg md:rounded-t-none md:!rounded-l-lg md:w-1/3 pt-11 md:pb-0 pb-11 bg-primary dark:bg-gray-500">
            <div className="flex justify-center">
              <GiLetterBomb color="white" size={60} />
            </div>
            <h1 className="text-4xl font-bold text-white capitalize">
              Free Trial
            </h1>
            <p className="px-2 pt-3 text-center text-white">
              We do not compromise on the quality of our work. Please check the
              quality of work. We will send it to you as soon as possible. We
              strive for 100% customer satisfaction.
            </p>
          </div>
          <div className="w-full p-5">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                <div>
                  <label className="dark:text-white" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    ref={(input) => (nameRef = input)}
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full px-4 py-1.5 mt-2 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md !outline-none "
                  />
                </div>

                <div>
                  <label className=" dark:text-white" htmlFor="emailAddress">
                    Email *
                  </label>
                  <input
                    ref={(input) => (emailRef = input)}
                    id="emailAddress"
                    type="email"
                    name="email"
                    className="block w-full px-4 py-1.5 mt-2 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md  !outline-none"
                  />
                </div>

                <div>
                  <label className=" dark:text-white" htmlFor="phone">
                    Company Name
                  </label>
                  <input
                    ref={(input) => (companyNameRef = input)}
                    id="companyName"
                    type="text"
                    name="companyName"
                    className="block w-full px-4 py-1.5 mt-2 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md !outline-none"
                  />
                </div>

                <div>
                  <label className=" dark:text-white" htmlFor="phone">
                    Website
                  </label>
                  <input
                    ref={(input) => (websiteRef = input)}
                    id="website"
                    type="text"
                    name="website"
                    className="block w-full px-4 py-1.5 mt-2 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md !outline-none"
                  />
                </div>

                <div>
                  <label className="dark:text-white" htmlFor="country">
                    Country *
                  </label>
                  <input
                    ref={(input) => (countryRef = input)}
                    id="country"
                    type="text"
                    name="country"
                    className="block w-full px-4 py-1.5 mt-2 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md  !outline-none"
                  />
                </div>

                <div>
                  <label className="dark:text-white" htmlFor="services">
                    Services *
                  </label>
                  <select
                    className="block w-full px-4 py-1.5 mt-2 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md  !outline-none"
                    ref={(input) => (serviceRef = input)}
                  >
                    <option>Select Job Title</option>
                    <option>Retouch</option>
                    <option>Reflection</option>
                    <option>Shadow</option>
                    <option>Natural Shadow</option>
                    <option>Neck Joint</option>
                    <option>Create Shadow</option>
                    <option>Drop Shadow</option>
                    <option>Background Remove</option>
                    <option>Color Correction</option>
                    <option>Clipping Path</option>
                    <option>Ghost Mannequin</option>
                    <option>Jewellery Retouch</option>
                    <option>Multi Path</option>
                    <option>Photo Masking</option>
                    <option>Photo Resizing</option>
                    <option>Photo Restoration</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <label className="dark:text-white" htmlFor="services">
                  Return File As *
                </label>
                <select
                  className="block w-full px-4 py-1.5 mt-2 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md  !outline-none"
                  ref={(input) => (returnFileAsRef = input)}
                >
                  <option>Select File Type</option>
                  <option>PNG</option>
                  <option>JPEG</option>
                  <option>GIF</option>
                  <option>PSD</option>
                </select>
              </div>
              <div className="mt-5">
                <label className="text-sm dark:text-white " htmlFor="country">
                  (Images or zip file) * max file size upto 30 MB otherwise, can
                  go{" "}
                  <a
                    href="https://wetransfer.com/"
                    target="_blank"
                    className="font-semibold text-primary dark:text-white"
                  >
                    wetransfer
                  </a>{" "}
                  and send{" "}
                  <span className="font-semibold text-primary dark:text-white">
                    info@graphicsviewpoint.com
                  </span>
                </label>
                <input
                  onChange={(e) => setFreeTrialFiles(e.target.files)}
                  id="freeTialFiles"
                  type="file"
                  name="country"
                  multiple
                  className="block w-full px-4 py-1.5 mt-2 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md  !outline-none"
                />
              </div>
              <div className="mt-5">
                <label className="dark:text-white" htmlFor="textarea">
                  Instructions:
                </label>
                <textarea
                  ref={(input) => (instructionRef = input)}
                  id="textarea"
                  type="textarea"
                  className="block h-[100px] w-full px-4 py-1.5 mt-2 dark:bg-gray-700 dark:text-white border border-gray-300 rounded-md  !outline-none "
                ></textarea>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform rounded-md bg-primary hover:bg-secondary focus:outline-none dark:bg-gray-700 "
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeTrialSection;
