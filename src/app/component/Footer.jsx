"use client";
// Icons from ReactIcons Library
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import { LiaFacebook } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
import { useTranslations } from "next-intl";
const Footer = () => {
  const t = useTranslations("");
  return (
    <>
      <footer className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-5">
        {/* القسم العلوي من الفوتر */}
        <div className="footer-top grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[115px_minmax(0,1.5fr)_1fr_1fr_1fr] gap-8 py-8">
          <div className="All flex flex-col">
            <div className="all-header mb-2">
              <h1 className="text-customheader text-base">{t("All")}</h1>
            </div>
            <div className="items flex flex-col">
              <p className="my-1 text-customGray text-base">{t("home")}</p>
              <p className="my-1 text-customGray text-base">{t("aboutus")}</p>
              <p className="my-1 text-customGray text-base">{t("contactus")}</p>
            </div>
          </div>

          <div className="contact-us flex flex-col">
            <div className="contact-title h-6 mb-2">
              <h1 className="text-customheader text-base font-medium">
                {t("contactus")}
              </h1>
            </div>
            <div className="items contact-icons flex flex-col space-y-2">
              <p className="flex items-center">
                <span className="h-7 w-7 border border-gray-400 rounded-full shadow-lg flex items-center justify-center mx-2">
                  <GoMail className="m-1 text-customGray text-base" />
                </span>
                <span className="text-customGray text-base">
                  mail@companyname.com
                </span>
              </p>

              <p className="flex items-center">
                <span className="h-7 w-7 border border-gray-400 rounded-full shadow-lg flex items-center justify-center mx-2">
                  <FiPhone className="m-1 text-customGray text-base" />
                </span>
                <span className="text-customGray text-base">
                  002010063215487
                </span>
              </p>

              <p className="flex items-center">
                <span className="h-7 w-7 border border-gray-400 rounded-full shadow-lg flex items-center justify-center mx-2">
                  <CiLocationOn className="m-1 text-customGray text-base" />
                </span>
                <span className="text-customGray text-base">
                  Location, Lorem Ipsum is simply dummy text of the printing.
                </span>
              </p>
            </div>
          </div>

          <div className="Customer Service flex flex-col">
            <div className="customer-title mb-2">
              <h1 className="text-customheader text-base font-medium">
                {t("customerservice")}
              </h1>
            </div>
            <div className="items flex flex-col space-y-2">
              <p className="text-customGray text-base">{t("Faqs")}</p>
              <p className="text-customGray text-base">{t("contactus")}</p>
              <p className="text-customGray text-base">
                {t("ContactViaWhatsApp")}
              </p>
            </div>
          </div>

          <div className="Policies flex flex-col">
            <div className="Policies-title mb-2">
              <h1 className="text-customheader text-base font-medium">
                {t("Policies")}
              </h1>
            </div>
            <div className="items flex flex-col space-y-2">
              <p className="text-customGray text-base">
                {t("DeliveryInformation")}
              </p>
              <p className="text-customGray text-base">
                {t("Terms&Conditions")}
              </p>
              <p className="text-customGray text-base">{t("PrivacyPolicy")}</p>
              <p className="text-customGray text-base">
                {t("Returns&Refunds")}
              </p>
            </div>
          </div>

          <div className="Newsletters flex flex-col">
            <div className="Newsletters-title mb-2">
              <h1 className="text-customheader text-base font-medium">
                {t("Newsletters")}
              </h1>
            </div>
            <div className="items flex flex-col space-y-4">
              <p className="font-light text-base text-customGray">
                {t("lorem")}
              </p>
              <div className="relative">
                <input
                  type="email"
                  className="w-full bg-transparent h-12 text-sm border-b-2 border-[#3AA6CD] rounded-none pl-3 pr-32 py-2 transition duration-300 ease focus:outline-none focus:border-transparent shadow-sm focus:shadow-none"
                  placeholder={t("Email Address")}
                />
                <button
                  className="absolute right-0 top-0 -bottom-1 m-auto flex items-center justify-center border border-transparent text-center text-white transition-all shadow-sm hover:shadow focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-[91px] h-[40px] font-medium text-base"
                  type="button"
                  style={{
                    background: "linear-gradient(to right, #5AE4CB, #3EABCC)",
                    borderRadius:"12px"
                  }}
                >
                  {t("signup")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* القسم السفلي من الفوتر */}
        <div className="footer-bottom text-center mt-8 flex flex-col items-center justify-around space-y-4">
          <img src="/images/logo.png" alt="Logo" className="w-28 h-auto" />
          <div className="icons flex items-center space-x-4">
            <span className="border border-black cursor-pointer p-1 rounded-full hover:bg-gray-200 transition duration-300">
              <RiTwitterXFill className="text-black" />
            </span>
            <span className="border border-black cursor-pointer p-1 rounded-full hover:bg-gray-200 transition duration-300">
              <FiYoutube className="text-black" />
            </span>
            <span className="border border-black cursor-pointer p-1 rounded-full hover:bg-gray-200 transition duration-300">
              <LiaFacebook className="text-black" />
            </span>
            <span className="border border-black cursor-pointer p-1 rounded-full hover:bg-gray-200 transition duration-300">
              <IoLogoInstagram className="text-black" />
            </span>
          </div>
          <p className="text-sm text-customGray">{t("footer")}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
