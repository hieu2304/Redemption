import { Box, Button, LinearProgress, styled, Typography } from '@mui/material';

export const CouponWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
    margin: '-200px auto 24px',
    width: '40rem',
    maxWidth: '100%',
    padding: theme.spacing(0, 2)
}));

export const CouponTitle = styled(Typography)(({ theme }) => ({
    color: '#B5B5BE',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    fontWeight: 600,
    marginBottom: theme.spacing(2)
}));

export const CouponProgess = styled(LinearProgress)(({ theme }) => ({
    margin: theme.spacing(4, 0)
}));

export const CouponLink = styled('a')(({ theme }) => ({
    fontsize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '-0.005',
    color: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'flex-end',
    textDecoration: 'none',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    '& img': {
        padding: 6
    }
}));

export const CouponButton = styled(Button)(({ theme }) => ({
    height: 60,
    marginBottom: theme.spacing(2)
}));
export const CouponWrapperContent = styled(Box)(({ theme }) => ({
    background: '#fff',
    padding: theme.spacing(3),
    boxShadow: '0px 12px 18px rgba(23, 23, 37, 0.04)',
    border: '1px solid #FAFAFB',
    borderRadius: 8
}));
