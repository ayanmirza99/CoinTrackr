"use client";
import React from "react";
import { useEffect, useState } from "react";
import { baseURL, fetchData } from "../components/baseData";
import Loader from "../components/Loader";
import Error from "../components/Error";

const page = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const url = `${baseURL}/exchanges`;

  useEffect(() => {
    fetchData(url, setExchanges, setLoading, setError);
  }, []);

  if (loading && error === false) {
    return <Loader />;
  } else if (error && loading === false) {
    return <Error/>;
  } else {
    return (
      <div className="flex flex-col">
        <div className="px-[4.4vw] lg:px-[2.4vw] pt-[3vw] lg:pt-[1vw] font-semibold text-[1.5rem] lg:text-[3rem] text-[#ca8a04]">
          Exchanges
        </div>
        <div className="w-full min-h-[92vh] md:min-h-[88vh] flex justify-center items-center text-[0.8rem] md:text-[1.5rem] lg:text-[2rem] pb-[2rem] pt-[0.5rem] lg:pb-[3rem] lg:pt-[1rem] flex-wrap gap-[1rem]">
          {exchanges.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[90%] h-[6rem] md:h-[8rem] lg:h-[10rem] xl:w-[47%] flex justify-between items-center p-[1.5em] box bg-[#1c2438] text-[0.9em] text-white rounded-lg hover:bg-[#20293f] transition-all ease-in duration-200"
              >
                <div className="flex items-center gap-[0.5em] h-[80%]">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full object-cover object-center"
                  />
                  <h1>{item.name}</h1>
                </div>
                <div className="whitespace-nowrap text-[0.7em] flex flex-col items-center text-left">
                  <h1 className="">
                    Trade Vol. 24h BTC:{" "}
                    <span className="text-[1.2em] text-[#ca9c04]">
                      {item.trade_volume_24h_btc.toFixed(0)}
                    </span>
                  </h1>
                  <h1>
                    Trust Rank:{" "}
                    <span className="text-[#ca9c04] text-[1.2em]">
                      {item.trust_score_rank}
                    </span>
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default page;
