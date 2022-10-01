import { Box, styled, Typography } from '@mui/material';

export const BannerWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    background: theme.palette.primary.main,
    height: 428,
    paddingTop: theme.spacing(3)
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: '2rem',
    lineHeight: '2.5rem',
    color: '#fff',
    marginBottom: theme.spacing(1)
}));

export const CircleButton = styled('button')({
    background: '#fff',
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%'
});
