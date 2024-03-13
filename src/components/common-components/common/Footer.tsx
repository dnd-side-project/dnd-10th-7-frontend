"use client";
import Image from "next/image";

const Footer = () => {
  const TermsOfUse: string =
    "https://ginger-begonia-38c.notion.site/7e49774c2ceb459da64b19a5305fbe18?pvs=4";
  const PrivacyPolicy: string =
    "https://ginger-begonia-38c.notion.site/5415f847576e43bca185cb9dcd16ef92?pvs=4";
  const Introduce: string =
    "https://ginger-begonia-38c.notion.site/c6c99302305c49e29e6fc8ec5f48e3a0?pvs=4";

  return (
    <div className="w-full min-w-[1440px] h-[215px] bg-purple-main5 flex">
      <section className="min-w-[1080px] w-full flex items-center justify-center">
        {/* left */}
        <div>
          <div className="text-h2 flex items-center mb-8 me-[247px]">
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              width={30}
              height={35}
              className="me-2"
            />
            Sendback
          </div>
          <div className="text-body1 text-gray-60">
            {/* TODO: 이메일 변경 */}
            <p className="font-medium">Contack email@gmail.com</p>
            <p className="font-medium">
              Copyright Sendback. All rights reserved
            </p>
          </div>
        </div>

        {/* right */}
        <div className="text-body1 text-gray-80">
          <span
            onClick={() => window.open(TermsOfUse)}
            className="font-medium me-16"
          >
            이용약관
          </span>
          <span
            onClick={() => window.open(PrivacyPolicy)}
            className="font-medium me-16"
          >
            개인정보처리방침
          </span>
          <span
            onClick={() => window.open(Introduce)}
            className="font-medium me-16"
          >
            서비스 소개
          </span>
        </div>
      </section>
    </div>
  );
};

export default Footer;
