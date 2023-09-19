const Subscribe = () => {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center mt-12 med:mt-24 pb-16 relative">
      <div className="absolute text-center opacity-[.07] z-10 font-extrabold tracking-wider text-3xl sm:text-8xl  text-[#212121] zero:text-4xl">Newsletter</div>
      <div className="-z-10">
        
        <h3 className="text-2xl md:text-3xl font-extrabold text-center tracking-widest">
          Subscribe Our Newsletter
        </h3>
        <p className="text-center text-gray-700 mt-4 tracking-wide leading-relaxed">
          Get the latest information and promo offers directly
        </p>
      </div>
      <div className=" flex flex-col med:flex-row justify-center gap-x-2 mt-8">
        <input
          className="pt-2  pr-1 med:pr-20 pb-2 pl-1 med:pl-2 bg-[#fcfcfc] border border-gray-700 zero:px-10 zero:py-4"
          type="email"
          placeholder=" example@email.com"
        />
        <button className=" mt-4 med:mt-0 p-3 tracking-widest bg-[#212121] text-white text-sm w-auto ring-2 ring-heading/70 med:w- font-bold llg:py-0  llg:w-full border-black border shadow-inner hover:bg-[#212121] zero:p-5 zero:text-lg llg:text-sm">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Subscribe;