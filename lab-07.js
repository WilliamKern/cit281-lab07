class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

const throwGenericError = () => {
  throw new Error("Generic error");
};

const throwCustomError = () => {
  throw new CustomError("Custom error");
};

console.log("Force generic error");

try {
  console.log("Generic error try block");
  throwGenericError();
} catch (err) {
  console.log("Generic error catch block");
  console.log(err.toString());
} finally {
  console.log("Generic error finally block");
}

console.log("Force custom error");

try {
  console.log("Custom error try block");
  throwCustomError();
} catch (err) {
  console.log("Custom error catch block");
  console.log(err.toString());
} finally {
  console.log("Custom error finally block");
}
