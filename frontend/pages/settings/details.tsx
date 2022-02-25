import Head from "next/head";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";
import UserDetails from "../../components/UserDetails/index";

export default function Details() {
  return (
    <section className="">
      <Head>
        <title>Acount details | CoachAcademy</title>
      </Head>
      <Sidebar>
        <div className="bg-ghost min-h-screen overflow-hidden rounded-tl-[50px] rounded-bl-[100px]">
          <Header page="Details" />
          <div className="p-6 flex space-x-3">
            <div className="flex-grow flex flex-col space-y-6">
              <UserDetails />
            </div>
          </div>
        </div>
      </Sidebar>
    </section>
  );
}
