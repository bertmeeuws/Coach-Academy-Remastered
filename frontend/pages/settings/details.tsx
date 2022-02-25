import Head from "next/head";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";
import UserDetails from "../../components/UserDetails/index";
import HOCSection from "../../ui/HOCSection";

export default function Details() {
  return (
    <section className="">
      <Head>
        <title>Acount details | CoachAcademy</title>
      </Head>
      <Sidebar>
        <HOCSection>
          <Header page="Details" />
          <div className="p-6 flex space-x-3">
            <div className="flex-grow flex flex-col space-y-6">
              <UserDetails />
            </div>
          </div>
        </HOCSection>
      </Sidebar>
    </section>
  );
}
