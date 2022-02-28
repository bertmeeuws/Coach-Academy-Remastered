import Head from "next/head";
import React from "react";
import Header from "../../../../../components/Header/Header";
import Sidebar from "../../../../../components/Sidebar";
import Breadcrumbs from "../../../../../ui/Breadcrumbs";
import HOCSection from "../../../../../ui/HOCSection";

export default function index() {
  return (
    <section className="">
      <Head>
        <title>Dashboard | CoachAcademy</title>
      </Head>
      <Sidebar>
        <HOCSection>
          <Header page="Client workout plan" />
          <div className="flex flex-grow flex-col"></div>
        </HOCSection>
      </Sidebar>
    </section>
  );
}
