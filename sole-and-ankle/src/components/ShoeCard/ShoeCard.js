import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const STYLES = {
  'on-sale': {
    '--background-color': COLORS.secondary,
    text: 'Sale'
  },
  'new-release': {
    '--background-color': COLORS.primary,
    text: 'Just Released!'
  },
}

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const priceColor = (variant === 'on-sale') ? COLORS.gray[700] : COLORS.gray[900];
  const priceTextDecoration = (variant === 'on-sale') ? 'line-through' : null;
    
  return (
    <Wrapper>
      <Link href={`/shoe/${slug}`}>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price style={{'--color': priceColor, '--text-decoration': priceTextDecoration}}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {variant === 'on-sale' ? (
          <SalePrice children={formatPrice(salePrice)}/> 
          ) : undefined}
        </Row>
      </Link>
      {(variant != 'default') ? <Banner style={STYLES[variant]}>{STYLES[variant].text}</Banner> : null}
    </Wrapper>
  );
};

const Banner = styled.label`
  position: absolute;
  padding: 8px;
  right: 0;
  top: 0;
  background-color: var(--background-color);
  border-radius: 2px;
  margin-top: 12px;
  margin-right: -4px;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
  display: flex;
  flex: 1 1 340px;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  color: var(--color);
  text-decoration: var(--text-decoration);
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
