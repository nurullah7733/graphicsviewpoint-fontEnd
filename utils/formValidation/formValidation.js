let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
class FormHelper {
  IsEmpty(value) {
    return value.toString().length > 0;
  }

  IsEmail(value) {
    return EmailRegx.test(value);
  }
}

export const { IsEmail, IsEmpty } = new FormHelper();
