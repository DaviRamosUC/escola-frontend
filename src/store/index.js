import { createStore } from 'redux';

const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO':
      console.log('Estou ouvindo BOTAO_CLICADO');
      // eslint-disable-next-line
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
