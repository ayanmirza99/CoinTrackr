"use client";
import axios from "axios";
import Exchanges from "./components/Exchanges";
import { useEffect, useState } from "react";
import { baseURL } from "./components/baseURL";

const page = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  const getExchanges = async () => {
    const { data } = await axios.get(`${baseURL}/exchanges`);
    setExchanges(data);
    setLoading(false);
  };

  useEffect(() => {
    getExchanges();
  }, []);

  return (
    <>
      <section className="w-full flex flex-col">
        {loading ? (
          ""
        ) : (
          <div className="px-[4.4vw] lg:px-[2.4vw] pt-[3vw] lg:pt-[1vw] font-semibold text-[1.5rem] lg:text-[3rem] text-[#ca8a04]">
            Exchanges
          </div>
        )}
        <Exchanges exchanges={exchanges} loading={loading} />
      </section>
    </>
  );
};

export default page;
