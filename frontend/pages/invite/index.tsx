import React, { useEffect } from "react";
import { useMutation, useQuery } from "urql";
import { GET_INVITE_BY_ID } from "../../graphql/invites/Query.gql";
import { useClient } from "urql";
import MyModal from "../../components/Modal";
import Button from "../../ui/Button";
import { useRouter } from "next/router";
import { ME } from "../../graphql/auth/Query.gql";
import { ENUM_USER_ROLES } from "../../types/enum";
import Spinner from "../../ui/Spinner";
import { LOG_USER_OUT } from "../../graphql/auth/Mutation.gql";
import { USE_INVITE } from "../../graphql/invites/Mutation.gql";

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
  const [isUserLogged, setIsUserLoggedIn] = React.useState(false);
  const [role, setRole] = React.useState<ENUM_USER_ROLES | null>(null);

  const [logoutResult, executeLogout] = useMutation<any>(LOG_USER_OUT);
  const [RESULT_USE_INVITE, INVALIDATE_INVITE] = useMutation(USE_INVITE);

  const logUserOut = async () => {
    const { data } = await executeLogout();
    setIsUserLoggedIn(false);
  };

  useEffect(() => {
    (async function doSomething() {
      //

      const { data: data1 } = await client.query(ME).toPromise();

      const me = data1.me;
      if (!me) {
        setLoading(false);
        return;
      }

      setIsUserLoggedIn(true);
      setRole(me.role);

      const { data } = await client
        .query(GET_INVITE_BY_ID, {
          id: query.ref,
        })
        .toPromise();

      if (!data?.invite) {
        setNotValid(true);
        setLoading(false);
        return;
      }

      setInvite(data.invite);
      setLoading(false);
    })();
  }, [isUserLogged]);

  if (loading) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-ghost">
        <Spinner />
      </div>
    );
  }

  if (notValid) {
    return (
      <div className="h-screen w-screen bg-ghost">
        <MyModal
          className="text-center"
          title="Invite link not valid"
          isOpen={notValid}
          setIsOpen={() => {}}
        >
          <p>Link is not valid or has already been used.</p>
          <div className="mt-8">
            <Button onClick={(e: any) => router.push("/auth/login")}>
              Exit
            </Button>
          </div>
        </MyModal>
      </div>
    );
  }

  if (role === ENUM_USER_ROLES.COACH) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-ghost">
        <h1 className="text-600 text-3xl font-bold">Can't use invite</h1>
        <p className="mt-2 w-1/2 text-center text-gray-600">
          You are currently logged in as a coach.
        </p>
        <div className="mt-8 space-x-3">
          <Button className="bg-orange-500">Exit</Button>
          <Button onClick={(e) => logUserOut()}>Log out</Button>
        </div>
      </div>
    );
  }

  if (!isUserLogged) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-ghost">
        <h1 className="text-3xl font-bold text-red-600">Can't use invite.</h1>
        <p className="mt-2 w-1/2 text-center text-gray-600">
          You are currently not logged in.
        </p>
        <div className="mt-8 space-x-3">
          <Button onClick={(e) => router.push("/auth/login")}>
            Go to sign in page
          </Button>
        </div>
      </div>
    );
  }

  const handleInvite = async () => {
    const { data } = await INVALIDATE_INVITE({
      invite_id: query.ref,
    });
    if (!data.invalidateInvite) {
      console.log("Error");
      return;
    }
    router.push("/portal");
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-ghost">
      {loading ? (
        <Spinner />
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
                <Button onClick={(e) => handleInvite()}>Accept invite</Button>
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
