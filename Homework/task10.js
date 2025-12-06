const student = {
  name: "Diyor",
  scores: {
    math: 90,
    english: 70,
  },
  getAverage() {
    (math + english) / 2;
  },
};
let {
  scores: { math },
} = student;

student.getAverage();


//chiqmadi//