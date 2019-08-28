import React from 'react';
import {Layout} from 'antd';
import {css} from '@emotion/core';

const footerCls = css `
    text-align: center;
    background: #04070b;
    color: #fff;
`;

const AppFooter = Layout.Footer;

const Footer = ()=>(
    <AppFooter css={footerCls}>
         @2019 || Craft by Digital Artists Inc.
    </AppFooter>
);

export default Footer;