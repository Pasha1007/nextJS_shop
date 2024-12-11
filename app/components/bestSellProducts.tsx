import CategoryMark from "../atoms/categoryMark";
import RedButton from "../atoms/redButton";
import BestSellingTimer from "./bestSellingTimer";
import ProductCard from "./productCard";

export default function BestSellProducts() {
  const products = [
    {
      imgSrc: "./assets/coat.png",
      name: "The north coat",
      price: 260,
      oldPrice: 360,
      rating: 4,
      reviews: 14,
    },
    {
      imgSrc: "./assets/bag.png",
      name: "Gucci duffle bag",
      price: 910,
      oldPrice: 1160,
      rating: 5,
      reviews: 55,
    },
    {
      imgSrc: "./assets/cooler.png",
      name: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: 2,
      reviews: 10,
    },
    {
      imgSrc: "./assets/shell.png",
      name: "Small BookShell",
      price: 360,
      oldPrice: 520,
      rating: 3,
      reviews: 142,
    },
  ];

  return (
    <section className="p-4 pt-6 flex flex-col justify-center items-center w-[100vw] gap-y-12 md:gap-y-20 lg:gap-y-32">
      <div className="flex flex-col w-[90%]">
        <CategoryMark categoryName="This Month" />
        <div className="flex justify-between items-center py-6">
          <span className="text-[28px] font-semibold">
            Best Selling Products
          </span>
          <RedButton text="View All" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-4 justify-center w-full sm:gap-x-6">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
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
          <button className="text-[#fff] font-bold w-fit text-lg bg-[#00FF66] px-12 py-4 rounded-[4px] ">
            Buy Now!
          </button>
        </div>
      </div>
    </section>
  );
}
