import styled from "styled-components"

const RoleDice = ({currentDice, roleDice}) => {


    

  return (
    <DiceContainer>
    <div className="dice"  onClick={roleDice}>
      <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1"  />
    </div>
    <p>Click on dice to play</p>
    </DiceContainer>
  )
}

export default RoleDice;


const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 300px;
    width: 300px;
  }
  .dice img{
    object-fit: contain;
  }

  p {
    font-size: 24px;
    color: white;
  }
`
