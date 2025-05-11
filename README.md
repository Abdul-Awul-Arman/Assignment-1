# Difference Between Type and Interface

`type` and `interface` are both used in TypeScript to define the shape of data. 

- `type` can describe **primitives**, **unions**, **intersections**, **tuples**, **functions**, and **objects**.
- `interface` is generally used to describe the shape of **objects** and **classes**, and supports declaration merging.

```ts
// Using type
type Person = {
  name: string;
  age: number;
};

// Union type

type Status = "active" | "inactive"; 

// Intersection type
type Employee = Person & { role: string }; 


// Using interface
interface Animal {
  species: string;
  sound(): void;
}

interface Dog extends Animal {
  breed: string;
}
