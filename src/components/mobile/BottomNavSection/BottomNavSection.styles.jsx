/* eslint-disable import/prefer-default-export */
import { Box, styled } from '@mui/material';

export const BottomNavWrapper = styled(Box)(({ theme }) => ({
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    background: '#fff',
    borderTop: '2px solid #E2E2EA'
}));
