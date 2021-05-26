// enum type

// const Admin = 1; not convenient

// VALUES ALWAYS STARTS FROM 0 BUT WE CAN ASSIGN THE STARTING VALUE AND REST WILL FOLLOW THE PATTERN
enum Role {
  ADMIN = 5, //ASSINGING START VALUE .WE CAN ALSO ASSIGN STRING .FOR EG : ADMIN='ADMIN1'
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Debasis",
  age: 24,
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("Admin only");
}

// ===================================UNION TYPES========================
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}
console.log(combine(20, 30));
console.log(combine("deba", "sis"));
