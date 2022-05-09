import React from "react";
import { Card } from "react-bootstrap";
import SocialIcons from "./SocialIcons";

const TeamMemberCard = ({ name, imgName, role, socials }) => {
  return (
    <Card className="shadow shadow-md my-3" style={{ width: "198px" }}>
      {/* Team member image */}
      <Card.Img
        height="198px"
        src={`${process.env.PUBLIC_URL}/images/team-members/${imgName}`}
      />

      <Card.Body className="px-0 py-4">
        {/* Team member name */}
        <Card.Title className="text-center my-1">{name}</Card.Title>

        {/* Team member designation/role */}
        <Card.Text className="text-center">{role}</Card.Text>

        {/* Team member social handles */}
        <SocialIcons iconNames={socials} />
      </Card.Body>
    </Card>
  );
};

export default TeamMemberCard;
