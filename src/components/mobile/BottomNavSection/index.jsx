import { Badge, BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';
import CardIcon from '../../../assets/icons/card.svg';
import HomeIcon from '../../../assets/icons/home.svg';
import NotificationIcon from '../../../assets/icons/notification.svg';
import UserIcon from '../../../assets/icons/user.svg';
import SvgIcon from '../../SvgIcon/SvgIcon';
import { ContainerStyled } from '../mobile.styles';
import { BottomNavWrapper } from './BottomNavSection.styles';

function BottomNavSection() {
    return (
        <BottomNavWrapper>
            <ContainerStyled>
                <BottomNavigation>
                    <BottomNavigationAction label="Home" icon={<SvgIcon imgSrc={HomeIcon} />} />
                    <BottomNavigationAction
                        label="Notification"
                        icon={
                            <Badge
                                badgeContent={1}
                                color="error"
                                sx={{
                                    '& .MuiBadge-badge': {
                                        top: 7,
                                        right: 7
                                    }
                                }}
                            >
                                <SvgIcon imgSrc={NotificationIcon} />
                            </Badge>
                        }
                    />
                    <BottomNavigationAction label="Card" icon={<SvgIcon imgSrc={CardIcon} />} />
                    <BottomNavigationAction label="User" icon={<SvgIcon imgSrc={UserIcon} />} />
                </BottomNavigation>
            </ContainerStyled>
        </BottomNavWrapper>
    );
}

export default BottomNavSection;
