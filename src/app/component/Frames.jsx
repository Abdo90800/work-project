const Frames = () => {
  return (
    <section className="Frames-Section max-w-screen-xl mx-auto my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <img src="/images/frame-1.png" alt="photo-1" className="w-full h-auto lg:col-span-1 md:col-span-2 sm:col-span-2" />
        <img src="/images/frame-2.png" alt="photo-2" className="w-full h-auto lg:col-span-2 md:col-span-2 sm:col-span-2" />
      </div>
    </section>
  );
};

export default Frames;
