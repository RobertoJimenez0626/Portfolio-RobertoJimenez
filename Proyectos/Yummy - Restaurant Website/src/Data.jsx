import { BiMap } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";

import meal1 from "./assets/meal1.jpg";
import meal2 from "./assets/meal2.jpg";
import meal3 from "./assets/meal3.jpg";
import meal4 from "./assets/meal4.jpg";
import meal5 from "./assets/meal5.jpg";
import meal6 from "./assets/meal6.jpg";

import payment1 from "./assets/payment1.png";
import payment2 from "./assets/payment2.png";
import payment3 from "./assets/payment3.png";
import payment4 from "./assets/payment4.png";

export const heroIcons = [
  <CiBurger />,
  <FaIceCream />,
  <GiCakeSlice />,
  <GiBowlOfRice />,
];

export const meals = [
  {
    id: 1,
    image: meal1,
    name: "Sopa egipcia de lentejas rojas",
    ingredients: " Cebolla, ajo, zanahoria, calabaza, limón, tomate concentrado, lentejas rojas, cúrcuma, comino, cilantro, caldo de verduras, cilantro fresco, semillas de sésamo, especias, aceite de oliva, pimienta, sal",
    price: "$10",
  },
  {
    id: 2,
    image: meal2,
    name: "Yakisoba con carne y verduras",
    ingredients: " Noodles, cerdo ibérico, brócoli ocho arbolitos, puerro, setas, salsa de soja, caldo de verduras, katsuobushi (copos de atún deshidratado), pimiento verde italiano, aceite de oliva, aceite de sésamo",
    price: "$12",
  },
  {
    id: 3,
    image: meal3,
    name: "Merluza en salsa roja",
    ingredients: " Merluza en lomos, cebolla dulce, ajo, laurel, pulpa de pimiento, pimiento rojo asado, vino blanco, caldo de pescado, pimentón dulce, aceite de oliva, tomillo seco",
    price: "$17",
  },
  {
    id: 4,
    image: meal4,
    name: "Ensalada tailandesa",
    ingredients: " Zanahoria, pimiento rojo, cebolleta verde, col lombarda, cacahuetes, cilantro fresco, jengibre fresco, ajo, lima, salsa de soja baja en sal, mantequilla de cacahuete, aceite de sésamo, miel",
    price: "$18",
  },
  {
    id: 5,
    image: meal5,
    name: "Frittata mediterránea",
    ingredients: " Huevo, leche, tomate seco, apio, calabacín, champiñones pequeños, orégano seco, tomillo seco, ajo granulado, queso feta, perejil fresco, pimienta negra molida, sal, aceite de oliva, limón",
    price: "$20",
  },
  {
    id: 6,
    image: meal6,
    name: "Quinoa con verduras y huevo",
    ingredients: " Quinoa, cebolla, pimiento rojo, pimiento verde, zanahoria, calabacín, hierbas provenzales, huevo, sal, aceite de oliva",
    price: "$15",
  },
];

export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
export const footerContacts = [
  {
    id: 1,
    icon: <HiOutlinePhone />,
    text: "+000-000-000-000",
  },
  {
    id: 2,
    icon: <HiOutlineMail />,
    text: "ejemplo@gmail.com",
  },
  {
    id: 3,
    icon: <BiMap />,
    text: "CDMX, México",
  },
];

export const mainMenu = [
  {
    id: 1,
    href: "home",
    text: "Inicio",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: "about",
    text: "Acerca",
    icon: <MdExplore />,
  },
  {
    id: 3,
    href: "meal",
    text: "Platillos",
    icon: <GiBowlOfRice />,
  },
  {
    id: 4,
    href: "contact",
    text: "Contacto",
    icon: <MdContactPage />,
  },
];

export const explores = ["Bebidas", "Hamburguesas", "Ensaladas", "Desayunos", "Cenas"];

export const payments = [payment1, payment2, payment3, payment4];
