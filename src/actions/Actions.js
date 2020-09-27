export const ADD_WORKER = "ADD_WORKER";
export const DELETE_WORKER = "DELETE_WORKER";

export const addWorker = ({ name, surname, money, hours, summary }) => {
  return {
    type: ADD_WORKER,
    payload: {
      name,
      surname,
      money,
      hours,
      summary,
      id: Math.floor(Math.random * 1234),
    },
  };
};
export const deleteWorker = (id) => ({
  type: DELETE_WORKER,
  payload: {
    id,
  },
});
