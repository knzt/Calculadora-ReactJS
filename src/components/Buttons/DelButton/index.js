import { DelButtonContainer } from "./styles";

const DelButton = ({label, onClick}) => {
    return (
      <DelButtonContainer onClick={onClick}>
        {label}
      </DelButtonContainer>
    );
  }

  export default DelButton;
