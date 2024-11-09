import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3,customer36, customer37, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#customize", label: "Customized Feature" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '500+', label: 'Clothes' },
    { value: '100+', label: 'Design' },
    { value: '2000+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Cosmos Neck Sweatshirt",
        price: "Rs 1600",
    },
    {
        imgURL: shoe5,
        name: "Duck Down Jacket Casual",
        price: "Rs 2210.20",
    },
    {
        imgURL: shoe6,
        name: "Decrum Leather Jacket ",
        price: "Rs 3220",
    },
    {
        imgURL: shoe7,
        name: "Ultra Light Down Jacket ",
        price: "Rs 2300",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer36,
        customerName: 'Sijan Shrestha',
        rating: 4.7,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer37,
        customerName: 'Ritesh Gyawali',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Down Jacket", link: "https://youtu.be/y99YgaQjgx4?si=Z-DV2FEovIyyMpS9" },
            { name: "Half down", link: "/" },
            { name: "Drawstring casual", link: "/" },
            { name: "Decrum Leather Jacket", link: "/" },
            { name: "Ultra Light Down Jacket", link: "/" },
            { name: "Pink Hoodie", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@cusmos.com", link: "/" },
            { name: "+977 9867711296", link: "tel:+9867711296" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
