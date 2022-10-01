import React from 'react';
import AngleLeftIcon from '../../../assets/icons/angle-left.svg';
import SvgIcon from '../../SvgIcon/SvgIcon';
import { ContainerStyled, Paragraph1Styled } from '../mobile.styles';
import { BannerTitle, BannerWrapper, CircleButton } from './BannerSection.styles';

function BannerSection() {
    return (
        <BannerWrapper>
            <ContainerStyled>
                <CircleButton sx={{ mb: 2 }}>
                    <SvgIcon imgSrc={AngleLeftIcon} />
                </CircleButton>
                <BannerTitle>Silver Tier</BannerTitle>
                <Paragraph1Styled>
                    In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.
                </Paragraph1Styled>
            </ContainerStyled>
        </BannerWrapper>
    );
}

export default BannerSection;
