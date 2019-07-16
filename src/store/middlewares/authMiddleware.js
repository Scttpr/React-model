// == Import: NPM

// == Middleware
const authMiddleware = ({ getState, dispatch }) => next => (action) => {
  switch (action.type) {
    default: {
      next(action);
    }
  }
};

// == Export
export default authMiddleware;
