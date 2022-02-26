import React, { Suspense } from "react";
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
import HOCSection from "../../../ui/HOCSection";
import MyModal from "../../../components/Modal";
import Button from "../../../ui/Button";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { ENUM_ERRORS } from "../../../types/enum";
import Spinner from "../../../ui/Spinner";

export default function index({ query }: any) {
  const [selectedClient, setSelectedClient] = React.useState(null);
  const [nameFilter, setNameFilter] = React.useState("");
  const [clientNotFound, setClientNotFound] = React.useState<boolean>(false);

  const [result] = useQuery({
    query: GET_ALL_CLIENTS_FROM_COACH,
    variables: {
      filter: nameFilter === "" ? undefined : nameFilter,
    },
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
    if (query.state === ENUM_ERRORS.CLIENT_NOT_FOUND) {
      setClientNotFound(true);
      return;
    }
  }, [query]);

  React.useEffect(() => {
    if (!selectedClient) return;
    (async function fetch() {
      await fetchSelectedUser();
    })();
  }, [selectedClient]);

  return (
    <section>
      <MyModal
        className={"text-center"}
        title="Client not found"
        isOpen={clientNotFound}
        setIsOpen={setClientNotFound}
      >
        <div className="my-4 flex flex-col items-center justify-center space-y-4">
          <ExclamationCircleIcon className="h-8 w-8 text-red-400" />
          <p className="mb-10 w-3/5 text-center font-semibold text-gray-600">
            The user you were trying to view does not exist.
          </p>
        </div>

        <Button onClick={(e: EventListenerObject) => setClientNotFound(false)}>
          Continue
        </Button>
      </MyModal>
      <Head>
        <title>Clients | CoachAcademy</title>
      </Head>
      <Sidebar>
        <HOCSection>
          <Header page="Clients" />
          <div className="flex space-x-3 p-6">
            <div className="flex-grow">
              <SearchBar
                setNameFilter={setNameFilter}
                nameFilter={nameFilter}
              />

              <div className="h-[80vh] overflow-y-auto scrollbar-hide">
                <Suspense fallback={<Spinner />}>
                  <Table
                    setSelectedClient={setSelectedClient}
                    data={allClients}
                  />
                </Suspense>
              </div>
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
        </HOCSection>
      </Sidebar>
    </section>
  );
}

index.getInitialProps = ({ query }: any) => {
  return {
    query,
  };
};
