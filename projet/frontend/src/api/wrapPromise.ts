export default function wrapPromise<T>(promise: Promise<T>) {
  // initial status
  let status = "pending";

  // stock promise status
  let result: T;

  // promise
  const suspender = promise.then(
    (response) => {
      status = "success";
      result = response;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read(): T {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw result;
        default:
          return result;
      }
    },
  };
}
