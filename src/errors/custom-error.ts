// interface CustomError {
//   statusCode: number;
//   serializedErrors(): { message: string; field?: string }[];
// }

// We decided to use an abstract class because when TS is translated to Js, it will create a class where as if it is an interface, it will disapear immediately. This here is very helpful because if it is a class, we can use the instanceof property which means we can just check if an incomming error in the error middleware is an instance of that abstract class. So we will just check it once.
export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializedErrors(): { message: string; field?: string }[];
}
