import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Box from '@mui/material/Box';

// ========================= || Section || ========================= //
import BannerSection from './BannerSection';
import BottomNavSection from './BottomNavSection';
import CouponSection from './CouponSection';
import BankSection from './BankSection';

function Mobile() {
    return (
        <Box mb="56px">
            <BannerSection />
            <CouponSection />
            <BankSection />
            <BottomNavSection />
        </Box>
    );
}

export default Mobile;
