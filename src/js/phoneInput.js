// Int Tel Form Validation
    $("#phone").intlTelInput({
      initialCountry: "auto",
      geoIpLookup: function(callback) {
        $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
        });
      },
      utilsScript: "js/utils.js" // just for formatting/placeholders etc
    });

    var telInput = $("#phone"),
      errorMsg = $("#error-msg"),
      validMsg = $("#valid-msg");

    // initialise plugin
    telInput.intlTelInput({
      utilsScript: "../../build/js/utils.js"
    });

    var reset = function() {
      telInput.removeClass("error");
      errorMsg.addClass("hide");
      validMsg.addClass("hide");
    };

    // on blur: validate
    telInput.blur(function() {
      reset();
      if ($.trim(telInput.val())) {
        if (telInput.intlTelInput("isValidNumber")) {
          validMsg.removeClass("hide");
        } else {
          telInput.addClass("error");
          errorMsg.removeClass("hide");
        }
      }
    });

    // on keyup / change flag: reset
    telInput.on("keyup change", reset);
