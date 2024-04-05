import millify from "millify";
import { FaBitcoin } from "react-icons/fa6";

const MainPageView = ({ coins,setPage }) => {
  console.log(coins[0]);
  return (
    <div className="container-xl mt-5">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>Hoşgeldiniz, Coin Listesi</span>
      </h4>
      <p>
        Coin Listesi, dünya genelindeki kripto para birimlerini ve dijital
        varlıkları takip etmek için mükemmel bir kaynaktır
      </p>
      <table className="table table-dark table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>fiyat</th>
            <th>Market Hacmi</th>
            <th>İşlem Hacmi</th>
            <th>% Değişim Hacmi (24s)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr>
              <td>{coin.rank}</td>
              <td>
                <span className="text-warning fw-bold me-2">{coin.symbol}</span>
                <span>{coin.name}</span>
              </td>

              <td>{millify(coin.priceUsd)}</td>
              <td>{millify(coin.marketCapUsd)}</td>
              <td>{millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr >= 0 ? "up" : "down"}>
                %{Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>


{/**Daha Fazla Butonu */}
<div className="d-flex my-5 justify-content-center">
  <button onClick={()=>setPage((page)=>page+1)} className="button2"> Daha Fazla </button>
</div>


    </div>
  );
};

export default MainPageView;
