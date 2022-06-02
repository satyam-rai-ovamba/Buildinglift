const AppConstants = require("./appconstants");

class AppUtils {
  static getClientIp(req) {
    var ipAddress;
    try {
      ipAddress = req.headers["x-forwarded-for"];
      if (null == ipAddress || undefined == ipAddress) {
        ipAddress = req.headers["proxy-client-ip"];
      } else {
        ipAddress = ipAddress.split(",")[0];
      }
      if (null == ipAddress || undefined == ipAddress) {
        ipAddress = req.headers["wl-proxy-client-ip"];
      }
      if (null == ipAddress || undefined == ipAddress) {
        ipAddress = req.headers["HTTP_CLIENT_IP"];
      }
      if (null == ipAddress || undefined == ipAddress) {
        ipAddress = req.headers["HTTP_X_FORWARDED_FOR"];
      }
      if (null == ipAddress || undefined == ipAddress) {
        ipAddress = req.ip;
      }
      if (null == ipAddress || undefined == ipAddress) {
        ipAddress = req.socket.remoteAddress;
      }
      ipAddress = ipAddress.split(",")[0];
      ipAddress = ipAddress.toString();
    } catch (error) {
      console.log(error);
    }
    return ipAddress;
  }

  static getSessionId(req){
    var v_sSessionId;
    try {
      v_sSessionId = req.cookies.sessionId;
    } catch (error) {
      console.log(error);
    }
    return v_sSessionId;
  }

  static getRequestHeader(req) {
    return {
        headers: {
            'User-Agent': `${req.get('user-agent')}`,
            'x-forwarded-for': `${AppUtils.getClientIp(req)}`,
            'sessionId' : `${AppUtils.getSessionId(req)}`,
        }
    }
  }
}
module.exports = AppUtils;
