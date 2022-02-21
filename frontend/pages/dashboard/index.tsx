import React from "react";
import Sidebar from "../../components/Sidebar/index";
import Header from "../../components/Header/Header";
export default function index() {
  return (
    <section>
      <Sidebar>
        <div className="bg-ghost min-h-screen">
          <Header page="Dashboard" />
        </div>
      </Sidebar>
    </section>
  );
}
