import React, { useState } from "react";

let Productcontext = React.createContext();

export default Productcontext;


export const Productprovider = ({children}) => {
const [productdata,setproductdata] = useState([{
    "name": "Dodge Accord",
    "model": "Silverado",
    "price": 87880
   },
   {
    "name": "Lamborghini Fiesta",
    "model": "Grand Cherokee",
    "price": 9862
   },
   {
    "name": "Nissan Fiesta",
    "model": "Model S",
    "price": 79810
   },
   {
    "name": "Smart Malibu",
    "model": "Accord",
    "price": 54767
   },
   {
    "name": "Mini Sentra",
    "model": "Model T",
    "price": 30262
   },
   {
    "name": "Fiat Impala",
    "model": "Model S",
    "price": 43172
   },
   {
    "name": "Porsche Explorer",
    "model": "Countach",
    "price": 44115
   },
   {
    "name": "Toyota Fortwo",
    "model": "CX-9",
    "price": 69220
   },
   {
    "name": "Audi Prius",
    "model": "Spyder",
    "price": 30328
   },
   {
    "name": "Land Rover Fortwo",
    "model": "Silverado",
    "price": 10952
   }]);
return <Productcontext.Provider value={{productdata,setproductdata}}>{children}</Productcontext.Provider>
}