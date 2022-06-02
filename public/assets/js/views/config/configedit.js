function ConfigEdit() {}

ConfigEdit.init = function () {
  try {
    ConfigEdit.getAllConfig();
    ConfigEdit.modifyUi();
  } catch (error) {
    console.log(error);
  }
};

ConfigEdit.modifyUi = function () {
  try {
    //modify buttons style
    $.fn.editableform.buttons =
      '<button type="submit" class="btn btn-success editable-submit btn-sm waves-effect waves-light"><i class="mdi mdi-check"></i></button>' +
      '<button type="button" class="btn btn-danger editable-cancel btn-sm waves-effect waves-light"><i class="mdi mdi-close"></i></button>';
  } catch (error) {
    console.log(error);
  }
};

ConfigEdit.submitLogin = function () {
  try {
    Context.showLoader();
    $.post({
      url: "/submitLogin",
      data: JSON.stringify({
        emailId: $("#emailId").val(),
        password: $("#password").val(),
      }),
      cache: false,
      dataType: "json",
      contentType: "application/json;charset=utf-8",
    })
      .done(function (prm_objResponse) {
        if (
          undefined == prm_objResponse ||
          null == prm_objResponse ||
          0 == prm_objResponse.responseStatus ||
          null == prm_objResponse.data
        ) {
          Context.showError({ prm_sMsg: prm_objResponse.message });
        } else {
          Context.showSuccess();
          window.location.href = "./dashboard";
        }
      })
      .fail(function (prm_objError) {
        console.log(prm_objError);
      });
  } catch (error) {
    console.log(error);
  }
};

ConfigEdit.getAllConfig = function () {
  try {
    Context.showLoader();
    $.get({
      url: "/config/getAllConfig",
      cache: false,
    })
      .done(function (prm_objResponse) {
        if (undefined == prm_objResponse || null == prm_objResponse) {
          Context.showError({ prm_sMsg: prm_objResponse.message });
        } else {
          Context.showSuccess(100);
          for (const config of prm_objResponse) {
            $("#inline-" + config.key).html(config.value);
          }
          $("#inline-NFT_PER_HOUR").editable({
            name: "NFT_PER_HOUR",
            inputclass: "form-control-sm",
            url: "/config/updateSingleConfig",
            success: function (response, newValue) {
              console.log(response);
              if (response.responseStatus == 0) return response.message; //msg will be shown in editable form
            },
            mode: "inline",
          });
        }
      })
      .fail(function (prm_objError) {
        console.log(prm_objError);
      });
  } catch (error) {
    console.log(error);
  }
};

$(document).ready(ConfigEdit.init);
