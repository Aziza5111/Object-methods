const car = {
  brand: "BMW",
  model: "X5",
  getFullName() {
    console.log(this.brand + " " +this.model);
  },
};

car.getFullName();
