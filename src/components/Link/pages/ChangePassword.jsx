'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
function ChangePassword() {
    const router = useRouter()
  return (
   <>
    <div className="min-h-[93vh] flex flex-col w-full">
        <div className=" flex-1 min-h-[200px] overflow-y-auto p-4 bg-gray-100 w-full md:w-[80%] xl:w-[60%] mx-auto">
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-col w-full mb-3">
                <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
                  Change password
                </h1>
              </div>
              <div className="w-full mx-auto bg-white p-5 rounded shadow-sm ">
                <div className="flex flex-wrap -m-2">
                  {/* Current Password Field */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="cpassword"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Current password
                      </label>
                      <input
                        type="text"
                        id="cpassword"
                        name="cpassword"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  {/* New Password Field */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="npwd"
                        className="leading-7 text-sm text-gray-600"
                      >
                        New password
                      </label>
                      <input
                        type="text"
                        id="npwd"
                        name="npwd"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  {/* Confirm New Password Field */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="cnpwd"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Confirm new password
                      </label>
                      <input
                        type="text"
                        id="cnpwd"
                        name="cnpwd"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  <div className="w-full mt-10 flex items-center justify-between p-4 bg-white border-t ">
                    <button
                      onClick={() => router.push("/home")}
                      className="box-border rounded bg-whitelight px-2 sm:px-5 md:px-7 py-2.5 text-[16px] leading-5 font-medium text-[#050505] transition hover:text-[#267e55] border hover:border-green"
                    >
                      Cancel
                    </button>
                    <button className="block bg-green rounded px-2 sm:px-5 md:px-7 py-2.5 text-[16px] leading-5 font-medium text-white transition hover:bg-[#267e55]">
                      Change password
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
            Change Password
          </button>
        </div> */}
      </div>
   </>
  )
}

export default ChangePassword