import React from 'react';

const Volunteer = ({volunteer}) => {
  return (
    <div className="card experience" data-aos="fade-right">
      <img src={volunteer.img} alt="" style={{ width: "77%", margin: "10px" }}/>
      <div style={{ margin: "auto 0px" }}>
        <p className="workCompany" style={{ fontSize: "2rem", marginBottom: 0 }}>{volunteer.event}</p>
        <p className="workPosition" style={{ fontSize: "1.6rem" }}>{volunteer.position}</p>
      </div>
    </div>
  );
}

export default Volunteer;
