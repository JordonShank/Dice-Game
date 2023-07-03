import styled from "styled-components";

const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber}) => {

    const arry = [1,2,3,4,5,6];

    const numberSelecterHandler = (val) => {
      setSelectedNumber(val);
      setError("");
    }
  
  
  return (
    <NumberSelectorContainer>
    <p className="error">{error}</p>
      <div className="flex">
        {arry.map((val, i) => 
          <Box 
            isSelected={val === selectedNumber}   
            key={i}   
            onClick={() => numberSelecterHandler(val) }> {val} </Box>)}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
    color: white;
  }
  .error {
    color: red;
  }
  @media only screen and (max-width: 700px){
    align-items: center;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "#CB0E0E" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  @media only screen and (max-width: 700px) {
    height: 40px;
    width: 40px;
  }
`;
