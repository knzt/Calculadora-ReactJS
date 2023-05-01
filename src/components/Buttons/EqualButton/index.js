import { EqualButtonContainer } from "./styles";

const EqualButton = ({label, onClick}) => {
    return (
      <EqualButtonContainer onClick={onClick}>
        {label}
      </EqualButtonContainer>
    );
  }

  export default EqualButton;
