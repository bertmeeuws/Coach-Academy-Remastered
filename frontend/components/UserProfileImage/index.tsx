import { UserIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import React from "react";
import { MINIO_URL } from "../../constants/config";
classNames;

interface Props {
  profile_image?: string;
  width?: number;
  height?: number;
}

const UserProfileImage: React.FC<Props> = ({
  profile_image,
  width = 8,
  height = 8,
}) => {
  return (
    <>
      {profile_image ? (
        <img
          className={classNames(
            "mr-4 rounded-full object-cover object-center",
            "h-" + width
          )}
          src={MINIO_URL + profile_image}
        />
      ) : (
        <div
          className={classNames(
            "mr-4 flex items-center justify-center rounded-full bg-gray-200 object-cover object-center",
            "w-" + width,
            "h-" + height
          )}
        >
          <UserIcon className="h-6 w-6 text-gray-600" />
        </div>
      )}
    </>
  );
};

export default UserProfileImage;
