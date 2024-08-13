import axios from "axios";
import { SiCoinmarketcap } from "react-icons/si";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";

export default class DetailModel {
  constructor(coin) {
    this.coin = coin;

    // Ekrana basilacak kutularin verilerini hazirla
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Hacmi",
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Fiyat",
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24s Değişim (%)",
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24 Hacim",
        value: coin?.detail.volumeUsd24Hr,
      },
    ];

    //Fiyat gecmisini grafik kutuphanesinin istedigi formata cevirme

    this.chartData = {
      labels: coin?.history.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: "Fiyat",
          // borderColor: 'red',
          // backgroundColor: 'yellow',
          data: coin?.history.map((i) => i.priceUsd),
        },
      ],
    };
  }

  //api'dan hem detay hem fiyat gecmisini alir
  static async getCoin(id) {
    // detay verilerini al
    const detailRes = await axios.get(`${import.meta.env.VITE_API_KEY}${id}`);

    // fiyat geçmişini al
    const historyRes = await axios.get(
      `${import.meta.env.VITE_API_KEY}${id}/history?interval=d1`
    );

    //Verileri fonksiyonun cagrildigi yere dondur
    return {
      detail: detailRes.data.data,
      history: historyRes.data.data,
    };
  }
}
