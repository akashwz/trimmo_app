"use client";

import { deleteCustomizeQr, getCustomizeQR } from "@/redux/slices/customSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pencil, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationPopup from "../ConfirmationPopup";
import SharePopup from "../SharePopup";

function CustomizeqrPage() {
  const [openSharePopup, setOpenSharePopup] = useState(false);
  const [isConfirmationPopup, setIsConfirmationPopup] = useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState(null); // ✅ to store selected ID

  const dispatch = useDispatch();
  const { customizeQRData } = useSelector((state) => state.customSlice);

  useEffect(() => {
    dispatch(getCustomizeQR());
  }, []);

  const handleDeleteShortLinkClick = async (id) => {
    await dispatch(deleteCustomizeQr(id)); // await to ensure deletion
    setIsConfirmationPopup(false);
    setSelectedDeleteId(null);
    dispatch(getCustomizeQR());
  };

  return (
    <>
      {openSharePopup && (
        <SharePopup openSharePopup={openSharePopup} setOpenSharePopup={setOpenSharePopup} />
      )}

      <div className="h-[93vh] flex flex-col w-full">
        <div className="flex-1 min-h-[200px] overflow-y-auto p-4 bg-gray-100 w-full md:w-[80%] xl:w-[60%] mx-auto">
          <div className="flex flex-col items-center w-full mt-3 max-w-screen-xl mx-3">

            {/* ✅ QR Data list */}
            {customizeQRData &&
              customizeQRData?.map((data, index) => (
                <section
                  key={data._id || index}
                  className="lg:mt-4 rounded-lg shadow-sm text-primarycolor bg-white w-full"
                >
                  <label
                    htmlFor={`Option-${index}`}
                    className="flex cursor-pointer items-start rounded-lg p-4 transition hover:bg-gray-50"
                  >
                    <div className="flex flex-col sm:flex-row items-center w-full">
                      <div className="flex flex-col md:flex-row justify-between items-center w-full">
                        <h3 className="text-xl font-semibold text-primarycolor font-montserrat line-clamp-2">
                          {data?.name || "Elated- Themes - portfolio | ThemeForest"}
                        </h3>
                        <div className="sm:inline-flex flex flex-wrap sm:shrink-0 sm:items-center justify-center sm:gap-1 p-1 rounded">
                          <Link
                            href={`/customizeqr/edit/${data?._id}`}
                            className="box-border rounded bg-white p-1 text-[10px] leading-5 font-medium text-black transition hover:bg-whitelight border flex items-center"
                          >
                            <Pencil className="h-4 w-4" />
                          </Link>

                          <button
                            onClick={() => {
                              setSelectedDeleteId(data?._id); // ✅ save selected id
                              setIsConfirmationPopup(true);
                            }}
                            className="box-border rounded bg-white p-1 text-[10px] leading-5 font-medium text-black transition hover:bg-whitelight border flex justify-center items-center"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </label>
                </section>
              ))}
          </div>
        </div>
      </div>

      {/* ✅ ConfirmationPopup rendered once, outside map */}
      {isConfirmationPopup && (
        <ConfirmationPopup
          isOpen={isConfirmationPopup}
          onClose={() => {
            setIsConfirmationPopup(false);
            setSelectedDeleteId(null);
          }}
          title="Delete Item"
          subheading="Are you sure you want to delete this item?"
          confirmText="Yes, Delete"
          onConfirm={() => handleDeleteShortLinkClick(selectedDeleteId)}
        />
      )}
    </>
  );
}

export default CustomizeqrPage;
