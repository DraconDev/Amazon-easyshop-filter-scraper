// import * as AWS from "aws-sdk";

// // const accessKeyId = process.env.accessKeyId;
// // const secretAccessKey = process.env.secretAccessKey;
// // const associateTag = process.env.associateTag;

// AWS.config.update({
//     accessKeyId: process.env.accessKeyId,
//     secretAccessKey: process.env.secretAccessKey,
//     // associateTag: process.env.associateTag,
//     region: "us-east-1",
// });

// const amazonClient = new AWS.ProductAdvertising({
//     apiVersion: "2013-08-01",
// });

// const params: AWS.ProductAdvertising.SearchParameters = {
//     SearchIndex: "All",
//     Keywords: "laptop",
//     ResponseGroup: "ItemAttributes,Images",
// };

// amazonClient.searchItems(params, (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data);
//     }
// });
