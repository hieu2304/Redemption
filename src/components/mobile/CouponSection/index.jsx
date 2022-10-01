import React from 'react';
import { Header1Styled, Paragraph1Styled, Paragraph3Styled } from '../mobile.styles';
import { CouponButton, CouponLink, CouponProgess, CouponTitle, CouponWrapper, CouponWrapperContent } from './CouponSection.styles';

import AngleRightIcon from '../../../assets/icons/angle-right.svg';

function CouponSection() {
    return (
        <CouponWrapper>
            <CouponWrapperContent>
                <CouponTitle>Available Coin balance</CouponTitle>
                <Header1Styled>340</Header1Styled>
                <CouponProgess variant="determinate" value={50} color="secondary" />
                <Paragraph1Styled styles={{ color: '#92929D' }}>
                    You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
                </Paragraph1Styled>

                <CouponLink href="/">
                    <span>View tier benefits</span>
                    <img src={AngleRightIcon} alt="" />
                </CouponLink>
                <CouponButton variant="contained" fullWidth>
                    My Coupons
                </CouponButton>
                <Paragraph3Styled variant="body2" sx={{ textAlign: 'center' }}>
                    Updated : 02/11/2021
                </Paragraph3Styled>
            </CouponWrapperContent>
        </CouponWrapper>
    );
}

export default CouponSection;
