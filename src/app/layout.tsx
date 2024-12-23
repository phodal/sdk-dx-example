import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Layout } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AntHeader from "./AntHeader";
import AntSider from "./AntSider";
import AntContent from "./AntContent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SDK Documentation",
  description: "Documentation for the SDK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <Layout style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <AntHeader style={{ display: "flex", alignItems: "center" }} />
            <Layout style={{ flex: 1, display: "flex", flexDirection: "row", overflow: "hidden" }}>
              <AntSider width={240} style={{ overflow: "auto" }} />
              <Layout
                style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "auto" }}>
                <AntContent
                  style={{
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  {children}
                </AntContent>
              </Layout>
            </Layout>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
