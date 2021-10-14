import axios from "axios";

export const submitForm = async (state) => {
  console.log("reaching submitForm");
  const { ownerName, phone, address, email, outletName } = state;
  const payload = {
    ownerName: ownerName,
    phone: `+91${phone}`,
    address: address,
    emailId: email,
    outletName: outletName,
  };
  console.log(payload, "payload");
  const response = await axios
    .post("http://localhost:4000/api/distributor", payload)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};
