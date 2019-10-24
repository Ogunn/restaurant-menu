export interface IDish {
  name: string;
  description: string;
  dishSides: string[];
  price: number;
}

const dishes: IDish[] = [
  {
    name: "Feijoada",
    description: "Prato Feito",
    dishSides: ["arroz", "farofa"],
    price: 16.9
  },
  {
    name: "Dobradinha",
    description: "Prato Feito",
    dishSides: ["arroz", "farofa"],
    price: 16.9
  },
  {
    name: "Feijoada Comercial",
    description: "Servida em porções",
    dishSides: ["arroz", "farofa", "vinagrete"],
    price: 19.9
  },
  {
    name: "Dobradinha Comercial",
    description: "Servida em porções",
    dishSides: ["arroz", "farofa", "vinagrete"],
    price: 19.9
  },
  {
    name: "Escondidinho",
    description: "Carne do sol com pirão de aipim",
    dishSides: ["arroz"],
    price: 18.9
  },
  {
    name: "Lasanha de frango com queijo",
    description: "",
    dishSides: [],
    price: 17.9
  },
  {
    name: "Lasanha de queijo e presunto",
    description: "",
    dishSides: [],
    price: 17.9
  },
  {
    name: "Lasanha de carne com queijo",
    description: "",
    dishSides: [],
    price: 17.9
  },
  {
    name: "Macarronada",
    description: "Macarrão co molho de carne com queijo",
    dishSides: [],
    price: 15.9
  },
  {
    name: "Cozido",
    description: "Pirão com carne, calabreza e verduras",
    dishSides: ["arroz"],
    price: 19.9
  },
  {
    name: "Carne do sol",
    description: "",
    dishSides: ["feijão", "arroz", "farofa", "vinagrete"],
    price: 16.9
  },
  {
    name: "Carne de panela",
    description: "",
    dishSides: ["feijão", "arroz", "farofa", "vinagrete"],
    price: 16.9
  },
  {
    name: "Isca de frango",
    description: "",
    dishSides: ["feijão", "arroz", "farofa", "vinagrete"],
    price: 16.9
  }
];

export default dishes;
