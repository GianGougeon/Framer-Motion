import React, { useState } from "react";
import { useMotionValue, useTransform } from "framer-motion";
import {
    Wrapper,
    Container,
    CardWrapper,
    Card,
    CTop,
    Logo,
    CTopText,
    CTopTitle,
    Description,
    Shoes,
    ShoesOne,
    ShoesTwo,
} from "./style";
import Brand from "./assets/brand.png";
import Shoes_One from "./assets/ShoesOne.png";
import Shoes_Two from "./assets/ShoesTwo.png";
import CardBottom from "./CardBottom";
const CardAnimation2 = () => {
    const [currentColor, setCurrentColor] = useState(1);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [30, -30]);

    // shoe animate

    const variants = {
        default: {
            translateX: 0,
            rotateZ: 0,
        },
        firstShoeAnimation: {
            translateX: -700,
            rotateZ: 45,
        },
        secondShoeAnimation: {
            translateX: -400,
            rotateZ: -45,
        },
    };
    return (
        <>
            <Wrapper>
                <Container>
                    <CardWrapper
                        style={{ x, y, rotateX, rotateY, z: 100 }}
                        drag
                        dragConstraints={{
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                        }}
                        dragElastic={0.16}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        <Card>
                            <CTop currentColor={currentColor}>
                                <Logo src={Brand.src} alt="logo" />
                                <CTopText>
                                    <CTopTitle>React 55</CTopTitle>
                                    <Description>
                                        The Nike React Element 55 SE is a
                                        balanced blend of classic design and
                                        forword-looking innovation.
                                    </Description>
                                </CTopText>
                                <Shoes
                                    style={{ x, y, rotateX, rotateY, z: 10000 }}
                                >
                                    <ShoesOne
                                        src={Shoes_One.src}
                                        alt="shoe-1"
                                        animate={
                                            currentColor === 2
                                                ? variants.firstShoeAnimation
                                                : variants.default
                                        }
                                        variants={variants}
                                    />
                                    <ShoesTwo
                                        src={Shoes_Two.src}
                                        alt="shoe-2"
                                        animate={
                                            currentColor === 2
                                                ? variants.secondShoeAnimation
                                                : variants.default
                                        }
                                        variants={variants}
                                    />
                                </Shoes>
                            </CTop>
                            <CardBottom
                                currentColor={currentColor}
                                setCurrentColor={setCurrentColor}
                            />
                        </Card>
                    </CardWrapper>
                </Container>
            </Wrapper>
        </>
    );
};

export default CardAnimation2;
