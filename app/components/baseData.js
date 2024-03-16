import axios from "axios";

export const baseURL = "https://api.coingecko.com/api/v3";

export const currencies = [
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

export const fetchData = async (url, setStore, setLoading, setError) => {
  try {
    const { data } = await axios.get(url);
    setStore(data);
  } catch (error) {
    console.log(error);
    setError(true);
  } finally {
    setLoading(false);
  }
};

export const cryptoCarouselImages = [
  "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
  "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
  "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
  "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
  "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
  "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369",
  "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1696502193",
  "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442"
]

export const cryptoExchangeImages = [
  "https://assets.coingecko.com/markets/images/469/small/Binance.png?1706864454",
  "https://assets.coingecko.com/markets/images/4/small/BItfinex.png?1706864245",
  "https://assets.coingecko.com/markets/images/50/small/gemini.png?1706864273",
  "https://assets.coingecko.com/markets/images/23/small/Coinbase_Coin_Primary.png?1706864258"
]