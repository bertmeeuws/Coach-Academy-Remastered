import React from "react";
import Sidebar from "../../../components/Sidebar/index";
import Header from "../../../components/Header/Header";
import Table from "../../../components/Table/index";
import SearchBar from "../../../components/SearchBar/index";
import PersonDetail from "../../../components/Aside/PersonDetail";
import { useQuery } from "urql";
import { GET_ALL_CLIENTS_FROM_COACH } from "../../../graphql/clients/Query.gql";
import { GET_CLIENT_BY_ID_AS_COACH } from "../../../types/clients";
import AuthHOC from "../../../components/AuthHOC/AuthProvider";
import Head from "next/head";

export default function index() {
  const [selectedClient, setSelectedClient] = React.useState(null);

  const [result] = useQuery({
    query: GET_ALL_CLIENTS_FROM_COACH,
  });
  const { data: allClients, fetching } = result;

  const [selectedClientFetch, fetchSelectedUser] = useQuery({
    query: GET_CLIENT_BY_ID_AS_COACH,
    pause: true,
    variables: {
      clientId: selectedClient,
    },
  });

  React.useEffect(() => {
    if (!selectedClient) return;
    (async function fetch() {
      await fetchSelectedUser();
      console.log(selectedClientFetch);
    })();
  }, [selectedClient]);

  return (
    <section className="">
      <Head>
        <title>Clients | CoachAcademy</title>
      </Head>
      <Sidebar>
        <div className="bg-ghost min-h-screen overflow-hidden rounded-tl-[50px] rounded-bl-[100px]">
          <Header page="Clients" />
          <div className="p-6 flex space-x-3">
            <div className="flex-grow">
              <SearchBar />
              <Table setSelectedClient={setSelectedClient} data={allClients} />
            </div>
            <div>
              {selectedClientFetch.data && selectedClient && (
                <PersonDetail
                  setSelectedClient={setSelectedClient}
                  data={selectedClientFetch?.data}
                />
              )}
            </div>
          </div>
        </div>
      </Sidebar>
    </section>
  );
}
