import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
  Tailwind,
  Section,
  Button,
  Font,
} from "@react-email/components";
import * as React from "react";

interface Props {
  previewText: string;
  name: string;
  mailBody: string;
  variant?: "default" | "congratulation";
  title?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const date = formatDate(new Date());

const DoktoEmail = ({
  previewText,
  name,
  mailBody,
  variant = "default",
  title,
}: Props) => (
  <Html>
    <Head>
      <Font
        fontFamily="Jakarta"
        fallbackFontFamily="Helvetica"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap",
          format: "embedded-opentype",
        }}
      />
    </Head>

    <Preview>{previewText}</Preview>
    <Tailwind>
      <Body>
        <Container className="text-[#4F5E71] text-sm">
          <Section className="relative border border-solid rounded-xl border-[#CCCCCC4D] pt-3 px-2 pb-6">
            <div className="flex justify-between mb-5">
              <Text className="my-0">{date}</Text>
              <div className="flex gap-2 text-sm items-center">
                <Link href="" target="_blank" className="text-[#4F5E71]">
                  Visit Website
                </Link>
                <Link
                  href=""
                  target="_blank"
                  className="text-[#4F5E71] px-2"
                  style={{
                    borderLeft: "1px",
                    borderRight: "1px",
                    borderLeftStyle: "solid",
                    borderRightStyle: "solid",
                    borderColor: "#4F5E71",
                  }}
                >
                  Help
                </Link>
                <Link href="" target="_blank" className="text-[#4F5E71]">
                  Opt-Out
                </Link>
              </div>
            </div>

            <Img
              src={`${baseUrl}/static/dokto-logo.png`}
              width="104"
              height="40"
              alt="Dokto's Logo"
              className="mx-auto"
            />

            {variant === "congratulation" && (
              <>
                <Img
                  src={`${baseUrl}/static/celebrating.svg`}
                  width="78"
                  height="126"
                  alt="confetti"
                  className="absolute left-0 top-16"
                />

                <Img
                  src={`${baseUrl}/static/celebrating.svg`}
                  width="78"
                  height="126"
                  alt="confetti"
                  className="absolute right-0 top-16"
                />
              </>
            )}

            {title && (
              <Heading className="text-center font-medium mt-4 text-sm">
                {title},
              </Heading>
            )}

            <Heading className="text-center font-medium mt-4 text-sm">
              Hi {name},
            </Heading>

            <div className="text-[#4F5E71B2] mt-3 mb-6">
              <Text>{mailBody}</Text>

              <Text>With Love,</Text>

              <Text>DokRx Team</Text>
            </div>

            <div className="text-center">
              <Button className="bg-[#59CAF2] px-3 py-2 rounded-[20px] text-white font-medium">
                View Transaction Details
              </Button>
            </div>
          </Section>

          <Section>
            <div className="flex justify-center gap-3 py-3 mt-3 bg-[#0E1A1F]">
              <Link href="" target="_blank">
                <Img
                  src={`${baseUrl}/static/twitter-icon.svg`}
                  width="24"
                  height="24"
                  alt="Twitter's Logo"
                />
              </Link>
              <Link href="" target="_blank">
                <Img
                  src={`${baseUrl}/static/linkedin-icon.svg`}
                  width="24"
                  height="24"
                  alt="Linkedin's Logo"
                />
              </Link>
              <Link href="" target="_blank">
                <Img
                  src={`${baseUrl}/static/facebook-icon.svg`}
                  width="24"
                  height="24"
                  alt="Facebook's Logo"
                />
              </Link>
              <Link href="" target="_blank">
                <Img
                  src={`${baseUrl}/static/instagram-icon.svg`}
                  width="24"
                  height="24"
                  alt="Instagram's Logo"
                />
              </Link>
            </div>
            <Text className="text-center text-[#4F5E71B2]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              quam justo, euismod nec cursus sit amet, tempus efficitur lorem.
              Vivamus luctus condimentum volutpat.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

DoktoEmail.PreviewProps = {
  previewText: "Mail from Dokto",
  name: "Ademakinwa",
  mailBody:
    "You have Successfully topped up your wallet with a sum of #50,000.00. To check the details of this transaction, please press the button for viewing transaction details below.",
  title: "Account Verification Successful",
  variant: "congratulation",
};

export default DoktoEmail;
