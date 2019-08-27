import React from 'react';
import {node, string, oneOfType} from 'prop-types';
import {Layout} from 'antd';

const AppContent = Layout.Content;
const Content = ({children, ...props})=> <AppContent {...props}>{children}</AppContent>;

Content.protoTypes = {
    children: oneOfType([node,string]),
};

export default Content;