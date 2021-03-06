import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import teamMembersData from "../teamMembersData";
import TeamMemberCard from "../components/TeamMemberCard";

const TeamScreen = () => {
  return (
    <Container>
      <h5 className="d-block my-5 text-center">
        Without bonding and coordination, every project is a failure. Look at
        who makes KICKSUP great. ;)
      </h5>

      {/* Displaying the Team Member cards */}
      <Row>
        {teamMembersData.map((teamMember) => (
          <Col
            key={teamMember.imgName}
            className="d-flex justify-content-center mx-auto"
            sm={6}
            md={4}
            lg={3}
            xl={2}
          >
            <TeamMemberCard
              name={teamMember.name}
              imgName={teamMember.imgName}
              role={teamMember.role}
              socials={teamMember.socials}
            />
          </Col>
        ))}
      </Row>
      {/** **/}

      <h3 className="d-block my-3 text-center">and You! :)</h3>
    </Container>
  );
};

export default TeamScreen;
