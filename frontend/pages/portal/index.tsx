import { MenuIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";
import ClientNav from "../../components/Mobile/ClientNav";

export default function index() {
  const [open, setOpen] = React.useState(true);

  return (
    <section>
      <ClientNav />
    </section>
  );
}
