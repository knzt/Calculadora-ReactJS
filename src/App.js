import Input from "./components/Input";
import Button from "./components/Buttons/Button";
import DelButton from "./components/Buttons/DelButton";
import OperatorButton from "./components/Buttons/OperatorButton";
import EqualButton from "./components/Buttons/EqualButton";

import { Container, Content, Row } from "./styles";
import { useState } from "react";



const App = () => {

  const [currentNumber, setCurrentNumber] = useState('');

  const [firstNumber, setFirstNumber] = useState('0');

  const handleClear = () => {
    setCurrentNumber('');
    setFirstNumber('0');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev}${number}` );
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(sum.toString());
    }
  }

  return (
    <Container>

      <Content >

        <Input value={currentNumber} />

        <Row>
          <OperatorButton label="+" onClick={handleSumNumbers}/>
          <OperatorButton label="-" onClick={() => handleAddNumber('-')}/>
          <OperatorButton label="x" onClick={() => handleAddNumber('x')}/>
          <OperatorButton label="/" onClick={() => handleAddNumber('/')}/>
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <EqualButton label="=" onClick={() => handleAddNumber('')}/>
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <DelButton label="DEL" onClick={handleClear}/>
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>

      </Content>

    </Container>
  );
}

export default App;
