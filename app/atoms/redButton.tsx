"use client";
import { useState } from "react";
import CreateForm from "./createForm";
interface redButtonProps {
  text: string;
}

export default function RedButton({ text }: redButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <button
        className="bg-[#DB4444] text-white px-[calc(48px/2.5)] py-[calc(16px/2.5)] rounded-[4px] text-[16px] hidden sm:block md:px-[calc(48px/1.5)] md:py-[calc(16px/1.5)] md:font-bold lg:px-[48px] lg:py-[16px]"
        onClick={toggleModal}
      >
        {text}
      </button>
      {isModalOpen && (
        <aside>
          <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-gray-700 rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Create product
                  </h3>
                  <button
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={toggleModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <CreateForm />
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}
