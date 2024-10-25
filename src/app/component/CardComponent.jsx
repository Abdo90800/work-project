import Image from "next/image";

const CardComponent = ({product}) => {
  return (
    <article className="rounded-xl shadow-lg border border-[#D6D6D7] my-10 bg-white p-4 flex flex-col items-center lg:h-[251px] lg:w-[416px] relative text-center">
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
      <ul className="flex flex-col items-center justify-center gap-y-2 mt-4 ">
        <li>
          <p className="font-normal text-customGray text-sm px-2">
            {product.description}
          </p>
        </li>
        <li className="my-2">
          <h1 className="font-semibold text-base">{product.name}</h1>
        </li>
        <li>
          <p className="font-normal text-sm">{product.date}</p>
        </li>
      </ul>
    </article>
  );
};

export default CardComponent;
