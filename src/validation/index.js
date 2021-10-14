import validator from "validator";

export const isValid = (label, value) => {
  let validationResult;

  switch (label) {
    case "outletName":
      validationResult =
        validator.isAlpha(value, "en-US", { ignore: " -" }) &&
        validator.isLength(value, { min: 3, max: 30 });
      break;
    case "ownerName":
      validationResult =
        validator.isAlpha(value, "en-US", { ignore: " -" }) &&
        validator.isLength(value, { min: 3, max: 30 });
      break;
    case "address":
      validationResult =
        validator.isAlphanumeric(value, "en-US", { ignore: " -,./" }) &&
        validator.isLength(value, { min: 10, max: 120 });
      break;
    case "email":
      validationResult = validator.isEmail(value);
      break;
    case "phone":
      validationResult = validator.isMobilePhone(
        `+91${value}`,
        ["en-IN"],
        false
      );
      break;
    default:
      validationResult = false;
      break;
  }

  return !validationResult;
};

export const validateForm = (state) => {
  const { address, phone, ownerName, outletName, email } = state;
  console.log(state, "state");
  if (
    !isValid("address", address) &&
    !isValid("phone", phone) &&
    !isValid("ownerName", ownerName) &&
    !isValid("outletName", outletName) &&
    !isValid("email", email)
  ) {
    return true;
  }
  return false;
};
