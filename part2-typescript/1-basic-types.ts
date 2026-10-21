// 1. Basic Types

let studentName: string = "Tunde";
let studentAge: number = 21;
let isEnrolled: boolean = true;

// Broken: let courseName: number = "Frontend Development"
// What was wrong: the type annotation says "number", but the value assigned
// is a string ("Frontend Development"). The annotation and the value must match.
let courseName: string = "Frontend Development";