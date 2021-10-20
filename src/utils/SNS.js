import AWS from "aws-sdk";
import awsConfig from "../config/awsConfig";

export default async function sendSMS({ sns, Message, PhoneNumber }) {
  sns
    .publish({
      Message,
      PhoneNumber,
    })
    .promise();
}

AWS.config.update(awsConfig);