import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Ratings() {
  const [currentValue1, setCurrentValue1] = useState(0);
  const [currentValue2, setCurrentValue2] = useState(0);
  const [currentValue3, setCurrentValue3] = useState(0);
  const [currentValue4, setCurrentValue4] = useState(0);
  const [currentValue5, setCurrentValue5] = useState(0);
  const [currentValue6, setCurrentValue6] = useState(0);
  const [hoverValue1, setHoverValue1] = useState(undefined);
  const [hoverValue2, setHoverValue2] = useState(undefined);
  const [hoverValue3, setHoverValue3] = useState(undefined);
  const [hoverValue4, setHoverValue4] = useState(undefined);
  const [hoverValue5, setHoverValue5] = useState(undefined);
  const [hoverValue6, setHoverValue6] = useState(undefined);
  const webdevStars = Array(5).fill(0);

  const handleClick1 = (value) => {
    setCurrentValue1(value);
  };

  const handleMouseOver1 = (newHoverValue1) => {
    setHoverValue1(newHoverValue1);
  };

  const handleMouseLeave1 = () => {
    setHoverValue1(undefined);
  };

  const handleClick2 = (value) => {
    setCurrentValue2(value);
  };

  const handleMouseOver2 = (newHoverValue2) => {
    setHoverValue2(newHoverValue2);
  };

  const handleMouseLeave2 = () => {
    setHoverValue2(undefined);
  };

  const handleClick3 = (value) => {
    setCurrentValue3(value);
  };
  const handleMouseOver3 = (newHoverValue3) => {
    setHoverValue3(newHoverValue3);
  };

  const handleMouseLeave3 = () => {
    setHoverValue3(undefined);
  };

  const handleClick4 = (value) => {
    setCurrentValue4(value);
  };
  const handleMouseOver4 = (newHoverValue4) => {
    setHoverValue4(newHoverValue4);
  };

  const handleMouseLeave4 = () => {
    setHoverValue4(undefined);
  };

  const handleClick5 = (value) => {
    setCurrentValue5(value);
  };
  const handleMouseOver5 = (newHoverValue5) => {
    setHoverValue5(newHoverValue5);
  };

  const handleMouseLeave5 = () => {
    setHoverValue5(undefined);
  };

  const handleClick6 = (value) => {
    setCurrentValue6(value);
  };
  const handleMouseOver6 = (newHoverValue6) => {
    setHoverValue6(newHoverValue6);
  };

  const handleMouseLeave6 = () => {
    setHoverValue6(undefined);
  };

  const handleSubmit = () => {
    console.log(currentValue1);
    console.log(currentValue2);
    console.log(currentValue3);
    console.log(currentValue4);
    console.log(currentValue5);
    console.log(currentValue6);
  };

  return (
    <div className="container">
      <h6>Rate Yourself</h6>
      <ul>
        <li>
          <div style={styles.webdevStars}>
            <h5 style={{ marginRight: "10px" }}>Web Development</h5>
            {webdevStars.map((_, index1) => {
              return (
                <FaStar
                  key={index1}
                  size={24}
                  onClick={() => handleClick1(index1 + 1)}
                  onMouseOver={() => handleMouseOver1(index1 + 1)}
                  onMouseLeave={handleMouseLeave1}
                  color={
                    (hoverValue1 || currentValue1) > index1
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        </li>
        <li>
          <div style={styles.webdevStars}>
            <h5 style={{ marginRight: "10px" }}>App Development</h5>
            {webdevStars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick2(index + 1)}
                  onMouseOver={() => handleMouseOver2(index + 1)}
                  onMouseLeave={handleMouseLeave2}
                  color={
                    (hoverValue2 || currentValue2) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        </li>
        <li>
          <div style={styles.webdevStars}>
            <h5 style={{ marginRight: "10px" }}>Game Development</h5>
            {webdevStars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick3(index + 1)}
                  onMouseOver={() => handleMouseOver3(index + 1)}
                  onMouseLeave={handleMouseLeave3}
                  color={
                    (hoverValue3 || currentValue3) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        </li>
        <li>
          <div style={styles.webdevStars}>
            <h5 style={{ marginRight: "10px" }}>Competitive Programming</h5>
            {webdevStars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick4(index + 1)}
                  onMouseOver={() => handleMouseOver4(index + 1)}
                  onMouseLeave={handleMouseLeave4}
                  color={
                    (hoverValue4 || currentValue4) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        </li>
        <li>
          <div style={styles.webdevStars}>
            <h5 style={{ marginRight: "10px" }}>Data Analyst</h5>
            {webdevStars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick5(index + 1)}
                  onMouseOver={() => handleMouseOver5(index + 1)}
                  onMouseLeave={handleMouseLeave5}
                  color={
                    (hoverValue5 || currentValue5) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        </li>
        <li>
          <div style={styles.webdevStars}>
            <h5 style={{ marginRight: "10px" }}>Management</h5>
            {webdevStars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick6(index + 1)}
                  onMouseOver={() => handleMouseOver6(index + 1)}
                  onMouseLeave={handleMouseLeave6}
                  color={
                    (hoverValue6 || currentValue6) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        </li>
      </ul>

      <button style={styles.button} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

const styles = {
  webdevStars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 100,
    padding: 5,
  },
};
export default Ratings;
