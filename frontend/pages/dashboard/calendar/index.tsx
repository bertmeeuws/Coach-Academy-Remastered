import React from "react";
import Sidebar from "../../../components/Sidebar/index";
import Header from "../../../components/Header/Header";
import Table from "../../../components/Table/index";
import SearchBar from "../../../components/SearchBar/index";
import PersonDetail from "../../../components/Aside/PersonDetail";
import Calendar from "../../../components/Calendar/index";
import HOCSection from "../../../ui/HOCSection";
import Head from "next/head";

export default function index() {
  return (
    <section className="">
      <Head>
        <title>Calendar | CoachAcademy</title>
      </Head>
      <Sidebar>
        <HOCSection>
          <Header page="Calendar" />
          <div className="p-6 space-x-3 flex-grow flex pt-0">
            <Calendar />
          </div>
        </HOCSection>
      </Sidebar>
    </section>
  );
}
