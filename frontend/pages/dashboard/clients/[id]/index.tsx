import React, { ContextType, useContext } from "react";
import Head from "next/head";
import Sidebar from "../../../../components/Sidebar";
import HOCSection from "../../../../ui/HOCSection";
import Header from "../../../../components/Header/Header";
import { IBreadcrumb } from "../../../../types/breadcrumbs";
import { GET_CLIENT_BY_ID_AS_COACH } from "../../../../types/clients";
import { useQuery } from "urql";
import Spinner from "../../../../ui/Spinner";
import Breadcrumbs from "../../../../ui/Breadcrumbs";
import { useRouter } from "next/router";
import { ENUM_ERRORS } from "../../../../types/enum";

export default function Index({ query }: any) {
  const router = useRouter();

  const [breadcrumbs, setBreadcrumbs] = React.useState<IBreadcrumb[]>([]);

  const [{ data, fetching }, fetchSelectedUser] = useQuery({
    query: GET_CLIENT_BY_ID_AS_COACH,
    variables: {
      clientId: Number(query.id),
    },
  });

  React.useEffect(() => {
    generateBreadCrumbs();
  }, []);

  const generateBreadCrumbs = () => {
    setBreadcrumbs([
      {
        name: "Clients",
        href: "/dashboard/clients",
      },
      {
        name: "Profile",
        //@TODO make dynamic
        href: "/dashboard/clients/123",
      },
    ]);
  };

  if (!fetching && !data.client) {
    router.push("/dashboard/clients?state=" + ENUM_ERRORS.CLIENT_NOT_FOUND);
  }

  const renderUserDetails = () => {
    const {
      address,
      city,
      dob,
      name,
      number,
      phone,
      postal,
      surname,
      user,
      id,
    } = data?.client;

    return (
      <>
        <div className="mt-8 flex items-center space-x-4">
          <div className="w-20 h-20 bg-gray-500 rounded-full"></div>
          <div>
            <p className="font-semibold text-gray-800 text-lg">Bert Beukers</p>
            <p className="text-xs font-semibold text-gray-400">
              Joined in October
            </p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg mt-8">
          <h2
            id="payment-details-heading"
            className="text-lg leading-6 font-semibold text-gray-700"
          >
            Client information
          </h2>
          <p className="text-gray-400 border-b-2 pb-4 mt-1">
            All the information we have about this client.
          </p>
          <div className="grid grid-cols-4 py-4 space-x-8">
            <div className="col-span-2  grid grid-cols-2">
              <div>
                <div className="col-span-2 flex justify-start flex-col font-semibold">
                  <span className="text-gray-500">Name</span>
                  <p className="text-gray-800">{name}</p>
                </div>
              </div>
              <div>
                <div className="col-span-2 flex justify-start flex-col font-semibold">
                  <span className="text-gray-500">Surname</span>
                  <p className="text-gray-800">{surname}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2  grid grid-cols-2">
              <div>
                <div className="col-span-2 flex justify-start flex-col font-semibold">
                  <span className="text-gray-500">Name</span>
                  <p className="text-gray-800">{name}</p>
                </div>
              </div>
              <div>
                <div className="col-span-2 flex justify-start flex-col font-semibold">
                  <span className="text-gray-500">Surname</span>
                  <p className="text-gray-800">{surname}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 py-4 space-x-8">
            <div className="col-span-2  grid grid-cols-2">
              <div>
                <div className="col-span-2 flex justify-start flex-col font-semibold">
                  <span className="text-gray-500">Name</span>
                  <p className="text-gray-800">{name}</p>
                </div>
              </div>
              <div>
                <div className="col-span-2 flex justify-start flex-col font-semibold">
                  <span className="text-gray-500">Surname</span>
                  <p className="text-gray-800">{surname}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2  grid grid-cols-2">
              <div>
                <div className="col-span-2 flex justify-start flex-col font-semibold">
                  <span className="text-gray-500">Name</span>
                  <p className="text-gray-800">{name}</p>
                </div>
              </div>
              <div>
                <div className="col-span-2 flex justify-start flex-col font-semibold">
                  <span className="text-gray-500">Surname</span>
                  <p className="text-gray-800">{surname}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <section className="min-h-screen flex flex-col">
      <Head>
        <title>Client overview | CoachAcademy</title>
      </Head>
      <Sidebar>
        <HOCSection>
          <div className="flex-grow flex flex-col">
            <Header page="Client overview" />
            <div className="px-6 flex-grow flex flex-col">
              <Breadcrumbs data={breadcrumbs} />
              {fetching && (
                <div className="flex-grow h-full flex items-center justify-center">
                  <Spinner />
                </div>
              )}
              {data?.client && renderUserDetails()}
            </div>
          </div>
        </HOCSection>
      </Sidebar>
    </section>
  );
}

Index.getInitialProps = ({ query }: any) => {
  return {
    query,
  };
};
