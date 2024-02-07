"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { baseURL } from "../components/baseURL";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

const page = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currency, setCurrency] = useState({
    name: "United States Dollar",
    code: "usd",
  });

  const currencies = [
    {
      name: "Pakistani Rupee",
      code: "pkr",
    },
    {
      name: "Euro",
      code: "eur",
    },
    {
      name: "United States Dollar",
      code: "usd",
    },
    {
      name: "Indian Rupee",
      code: "inr",
    },
    {
      name: "Japanese Yen",
      code: "jpy",
    },
    {
      name: "Kuwaiti Dinar",
      code: "kwd",
    },
    {
      name: "Canadian Dollar",
      code: "cad",
    },
  ];

  const getCoins = async () => {
    try {
      const { data } = await axios.get(
        `${baseURL}/coins/markets?vs_currency=${currency.code}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
      );
      setCoins(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCoins();
  }, [currency]);

  if (loading && error === false) {
    return (
      <div className="w-full min-h-[92vh] md:min-h-[88vh] flex justify-center items-center text-[0.8rem] md:text-[1.5rem] lg:text-[2rem] pb-[2rem] pt-[0.5rem] lg:pb-[3rem] lg:pt-[1rem] flex-wrap gap-[1rem]">
        <TailSpin
          visible={true}
          height="100"
          width="100"
          color="#ca8a04"
          ariaLabel="tail-spin-loading"
          radius="0"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  } else if (error) {
    return (
      <div className="w-full min-h-[92vh] md:min-h-[88vh] flex justify-center items-center text-[0.8rem] md:text-[1.5rem] lg:text-[2rem] pb-[2rem] pt-[0.5rem] lg:pb-[3rem] lg:pt-[1rem] flex-wrap gap-[1rem] text-white">
        <h1>Something went wrong</h1>
      </div>
    );
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
                }}
                className="w-[19rem] h-[10rem] overflow-y-auto bg-[#283450] rounded-lg absolute top-[22%] p-[0.35em]"
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
          </div>
          <div className="w-full h-full flex justify-center items-center flex-wrap gap-[1rem]">
            {coins.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[90%] h-[6rem] md:h-[8rem] lg:h-[10rem] xl:w-[47%] flex justify-between items-center p-[1.5em] box bg-[#1c2438] text-[0.9em] text-white rounded-lg hover:bg-[#20293f] transition-all ease-in duration-200"
                >
                  <div className="flex items-center gap-[0.7em] h-[80%]">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full object-cover object-center"
                    />
                    <h1>{item.name}</h1>
                  </div>
                  <div className="whitespace-nowrap text-[0.7em] flex flex-col gap-[1em] justify-between items-center text-left">
                    <h1 className="text-[#ca8a04]">
                      Price:{" "}
                      <span className="text-[1.2em]">
                        {item.current_price.toFixed(0)}
                      </span>
                    </h1>
                    <h1>
                      Market cap rank:{" "}
                      <span className="text-[#ca8a04] text-[1.2em]">
                        {item.market_cap_rank}
                      </span>
                    </h1>
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
