// 4. Arrays & Union Types

let names: string[] = ["Ada", "Bola", "Chidi"];
let scores: number[] = [78, 90, 55, 88];

// id can be a string OR a number — this is a union type
function formatId(id: string | number): string {
  return String(id);
}

console.log(formatId(42));    // "42"
console.log(formatId("abc")); // "abc"