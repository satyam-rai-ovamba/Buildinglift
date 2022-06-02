function Context(){};

Context.showLoader = function(){
    var sweet_loader = '<div class="sweet_loader"><svg viewBox="0 0 140 140" width="140" height="140"><g class="outline"><path d="m 70 28 a 1 1 0 0 0 0 84 a 1 1 0 0 0 0 -84" stroke="rgba(0,0,0,0.1)" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></g><g class="circle"><path d="m 70 28 a 1 1 0 0 0 0 84 a 1 1 0 0 0 0 -84" stroke="#71BBFF" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-dashoffset="200" stroke-dasharray="300"></path></g></svg></div>';
    try {
        swal.fire({
			html: '<h4>Loading...</h4>',
			didOpen: () => {
                Swal.showLoading()
            },
            allowOutsideClick : false,
		});       
    } catch (error) {
        console.log(error);
    }
};

Context.showSuccess = function(prm_iTimer=1000){
    try {
        swal.fire({
            icon: 'success',
            html: '<h4>Success!</h4>',
            timer:prm_iTimer
        });
    } catch (error) {
        console.log(error);
    }
};

Context.showError = function({prm_sMsg='Something went wrong!'}){
    try {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: prm_sMsg,
          });
    } catch (error) {
        console.log(error);
    }
};

Context.init = function(){
    try {
        
    } catch (error) {
        console.log(error);
    }
};

$(document).ready(Context.init);