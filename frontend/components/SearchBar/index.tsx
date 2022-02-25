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
      setLink(data.createInvite.id);
    })();
  }, []);

  const createNewInvite = async () => {
    const { data } = await createInvite();
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
        <div className="flex justify-center my-2">
          <UserAddIcon className="w-5 h-5" />
        </div>
        <p className="text-xs my-4">
          Copy and send this invite link to a customer so that they can become
          part of your program.
        </p>
        <p className="text-xs my-4 text-red-400">
          This link can only be used one time.
        </p>
        <p className="mb-8 border-2 rounded-md py-2">invite.url/{link}</p>
        <div className="mt-4">
          <Button onClick={(e: EventListenerObject) => createNewInvite()}>
            Generate a new link
          </Button>
        </div>
      </Modal>
      <div>
        <div className="flex items-center space-x-2 my-2">
          <div className="relative flex items-center flex-grow">
            <SearchIcon className="w-6 h-6 absolute left-4 text-gray-400" />
            <input
              type="text"
              className="px-4 py-4 rounded-lg flex-grow pl-14"
              placeholder="Search names of clients"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.currentTarget.value)}
            />
          </div>

          <div
            onClick={(e) => createInviteLink()}
            className="bg-fluoGreen flex items-center space-x-2 px-5 py-3 rounded-lg cursor-pointer"
          >
            <PlusIcon className="text-white w-8 h-8" />
            <p className="font-bold text-white">Invite</p>
          </div>
        </div>
      </div>
    </>
  );
}
