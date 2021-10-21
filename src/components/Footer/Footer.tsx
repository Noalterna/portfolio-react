import React from 'react'
import { BehanceOutlined, LinkedinOutlined, GithubOutlined} from '@ant-design/icons';
import {FooterContainer, Icon, IconWrapper} from './FooterElements';
import { expand, shrink } from '../../cursor';
import './footer.css';

const Footer = () => {
    return (
        <FooterContainer>
            <IconWrapper>
            <Icon href="https://www.behance.net/adalucz" target="_blank" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><BehanceOutlined className="social-icons" /></Icon>
            <Icon href="https://www.linkedin.com/in/adrianna%C5%82/" target="_blank" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><LinkedinOutlined className="social-icons" /></Icon>
            <Icon href="https://github.com/noalterna" target="_blank" onMouseEnter={() => expand()} onMouseLeave={() => shrink()}><GithubOutlined className="social-icons"  /></Icon>
            </IconWrapper>
        </FooterContainer>
    )
}

export default Footer
