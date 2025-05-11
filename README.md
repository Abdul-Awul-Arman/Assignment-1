# Difference Between Type and Interface

`type` and `interface` are both used in TypeScript to define the shape of data. 

- `type` can describe **primitives**, **unions**, **intersections**, **tuples**, **functions**, and **objects**.
- `interface` is generally used to describe the shape of **objects** and **classes**, and supports declaration merging.Declaration merging means if we declare interface multiple time with difference property `TypeScript` will merge them in one example given below with other example.

### Syntax of type 
```ts

//Primitive type
type text=string;

type Num=number;

type Bol=boolean;

//Non-primitive

//Objet type
type Person = {
  name: string;
  age: number;
};

// Union type
type Status = "active" | "inactive"; 

// Intersection type
type Employee = Person & { role: string }; 


### Syntax of interface 
// inheritance using interface
//you can't do inheritance using type
interface Animal {
    species: string;

}

interface Dog extends Animal {
    breed: string;
}

const dog:Dog={
   species:"dog",
   breed:"germany"
}


//Declaration Merging :
interface User {
  name: string;
}

interface User {
  age: number;
}
//Merged as a
//You can't do that(merging) with type alias. It will give you error
const user: User = {
  name: "arman",
  age: 30,
};



//Class with interface
interface Person {
  name: string;
  age: number;
}

class Employee implements Person {
  name: string;
  age: number;
  role: string;

  constructor(name: string, age: number, role: string) {
    this.name = name;
    this.age = age;
    this.role = role;
  }
}
```

# Examples of using union and intersection types in TypeScript.

## A union type allows a variable to be one of multiple types. It’s defined using the pipe (|) symbol.
```ts 
function printId(id: string | number) {
  console.log(`Your ID is: ${id}`);
}

//those tow are valid
printId(101);       
printId("A102");

//this not valid because in function parameter there is no option for boolean type
// printId(true);
```

## An intersection type represents a value that must satisfy all included types simultaneously.
```ts
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const john: Staff = {
  name: "arman",
  employeeId: 12345
};

// This will be invalid because it does not include 'employeeId'.
// Intersection types require all properties from the combined types.
const jane: Staff = {
  name: "Jane"
  // ❌ Error: Property 'employeeId' is missing in type
};
