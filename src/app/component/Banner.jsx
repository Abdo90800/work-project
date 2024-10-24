

function Banner() {
  return (
    <section
      // style={{ backgroundImage: `url(${photoos})` }}
      className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[480px] gap-[10px] flex items-center mt-20"
    >
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 ">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
          Discover the Perfect
            <strong className="block font-extrabold text-rose-500">
              {" "}
              Dressing Room for You
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed ">
          Our dressing rooms combine functionality and style, providing the perfect space to showcase your wardrobe. 
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className=" block w-full rounded bg-[#FFFFFF] px-12 py-3 text-sm font-medium text-black shadow focus:outline-none focus:ring sm:w-auto"
            >
            View Packages
            </a>

            <a
              href="#"
              style={{background: "linear-gradient(to right, #5AE4CB, #3EABCC)"}}
              className="block w-full rounded  px-12 py-3 text-sm font-medium   focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
            Get Inspection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
