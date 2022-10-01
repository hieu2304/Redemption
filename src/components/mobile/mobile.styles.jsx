import { Box, Container, styled, Typography } from '@mui/material';

export const Paragraph1Styled = styled(Typography)({
    color: '#B5B5BE',
    letterSpacing: '-0.005px',
    fontSize: '1rem',
    lineHeight: '1.5rem'
});
export const Paragraph3Styled = styled(Typography)({
    color: '#B5B5BE',
    letterSpacing: '-0.5px',
    fontSize: '0.875rem',
    lineHeight: '1.25rem'
});
export const Header1Styled = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    color: theme.palette.primary.main,
    fontSize: '3rem',
    lineHeight: '3.5rem'
}));

export const Title1Styled = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    color: theme.palette.primary.main,
    fontSize: '1.125rem',
    lineHeight: '1.5rem'
}));
export const Title2Styled = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    color: theme.palette.secondary.main,
    fontSize: '1rem',
    lineHeight: '1.5rem'
}));

export const ContainerStyled = styled(Container)(({ theme }) => ({
    padding: theme.spacing(0, 3)
}));
