import { PlusIcon, SearchIcon } from "@heroicons/react/outline";
import { UserAddIcon } from "@heroicons/react/solid";
import React from "react";
import { useMutation } from "urql";
import { CREATE_INVITE } from "../../graphql/invites/Mutation.gql";
import Button from "../../ui/Button";
import Modal from "../Modal/index";

export default function index({ setNameFilter, nameFilter }: any) {
  const [invite, setInvite] = React.useState(false);
  const [link, setLink] = React.useState("");
  const createInviteLink = () => {
    setInvite(true);
  };

  const [createdInvite, createInvite] = useMutation(CREATE_INVITE);

  React.useEffect(() => {
    (async function generateLink() {
      const { data } = await createInvite();
      if (!data) return;
      setLink(data.createInvite.id);
    })();
  }, []);

  const createNewInvite = async () => {
    const { data } = await createInvite();
    if (!data) return;
    setLink(data.createInvite.id);
  };

  return (
    <>
      <Modal
        title="Invite a new client"
        className="text-center"
        isOpen={invite}
        setIsOpen={setInvite}
        button={"Copy"}
      >
        <div className="my-2 flex justify-center">
          <UserAddIcon className="h-5 w-5" />
        </div>
        <p className="my-4 text-xs">
          Copy and send this invite link to a customer so that they can become
          part of your program.
        </p>
        <p className="my-4 text-xs text-red-400">
          This link can only be used one time.
        </p>
        <p className="mb-8 rounded-md border-2 py-2">invite.url/{link}</p>
        <div className="mt-4">
          <Button onClick={(e: EventListenerObject) => createNewInvite()}>
            Generate a new link
          </Button>
        </div>
      </Modal>
      <div>
        <div className="my-2 flex items-center space-x-2">
          <div className="relative flex flex-grow items-center">
            <SearchIcon className="absolute left-4 h-6 w-6 text-gray-400" />
            <input
              type="text"
              className="flex-grow rounded-lg px-4 py-4 pl-14"
              placeholder="Search names of clients"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.currentTarget.value)}
            />
          </div>

          <div
            onClick={(e) => createInviteLink()}
            className="flex cursor-pointer items-center space-x-2 rounded-lg bg-fluoGreen px-5 py-3"
          >
            <PlusIcon className="h-8 w-8 text-white" />
            <p className="font-bold text-white">Invite</p>
          </div>
        </div>
      </div>
    </>
  );
}
