import Head from "next/head";
import { Suspense } from "react";
import { useQuery } from "urql";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";
import UserDetails from "../../components/UserDetails/index";
import { GET_COACH_DETAILS } from "../../graphql/coach/Query.gql";
import HOCSection from "../../ui/HOCSection";
import Spinner from "../../ui/Spinner";

export default function Details() {
  return (
    <section className="">
      <Head>
        <title>Acount details | CoachAcademy</title>
      </Head>
      <Sidebar>
        <HOCSection>
          <Header page="Details" />
          <div className="flex space-x-3 p-6">
            <div className="flex flex-grow flex-col space-y-6">
              <UserDetails />
            </div>
          </div>
        </HOCSection>
      </Sidebar>
    </section>
  );
}
