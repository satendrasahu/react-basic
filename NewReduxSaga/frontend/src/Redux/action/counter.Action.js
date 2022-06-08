import { COUNT_DECREMENT, COUNT_INCREMENT } from "../Constants/Constants";

const increment = (data) => {
  console.log("Daaaaaaaaaaaaataaa", data);
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/2`)
      .then((response) => response.json())
      .then((data) =>
        //   console.log(data.id)
        dispatch({
          type: COUNT_INCREMENT,
          payload: data.id,
        })
      );
  };

  // return ;
};
const decrement = (data) => {
  return {
    type: COUNT_DECREMENT,
    payload: data,
  };
};

export { increment, decrement };
