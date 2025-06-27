"use client";
import { editUser, getUser } from "@/store/slices/userSlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";

function Profile() {
  const router = useRouter();

  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.userSlice.loginData);
  const { userStatus, userData, userError } = useSelector(
    (state) => state.userSlice
  );

  // Form Data
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (loginData?.username) {
      dispatch(getUser(loginData?.username));
    }
  }, [loginData?.username]);

  useEffect(() => {
    if (userData) {
      setName(userData?.name);
    }
  }, [userData]);

  // update User Profile
  const handleUpdateProfile = () => {
    if (name === "") {
      setError("Name is required");
    } else {
      dispatch(editUser(name));
      setError("");
    }
  };

  return (
    <>
      {userStatus == "pending" && <Loader />}
      <div className="min-h-[93vh] flex flex-col w-full">
        <div className="flex-1 min-h-[200px] overflow-y-auto p-4 bg-gray-100 w-full md:w-[80%] xl:w-[60%] mx-auto">
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-col w-full mb-3">
                <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
                  Profile
                </h1>
              </div>
              <div className="w-full mx-auto bg-white p-5 rounded shadow-sm ">
                <div className="flex flex-wrap -m-2">
                  {/* Username Field */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData?.username || ""}
                        readOnly
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  {/* Name Field */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name || ""} // Bind it to your state or props
                        onChange={(e) => setName(e.target.value)} // Update state on change
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                  </div>

                  {/* Email Field with Verified Badge */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={userData?.email || ""}
                        readOnly
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      {/* Verified Badge */}
                      <div
                        className={`absolute top-0 text-primarycolor right-1 flex items-center space-x-1 text-sm  rounded-full px-2 py-1`}
                      >
                        <span className=" w-4 h-4  flex items-center justify-center  rounded-full text-center text-white bg-green ">
                          ✔
                        </span>
                        <span>
                          {userData && userData?.is_verified
                            ? "Verified"
                            : "Not Verified"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mt-10 flex items-center justify-between p-4 bg-white border-t ">
                    <button
                      onClick={() => router.push("/home")}
                      className="box-border rounded bg-whitelight px-2 sm:px-5 md:px-7 py-2.5 text-[16px] leading-5 font-medium text-[#050505] transition hover:text-[#267e55] border hover:border-green"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdateProfile}
                      className="block bg-green rounded px-2 sm:px-5 md:px-7 py-2.5 text-[16px] leading-5 font-medium text-white transition hover:bg-[#267e55]"
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom fixed section */}
        {/* <div className="sticky bottom-0 flex items-center justify-between p-4 bg-white border-t ">
          <button
            onClick={() => router.push("/home")}
            className="box-border rounded bg-whitelight px-2 sm:px-5 md:px-7 py-2.5 text-[16px] leading-5 font-medium text-[#050505] transition hover:text-[#267e55] border hover:border-green"
          >
            Cancel
          </button>
          <button className="block bg-green rounded px-2 sm:px-5 md:px-7 py-2.5 text-[16px] leading-5 font-medium text-white transition hover:bg-[#267e55]">
            Update Profile
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Profile;
