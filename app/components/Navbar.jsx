'use client'
import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { FaHome } from "react-icons/fa";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdOutlineCurrencyExchange } from "react-icons/md";

const Navbar = () => {
    let location = usePathname()
    return (
        <>
            <section className='w-full h-[8vh] md:h-[12vh] bg-[#1c2438] flex items-center justify-between text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[4.5rem] text-[#ca8a04] px-[2vw] rounded-b-xl box'>
                <h1 className='text-[1em] font-extrabold whitespace-nowrap font-[gothic]'>CoinTrakr</h1>
                <div className='flex gap-[3vw] md:gap-[1.5vw] text-[0.4em]'>
                    <Link href="/">
                        <div className='flex flex-col relative'>
                            <div className='flex items-center justify-center gap-2 text-[1.5em] md:text-[0.8em]'>
                                <h1 className='hidden md:block'>Home</h1>
                                <FaHome />
                            </div>
                            <div className={location === "/" ? "absolute -bottom-1 left-0 w-full h-[2px] bg-[#ca8a04] transition-all ease-in-out duration-300" : ""}></div>
                        </div>
                    </Link>
                    <div className='flex flex-col gap-[1px] relative'>
                        <Link href="/exchanges">
                            <div className='flex items-center justify-center gap-2 text-[1.5em] md:text-[0.8em]'>
                                <h1 className='hidden md:block'>Exchanges</h1>
                                <MdOutlineCurrencyExchange />
                            </div>
                            <div className={location === "/exchanges" ? "absolute -bottom-1 left-0 w-full h-[2px] bg-[#ca8a04] transition-all ease-in-out duration-300" : ""}></div>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-[1px] relative'>
                        <Link href="/coins">
                            <div className='flex items-center justify-center gap-2 text-[1.5em] md:text-[0.8em]'>
                                <h1 className='hidden md:block'>Coins</h1>
                                <LiaCoinsSolid />
                            </div>
                            <div className={location === "/coins" ? "absolute -bottom-1 left-0 w-full h-[2px] bg-[#ca8a04] transition-all ease-in-out duration-300" : ""}></div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar