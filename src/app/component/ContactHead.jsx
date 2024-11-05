import Image from "next/image";
const ContactHead = () => {
  return (
    <section className="contact-head max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <header className="my-8">
        <h1 className="text-left text-customheader font-bold text-[20px]">Contact Us</h1>
        <span className="border w-full border-[#EAEEF0] flex my-2"></span>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-10">
        <div className="img-container lg:w-[476px] lg:h-[397px] md:w-full md:h-full w-full h-full col-span-1 md:col-span-2">
          <Image
            src="/images/contact.png"
            alt="contact-image"
            width={476}
            height={397}
            className="object-cover w-full h-full"
          />
        </div>

        <aside className="flex justify-center items-center w-full h-auto col-span-1 md:col-span-3">
          <form className="bg-white p-8 w-full max-w-full md:max-w-[740px] h-auto rounded-md shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-formColor font-normal mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-formColor font-normal mb-2"
                >
                  E-mail Address:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-formColor font-normal mb-2"
                >
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="+02"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-formColor font-normal mb-2"
                >
                  Service:
                </label>
                <input
                  type="text"
                  id="service"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter the service"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="subject"
                className="block text-formColor font-normal mb-2"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter the subject"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-formColor font-normal mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="w-[164px] h-[40px] flex justify-center items-center bg-[#545F71] hover:bg-[#545f71e6] border border-[#6C7888] text-white font-normal rounded-md transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </aside>
      </main>
    </section>
  );
};
export default ContactHead;
