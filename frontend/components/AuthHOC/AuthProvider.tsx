import { NextUrqlPageContext } from "next-urql";
import Router from "next/router";
import React from "react";
import { useQuery } from "urql";
import { ME } from "../../graphql/auth/Query.gql";
import { ENUM_USER_ROLES } from "../../types/enum";

export function AuthProvider({ children }: any) {
  const [me] = useQuery({
    query: ME,
  });

  const { data, fetching } = me;

  if (fetching)
    return (
      <div className="w-screen h-screen flex items-center justify-center"></div>
    );

  if (data) {
    switch (data?.me?.role) {
      case ENUM_USER_ROLES.CLIENT:
        Router.push("/portal");
        break;
      case ENUM_USER_ROLES.COACH:
        Router.push("/dashboard");
        break;
    }
  }

  return <>{children}</>;
}

export default AuthProvider;
