import React from "react";
import Sidebar from "../../../components/Sidebar/index";
import Header from "../../../components/Header/Header";
import Table from "../../../components/Table/index";
import SearchBar from "../../../components/SearchBar/index";
import PersonDetail from "../../../components/Aside/PersonDetail";

export default function index() {
  return (
    <section>
      <Sidebar>
        <div className="bg-ghost min-h-screen overflow-hidden ">
          <Header page="Clients" />
          <div className="p-6 flex space-x-3">
            <div className="flex-grow">
              <SearchBar />
              <Table />
            </div>
            <div>
              <PersonDetail />
            </div>
          </div>
        </div>
      </Sidebar>
    </section>
  );
}
