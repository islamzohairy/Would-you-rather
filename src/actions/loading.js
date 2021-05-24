export const START_LOADING = "START_LOADING";
export const UPDATE_LOADING = "UPDATE_LOADING";
export const END_LOADING = "END_LOADING";

export const startLoading = (num = 0) => {
  return {
    type: START_LOADING,
    payload: {
      isLoading: true,
      progress: 0,
      unit: parseInt(100 / num.toFixed(0)),
    },
  };
};

export const updateLoading = () => {
  return {
    type: UPDATE_LOADING,
  };
};

export const endLoading = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: END_LOADING,
        payload: {
          isLoading: false,
          progress: 0,
          unit: 0,
        },
      });
    }, 800);
  };
};
