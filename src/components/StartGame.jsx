import styled from "styled-components";
import {Button} from "../styled/Button";
import redDices from "/images/redDices.png"

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div className="diceImg">
        <img src={redDices} alt="dice" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    align-items: center;
    gap: 80px;
    justify-content: center;
    

    

    .content h1{
      font-size: 96px;
      white-space: nowrap;
      color: white;
    }

    @media only screen and (max-width: 700px) {
      flex-direction: column;
      
      .diceImg img{
        width: 400px;
        object-fit: contain;
      }
      
      .content h1{
        font-size: 60px;
      }
    }
`;

