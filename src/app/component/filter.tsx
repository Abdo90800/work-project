import item from "../../data/item";
import { RiDiscountPercentFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import img from "../../../public/images/card2.png";

function Filter({ priceFilter }) {
  const filterItems = (items, filter) => {
    return filter === "Up to 999 EGP"
      ? items.filter((e) => e.price <= 999)
      : filter === "1000 to 1999 EGP"
      ? items.filter((e) => e.price >= 1000 && e.price <= 1999)
      : filter === "2000 to 2999 EGP"
      ? items.filter((e) => e.price >= 2000)
      : filter === "3000 to 3999 EGP"
      ? items.filter((e) => e.price >= 3000)
      : filter === "4000 to 4999 EGP"
      ? items.filter((e) => e.price >= 4000)
      : filter === "5000 & above EGP"
      ? items.filter((e) => e.price >= 5000)
      : items;
  };

  const filteredItems = filterItems(item, priceFilter);

  return (
    <div className="flex flex-wrap items-center justify-center ">
      {filteredItems.map((e) => (
        <div
          key={e.id}
          className="group relative block overflow-hidden lg:w-[360px] lg:h-[590px] sm:w-[200px] sm:h-[450px] md:w-[300px] md:h-[450px]  rounded-[16px]  m-3"
        >
          <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
            <span className="sr-only">Wishlist</span>
            <CiHeart className="text-[26.18px]" />
          </button>{" "}
          <button className="absolute left-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
            <div className="w-[105px] h-[40] bg-white rounded-[20px] p-[8px] gap-[4px] flex items-center">
              <RiDiscountPercentFill className="text-[#9B0202] text-[24px] " />
              <span className="text-[#9B0202]">15% off</span>
            </div>
          </button>
          <Image
            src={e.image}
            alt="img"
            className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
          />
          <div className="relative p-6 bg-white border border-gray-100">
            <p className="text-gray-700">
              ${e.price}
              <span className="text-gray-400 line-through">$80</span>
            </p>

            <h3 className="mt-1.5 text-lg font-medium text-gray-900">
              {e.title}
            </h3>

            <form className="flex gap-4 mt-4">
              <button
                style={{
                  background: "linear-gradient(to right, #5AE4CB, #3EABCC)",
                }}
                type="button"
                className="w-[116px] h-[40px] rounded-[10px]  bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
              >
                Order Now
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Filter;