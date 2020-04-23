import React from 'react';
import Volunteer from './Volunteer'
import { experiences } from './Data'

const Volunteers = () => {
  const { volunteers } = experiences
  const CardItem = () => volunteers.map((volunteer, index) => <Volunteer volunteer={volunteer} key={index} />)

  return (
    <div className="volunteers" data-aos="zoom-in" style={{ textAlign: "center" }}>
      <h1>VOLUNTEERS</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        width: "80vw",
        justifyContent: "space-between",
        margin: "auto"
      }}>
        <CardItem />
      </div>
    </div>
  );
}

export default Volunteers;
