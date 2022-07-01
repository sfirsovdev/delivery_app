import styled from 'styled-components';

export const McDonyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  float: right;
  width:60%;
  align-items: center;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 3px 15px 1px ${p => p.theme.colors.accent};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  flex-direction: column;
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.white};
`;

export const AvatarImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.accent};
`;

export const Name = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const TagName = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.accentText};
  :hover,
  :focus {
    color: ${p => p.theme.colors.text};
  }
`;

export const CartButton = styled.p`
    text-align: center;
    margin-top: ${p => p.theme.space[2]}px;
    margin-bottom: ${p => p.theme.space[2]}px;
    padding: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: 2px 3px 15px 1px ${p => p.theme.colors.accent};
    cursor: pointer;
`;


