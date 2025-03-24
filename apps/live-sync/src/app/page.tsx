"use client";

import { FC } from "react";
import Head from "next/head";

export const Index: FC = () => {
  return (
    <>
      <Head>
        <title>Live sync</title>
        <meta name="description" content="Welcome to my first Next.js page" />
      </Head>
      <div className="flex h-screen w-full items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome to my first Next.js page
        </h1>
      </div>
    </>
  );
};

export default Index;
