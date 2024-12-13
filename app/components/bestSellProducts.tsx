import { prisma } from "@/prisma/prisma-client";
import CategoryMark from "../atoms/categoryMark";
import RedButton from "../atoms/redButton";
import BestSellingTimer from "./bestSellingTimer";
import ProductCard from "./productCard";

export default async function BestSellProducts() {
  const products = await prisma.product.findMany();

  return (
    <section className="p-4 pt-6 flex flex-col justify-center items-center w-[100vw] gap-y-12 md:gap-y-20 lg:gap-y-32">
      <div className="flex flex-col w-[90%]">
        <CategoryMark categoryName="This Month" />
        <div className="flex justify-between items-center py-6">
          <span className="text-[28px] font-semibold">
            Best Selling Products
          </span>

          <RedButton text="Add Product" />
        </div>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-4 justify-center w-full sm:gap-x-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center w-full py-8">
            <span className="text-gray-500 text-lg">
              No products available at the moment
            </span>
          </div>
        )}
      </div>
      <div className="bg-jbl-bkg-mb sm:bg-jbl-bkg bg-cover w-[90%] h-fit">
        <div className="w-full h-full flex flex-col items-center gap-y-8 px-2 py-12 sm:items-start sm:px-12 md:px-20 lg:gap-y-12">
          <span className="text-[#00FF66] text-[20px] font-bold">
            Categories
          </span>
          <p className="text-[#fff] text-[33px] md:text-[42px] lg:text-[64px] font-semibold">
            Enhance Your <br />
            Music Experience
          </p>
          <BestSellingTimer />
          <button className="text-[#fff] font-bold w-fit text-lg bg-[#00FF66] px-12 py-4 rounded-[4px]">
            Buy Now!
          </button>
        </div>
      </div>
    </section>
  );
}
