"use client";

import { RiHeartLine, RiPencilLine, RiDeleteBinLine } from "@remixicon/react";
import Image from "next/image";
import UpdateForm from "../atoms/updateForm";
import { useState } from "react";
import { deleteProduct } from "../actions/actions";
import DeleteBtn from "../atoms/deleteBtn";

interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  imageUrl: string;
  rating: number;
  reviews: number;
  createdAt: Date;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const maxStars = 5;

  const [isEditMode, setIsEditMode] = useState(false);
  const toggleEditForm = () => {
    setIsEditMode((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <figure className="relative flex justify-center items-center w-full h-[300px] bg-[#F5F5F5]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
        />
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer">
          <RiHeartLine />
        </div>
        <div className="absolute top-12 right-2 bg-white rounded-full p-1 cursor-pointer">
          <RiPencilLine onClick={toggleEditForm} />
          {isEditMode && (
            <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-gray-700 rounded-lg shadow">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Edit product
                    </h3>
                    <button
                      type="button"
                      className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={toggleEditForm}
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
                  {isEditMode && (
                    <UpdateForm closeModal={toggleEditForm} product={product} />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="absolute top-[88px] right-2 bg-white rounded-full p-1 cursor-pointer">
          <DeleteBtn id={product.id} />
        </div>
      </figure>
      <figcaption className="flex flex-col gap-y-1">
        <span className="text-[20px] font-semibold">{product.name}</span>
        <div className="flex flex-row items-center gap-x-2">
          <span className="text-[#DB4444] font-semibold">{product.price}$</span>
          <span className="text-[#808080] font-semibold line-through text-[14px]">
            {product?.oldPrice}$
          </span>
        </div>
        <div className="flex items-center">
          {[...Array(maxStars)].map((_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 me-1 ${
                index < product.rating ? "text-[#FFAD33]" : "text-[#BFBFBF]"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <span className="text-[#808080] font-semibold text-[15px] ms-2">
            ({product.reviews})
          </span>
        </div>
      </figcaption>
    </div>
  );
}
