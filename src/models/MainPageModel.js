import axios from "axios";

//anasayfanin model katmani
export default class MainPageModel {
    //veriyi alan method
  static async getCoins(page) {
    const options={
        params:{
            limit:'15',
            offset: (page-1)*15, //Kac tane veri atlanicak
        }
    }
    try {
      const res = await axios.get("https://api.coincap.io/v2/assets",options);

      return res.data.data;
    } catch (err) {
      
    }
  }
}
