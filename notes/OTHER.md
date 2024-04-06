# Other Notes

## UUID

UUID stands for Universally Unique Identifier. It's a standard that provides a simple method for generating unique IDs. These IDs are 128-bit values which are globally unique identifiers.

UUIDs are often used in software development for assigning unique identifiers to objects, database entries, or file names, among other things. They are designed to be sufficiently random such that the probability of collision (i.e., generating the same UUID more than once) is extremely low.

In JavaScript, there are libraries like `uuid` that provide functions for generating UUIDs. Here's an example of how you might use it:

```javascript
const { v4: uuidv4 } = require("uuid");
console.log(uuidv4()); // Outputs a new random UUID, e.g., '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

In the context of your code snippet, a UUID might be used as a unique `key` prop for elements in a list in React. This can help React optimize re-rendering performance by accurately identifying which items in the list have changed, are added, or are removed.

## TypeScript: interface vs. type

In TypeScript, both `type` and `interface` are used to define custom types, but they have some differences and are used in different scenarios.

`interface` is a powerful way to define contracts for classes to follow or for defining complex types. It's often used in object-oriented programming patterns. Interfaces can be implemented by classes, and they can be extended and merged.

```typescript
interface User {
    name: string;
    age: number;
}

class MyUser implements User {
    name: string;
    age: number;
}
```

`type`, on the other hand, can represent primitive types, union types, intersection types, etc. It's more flexible than `interface` because it can represent any valid type, not just object types.

```typescript
type User = {
    name: string;
    age: number;
};

type ID = string | number;
```

In general, if you're writing object-oriented code and need to use classes, `interface` is a good choice. If you need to use union types, intersection types, or other advanced type patterns, `type` is a good choice. However, the choice between `interface` and `type` often comes down to personal preference and the specific needs of your project.

### class implements interface

In TypeScript, when a class implements an interface, the class is required to have the properties and methods defined in the interface. This is a way of ensuring that the class adheres to a certain structure.

In the example you provided, the `MyUser` class implements the `User` interface, so it must have the `name` and `age` properties.

```typescript
interface User {
    name: string;
    age: number;
}

class MyUser implements User {
    name: string;
    age: number;
}
```

If you want the `MyUser` class to have additional properties, you can add them in the class definition. For example:

```typescript
class MyUser implements User {
    name: string;
    age: number;
    address: string;

    // Additional property
}
```

In this case, `MyUser` still satisfies the `User` interface because it has at least the `name` and `age` properties. But it also has an additional `address` property.

If you want the `MyUser` class to have different properties from the `User` interface, you would either need to change the `User` interface or have `MyUser` implement a different interface.

### Union Types vs. Intersection Types

In TypeScript, `union` and `intersection` types are powerful ways to combine types.

**Union Types (`|`):**
A union type is a type formed from two or more other types, representing values that may be any one of those types. We use the `|` operator to define a union type.

```typescript
type StringOrNumber = string | number;

let a: StringOrNumber;
a = "Hello"; // OK
a = 123; // OK
a = true; // Error
```

In this example, `StringOrNumber` is a union type and can be either a string or a number.

**Intersection Types (`&`):**
An intersection type is a type that combines multiple types into one. It represents values that are all of the combined types at once. We use the `&` operator to define an intersection type.

```typescript
type Named = {
    name: string;
};

type Aged = {
    age: number;
};

type NamedAndAged = Named & Aged;

let b: NamedAndAged;
b = { name: "John", age: 30 }; // OK
b = { name: "John" }; // Error
b = { age: 30 }; // Error
```

In this example, `NamedAndAged` is an intersection type and must have both a `name` property (from `Named`) and an `age` property (from `Aged`).
