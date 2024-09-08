import DoktoEmail from "./dokto-email";
import { render } from "@react-email/components";
import React from "react";

const data = {
  previewText: "Mail from Dokto",
  name: "Ademakinwa",
  mailBody:
    "You have Successfully topped up your wallet with a sum of #50,000.00. To check the details of this transaction, please press the button for viewing transaction details below.",
  title: "Account Verification Successful",
  variant: "congratulation",
};

const htmlTemplate = render(
  <DoktoEmail
    previewText={data.previewText}
    name={data.name}
    mailBody={data.mailBody}
    title={data.title}
  />,
  {
    pretty: true,
  }
);

console.log(htmlTemplate);
