import { FaCar, FaTruckPickup, FaShuttleVan, FaCaravan } from 'react-icons/fa';
import { IoCarSport } from "react-icons/io5";
import { MdElectricCar  } from "react-icons/md";
import { PiCarProfileDuotone } from "react-icons/pi";
import { TbCarSuv } from "react-icons/tb";
import { BsCarFrontFill } from "react-icons/bs";


const carMakers = [
    { id: 1, name: "Toyota" },
    { id: 2, name: "Honda" },
    { id: 3, name: "Ford" },
    { id: 4, name: "Chevrolet" },
    { id: 5, name: "BMW" },
    { id: 6, name: "Mercedes-Benz" },
    { id: 7, name: "Audi" },
    { id: 8, name: "Volkswagen" },
    { id: 9, name: "Nissan" },
    { id: 10, name: "Hyundai" },
    { id: 11, name: "Kia" },
    { id: 12, name: "Mazda" },
    { id: 13, name: "Subaru" },
    { id: 14, name: "Lexus" },
    { id: 15, name: "Jaguar" },
    { id: 16, name: "Land Rover" },
    { id: 17, name: "Volvo" },
    { id: 18, name: "Porsche" },
    { id: 19, name: "Ferrari" },
    { id: 20, name: "Lamborghini" },
    { id: 21, name: "Mitsubishi" },
    { id: 22, name: "Tesla" },
    { id: 23, name: "Peugeot" },
    { id: 24, name: "Renault" },
    { id: 25, name: "Fiat" },
    { id: 26, name: "Alfa Romeo" },
    { id: 27, name: "Aston Martin" },
    { id: 28, name: "Bentley" },
    { id: 29, name: "Rolls-Royce" },
    { id: 30, name: "Bugatti" },
    { id: 31, name: "Maserati" },
    { id: 32, name: "Citroën" },
    { id: 33, name: "Dodge" },
    { id: 34, name: "Jeep" },
    { id: 35, name: "Ram" },
    { id: 36, name: "Chrysler" },
    { id: 37, name: "Lincoln" },
    { id: 38, name: "Buick" },
    { id: 39, name: "Cadillac" },
    { id: 40, name: "Genesis" }
];


const pricing = [
    {id: 1, amount: 1000000},
    {id: 2, amount: 2000000},
    {id: 3, amount: 3000000},
    {id: 4, amount: 4000000},
    {id: 5, amount: 5000000},
    {id: 6, amount: 6000000},
    {id: 7, amount: 7000000},
    
]

const carCategories = [
    {
      id: 1,
      categoryName: "Sedan",
      icon: FaCar
    },
    {
      id: 2,
      categoryName: "SUV",
      icon: TbCarSuv
    },
    {
      id: 3,
      categoryName: "Convertible",
      icon: BsCarFrontFill
    },
    {
      id: 4,
      categoryName: "Hatchback",
      icon: PiCarProfileDuotone
    },
    {
      id: 5,
      categoryName: "Pickup Truck",
      icon: FaTruckPickup
    },
    {
      id: 6,
      categoryName: "Minivan",
      icon: FaShuttleVan
    },
    {
      id: 7,
      categoryName: "Station Wagon",
      icon: FaCaravan
    },
    {
      id: 8,
      categoryName: "Sports Car",
      icon: IoCarSport
    },
    {
      id: 9,
      categoryName: "EV",
      icon: MdElectricCar 
    }
  ];
  

export default {
    carMakers,
    pricing,
    carCategories
}