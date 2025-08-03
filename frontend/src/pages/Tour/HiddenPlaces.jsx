import React from "react";

const HiddenPlaces = () => {
  return (
    // <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
    //   <p className="uppercase text-5xl">
    //     get a brief about Hidden beauties in srilanka
    //   </p>
    //   {/* first */}
    //   <div className="grid grid-cols-2 mt-10 gap-5">
    //     <div className="text-xl mt-5">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat
    //       cupiditate quas vitae, ducimus saepe quos voluptatibus, accusantium
    //       qui voluptates earum voluptatum. Consequuntur alias beatae laborum
    //       neque quisquam, quae sit, inventore maxime sed eligendi aliquid a cum
    //       voluptatum nostrum deleniti cumque minima ab ullam impedit eveniet
    //       nulla sequi quis odit?
    //     </div>
    //     <div>
    //       <img
    //         src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/dsc_0128.webp?alt=media&token=a06ac6b6-450a-49ac-9330-e345e9e0e755"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    //   {/* second */}
    //   <div className="grid grid-cols-2 mt-10 gap-5">
    //     <div>
    //       <img
    //         src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/dsc_0128.webp?alt=media&token=a06ac6b6-450a-49ac-9330-e345e9e0e755"
    //         alt=""
    //       />
    //     </div>
    //     <div className="text-xl mt-5">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat
    //       cupiditate quas vitae, ducimus saepe quos voluptatibus, accusantium
    //       qui voluptates earum voluptatum. Consequuntur alias beatae laborum
    //       neque quisquam, quae sit, inventore maxime sed eligendi aliquid a cum
    //       voluptatum nostrum deleniti cumque minima ab ullam impedit eveniet
    //       nulla sequi quis odit?
    //     </div>
    //   </div>
    // </div>
    <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 mt-10">
      <p class="uppercase text-5xl">
        get a brief about Hidden beauties in the world
      </p>
      {/* <!-- first --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/dsc_0128.webp?alt=media&token=a06ac6b6-450a-49ac-9330-e345e9e0e755"
          alt=""
        ></img>
        <div class="text-xl">
          <p className="font-extrabold text-2xl mb-3">São Tomé and Príncipe</p>
          <p>
            This group of volcanic islands in the Gulf of Guinea is Africa's least visited nation, offering pristine beaches, lush rainforests, and a unique Afro-Portuguese culture.
          </p>
        </div>
      </div>
      {/* <!-- second --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 mt-20 gap-5">
        <div class="md:order-last">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/IMG_9666.JPG?alt=media&token=8be80c0f-0646-4f38-b468-43eb95c3b54b"
            alt=""
          ></img>
        </div>
        <div class="text-xl">
          <p className="font-extrabold text-2xl mb-3">Kotor Bay, Montenegro</p>
          <p>
            This stunning fjord-like bay is surrounded by mountains and dotted with charming medieval towns. It's perfect for hiking and exploring historic sites with picturesque views.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiddenPlaces;
