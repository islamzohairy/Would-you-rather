import { START_LOADING, UPDATE_LOADING, END_LOADING } from "../actions/loading";
const initialState = { isLoading: true, progress: 0, unit: 0 };

export default function loading(state = initialState, { type, payload }) {
  switch (type) {
    case START_LOADING:
      return { ...payload };

    case UPDATE_LOADING:
      const newState = state;
      newState.progress = state.progress + state.unit;
      return { ...newState };

    case END_LOADING:
      return { ...state, ...payload };

    default:
      return state;
  }
}
