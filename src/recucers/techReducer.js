import {
  GET_TECHS,
  SET_LOADING,
  TECHS_ERROR,
  ADD_TECH,
  DELETE_TECH
} from '../actions/type';

const initState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_TECHS: {
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    }
    case ADD_TECH: {
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      };
    }
    case DELETE_TECH: {
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        loading: false
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case TECHS_ERROR: {
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
};
