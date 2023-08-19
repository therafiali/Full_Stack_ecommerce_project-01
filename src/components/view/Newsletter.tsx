const Subscribe = () => {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center mt-8 md:mt-24 pb-16 relative">
      <div className="absolute text-center opacity-[.07] z-10 font-extrabold tracking-wider text-3xl sm:text-8xl  text-[#212121]">Newsletter</div>
      <div className="-z-10">
        
        <h3 className="text-2xl md:text-3xl font-extrabold text-center tracking-widest">
          Subscribe Our Newsletter
        </h3>
        <p className="text-center text-gray-700 mt-4 tracking-wide leading-relaxed">
          Get the latest information and promo offers directly
        </p>
      </div>
      <div className=" flex flex-col md:flex-row justify-center gap-x-2 mt-8">
        <input
          className="pt-2 pr-1 md:pr-20 pb-2 pl-1 md:pl-2 bg-[#fcfcfc] border border-gray-700"
          type="email"
          placeholder="     example@email.com"
        />
        <button className=" mt-4 md:mt-0  tracking-widest bg-[#212121] text-white text-sm w-auto md:w-32 font-bold lg:py-5 border-black border shadow-inner hover:bg-[#212121]">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Subscribe;