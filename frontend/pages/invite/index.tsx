import React, { useEffect } from "react";
import { useQuery } from "urql";
import { GET_INVITE_BY_ID } from "../../graphql/invites/Query.gql";
import { useClient } from "urql";

export default function index({ query }: any) {
  const client = useClient();

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    (async function doSomething() {
      //
      const { data } = await client
        .query(GET_INVITE_BY_ID, {
          id: query.ref,
        })
        .toPromise();

      console.log(data);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <p>Invite</p>
          <p>blabla has invited you</p>
          <p className="cursor-pointer font-semibold underline">
            Accept invite
          </p>

          <p>{query?.ref}</p>
        </>
      )}
    </div>
  );
}

index.getInitialProps = ({ query }: any) => {
  return {
    query,
  };
};
