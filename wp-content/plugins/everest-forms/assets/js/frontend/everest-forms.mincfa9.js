jQuery(function(e){"use strict";if("undefined"==typeof everest_forms_params)return!1;({$everest_form:e("form.everest-form"),init:function(){this.init_datepicker(),this.load_validation(),this.$everest_form.on("input validate change",".input-text, select, input:checkbox",this.validate_field)},init_datepicker:function(){e(".date-picker-field, .date-picker").datepicker({changeMonth:!0,changeYear:!0,defaultDate:"",dateFormat:"yy-mm-dd",numberOfMonths:1,minDate:"-15Y",maxDate:"+15Y"})},load_validation:function(){if("undefined"==typeof e.fn.validate)return!1;e.extend(e.validator.messages,{required:everest_forms_params.i18n_messages_required,url:everest_forms_params.i18n_messages_url,email:everest_forms_params.i18n_messages_email,number:everest_forms_params.i18n_messages_number}),e.validator.methods.email=function(e,F){var a=new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);return this.optional(F)||a.test(e)},this.$everest_form.each(function(){e(this).validate({errorClass:"evf-error",validClass:"evf-valid",errorPlacement:function(e,F){"radio"===F.attr("type")||"checkbox"===F.attr("type")?F.parent().parent().parent().append(e):F.is("select")&&F.attr("class").match(/date-month|date-day|date-year/)?0===F.parent().find("label.evf-error:visible").length&&F.parent().find("select:last").after(e):e.insertAfter(F)},highlight:function(F,a,r){var u=e(F),t=u.closest(".form-row"),s=u.attr("name");"radio"===u.attr("type")||"checkbox"===u.attr("type")?t.find("input[name='"+s+"']").addClass(a).removeClass(r):u.addClass(a).removeClass(r),t.addClass("evf-has-error")},unhighlight:function(F,a,r){var u=e(F),t=u.closest(".form-row"),s=u.attr("name");"radio"===u.attr("type")||"checkbox"===u.attr("type")?t.find("input[name='"+s+"']").addClass(r).removeClass(a):u.addClass(r).removeClass(a),t.removeClass("evf-has-error")},submitHandler:function(F,a){""==grecaptcha.getResponse()?e("#evf_node_recaptcha").after('<label class="evf-error">'+everest_forms_params.i18n_messages_recaptcha+"</div>"):a.submit()}})})},validate_field:function(F){var a=e(this),r=a.closest(".form-row"),u=!0,t=r.is(".validate-required"),s=r.is(".validate-email"),i=F.type;if("input"===i&&r.removeClass("everest-forms-invalid everest-forms-invalid-required-field everest-forms-invalid-email everest-forms-validated"),"validate"===i||"change"===i){if(t&&("checkbox"!==a.attr("type")||a.is(":checked")?""===a.val()&&(r.removeClass("everest-forms-validated").addClass("everest-forms-invalid everest-forms-invalid-required-field"),u=!1):(r.removeClass("everest-forms-validated").addClass("everest-forms-invalid everest-forms-invalid-required-field"),u=!1)),s&&a.val()){new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i).test(a.val())||(r.removeClass("everest-forms-validated").addClass("everest-forms-invalid everest-forms-invalid-email"),u=!1)}u&&r.removeClass("everest-forms-invalid everest-forms-invalid-required-field everest-forms-invalid-email").addClass("everest-forms-validated")}}}).init()});var google_recaptcha_everest_forms,onloadEVFCallback=function(){google_recaptcha_everest_forms=grecaptcha.render("evf_node_recaptcha",{sitekey:evf_google_recaptcha_code.site_key,theme:"light",style:"transform:scale(0.77);-webkit-transform:scale(0.77);transform-origin:0 0;-webkit-transform-origin:0 0;"})};