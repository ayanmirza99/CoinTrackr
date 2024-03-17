"use client";
import { baseURL, currencies, fetchData } from "@/app/components/baseData";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaArrowDownLong } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import CoinChart from "@/app/components/CoinChart";
import Loader from "@/app/components/Loader";
import Error from "@/app/components/Error";

const page = () => {
  let { id } = useParams();
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currency, setCurrency] = useState({
    name: "United States Dollar",
    code: "usd",
  });
  const url = `${baseURL}/coins/${id}`;

  useEffect(() => {
    fetchData(url, setCoinData, setLoading, setError);
  }, []);

  let date = new Date(coinData.last_updated);

  if (loading && error === false) {
    return <Loader />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <div className="w-full min-h-[92vh] md:min-h-[88vh] flex flex-col lg:flex-row justify-center items-center text-white text-[1.3rem] md:text-[1.6rem] lg:text-[1.6rem]">
        <div className="w-full lg:w-[45%] h-full flex flex-col gap-[3em] justify-between px-[4vw] py-[2em]">
          <div className="text-[0.8em] lg:text-[0.75em] relative">
            <div
              className="w-[19rem] h-[3rem] bg-[#283450] rounded-lg flex items-center justify-between px-[0.5em] cursor-pointer"
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
              className="w-[19rem] h-[10rem] overflow-y-auto bg-[#283450] rounded-lg absolute top-0 mt-[3.3rem] p-[0.35em] z-10"
            >
              {currencies.map((item, index) => {
                return (
                  <div
                    className="w-full rounded-lg flex items-center p-[0.5em] hover:bg-[#20293f] cursor-pointer"
                    key={index}
                    onClick={() => {
                      setIsVisible(false);
                      setCurrency(item);
                    }}
                  >
                    {item.name} ({item.code.toUpperCase()})
                  </div>
                );
              })}
            </motion.div>
          </div>
          <div className="w-full flex flex-col gap-[0.4em] h-[70%]">
            <div className="w-max flex items-center justify-center gap-[1em] md:gap-[0.4em] text-[2em]">
              <div className="w-[9rem] h-[9rem]">
                <img
                  className="w-full h-full object-cover object-center"
                  src={coinData.image.large}
                />
              </div>
              <h1>{coinData.localization.en}</h1>
            </div>
            <div className="flex flex-col gap-[1em] text-[1.4em]">
              <div className="flex flex-col gap-[0.4em]">
                <div className="text-green-600 font-semibold flex items-center justify-between">
                  <span>
                    {coinData.market_data.current_price[currency.code]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    {currency.code.toUpperCase()}
                  </span>
                  <span
                    className={`text-[0.6em] md:text-[0.8em] flex items-center ${
                      coinData.market_data.price_change_24h > 0
                        ? "text-green-500"
                        : "text-red-600"
                    }`}
                  >
                    {coinData.market_data.price_change_percentage_24h.toFixed(
                      3
                    )}
                    %{" "}
                    <span
                      className={
                        coinData.market_data.price_change_24h > 0
                          ? "rotate-180 text-[0.8em]"
                          : "text-[0.8em]"
                      }
                    >
                      <FaArrowDownLong />
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-[0.2em] text-[#ca8a04] font-medium">
                  <GoGraph strokeWidth={1} />
                  <span className="">#{coinData.market_cap_rank}</span>
                </div>
              </div>

              <div className="text-[0.8em]">
                {coinData.description.en.split(".")[0]}
              </div>
              <div className="text-[0.6em]">
                Last updated at {date.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[55%] h-max md:h-[88vh] text-[4rem] flex items-center justify-center py-[4vw]">
          <CoinChart id={id} currency_code={currency.code} />
        </div>
      </div>
    );
  }
};

export default page;
