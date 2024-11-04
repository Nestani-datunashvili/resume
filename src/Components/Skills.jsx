import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";
import "./Skills.css";
import pen from "../Assets/pen.png";
import fixedRange from "../Assets/range.png";

const Skills = () => {
  const [click, setClick] = useState(false);

  const [inputText, setInputText] = useState("");
  const [inputRange, setInputRange] = useState(0);
  const [skills, setSkills] = useState([]);

  const handleClick = () => {
    setClick(!click);
  };

  // save local Storage
  useEffect(() => {
    const savedSkills = localStorage.getItem("skills");
    if (savedSkills) {
      setSkills(JSON.parse(savedSkills));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  // inputs values
  const handleInputValue = (e) => {
    setInputText(e.target.value);
  };

  const handleInputRangeChange = (e) => {
    setInputRange(Number(e.target.value));
  };

  // add skills
  const handleSkillAdd = (e) => {
    e.preventDefault();
    const newSkill = { text: inputText, range: inputRange };
    setSkills([...skills, newSkill]);
    setInputText("");
    setInputRange(0);
  };

  // slider change
  const handleSliderChange = (index, newValue) => {
    const updatedSkills = skills.map((skill, i) =>
      i === index ? { ...skill, range: newValue } : skill
    );
    setSkills(updatedSkills);
  };

  // delete skills
  const handleDeleteSkill = (index) => {
    const updatedSkills = [...skills];

    updatedSkills.splice(index, 1);

    setSkills(updatedSkills);
  };

  return (
    <div className="skills" id="skills">
      <div className="skills-title">
        <h3>Skills</h3>
        <button className="button edit-btn" onClick={handleClick}>
          <img src={pen} alt="pen-icon" /> Open edit
        </button>
      </div>
      <div className="skill-box">
        {click && (
          <div>
            <div className="input-field">
              <form onSubmit={handleSkillAdd}>
                <div className="input">
                  <label htmlFor="">Skill name:</label>
                  <input
                    type="text"
                    placeholder="Enter skill name"
                    value={inputText}
                    onChange={handleInputValue}
                  />
                </div>

                <div className="input">
                  <label htmlFor="range"> Skillrange:</label>
                  <input
                    id="range"
                    type="number"
                    placeholder="Enter skill range"
                    value={inputRange}
                    onChange={handleInputRangeChange}
                  />
                </div>
                <button type="submit" className="button edit-btn add-skill">
                  Add Skill
                </button>
              </form>
            </div>
          </div>
        )}
        <ul>
          {skills.map((skill, index) => (
            <li className="range-slider" key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                  position: "relative",
                  sx: { padding: 0 },
                }}
              >
                <div className="skill-details">
                  <span className="skill-text">{skill.text}</span>
                  <button
                    className="delete"
                    onClick={() => handleDeleteSkill(index)}
                    aria-label="Delete"
                  >
                    X
                  </button>
                  <Slider
                    value={skill.range}
                    onChange={(e, newValue) =>
                      handleSliderChange(index, newValue)
                    }
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    sx={{ ml: 2, width: 970 }}
                    disabled
                  />
                </div>
              </Box>
            </li>
          ))}
        </ul>
        <img className="range" src={fixedRange} alt="ranges" />
      </div>
    </div>
  );
};

export default Skills;
