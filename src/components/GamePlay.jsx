import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import { styled } from 'styled-components'
import RoleDice from './RoleDice'
import {Button , OutlineButton} from "../styled/Button";
import Rules from './Rules'

const GamePlay = () => {
 
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("")
  const [rules, setRules] = useState(false)

  const GenerateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if(!selectedNumber) {
      setError("you have not selected any number")
      return;
    };

    const randomNumber = GenerateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber)
   

    if(selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0)
  }



  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice}/>
      <div className="btns">
        <OutlineButton onClick={resetScore}>reset</OutlineButton>
        <Button
          onClick={() => setRules((prev) => !prev)}
        >{rules ? "Hide" : "Show"} rules</Button>
        {rules && <Rules/>}
      </div>
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
width: 100%;
height: 110vh;
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  @media only screen and (max-width: 700px) {
    .top_section{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }
  }
`;
