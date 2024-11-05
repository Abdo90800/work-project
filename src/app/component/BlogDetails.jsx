import BlogHead from "../component/BlogHead";
import BlogRate from "../component/BlogRate";
import BlogCard from "../component/BlogCard";
import BlogFrame from "../component/BlogFrame";

const BlogDetails = () => {
  return (
    <section className="blog-details ">
      <BlogFrame/>
      <BlogHead />
      <BlogRate />
      <BlogCard />
    </section>
  );
};

export default BlogDetails;
