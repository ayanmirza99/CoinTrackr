"use client";
import React, { useEffect, useState } from "react";
import { baseURL, fetchData } from "../components/baseData";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { currencies } from "../components/baseData";
import Link from "next/link";
import Loader from "../components/Loader";
import Error from "../components/Error";

const page = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currency, setCurrency] = useState({
    name: "United States Dollar",
    code: "usd",
  });
  const url = `${baseURL}/coins/markets?vs_currency=${currency.code}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;

  useEffect(() => {
    fetchData(url, setCoins, setLoading, setError);
  }, [currency]);

  if (loading && error === false) {
    return <Loader />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <>
        <div className="w-full min-h-[92vh] md:min-h-[88vh] flex flex-col text-[0.8rem] md:text-[1.5rem] lg:text-[2rem] pb-[2rem] pt-[0.5rem] lg:pb-[3rem] lg:pt-[1rem] gap-[1rem]">
          <div className="px-[0.9em] text-[1.8em] text-[#ca8a04] flex flex-col md:flex-row items-center justify-between">
            <h1 className="font-semibold">Coins</h1>
            <div className="text-[0.35em] text-white">
              <div
                className="w-[19rem] h-[3rem] bg-[#283450] rounded-lg flex items-center justify-between px-[0.5em] relative cursor-pointer"
                onClick={() => setIsVisible(!isVisible)}
              >
                <h1>
                  {currency.name} ({currency.code.toUpperCase()})
                </h1>
                <h1
                  className={`transition-all duration-200 ease-in-out text-[#ca8a04] ${
                    isVisible ? "rotate-180" : ""
                  }`}
                >
                  <FaAngleDown />
                </h1>
              </div>
              <motion.div
                animate={{
                  translateY: isVisible ? 0 : "4rem",
                  opacity: isVisible ? 1 : 0,
                  display: isVisible ? "block" : "none",
                }}
                className="w-[19rem] h-[10rem] overflow-y-auto bg-[#283450] rounded-lg absolute top-[22%] p-[0.35em] z-10"
              >
                {currencies.map((item, index) => {
                  return (
                    <div
                      className="w-full rounded-lg flex items-center p-[0.5em] hover:bg-[#20293f] cursor-pointer"
                      key={index}
                      onClick={() => {
                        setIsVisible(false);
                        setCurrency(item);
                        currency !== item ? setLoading(true) : "";
                      }}
                    >
                      {item.name} ({item.code.toUpperCase()})
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center flex-wrap gap-[1rem]">
            {coins.map((item, index) => {
              return (
                <div
                  className="w-[90%] h-[6rem] md:h-[8rem] lg:h-[10rem] xl:w-[47%] flex justify-between items-center p-[1.5em] box bg-[#1c2438] text-[0.9em] text-white rounded-lg hover:bg-[#20293f] transition-all ease-in duration-200"
                  key={index}
                >
                  <Link
                    href={`/coins/${item.id}`}
                    className="h-full w-full flex items-center"
                  >
                    <div className="w-full flex items-center gap-[0.7em] h-[85%]">
                      <img
                        src={item.image}
                        alt=""
                        className="h-full object-cover object-center"
                      />
                      <h1>{item.name}</h1>
                    </div>
                  </Link>
                  <div className="whitespace-nowrap text-[0.7em] flex flex-col gap-[0.5em] justify-between items-end text-left">
                    <h1 className="text-[#ca8a04]">
                      Price:{" "}
                      <span className="text-[1.2em]">
                        {item.current_price
                          .toFixed(0)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        {currency.code.toUpperCase()}
                      </span>
                    </h1>
                    <div className="flex items-center justify-center gap-[0.3em] text-[1.2em]">
                      <span
                        className={`${
                          item.price_change_percentage_24h > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {item.price_change_percentage_24h > 0 ? "+" : ""}
                        {item.price_change_percentage_24h}{" "}
                      </span>
                      <span
                        className={
                          item.price_change_percentage_24h > 0
                            ? "rotate-180 text-green-600"
                            : "text-red-600"
                        }
                      >
                        <FaArrowDownLong />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default page;
