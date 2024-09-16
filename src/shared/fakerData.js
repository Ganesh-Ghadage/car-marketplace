import { faker } from "@faker-js/faker";

function generateFakeCars() {
  
  return {
      id: faker.string.uuid(),
      modelName: `${faker.vehicle.model()} ${faker.vehicle.type()}`,
      brand: faker.vehicle.manufacturer(),
      category: faker.vehicle.type(),
      color: faker.vehicle.color(),
      price: faker.commerce.price({min: 20000, max: 100000, dec: 0, symbol: '$'}),
      fuelType: faker.vehicle.fuel(),
      transmission: "Gear",
      mileage: faker.number.int({ min: 5000, max: 150000 }), 
      imageUrl: faker.image.urlLoremFlickr({ category: 'transport'})
    }
}

const carList = faker.helpers.multiple(generateFakeCars, {count: 10})

export default {carList}