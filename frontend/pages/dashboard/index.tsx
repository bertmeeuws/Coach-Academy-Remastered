import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/index";
import Header from "../../components/Header/Header";
import { UserContext } from "../../context/UserContext";
import HOCSection from "../../ui/HOCSection";
import Head from "next/head";

export default function index() {
  const { auth, setAuth } = useContext(UserContext);

  return (
    <section className="">
      <Head>
        <title>Dashboard | CoachAcademy</title>
      </Head>
      <Sidebar>
        <HOCSection>
          <Header page="Dashboard" />
        </HOCSection>
      </Sidebar>
    </section>
  );
}
