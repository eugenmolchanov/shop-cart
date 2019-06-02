import AppleImage from "../image/apple.svg";
import IceCreamImage from "../image/ice-cream.svg";
import BreadImage from "../image/bread.svg";
import MilkImage from "../image/milk.svg";

const initialState = [
    MilkImage,
    BreadImage,
    AppleImage,
    IceCreamImage
];


export default function (state = initialState) {
    return state;
}