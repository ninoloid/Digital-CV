import React from 'react';
import Work from './Work'
import { experiences } from './Data'

const Works = () => {
  const { works } = experiences
  const CardItem = () => works.map((work, index) => <Work work={work} key={index} />)

  return (
    <div className="works" data-aos="zoom-in" style={{ textAlign: "center" }}>
      <h1>WORK EXPERIENCES</h1>
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

export default Works;
