import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { BitcoinWalletConnectors } from "@dynamic-labs/bitcoin";

import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bitcoin Gift Shop",
  description: "Empower Your Gifting with Bitcoin and AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicContextProvider
          settings={{
            environmentId: process.env.DYNAMIC_ENVIROMENT_ID!,
            walletConnectors: [BitcoinWalletConnectors]
          }}>
          <Navbar />
          {children}
          <ToasterProvider />
          {/* <Footer /> */}
        </DynamicContextProvider>
      </body>
    </html >
  );
}
