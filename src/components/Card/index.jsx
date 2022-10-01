import React from 'react';
import SvgIcon from '../SvgIcon/SvgIcon';
import { CardContent, CardDescription, CardImage, CardInsufficient, CardTitle, CardTitleWrapper, CardWrapper } from './Card.styles';
import Ins from '../../assets/icons/ins.svg';

function Card({ totalCoins, imgSrc, description, insufficient }) {
    return (
        <CardWrapper>
            <CardImage src={imgSrc} alt="" />
            <CardContent>
                <CardTitleWrapper>
                    {insufficient && <SvgIcon imgSrc={Ins} />}
                    <CardTitle insufficient={insufficient}>{totalCoins} Coins</CardTitle>
                </CardTitleWrapper>
                <CardDescription>{description}</CardDescription>
                {insufficient && <CardInsufficient>Insufficient coins</CardInsufficient>}
            </CardContent>
        </CardWrapper>
    );
}

export default Card;
