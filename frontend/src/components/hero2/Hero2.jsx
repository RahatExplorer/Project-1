import React from "react";

const Hero2 = () => {
  return (
    <>
      <div class="md:px-36 px-8 md:py-28 py-5">
        <div class="flex lg:flex-row flex-col grid-cols-2 gap-10">
          <div class="flex flex-col gap-5 justify-center p-5">
            <h1 class="text-4xl md:text-5xl font-bold">Explore</h1>
            <h1 class="text-4xl md:text-5xl font-bold">the Wonders of the</h1>
            <h1 class="text-4xl md:text-6xl font-bold text-[#41A4FF]">
              World
            </h1>
            <p class="mt-4">
              Every corner of our planet holds stories waiting to be discovered. Ancient ruins whisper secrets of civilizations past, while modern marvels showcase human ingenuity. Where will your next chapter begin?
            </p>
            <button className="bg-black text-white px-2 py-3 rounded-lg hover:bg-white hover:border hover:text-black hover:font-bold mt-4">
              Get started
            </button>
          </div>
          <div class="">
            <img 
  src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  alt="Boats on water near hill during daytime"
  className="hero-image"
/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
