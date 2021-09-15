const defaultState: {
  id: string;
  proyectName: string;
  notes: { title: string; id: string; note: string; date: string }[];
  tasks: { complete: boolean; id: string; tasksName: string }[];
}[] = [
    {
      proyectName: "",
      id: "",
      notes: [{ title: "", id: "", note: "", date: "" }],
      tasks: [{ complete: false, id: "", tasksName: "" }],
    },
  ];

const projectsReducer = (
  state = defaultState,
  action: { type: string; payload?: object }
) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default projectsReducer;
