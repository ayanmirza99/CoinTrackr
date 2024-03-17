"use client";
import { Typewriter } from "react-simple-typewriter";
import Moadal3d from "./components/Modal3d";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Carousel from "./components/Carousel";
import Waves from "./components/Waves";
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const count = useRef(null);
  const main = useRef(null);
  const page2 = useRef(null);
  const floatingImage1 = useRef(null);
  const floatingImage2 = useRef(null);
  const floatingImage3 = useRef(null);
  const floatingImage4 = useRef(null);
  const screenLoader = useRef(null);
  const screenLoaderHeading = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(screenLoaderHeading.current, {
      x: 50,
      duration: 1,
      opacity: 0,
    });
    tl.to(screenLoaderHeading.current, {
      x: -50,
      opacity: 0,
      duration: 1,
    });
    tl.to(screenLoader.current, {
      opacity: 0,
      duration: 1.5,
      zIndex: 0,
      display: "none",
    });
    gsap.to(
      count.current,
      {
        translateY: "48.5vw",
        duration: 3,
        stagger: 0.2,
        scrollTrigger: {
          trigger: page2.current,
          start: "top 60%",
          end: "top 30%",
        },
      },
      gsap.fromTo(
        floatingImage1.current,
        {
          translateX: "-1rem",
          duration: 2,
        },
        {
          translateX: "1rem",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      ),
      gsap.fromTo(
        floatingImage2.current,
        {
          translateX: "-1rem",
          duration: 2,
        },
        {
          translateX: "1rem",
          duration: 2,
          repeat: -1,
          delay: 1,
          yoyo: true,
          ease: "power1.inOut",
        }
      ),
      gsap.fromTo(
        floatingImage3.current,
        {
          translateY: "-1rem",
          duration: 2,
        },
        {
          translateY: "1rem",
          duration: 2,
          repeat: -1,
          delay: 1,
          yoyo: true,
          ease: "power1.inOut",
        }
      ),
      gsap.fromTo(
        floatingImage4.current,
        {
          translateX: "-1rem",
          duration: 2,
        },
        {
          translateX: "1rem",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      )
    );
  }, []);

  return (
    <>
      <div
        ref={screenLoader}
        className="h-screen w-full absolute top-0 left-0 bg-black z-10 flex justify-center items-center text-[#ca8a04] text-[8vw] lg:text-[5vw] font-bold"
      >
        <h1 ref={screenLoaderHeading} className="font-[gothic]">
          CoinTrackr
        </h1>
      </div>
      <section
        ref={main}
        className="w-full flex flex-col text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] h-[50vh] md:h-[70vh] lg:h-[88vh] flex flex-col gap-[1rem] justify-center px-[1.5rem] sm:px-[3rem] text-white">
            <div className="leading-[1.3] flex flex-col">
              <h1 className="text-[0.6em]">Introducing</h1>
              <h1 className="text-[1.5em] text-[#ca8a04] font-[gothic] font-bold">
                CoinTrackr
              </h1>
            </div>
            <h1 className="text-[0.5em] w-full md:w-[90%]">
              Discover the latest in cryptocurrency trends and prices,
              empowering you to make informed decisions and seize new
              opportunities in the ever-evolving crypto market.
            </h1>
            <h1 className="text-[0.7em]">
              Life is simple{" "}
              <span className="text-[#ca8a04] font-[gothic] font-bold">
                <Typewriter
                  words={["Eat", "Sleep", "Trade", "Repeat!"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={800}
                />
              </span>
            </h1>
          </div>
          <div className="w-full md:w-[50%] h-[40vh] md:h-[70vh] lg:h-[88vh] relative overflow-hidden">
            <Moadal3d />
          </div>
        </div>
        <div
          ref={page2}
          className="w-full h-[60vh] lg:h-[70vh] flex justify-center items-center flex-col gap-[3vw] "
        >
          <div className="text-white text-[4vw] flex items-center font-medium h-[5.38vw] font-[gothic] overflow-y-hidden">
            <div
              ref={count}
              className="text-[#ca8a04] flex h-full flex-col justify-end font-semibold"
            >
              <h1>99</h1>
              <h1>98</h1>
              <h1>97</h1>
              <h1>96</h1>
              <h1>95</h1>
              <h1>94</h1>
              <h1>93</h1>
              <h1>92</h1>
              <h1>91</h1>
            </div>
            <div>
              <span className="text-[#ca8a04] font-medium">+</span> Leading
              Crypto Currencies of The World
            </div>
          </div>
          <Carousel />
        </div>
        <div className="page3 w-full h-screen flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-1/2 h-full flex justify-center items-center relative">
            <Image
              src="/World-rafiki.png"
              height={900}
              width={900}
              alt="mining"
            />
            <Image
              src="/Binance.png"
              height={100}
              width={100}
              alt="exchange"
              className="h-[30px] md:h-[80px] w-[30px] md:w-[80px] absolute top-[22%] left-[12%]"
              ref={floatingImage1}
            />
            <Image
              src="/BItfinex.png"
              height={80}
              width={80}
              alt="exchange"
              className="h-[30px] md:h-[80px] w-[30px] md:w-[80px] absolute top-[15%] md:top-[10%] right-[10%] rounded-[40%]"
              ref={floatingImage2}
            />
            <Image
              src="/gemini.png"
              height={120}
              width={120}
              alt="exchange"
              className="h-[40px] md:h-[80px] w-[40px] md:w-[80px] absolute bottom-[26%] left-[20%]"
              ref={floatingImage3}
            />
            <Image
              src="/Coinbase_Coin_Primary.png"
              height={80}
              width={80}
              alt="exchange"
              className="h-[20px] md:h-[60px] w-[20px] md:w-[60px] absolute bottom-[22%] right-14"
              ref={floatingImage4}
            />
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center text-white px-[0.6em] lg:px-[0.4em]">
            <h1 className="font-medium font-[gothic] text-[1.3em]">
              <span className="text-[#ca8a04] font-semibold">99+</span> crypto
              exchanges
            </h1>
            <div className="text-[0.6em]">
              Discover and monitor over 99 of the world's largest crypto
              exchanges on our platform. Stay informed and empowered with
              real-time insights into the cryptocurrency market's top players.
            </div>
          </div>
        </div>
        <div className="w-full h-[70vh] flex items-end">
          <div className="h-[50%] w-full relative">
            <Waves />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
