import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/index";
import Header from "../../components/Header/Header";
import { UserContext } from "../../context/UserContext";
export default function index() {
  const { auth, setAuth } = useContext(UserContext);

  return (
    <section className="bg-fluoGreen">
      <Sidebar>
        <div className="bg-ghost min-h-screen rounded-tl-[50px] rounded-bl-[100px]">
          <Header page="Dashboard" />
        </div>
      </Sidebar>
    </section>
  );
}
