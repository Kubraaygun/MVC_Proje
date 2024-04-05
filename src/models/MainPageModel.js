import axios from "axios";

//anasayfanin model katmani
export default class MainPageModel {
    //veriyi alan method
  static async getCoins(page = "1") {
    try {
      const res = await axios.get("https://api.coincap.io/v2/assets");

      return res.data.data;
    } catch (err) {
      
    }
  }
}
