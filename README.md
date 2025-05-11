# Deference Between Type and Interface

Type and interface both are used in TypeScript to declare shape of type. Type used for declare union ,intersection,tuple primitive and non-primitive(array,object,function) value while interface used for declare shape of object and class.


<pre>```
type Person = {
  name: string;
  age: number;
};

type Status = "active" | "inactive"; // Union type
type Employee = Person & { role: string }; // Intersection type


```<pre>