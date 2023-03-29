/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    borderRadius: '4px',
    height: '8px',
    padding: '0px',
  },
  medium: {
    borderRadius: '4px',
    height: '12px',
    padding: '0px',
  },
  large: {
    borderRadius: '8px',
    height: '24px',
    padding: '4px',
  }
}

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper size={size}>
      <BarClipper>
        <Bar value={value}></Bar>
        <VisuallyHidden>Progress at {value} %</VisuallyHidden>
      </BarClipper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  height: ${props => SIZES[props.size].height};
  background-color: ${COLORS.transparentGray15};
  border-radius: ${props => SIZES[props.size].borderRadius};
  padding: ${props => SIZES[props.size].padding};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const BarClipper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: transparent;
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${props => props.value}%;
  height: 100%;
`;

const SmallWrapper = styled(Wrapper)`
  padding: 0px;
`;

export default ProgressBar;
