import React from "react";
import { Heading, Text } from "../ui";

interface TrainerInfoProps {
  firstName: string;
  lastName: string;
}

const TrainerInfo: React.FC<TrainerInfoProps> = ({ firstName, lastName }) => {
  return (
    <div className="mb-6">
      <Heading
        level="h3"
        className="text-lg mb-2"
        variant="secondary"
        weight="medium"
      >
        Trainer Information
      </Heading>
      <Text variant="lead" className="mt-2" color="default">
        Name:{" "}
        <span className="font-medium">
          {firstName} {lastName}
        </span>
      </Text>
    </div>
  );
};

export default TrainerInfo;
