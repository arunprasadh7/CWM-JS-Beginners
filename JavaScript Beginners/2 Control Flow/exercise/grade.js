// Grade calculator

const marks = [80, 80, 50];

function calculateAverage(marks) {
  let totalMarks = 0;
  for (mark of marks) {
    totalMarks += mark;
  }

  let totalSubjects = marks.length;
  let average = totalMarks / totalSubjects;

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

console.log(calculateAverage(marks));
