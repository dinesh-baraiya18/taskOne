import React, { useState } from "react";
import styled from "styled-components";

const HeadTail = () => {
  const [selectedVal, setSelectedVal] = useState("");
  const [head, setHead] = useState([]);
  const [tail, setTail] = useState([]);

  const handleSelect = (e) => {
    setSelectedVal(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedVal === "") {
      alert("Please select a valid value ");
      return;
    } else if (selectedVal === "H") {
      setHead([...head, selectedVal]);
    } else if (selectedVal === "T") {
      setTail([...tail, selectedVal]);
    }

    setSelectedVal("");
  };

  return (
    <Section className="head-tail-section">
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <select onChange={handleSelect} value={selectedVal}>
            <option value="">Select value</option>
            <option value="H">H</option>
            <option value="T">T</option>
          </select>

          <button type="submit" className="btn" onClick={handleSubmit}>
            submit
          </button>
        </form>
        <div style={{ marginTop: "20px", display: "flex" }}>
          <div>
            {head.map((value, i) => (
              <p key={i}>{value}</p>
            ))}
          </div>
          <div>
            {tail.map((value, i) => (
              <p key={i}>{value}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeadTail;

const Section = styled.section``;
