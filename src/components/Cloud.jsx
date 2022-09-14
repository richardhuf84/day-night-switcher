import React from 'react';
import { ReactComponent as CloudLight } from '../svg/cloudLight.svg';
import { ReactComponent as CloudDark } from '../svg/cloudDark.svg';
import { ReactComponent as Sun } from '../svg/sun.svg';
import { ReactComponent as Moon } from '../svg/moon.svg';
import styled from '@emotion/styled';

const StyledCanvas = styled.div({

});

const celestialBodyStyles = `
  transform: translateY(-40px) translateX(180px);
  position: relative;
  z-index: 1;
  animation: CelestialBody 400ms ease-in forwards alternate;

  @keyframes CelestialBody {
    0% {
      transform: translateY(0) translateX(170px);
    },
    90% {
      transform: translateY(-50px) translateX(170px);
    },
    100% {
      transform: translateY(-40px) translateX(170px);
    }
  }
`;

const StyledSun = styled(Sun)`
${celestialBodyStyles}`;

const StyledMoon = styled(Moon)`
${celestialBodyStyles}`;

const StyledCloudLight = styled(CloudLight)`
  position: relative;
  z-index: 2;
`;
const StyledCloudDark = styled(CloudDark)`
  position: relative;
  z-index: 2;
`;

export const Cloud = ({ mode = 'day' }) => (
  <>
    {mode === 'day' &&
      <StyledCanvas>
        <StyledSun />
        <StyledCloudLight />
      </StyledCanvas>
    }
    {mode === 'night' &&
      <StyledCanvas>
        <StyledMoon />
        <StyledCloudDark />
      </StyledCanvas>
    }
  </>
)