import SwipperBlog from "./SwipperBlog";
const BLogCard = () => {
  return (
    <section className="blog-card bg-[#F6F6F6]">
      <div className="container max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 py-5">
        <header className="my-8">
          <h1 className="text-left text-customheader font-bold text-lg sm:text-xl lg:text-2xl">
            Related Articles:
          </h1>
        </header>
        <SwipperBlog />
      </div>
    </section>
  );
};
export default BLogCard;
