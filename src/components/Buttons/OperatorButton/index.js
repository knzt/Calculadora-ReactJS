import { OperatorButtonContainer } from "./styles";

const OperatorButton = ({label, onClick}) => {
    return (
      <OperatorButtonContainer onClick={onClick}>
        {label}
      </OperatorButtonContainer>
    );
  }

  export default OperatorButton;
