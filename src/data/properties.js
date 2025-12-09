
import house1 from "../assets/properties/house1.jpeg";
import house2 from "../assets/properties/house2.jpeg";
import house3 from "../assets/properties/house3.jpeg";
import house4 from "../assets/properties/house4.jpeg";





const properties = [
  {
    id: 1,
    title: "3-Bedroom Apartment in New Haven",
    location: "New Haven, Enugu",
    price: 3500000,
    type: "rent",
    beds: 3,
    baths: 3,
    size: "120 sqm",
    images: [ house2, house3, house4],

  },
  {
    id: 2,
    title: "4-Bedroom Duplex with Parking",
    location: "Independence Layout, Enugu",
    price: 85000000,
    type: "sale",
    beds: 4,
    baths: 4,
    size: "260 sqm",
    images: [house4, house2, house4],

  },
  {
    id: 3,
    title: "Self-Contained Studio",
    location: "Abakpa, Enugu",
    price: 180000,
    type: "rent",
    beds: 1,
    baths: 1,
    size: "35 sqm",
    images: [house3, house3, house2],

  },
  {
    id: 4,
    title: "2-Bedroom Flat",
    location: "Trans-Ekulu, Enugu",
    price: 900000,
    type: "rent",
    beds: 2,
    baths: 2,
    size: "80 sqm",
    images: [ house1,house2, house3, house4],

  },
];

export default properties;
