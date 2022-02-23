import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/index";
import Header from "../../components/Header/Header";
import { UserContext } from "../../context/UserContext";
export default function index() {
  const { value, setValue } = useContext(UserContext);

  return (
    <section>
      <Sidebar>
        <div className="bg-ghost min-h-screen">
          {value}
          <button onClick={(e) => setValue(value + 1)}>+1</button>
          <Header page="Dashboard" />
        </div>
      </Sidebar>
    </section>
  );
}
