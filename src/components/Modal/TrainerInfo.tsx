import React from "react";
import { Heading, Text } from "../ui";

interface TrainerInfoProps {
  firstName: string;
  lastName: string;
}

const TrainerInfo: React.FC<TrainerInfoProps> = ({ firstName, lastName }) => {
  const SECTION_TITLE = "Trainer Information";

  const formattedFirstName = firstName.trim() || "Unknown";
  const formattedLastName = lastName.trim() || "";
  const fullName = `${formattedFirstName} ${formattedLastName}`.trim();

  return (
    <section className="trainer-info mb-6">
      <Heading
        level="h3"
        className="text-lg mb-3"
        variant="secondary"
        weight="medium"
      >
        {SECTION_TITLE}
      </Heading>

      <Text variant="body" weight="medium" color="default">
        {fullName}
      </Text>
    </section>
  );
};

export default TrainerInfo;
