import React from "react";
import Sidebar from "../../../components/Sidebar/index";
import Header from "../../../components/Header/Header";
import Table from "../../../components/Table/index";
import SearchBar from "../../../components/SearchBar/index";
import PersonDetail from "../../../components/Aside/PersonDetail";
import Calendar from "../../../components/Calendar/index";

export default function index() {
  return (
    <section className="">
      <Sidebar>
        <div className="bg-ghost min-h-screen overflow-hidden rounded-tl-[50px] rounded-bl-[100px] flex flex-col">
          <Header page="Calendar" />
          <div className="p-6 space-x-3 flex-grow flex pt-0">
            <Calendar />
          </div>
        </div>
      </Sidebar>
    </section>
  );
}
