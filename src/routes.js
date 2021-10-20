import AWS from "aws-sdk";
import { Router } from "express";

import sendSMS from "./utils/SNS";

const router = Router();

const sns = new AWS.SNS({ apiVersion: "2010-03-31" });

router.post("/send-sms", async (req, res) => {
  const { PhoneNumber, Message } = req.body;

  await sendSMS({ sns, PhoneNumber, Message });

  return res.status(201).json({ message: "SMS ENVIADO!" });
});

export default router;
