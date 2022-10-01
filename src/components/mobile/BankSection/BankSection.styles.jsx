import { Box, Container, styled } from '@mui/material';
import { Title1Styled } from '../mobile.styles';

export const BankWrapper = styled(Container)(({ theme }) => ({
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: 0,
        margin: 0
    }
}));

export const BankItem = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(6)
}));

export const BankItemTitle = styled(Title1Styled)(({ theme }) => ({
    display: 'block',
    marginBottom: theme.spacing(3)
}));

export const ContainerStyled = styled(Container)(({ theme }) => ({
    padding: theme.spacing(0, 3)
}));
