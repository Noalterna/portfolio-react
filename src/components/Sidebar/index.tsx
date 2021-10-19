import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu, MailLink} from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ="/about">
                        About
                    </SidebarLink>
                    <SidebarLink to ="/resume.pdf">
                        Resume
                    </SidebarLink>
                    <MailLink href ="mailto:adalucz13@gmail.com" target="_blank">
                        adalucz13@gmail.com
                    </MailLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
