import React from 'react';
import { ReactComponent as CloudLight } from '../svg/cloudLight.svg';
import { ReactComponent as CloudDark } from '../svg/cloudDark.svg';
import { ReactComponent as Sun } from '../svg/sun.svg';
import { ReactComponent as Moon } from '../svg/moon.svg';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledCanvas = styled.div({

});

const StyledSun = styled(Sun)`
  transform: translateY(-40px) translateX(180px);
  position: relative;
  z-index: 1;
`;
const StyledMoon = styled(Moon)`
  transform: translateY(-40px) translateX(180px);
  position: relative;
  z-index: 1;
`;
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