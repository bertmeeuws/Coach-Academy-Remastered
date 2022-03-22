import { Dialog, Transition } from "@headlessui/react";
import { PlayIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import { EXECISE_ITEM } from "../../types/workout";

interface Props {
  data: EXECISE_ITEM | null;
  openVideoPopup: boolean;
  setOpenVideoPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoPopup: React.FC<Props> = ({
  openVideoPopup,
  setOpenVideoPopup,
  data,
}) => {
  const closeModal = () => {
    setOpenVideoPopup(false);
  };

  const openModal = () => {
    setOpenVideoPopup(true);
  };

  return (
    <>
      <Transition appear show={openVideoPopup} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-gray-903 my-2 text-xl font-semibold leading-6"
                >
                  Video fragment {data?.name}
                </Dialog.Title>
                <div className="mt-2 flex aspect-video cursor-pointer items-center justify-center rounded-md bg-gray-300">
                  <PlayIcon className="h-8 w-8 text-fluoGreen" />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default VideoPopup;
