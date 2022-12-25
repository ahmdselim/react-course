const url = "http://localhost:3001/posts";

export default function appReducer(state, action) {
  switch (action.type) {
    case "GET":
      return {
        data: [state.data],
      };
    case "ADD":
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case "EDIT":
      const updatedEmployee = action.payload;

      const updatedEmployees = state.data.map((employee) => {
        if (employee.id === updatedEmployee.id) {
          return updatedEmployee;
        }
        return employee;
      });

      return {
        ...state,
        employees: updatedEmployees,
      };

    case "DELETE":
      return {
        ...state,
        data: state.data.filter((employee) => employee.id !== action.payload),
      };

    default:
      return state;
  }
}
