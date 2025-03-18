export const authMiddleware = (store) => (next) => (action) => {
    console.log("Middleware intercepted:", action);
    return next(action);
  };
  