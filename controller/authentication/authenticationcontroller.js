const axios = require("axios");
const AppConstants = require("../../utils/appconstants");
const AppUtils = require("../../utils/apputils");

class AuthenticationController {

  static async login(prm_objHttpRequest,prm_objHttpResponse) {
    var v_objResponseObject;
    try {
      v_objResponseObject = await axios.post(`${process.env.BACKEND}/auth/login`, prm_objHttpRequest.body, AppUtils.getRequestHeader(prm_objHttpRequest))
                        .then(r => r.data)
                        .catch(err => console.log(err));
      if(null != v_objResponseObject && v_objResponseObject.responseStatus ==1){
        prm_objHttpResponse.cookie(AppConstants.SESSION_ID,v_objResponseObject.data.sessionId,{maxAge:24*60*60*1000});
      }
    } catch (error) {
      console.log(error);
    }
    return v_objResponseObject;
  }

  static async isSessionValid(prm_objHttpRequest){
    var v_objResponseObject;
    try {
        v_objResponseObject = await axios.get(`${process.env.BACKEND}/auth/isSessionValid`, AppUtils.getRequestHeader(prm_objHttpRequest))
                                        .then(r => r.data)
                                        .catch(err => console.log(err));
    } catch (error) {
        console.log(error);
    }
    return v_objResponseObject;
  }

  static async logout(prm_sSessionId){
    var v_objResponseObject;
    var v_objUserSession;
    try {
        v_objResponseObject = new DefaultResponse();
        v_objUserSession = await UserSessionController.getUserSessionBySessionId(prm_sSessionId);
        if(null == v_objUserSession){
            v_objResponseObject.message = "Invalid Session ID";
            v_objResponseObject.data = false;
        } else {
            v_objUserSession = await UserSessionController.closeUserSession(v_objUserSession);
            v_objResponseObject.data = true;
            v_objResponseObject.responseStatus = 1;
        }
    } catch (error) {
        console.log(error);
    }
    return v_objResponseObject;
  }
}
module.exports = AuthenticationController;