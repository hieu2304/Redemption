import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import FoodImage1 from '../../../assets/images/food-1.jpg';
import FoodImage2 from '../../../assets/images/food-2.jpg';
import PetroImage1 from '../../../assets/images/petrol-1.jpg';
import PetroImage2 from '../../../assets/images/petrol-2.jpg';
import RentalImage1 from '../../../assets/images/rental-1.jpg';
import RentalImage2 from '../../../assets/images/rental-2.jpg';
import Card from '../../Card';
import { BankItem, BankItemTitle, BankWrapper } from './BankSection.styles';

const banks = [
    {
        title: 'Petrol',
        items: [
            {
                totalCoins: 15,
                image: PetroImage1,
                description: '50% discount for every $100 top-up on your Shell Petrol Card',
                insufficient: false
            },
            {
                totalCoins: 1000,
                image: PetroImage2,
                description: '70% discount top-up on your Shell Petrol Card',
                insufficient: true
            },
            {
                totalCoins: 15,
                image: PetroImage1,
                description: '50% discount for every $100 top-up on your Shell Petrol Card',
                insufficient: false
            },
            {
                totalCoins: 1000,
                image: PetroImage2,
                description: '70% discount top-up on your Shell Petrol Card',
                insufficient: true
            }
        ]
    },
    {
        title: 'Rental Rebate',
        items: [
            {
                totalCoins: 20,
                image: RentalImage1,
                description: 'Get $20 Rental rebate',
                insufficient: false
            },
            {
                totalCoins: 15,
                image: RentalImage2,
                description: 'Get $500 Rental rebate',
                insufficient: false
            },
            {
                totalCoins: 20,
                image: RentalImage1,
                description: 'Get $20 Rental rebate',
                insufficient: false
            },
            {
                totalCoins: 15,
                image: RentalImage2,
                description: 'Get $500 Rental rebate',
                insufficient: false
            }
        ]
    },
    {
        title: 'Food and Beverage',
        items: [
            {
                totalCoins: 25,
                image: FoodImage1,
                description: 'NTUC Fairprice $50 Voucher',
                insufficient: false
            },
            {
                totalCoins: 5,
                image: FoodImage2,
                description: 'Free Cold Stone Sundae at any flavour!',
                insufficient: false
            },
            {
                totalCoins: 25,
                image: FoodImage1,
                description: 'NTUC Fairprice $50 Voucher',
                insufficient: false
            },
            {
                totalCoins: 5,
                image: FoodImage2,
                description: 'Free Cold Stone Sundae at any flavour!',
                insufficient: false
            }
        ]
    }
];

function BankSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };
    return (
        <BankWrapper>
            {banks.map((bank, idx) => (
                <BankItem key={idx}>
                    <BankItemTitle>{bank.title}</BankItemTitle>
                    <Slider {...settings}>
                        {bank.items.map((item, idx) => (
                            <Card
                                key={idx}
                                totalCoins={item.totalCoins}
                                imgSrc={item.image}
                                description={item.description}
                                insufficient={item.insufficient ? 1 : undefined}
                            />
                        ))}
                    </Slider>
                </BankItem>
            ))}
        </BankWrapper>
    );
}

export default BankSection;
