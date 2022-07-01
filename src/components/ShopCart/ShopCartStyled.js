import styled from 'styled-components';

export const ShopCartContainer = styled.div`
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







