import React from "react";
import { useQuery } from "urql";
import { GET_ALL_EXERCISES } from "../../graphql/workout/Query.gql";
import { EXECISE_ITEM } from "../../types/workout";
import Spinner from "../../ui/Spinner";
import VideoPopup from "../VideoPopup";
import Exercise_item from "./ExerciseItem";

const Exercise_list: React.FC<{}> = () => {
  const [selectedExercise, setSelectedExercise] =
    React.useState<null | EXECISE_ITEM>(null);

  const [openVideoPopup, setOpenVideoPopup] = React.useState<boolean>(false);
  

  const [result, refetch] = useQuery({
    query: GET_ALL_EXERCISES,
  });

  if (result.fetching) return <Spinner />;

  return (
    <>
      <VideoPopup
        openVideoPopup={openVideoPopup}
        setOpenVideoPopup={setOpenVideoPopup}
        data={selectedExercise}
      />
      <aside className="h-full w-[250px] rounded-md bg-white p-2">
        <input
          className="rounded-md bg-fluoGreen p-2 px-3 font-semibold text-white"
          value={"Chest"}
        />
        <ul className="mt-2 space-y-2">
          {result?.data?.exercises?.map((k: EXECISE_ITEM, idx: number) => (
            <Exercise_item
              data={k}
              setSelectedExercise={(e) => {
                setSelectedExercise(e);
              }}
              setOpenVideoPopup={setOpenVideoPopup}
            />
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Exercise_list;
