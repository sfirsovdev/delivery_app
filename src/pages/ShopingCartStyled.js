import styled from 'styled-components';


export const FormList = styled.div`
    margin-top: ${p => p.theme.space[6]}px;
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[4]}px;
    width: 40%;
    border: black solid 2px;
    border-radius: ${p => p.theme.radii.normal};
`;

export const FormInput = styled.div`
    margin-bottom: ${p => p.theme.space[5]}px;
    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
    text-align: center;
    width: 90%;
    border: black solid 2px;
    border-radius: ${p => p.theme.radii.normal};
`;