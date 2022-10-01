/* eslint-disable import/prefer-default-export */
import { Box, styled, Typography } from '@mui/material';

export const CardWrapper = styled(Box)(({ theme }) => ({
    width: 200,
    height: '100%',
    border: ' 1px solid #F1F1F5',
    boxShadow: ' 0px 12px 18px rgba(23, 23, 37, 0.04)',
    borderRadius: 4,
    background: '#fff',
    marginRight: theme.spacing(3),
    overflow: 'hidden'
}));
export const CardTitleWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    '& img': {
        marginRight: theme.spacing(0.5)
    }
}));
export const CardContent = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2)
}));

export const CardImage = styled('img')({
    height: 98,
    width: '100%'
});
export const CardTitle = styled(Typography)(({ theme, insufficient }) => ({
    fontWeight: 600,
    color: insufficient ? '#696974' : theme.palette.secondary.main,
    fontSize: '1rem',
    lineHeight: '1.5rem'
}));

export const CardDescription = styled(Typography)({
    color: '#B5B5BE',
    letterSpacing: '-0.005px',
    fontSize: '1rem',
    lineHeight: '1.5rem'
});
export const CardInsufficient = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    letterSpacing: '-0.5px',
    fontSize: '0.875rem',
    lineHeight: '1.25rem'
}));
