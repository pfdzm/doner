import React, { useState } from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: papayawhip;
  font-family: "Roboto";
  padding: 2rem;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function Index() {
  const [name, setName] = useState("Next.js");

  const handleInput = event => {
    setName(event.target.value);
  };

  return (
    <div>
      <Background>
        <Title>Hello {name}</Title>
        <input value={name} onChange={handleInput} />
      </Background>
    </div>
  );
}
