import type { Metadata } from "next";
import "./globals.css";
import RecoilRootWrapper from "./RecoilRootWrapper";
import { ThemeProvider } from "@mui/material";
import { theme } from "@component/components/common-components/mui/theme";
import Providers from "@component/context/provider";
import { Header } from "@component/components/common-components/common/Header";
import Footer from "@component/components/common-components/common/Footer";

export const metadata: Metadata = {
  title: "sendback",
  description:
    "맞으면서 성장하는 피드백 수집 플랫폼 👊Sendback(Send + Feedback)👊",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RecoilRootWrapper>
        <ThemeProvider theme={theme}>
          <body>
            <Providers>
              <Header />
              {children}
            </Providers>
            <Footer />
          </body>
        </ThemeProvider>
      </RecoilRootWrapper>
    </html>
  );
}
