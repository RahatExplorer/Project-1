import React from "react";

const ContactUs = () => {
  return (
    <div class="container my-24 px-6 mx-auto">
      <section class="mb-32 text-gray-800">
        <div class="grid lg:grid-cols-2 gap-4 lg:gap-x-12 lg:mb-0">
          <div class="mb-12 lg:mb-0">
            <h2 class="text-3xl font-bold mb-6">Frequently asked questions</h2>

            <p class="text-gray-500 mb-12">
              Didn't find your answer in the FAQ? Contact our sales team.
            </p>

            <form>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group mb-6">
                <textarea
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>

          <div class="mb-6 md:mb-0">
            <p class="font-bold mb-4">What’s your cancellation policy?</p>
            <p class="text-gray-500 mb-12">
              We offer flexible cancellation (up to 30 days before departure for most packages). Some promotions or flights may have stricter terms—we’ll always clarify this upfront.
            </p>

            <p class="font-bold mb-4">Can you customize pre-designed packages?</p>
            <p class="text-gray-500 mb-12">
              Absolutely! Our experts will tweak itineraries to match your preferences—just mention your needs when booking.
            </p>

            <p class="font-bold mb-4">
              Are your tours suitable for children/seniors?
            </p>
            <p class="text-gray-500 mb-12">
              Many are! Filter trips by “Family-Friendly” or “Accessible” on our website, or ask us for recommendations
            </p>

            <p class="font-bold mb-4">
              What safety measures do you follow?
            </p>
            <p class="text-gray-500 mb-12">
              We partner with vetted providers, include 24/7 emergency support, and share pre-trip safety guides.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
