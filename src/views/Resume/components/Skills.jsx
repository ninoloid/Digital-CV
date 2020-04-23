import React from 'react';
import Card from './Card'
import { skills } from './Data'

const Skills = () => {
  const CardItem = () => skills.map((skill, index) => <Card skill={skill} key={index} />)

  return (
    <div className="skills" data-aos="fade-down" style={{ textAlign: "center" }}>
      <h1>SKILLS</h1>
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

export default Skills;
