// import { Action } from '@ngrx/store';
import { DIVIDIR } from './contador.actions';
// ACCIONES
// import { 
//         actions,
//         INCREMENTAR, 
//         DECREMENTAR, 
//         MULTIPLICAR,
//         RESET
//        } from './contador.actions';

import * as fromContador from './contador.actions';

export function contadorReducer(state: number = 10, action: fromContador.actions){
    // La acción es de tipo Action

    switch (action.type) {
      case fromContador.INCREMENTAR:
        return state + 1;

      case fromContador.DECREMENTAR:
        return state - 1;

      case fromContador.MULTIPLICAR:
        return state * action.payload;

      case fromContador.DIVIDIR:
        return state / action.payload;

      case fromContador.RESET:
        return 0;

      default:
        return state;
    }


}


