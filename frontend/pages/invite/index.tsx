import React, { useEffect } from "react";
import { useQuery } from "urql";
import { GET_INVITE_BY_ID } from "../../graphql/invites/Query.gql";
import { useClient } from "urql";
import MyModal from "../../components/Modal";
import Button from "../../ui/Button";
import { useRouter } from "next/router";

export interface IInvite {
  invalidated: null | boolean;
  coach: {
    name: string;
    surname: string;
    user: {
      profile_image: string;
      email: string;
    };
  };
}

export default function index({ query }: any) {
  const client = useClient();
  const router = useRouter();

  const [loading, setLoading] = React.useState(true);
  const [invite, setInvite] = React.useState<IInvite | null>(null);
  const [notValid, setNotValid] = React.useState(false);

  useEffect(() => {
    (async function doSomething() {
      //
      const { data } = await client
        .query(GET_INVITE_BY_ID, {
          id: query.ref,
        })
        .toPromise();

      if (!data.invite) {
        setNotValid(true);
        return;
      }
      setInvite(data.invite);
      console.log(data);
      setLoading(false);
    })();
  }, []);

  if (notValid) {
    return (
      <div className="h-screen w-screen bg-ghost">
        <MyModal
          className="text-center"
          title="Invite link not valid"
          isOpen={notValid}
          setIsOpen={() => {}}
        >
          <p>Link is not valid or has already been used</p>
          <div className="mt-8">
            <Button onClick={(e: any) => router.push("/auth/login")}>
              Exit
            </Button>
          </div>
        </MyModal>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-ghost">
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-darkBlue">
            You have been invited
          </h1>
          <p className="font-semibold text-gray-600">by</p>
          {invite && (
            <>
              <div className="w-15 min-h-15 rounded-full bg-gray-400"></div>
              {invite.coach.user.profile_image && (
                <div className="w-15 h-15 bg-gray-400"></div>
              )}
              <p className="text-semibold text-lg font-semibold text-darkBlue">
                {invite.coach.name} {invite.coach.surname}
              </p>
              <p className="text-semibold text-lg font-semibold text-darkBlue">
                {invite.coach.user.email}
              </p>
              <div className="mt-8">
                <Button>Accept invite</Button>
                <p className="text-5 mt-6 cursor-pointer text-gray-500 underline">
                  Go back to login screen
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

index.getInitialProps = ({ query }: any) => {
  return {
    query,
  };
};
