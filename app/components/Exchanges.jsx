import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Exchanges = ({ loading, exchanges }) => {
    return (
        <>
            <div className='w-full min-h-[92vh] md:min-h-[88vh] flex justify-center items-center text-[0.8rem] md:text-[1.5rem] lg:text-[2rem] pb-[2rem] pt-[0.5rem] lg:pb-[3rem] lg:pt-[1rem] flex-wrap gap-[1rem]'>
                {loading ? (<TailSpin
                    visible={true}
                    height="100"
                    width="100"
                    color="#ca8a04"
                    ariaLabel="tail-spin-loading"
                    radius="0"
                    wrapperStyle={{}}
                    wrapperClass=""
                />) : (
                    exchanges.map((item, index) => {
                        return (
                            <div key={index} className='w-[90%] h-[6rem] md:h-[8rem] lg:h-[10rem] xl:w-[47%] flex justify-between items-center p-[1.5em] box bg-[#1c2438] text-[0.9em] text-white rounded-lg hover:bg-[#20293f] transition-all ease-in duration-200'>
                                <div className='flex items-center gap-[0.5em] h-[80%]'>
                                    <img src={item.image} alt="" className='h-full object-cover object-center' />
                                    <h1>{item.name}</h1>
                                </div>
                                <div className='whitespace-nowrap text-[0.7em] flex flex-col items-center text-left'>
                                    <h1 className='text-[#ca8a04]'>
                                        Trade Vol. 24h BTC: <span className='text-[1.2em]'>
                                            {item.trade_volume_24h_btc.toFixed(0)}
                                        </span>
                                    </h1>
                                    <h1>
                                        Trust Rank: <span className='text-[#ca8a04] text-[1.2em]'>
                                            {item.trust_score_rank}
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </>
    )
}

export default Exchanges