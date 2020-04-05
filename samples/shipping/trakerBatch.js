/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var paypal = require("../../");
require("../configure");

// paypal.shipping.trackerBatch.create(
//   {
//     trackers: [
//       {
//         transaction_id: "8MC585209K746392H",
//         tracking_number: "443844607820",
//         status: "SHIPPED",
//         carrier: "FEDEX",
//       },
//       {
//         transaction_id: "53Y56775AE587553X",
//         tracking_number: "443844607821",
//         status: "SHIPPED",
//         carrier: "FEDEX",
//       },
//     ],
//   },
//   function (error, sale) {
//     if (error) {
//       throw error;
//     } else {
//       console.log("Add traker Response");
//       console.log(JSON.stringify(sale));
//     }
//   }
// );

paypal.shipping.tracker.get("53Y56775AE587553X-443844607821", function (error, sale) {
  if (error) {
    throw error;
  } else {
    console.log("Add traker Response");
    console.log(JSON.stringify(sale));
  }
});
