import React, { useContext } from "react";
import Head from "next/head";
import Sidebar from "../../../components/Sidebar";
import HOCSection from "../../../ui/HOCSection";
import Header from "../../../components/Header/Header";

export default function index() {
  return (
    <section className="">
      <Head>
        <title>Notifications | CoachAcademy</title>
      </Head>
      <Sidebar>
        <HOCSection>
          <Header page="Notifications" />
        </HOCSection>
      </Sidebar>
    </section>
  );
}
