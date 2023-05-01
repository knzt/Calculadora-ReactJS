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

  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber('');
    setFirstNumber('0');
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev}${number}` );
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setOperation('+');
      setCurrentNumber(currentNumber + '+');
    } else {
      // para eliminar o caractere de currenteNumber
      const index = currentNumber.indexOf('+');
      const currentNumberWithoutOperator = Number(currentNumber.substring(index + 1));
      const sum = Number(firstNumber) + currentNumberWithoutOperator;
      setCurrentNumber(sum.toString());
      setFirstNumber(sum.toString());
      setOperation('');
    }
  }

  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setOperation('-');
      setCurrentNumber(currentNumber + '-');
    } else {
      const index = currentNumber.indexOf('-');
      const currentNumberWithoutOperator = Number(currentNumber.substring(index + 1));
      const sub = Number(firstNumber) - currentNumberWithoutOperator;
      setCurrentNumber(sub.toString());
      setFirstNumber(sub.toString());
      setOperation('');
    }
  }

  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setOperation('*');
      setCurrentNumber(currentNumber + "x");
    } else {
      const index = currentNumber.indexOf('x');
      const currentNumberWithoutOperator = Number(currentNumber.substring(index + 1));
      const mul = Number(firstNumber) * currentNumberWithoutOperator;
      setCurrentNumber(mul.toString());
      setFirstNumber(mul.toString());
      setOperation('');
    }
  }

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setOperation('/');
      setCurrentNumber(currentNumber + '/');
    } else {
      const index = currentNumber.indexOf('/');
      const currentNumberWithoutOperator = Number(currentNumber.substring(index + 1));
      const divide = Number(firstNumber) / currentNumberWithoutOperator;
      setCurrentNumber(divide.toString());
      setFirstNumber(divide.toString());
      setOperation('');
    }
  }


  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleSubNumbers();
          break;

        case '*':
            handleMultNumbers();
          break;

        case '/':
            handleDivideNumbers();
          break;

        default: break;
      }
    }
  }

  return (
    <Container>

      <Content >

        <Input value={currentNumber} />

        <Row>
          <OperatorButton label="+" onClick={handleSumNumbers}/>
          <OperatorButton label="-" onClick={handleSubNumbers}/>
          <OperatorButton label="x" onClick={handleMultNumbers}/>
          <OperatorButton label="/" onClick={handleDivideNumbers}/>
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <EqualButton label="=" onClick={handleEquals}/>
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
