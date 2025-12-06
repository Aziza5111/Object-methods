const info = {
  address: {
    city: "Samarqand",
  },
};

let {
  address: { city, street = "unknown" },
} = info;

console.log(city);
console.log(street);
