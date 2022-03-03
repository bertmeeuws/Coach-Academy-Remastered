import Head from "next/head";
import React from "react";
import ClientNav from "../../../components/Mobile/ClientNav";

export default function index() {
  return (
    <section className="min-h-screen bg-ghost pb-2">
      <Head>
        <title>Workout - Portal</title>
      </Head>
      <ClientNav>
        <div className="mt-4 px-4">
          <h1 className="text-4xl font-bold text-darkBlue">Hi Bert,</h1>
          <p className="text-2xl font-semibold text-gray-700">
            Ready to achieve your goals?
          </p>
          <div className="my-8"></div>
        </div>
      </ClientNav>
    </section>
  );
}
