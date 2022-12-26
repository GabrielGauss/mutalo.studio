import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import FeaturesBg from "../images/features-bg.png";
import FeaturesElement from "../images/features-element.png";

function Features() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section className="relative">
      {/* IMPORTANTE Section background (needs .relative class on parent and next sibling elements) */}
      <div
        id="Features"
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 ">
            <h1 className="h2 mb-4">Explore the solutions</h1>
            <p className="text-xl text-gray-600">
              {" "}
              Our goal is to increase sales, engagement, and traffic using
              proven strategies for each social channel. For that, we have to
              offer a pallette of services that will help you to get your
              desired objectives.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 ">
                <h5 className="h5 mb-3 text-violet-500 text font-semibold">
                  Start with the right foot
                </h5>
                <h3 className="h3 mb-3">What may suit your needs</h3>
                <p className="text-xl text-gray-600">
                  Social media marketing has become a must for businesses, so we
                  have taken the time to create a platform that is tailored
                  specifically to each client's needs.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <h6 className="h5 mb-3 text-violet-500 text font-semibold">
                      Digital Presence & Brand Identity
                    </h6>
                    <div className="font-bold text-xl py-2 leading-snug tracking-tight mb-1">
                      Let's build your ecosystem
                    </div>
                    <div className="text-gray-600">
                      We take action building your brand identity, from the
                      ground to the skies. Graphics, your site and Social Media.
                      the whole deal.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3 hover:scale-105">
                    <svg
                      className="w-3 h-3 fill-violet-700"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <h6 className="h5 mb-3 text-violet-500 text font-semibold">
                      Data Analitics
                    </h6>
                    <div className="font-bold text-xl py-2 leading-snug tracking-tight mb-1">
                      Do you need insights, Huh? No problem
                    </div>
                    <div className="text-gray-600">
                      Get deep analitics of your bussiness, let's face the weak
                      points together to maximize your full potential.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3 hover:scale-105">
                    <svg
                      className="w-3 h-3 fill-pink-600"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <h6 className="h5 mb-3 text-violet-500 text font-semibold">
                      Ads & traffic
                    </h6>
                    <div className="font-bold text-xl py-2 leading-snug tracking-tight mb-1">
                      Boost your product to the skies
                    </div>
                    <div className="text-gray-600">
                      We craft a flawless strategy that is in harmony with your
                      brand vision, We collect & utilize data to continuously
                      optimise and scale your campaigns & ROI.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3 hover:scale-105">
                    <svg
                      className="w-3 h-3 fill-yellow-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={FeaturesBg}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    {/* <img
                      className="md:max-w-none absolute w-full left-0 transform animate-float"
                      src={FeaturesElement}
                      width="500"
                      height="44"
                      alt="Element"
                      style={{ top: "30%" }}
                    /> */}
                    <div className="md:max-w-none text-left absolute w-full bg-gray-200 p-10 rounded">
                      <div className="flex flex-row-between">
                        <h2 className=" font-bold text-xl py-2 leading-snug tracking-tight mb-1">
                          Digital presence & Brand identity
                        </h2>
                        <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow flex-shrink-0 ml-3 hover:scale-105">
                          <svg
                            className="w-5 h-5 fill-violet-700"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        Having a strong brand identity is essential for any
                        business, as it helps to differentiate your company from
                        competitors and build trust with customers. A
                        well-defined brand identity includes elements such as
                        your company's name, logo, color palette, font, and tone
                        of voice.
                        <br></br>
                        <span className="font-bold">
                          Our team will work with you to understand your brand's
                          personality and values, and will create a visual and
                          verbal identity that reflects those qualities. We'll
                          also help you implement your new brand identity across
                          all of your marketing materials and communication
                          channels, ensuring consistency and clarity.
                        </span>
                        <br></br> Let us help you build a strong brand identity
                        that sets your business apart from the competition.
                      </p>
                    </div>
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={FeaturesBg}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <div className="md:max-w-none text-left absolute w-full bg-gray-200 p-10 rounded">
                      <div className="flex flex-row-between">
                        <h2 className=" font-bold text-xl py-2 leading-snug tracking-tight mb-1">
                          Data analitics
                        </h2>
                        <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow flex-shrink-0 ml-3 hover:scale-105">
                          <svg
                            className="w-5 h-4 fill-pink-600"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-600 tracking-wide">
                        Using data analytics in your advertising campaigns can
                        help you make more informed decisions and improve the
                        performance of your ads.<br></br>
                        <span className="font-bold">
                          By collecting and analyzing data on the effectiveness
                          of your campaigns, you can identify patterns and
                          trends that can guide your strategy.
                        </span>{" "}
                        <br></br>
                        <br></br>
                        For example, you can use data to understand which types
                        of ads are generating the most clicks, conversions, or
                        engagement, and adjust your approach accordingly.
                        <br></br>
                        You can also use data to determine the best times to run
                        your ads, the most effective channels to use, and the
                        target audience that is most likely to respond to your
                        ads. By leveraging the power of data analytics, you can
                        optimize your advertising efforts and get the best
                        possible return on your investment.
                      </p>
                    </div>
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={FeaturesBg}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                    <div className="md:max-w-none text-left absolute w-full bg-gray-200 p-10 rounded">
                      <div className="flex flex-row-between">
                        <h2 className=" font-bold text-xl py-2 leading-snug tracking-tight mb-1">
                          Ads & Traffic
                        </h2>
                        <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow flex-shrink-0 ml-3 hover:scale-105">
                          <svg
                            className="w-5 h-5 fill-yellow-500"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                              fill="#191919"
                              fillRule="nonzero"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-600 tracking-wide">
                        Targeted advertising is a powerful way to reach your
                        ideal customers and drive more sales for your business.
                        Unlike traditional advertising methods, which rely on
                        reaching a broad audience, targeted ads are focused on
                        reaching specific individuals based on their interests,
                        demographics, and other factors.<br></br>
                        This allows you to deliver your message to the people
                        most likely to be interested in your product or service,
                        increasing the likelihood that they will engage with
                        your brand and make a purchase. By using targeted ads,
                        you can also save money on advertising costs by only
                        reaching the audience that matters most to your
                        business.
                        <br></br>
                        <br></br>
                        <span className=" font-bold">
                          {" "}
                          With the help of a skilled marketing team, you can
                          create highly effective targeted ad campaigns that
                          deliver results for your business.
                        </span>
                      </p>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
