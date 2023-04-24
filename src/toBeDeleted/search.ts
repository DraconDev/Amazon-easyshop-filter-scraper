// // import entire SDK
// import { Config, Credentials, Endpoint } from "aws-sdk/global";
// import { AWSECommerceService } from "aws-sdk/clients/all";

// import {
//     AWS_ACCESS_KEY_ID,
//     AWS_SECRET_ACCESS_KEY,
//     ASSOCIATE_TAG,
// } from "@component/consts/key";
// import axios from "axios";
// import { NextApiRequest } from "next";

// const myConfig = new Config({
//     credentials: new Credentials({
//         accessKeyId: AWS_ACCESS_KEY_ID ?? "",
//         secretAccessKey: AWS_SECRET_ACCESS_KEY ?? "",
//     }),
// });

// myConfig.update({ endpoint: "http://webservices.amazon.com/onca/xml" });

// export default async function searchItems(req: NextApiRequest): Promise<void> {
//     console.log("test");
//     const search = req.query.search;

//     // if (!search || typeof search !== "string") {
//     //     throw new Error("Invalid search query");
//     // }

//     // // make request to Amazon API
//     // const response = await new AWSECommerceService().itemSearch({
//     //     SearchIndex: "Books",
//     //     Keywords: search,
//     //     ResponseGroup: "Images,ItemAttributes,Offers",
//     //     Timestamp: new Date().toISOString(),
//     //     SignatureMethod: "HmacSHA256",
//     //     SignatureVersion: "2",
//     // });

//     // // extract necessary data from response
//     // const items = response.Items?.Item?.map((item) => ({
//     //     title: item.ItemAttributes?.Title?.[0],
//     //     author: item.ItemAttributes?.Author?.[0],
//     //     image: item.LargeImage?.URL?.[0],
//     //     price: item.Offers?.Offer?.[0]?.OfferListing?.[0]?.PriceFormatted?.[0],
//     // }));

//     // console.log(
//     //     AWS_ACCESS_KEY_ID,
//     //     AWS_SECRET_ACCESS_KEY,
//     //     ASSOCIATE_TAG,
//     //     search
//     // );

//     // try {
//     //     const response = await axios.get(
//     //         "http://webservices.amazon.com/onca/xml",
//     //         {
//     //             params: {
//     //                 Service: "AWSECommerceService",
//     //                 Operation: "ItemSearch",
//     //                 AWSAccessKeyId: AWS_ACCESS_KEY_ID,
//     //                 AssociateTag: ASSOCIATE_TAG,
//     //                 SearchIndex: "Books",
//     //                 Keywords: search,
//     //                 ResponseGroup: "Images,ItemAttributes,Offers",
//     //                 Timestamp: new Date().toISOString(),
//     //                 SignatureMethod: "HmacSHA256",
//     //                 SignatureVersion: "2",
//     //             },
//     //             headers: {
//     //                 "Content-Type": "application/xml",
//     //             },
//     //         }
//     //     );

//     //     return response.data;
//     // } catch (error) {
//     //     // console.error(error);
//     //     throw new Error("Failed to fetch data from Amazon API");
//     // }
// }
