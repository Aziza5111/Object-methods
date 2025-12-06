const user = {
  name: "Sam",
  address: {
    city: "Tashkent",
    zip: 100100,
  },
};
let {
  address: { city, zip },
} = user;

console.log(user)