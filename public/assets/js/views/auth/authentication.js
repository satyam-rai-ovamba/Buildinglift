function Authentication(){};

Authentication.init = function(){
    try {
        $('#login-form').submit(function(prm_objEvent) {
			Authentication.submitLogin();
			prm_objEvent.preventDefault();
		});
    } catch (error) {
        console.log(error);
    }
};

Authentication.submitLogin = function(){
    try {
		Context.showLoader();
        $.post({
			url : "/submitLogin",
			data : JSON.stringify( {
	    	'emailId' : $("#emailId").val(),
			'password' : $("#password").val()
	    	}),
			cache : false,
			dataType: "json",
			contentType: "application/json;charset=utf-8",
		}).done(function(prm_objResponse) {
			if(undefined == prm_objResponse || null == prm_objResponse || 0 == prm_objResponse.responseStatus || null == prm_objResponse.data) {
				Context.showError({prm_sMsg : prm_objResponse.message});
			} else {
				Context.showSuccess();
				window.location.href = './dashboard';	
			}
		}).fail(function(prm_objError) {
			console.log(prm_objError);
		});
    } catch (error) {
        console.log(error);
    }
};

$(document).ready(Authentication.init);