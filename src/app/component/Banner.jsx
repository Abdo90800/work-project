import { useTranslations } from "next-intl";

function Banner() {
  const t = useTranslations("");

  return (
    <section
      // style={{ backgroundImage: `url(${photoos})` }}
      className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[480px] gap-[10px] flex items-center mt-20"
    >
      {/* <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 ">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            {t("Discover the Perfect")}
            <strong className="block font-extrabold text-rose-500">
              {" "}
              {t("Dressing Room for You")}
            </strong>
          </h1>

          <p className="max-w-lg mt-4 text-white sm:text-xl/relaxed ">
            {t("Dressing Room")}{" "}
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <a
              href="#"
              className=" block w-full rounded bg-[#FFFFFF] px-12 py-3 text-sm font-medium text-black shadow focus:outline-none focus:ring sm:w-auto"
            >
              {t("Packages")}
            </a>

            <a
              href="#"
              style={{
                background: "linear-gradient(to right, #5AE4CB, #3EABCC)",
              }}
              className="block w-full px-12 py-3 text-sm font-medium rounded focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
            {t("View Packages")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
