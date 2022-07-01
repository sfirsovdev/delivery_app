import styled from 'styled-components';

export const ShopsContainer = styled.div`
text-align: center;
float: left;
width: 30%;
margin-top: ${p => p.theme.space[4]}px;
margin-bottom: ${p => p.theme.space[6]}px;
padding: ${p => p.theme.space[4]}px;
border-radius: ${p => p.theme.radii.normal};
box-shadow: 2px 3px 15px 1px ${p => p.theme.colors.accent};
`;

export const ShopName = styled.div`
text-align: center;
margin-top: ${p => p.theme.space[6]}px;
margin-bottom: ${p => p.theme.space[5]}px;
padding: ${p => p.theme.space[4]}px;
border-radius: ${p => p.theme.radii.normal};
box-shadow: 2px 3px 15px 1px ${p => p.theme.colors.accent};
cursor: pointer;
`;


