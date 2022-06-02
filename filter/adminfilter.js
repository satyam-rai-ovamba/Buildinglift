const AuthenticationController = require('../controller/authentication/authenticationcontroller');

const adminFilter = async (prm_objHttpRequest,prm_objHttpResponse,prm_fnNextRequestHandler) => {
  var v_objResponseObject;
  try {
    v_objResponseObject = await AuthenticationController.isSessionValid(prm_objHttpRequest);
    if(undefined == v_objResponseObject || null == v_objResponseObject || v_objResponseObject.responseStatus == 0 ){
      prm_objHttpResponse.redirect('/login');
    } else {
      return prm_fnNextRequestHandler();
    }
  } catch (v_exError) {
    console.log(v_exError);
  }
};
module.exports = adminFilter;