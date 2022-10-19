import React from "react";
import {
    Badge,
    CBottom,
    CBottomTitle,
    Colors,
    ColorTitle,
    Price,
    Size,
    Sizes,
    SizeTitle,
    Stars,
    Title,
} from "./style";
import { AiFillStar } from "react-icons/ai";
const CardBottom = ({ currentColor, setCurrentColor }) => {
    return (
        <CBottom>
            <CBottomTitle>React 55</CBottomTitle>
            <Badge>New</Badge>
            <Title>Running Collections</Title>
            <Stars>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </Stars>
            <Size>
                <SizeTitle>Size</SizeTitle>
                <Sizes>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </Sizes>
            </Size>
            <div className="color">
                <ColorTitle>Color</ColorTitle>
                <Colors>
                    <div className="color-1" onClick={()=> setCurrentColor(1)}></div>
                    <div className="color-2" onClick={()=> setCurrentColor(2)}></div>
                </Colors>
            </div>
            <Price currentColor={currentColor}>
                <span>Usd</span>
                <span>350,00</span>
            </Price>
        </CBottom>
    );
};

export default CardBottom;
