import React from 'react';

const Work = ({work}) => {
  return (
    <div className="card experience" data-aos="fade-left">
      <img src={work.img} alt="" style={{ width: "100%", margin: "10px" }}/>
      <div style={{ margin: "auto 0px" }}>
        <p className="workCompany" style={{ fontSize: "2rem", marginBottom: 0 }}>{work.company}</p>
        <p className="workDuration" style={{ fontSize: "1.3rem", margin: "5px 0 0 20px" }}>{work.from} to {work.to}</p>
        <p className="workPosition" style={{ fontSize: "1.8rem" }}>{work.position}</p>
      </div>
    </div>
  );
}

export default Work;
