const defaultState: {
  userCredentials: object | null;
} = {
  userCredentials: null,
};

const authReducer = (
  state = defaultState,
  action: { type: string; payload?: object }
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
