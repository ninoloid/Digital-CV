import React from 'react';

const Card = ({skill}) => {
  return (
    <div className="card" data-aos="fade-down">
      <img src={skill.img} alt="" style={{ width: "100%", margin: "auto" }}/>
      <div style={{ margin: "auto 0px" }}>
        <h1>{skill.name}</h1>
      </div>
    </div>
  );
}

export default Card;
