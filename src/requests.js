import axios from "axios";

export const postToGoogleSheet = (d) => {
  const data = {
    Email: d.email,
    Name: d.name,
    Phone: d.phone,
    Created: "x-sheetmonkey-current-date-time",
    Direction: "Amazon",
    Answers: d.answer,
  };

  fetch("https://api.sheetmonkey.io/form/xvNBfrMZTXpbwwnu4R9oBV", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((result) => {});
};

export const postDataToCRM = (d) => {
  const url = `https://admin.bmt-brokers.tech/api/v_2/crm/CreateLead?key=1690457ae40e7c2eb54cc49719fb5d2a&rand_param=5482365&email=${d.email}&description=${d.answer}&first_name=${d.name}&phone=${d.phone}&country=${d.geo}`;

  const requestOptions = {
    method: "get",
    url: url,
  };
  axios(requestOptions)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
