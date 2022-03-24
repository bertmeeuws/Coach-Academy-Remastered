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
  const [search, setSearch] = React.useState<string>("");

  const [result, refetch] = useQuery({
    query: GET_ALL_EXERCISES,
    variables: {
      name: search,
    },
  });

  return (
    <>
      <VideoPopup
        openVideoPopup={openVideoPopup}
        setOpenVideoPopup={setOpenVideoPopup}
        data={selectedExercise}
      />
      <aside className="sahdow h-[88vh] w-[250px] rounded-md bg-white p-2">
        <input
          className="rounded-md bg-fluoGreen p-2 px-3 font-semibold text-white placeholder:text-white placeholder:text-opacity-50"
          placeholder="Type here an exercise name"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        {result.fetching ? (
          <div className="flex h-[80vh] w-full items-center justify-center">
            <Spinner />
          </div>
        ) : (
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
            {result?.data?.exercises.length === 0 && (
              <div>
                <p className="mt-8 text-center font-semibold text-gray-600">
                  No exercises found for {search}
                </p>
              </div>
            )}
          </ul>
        )}
      </aside>
    </>
  );
};

export default Exercise_list;
