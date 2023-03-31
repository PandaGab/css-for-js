import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14,
    lineWidth: 1,
  },
  large: {
    fontSize: 18,
    lineWidth: 2,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const styles = SIZES[size];

  return (
    <Wrapper style={{ '--width': width + 'px', '--line-width': styles.lineWidth + 'px'}}>
      <InputText style={{ '--font-size': (styles.fontSize / 16) + 'rem' }} placeholder={placeholder} />
      <IconWrapper>
        <Icon id={icon} size={styles.fontSize * 1.125 + 'px'} strokeWidth={1} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--width);
  border-bottom: var(--line-width) solid ${COLORS.black};
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  height: 1rem;
  pointer-events: none;
`;

const InputText = styled.input`
  font-size: var(--font-size);
  padding: 4px;
  padding-left: 28px;
  border: none;
  width: inherit;
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 4px;
  }
`;

export default IconInput;
