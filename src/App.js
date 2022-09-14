import { Cloud } from './components/Cloud';
import styled from '@emotion/styled';
import { useState } from 'react';

const backgroundColors = {
  day: '#B7E2FA',
  night: '#09293C'
}

const Background = styled.section`
  background-color: ${props => (backgroundColors[props.mode])};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 100ms ease;
  padding: 2rem;
  min-height: 100vh;
`;

const Controls = styled.fieldset`
  border: none;
  color: ${props => props.mode === 'day' ? 'black' : 'white'};
`;

const App = () => {
  const [mode, updateMode] = useState('day')

  const toggleMode = (newMode) => {
    updateMode(newMode)
  }

  return (
    <Background mode={mode}>
      <Controls mode={mode}>
        <label htmlFor="input-day">Day</label>
        <input type="radio" id="input-day" onChange={(event) => toggleMode('day')} checked={mode === 'day'} />
        <label htmlFor="input-night">Night</label>
        <input type="radio" name="mode" id="input-night" onChange={(event) => toggleMode('night')} checked={mode === 'night'} />
      </Controls>

      <Cloud mode={mode} />
    </Background>
  );
}

export default App;
