import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  return (
      <Wrapper>
        <NativeSelecter value={value} onChange={onChange}>
          {children}
        </NativeSelecter>
        <PrestationalBit>
          {displayedValue} <ChevronIcon id="chevron-down" strokeWidth={2} size={24} />
        </PrestationalBit>
      </Wrapper>
  )
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelecter = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const PrestationalBit = styled.div`
  font-size: 1rem;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 36px 12px 16px;
  color: ${COLORS.gray700};
  border-radius: 8px;
  border: transparent;
  width: fit-content;
  font-family: 'Roboto';

  ${NativeSelecter}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;


const ChevronIcon = styled(Icon)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  color: ${COLORS.gray700};
  margin-right: 8px;
  pointer-events: none;
`;



export default Select;
