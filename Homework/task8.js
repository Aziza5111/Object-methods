const student = {
  name: "Karim",
  contact: {
    email: "k@gmail.com",
    phone: "999",
  },
};
student.grade = "A";

let {
  contact: { email },
} = student;
console.log(student);
