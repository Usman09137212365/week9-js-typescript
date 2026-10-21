// 3. Objects & Interfaces

interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  isActive: boolean;
}

const student1: Student = {
  id: 1,
  name: "Amaka Obi",
  age: 22,
  course: "Frontend Development",
  isActive: true,
};

const student2: Student = {
  id: 2,
  name: "Tunde Bakare",
  age: 21,
  course: "Backend Development",
  isActive: false,
};

interface Instructor {
  name: string;
  cohort: number;
  subjects: string[];
}

function introduceInstructor(instructor: Instructor): string {
  return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`;
}

const stanley: Instructor = {
  name: "Stanley",
  cohort: 8,
  subjects: ["HTML", "CSS", "JavaScript"],
};

console.log(introduceInstructor(stanley));