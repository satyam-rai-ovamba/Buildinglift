const axios = require("axios");
const AppUtils = require("../../utils/apputils");

class ConfigController {
  static async getAllConfig(prm_objHttpRequest) {
    var v_objResponseObject;
    try {
      v_objResponseObject = await axios
        .get(
          `${process.env.BACKEND}/admin/config/getAllConfig`,
          AppUtils.getRequestHeader(prm_objHttpRequest)
        )
        .then((r) => r.data)
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
    return v_objResponseObject;
  }

  static async updateSingleConfig(prm_objHttpRequest, prm_objHttpResponse) {
    var v_objResponseObject;
    try {
      console.log(prm_objHttpRequest.body);
      v_objResponseObject = await axios
        .post(
          `${process.env.BACKEND}/admin/config/updateSingleConfig`,
          prm_objHttpRequest.body,
          AppUtils.getRequestHeader(prm_objHttpRequest)
        )
        .then((r) => r.data)
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
    return v_objResponseObject;
  }
}
module.exports = ConfigController;
