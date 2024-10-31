import { useEffect, useState } from "react";
import Image from "next/image";

const CardComponent = ({ product }) => {
  const [shortDescription, setShortDescription] = useState("");

  useEffect(() => {
    // عدد الكلمات التي تريدها للوصف في الشاشات المتوسطة والصغيرة
    const maxWords = window.innerWidth < 768 ? 10 : 20; // 10 كلمات للشاشات الأصغر، 20 للشاشات الأكبر
    const words = product.description.split(" ");
    
    // قطع الوصف ليكون بالشكل المطلوب
    setShortDescription(words.slice(0, maxWords).join(" ") + (words.length > maxWords ? '...' : ''));
  }, [product.description]);

  return (
    <article className="rounded-xl shadow-lg border border-[#D6D6D7] my-10 bg-white p-4 flex flex-col items-center relative text-center lg:h-[251px] lg:w-[416px] sm:h-[300px] sm:w-[300px] md:h-[320px] md:w-[350px]">
      {/* User Photo */}
      <div className="flex items-center absolute top-0 -translate-y-1/2 z-10 mx-auto">
        <Image
          alt="Photo"
          src={product.photo}
          className="rounded-full object-cover"
          height={80}
          width={80}
        />
      </div>

      {/* Stars Photo */}
      <div className="mt-10 mb-0 z-0">
        <Image alt="Rating" height={16} width={128} src={product.ratingImage} />
      </div>

      {/* Card Description */}
      <ul className="flex flex-col items-center justify-center gap-y-2 mt-4">
        <li>
          <p className="font-normal text-customGray text-sm px-2 sm:px-4 md:px-6 lg:px-2">
            {shortDescription}
          </p>
        </li>
        <li className="my-2">
          <h1 className="font-semibold text-base md:text-lg lg:text-base">
            {product.name}
          </h1>
        </li>
        <li>
          <p className="font-normal text-sm md:text-base">{product.date}</p>
        </li>
      </ul>
    </article>
  );
};

export default CardComponent;
