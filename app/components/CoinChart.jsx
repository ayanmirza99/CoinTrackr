import { useEffect, useState } from 'react'
import { baseURL, fetchData } from './baseData'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Triangle } from 'react-loader-spinner';
import Error from './Error';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CoinChart = ({ id, currency_code }) => {
    const [chartData, setChartData] = useState()
    const [active, setActive] = useState(1)
    const [days, setDays] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const url = `${baseURL}/coins/${id}/market_chart?vs_currency=${currency_code}&days=${days}`

    useEffect(() => {
        fetchData(url, setChartData, setLoading, setError)
    }, [currency_code, days])

    const chartDuration = [1, 7, 30, 365]

    const data = {
        labels: chartData ? chartData.prices.map((val) => {
            const date = new Date(val[0])
            const time = date.getHours() > 12 ?
                `${date.getHours() - 12} : ${date.getMinutes()} PM` :
                `${date.getHours()} : ${date.getMinutes()} AM`
            return days === 1 ? time : date.toLocaleDateString()
        }) : "",
        datasets: [
            {
                label: days > 1 ? `Price in Past ${days} days` : `Price in Past 24 hours`,
                data: chartData ? chartData.prices.map((val) => val[1]) : "",
                borderColor: "#ca8a04",
                borderWidth: "3",
            }
        ]
    }


    if (loading && error === false) {
        return (
            <Triangle
                visible={true}
                height="120"
                width="120"
                color="#ca8a04"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        )
    } else if (error && loading === false) {
        return (
            <Error />
        )
    } else {
        return (
            <div className='flex flex-col justify-between gap-[0.5em] w-full h-full'>
                <div className='w-full h-max'>
                    <Line data={data} options={
                        {
                            elements: {
                                point: {
                                    radius: 1
                                }
                            },
                            title: {
                                display: true,
                                text: 'Market Price',
                            },
                        }} className='mt-0 md:mt-[6rem]' />
                </div>
                <div className='flex gap-[0.3em] mx-auto lg:mx-0'>
                    {chartDuration.map((item, index) => {
                        return (
                            <button key={index} id={item} className={`text-white w-[7rem] ${active === item ? "bg-[#ca8a04]" : "bg-[#faa907f5]"} py-[0.4em] px-[0.5em] text-[0.3em] font-semibold rounded-lg`}
                                onClick={() => {
                                    setDays(item)
                                    setActive(item)
                                }}
                            >{item === 1 ? "24 hours" : item + " days"}</button>
                        )
                    })}
                </div>
            </div>
        )
    }

}



export default CoinChart