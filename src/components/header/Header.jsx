import React from 'react';
import {
    Header,
    NavLink,
    Li,
} from './HeaderStyled';

export default function header () {
    return (
        <>
            <Header>
                <Li>
                    <NavLink to="/">Home</NavLink>
                </Li>n
                <Li>
                    <NavLink to="/shopingcart">Shoping Cart</NavLink>
                </Li>
            </Header>
        </>
    );
}
