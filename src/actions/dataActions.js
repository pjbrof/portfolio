export const fetchInfo = () => {
  return (dispatch) => {
    fetch('/', { method: 'GET' })
      .then((response) => {
        dispatch({ type: 'FETCH_INFO_FULFILLED', payload: response });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_INFO_REJECTED', payload: err });
      });
  };
};

export const setFilter = (activeFilter) => {
  return function (dispatch) {
    dispatch({ type: 'SET_ACTIVE_FILTER', payload: activeFilter });
  };
};
