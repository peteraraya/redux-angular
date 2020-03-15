
import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');
export const reset = createAction('[Contador] Reset');

export const multiplicar = createAction(
    '[Contador] Multiplicar',
    props<{ numero: number }>()
);

export const dividir = createAction(
    '[Contador] Dividir',
    props<{ numero: number }>()
);

// import { Action } from '@ngrx/store';

// // Acciones
// export const  incrementar = '[Contador] Incrementar';
// export const  decrementar = "[Contador] Decrementar";
// export const  multiplicar = "[Contador] Multiplicar";
// export const  dividir     = "[Contador] Dividir";
// export const  reset       = "[Contador] Reset";

// export class IncrementarAction implements Action{
//     readonly type = incrementar;
// };

// export class DecrementarAction implements Action{
//     readonly type = decrementar;
// };

// export class MultiplicarAction implements Action{
//     readonly type = multiplicar;

//     constructor(public payload: number){}
// };

// export class DividirAction implements Action {
//          readonly type = dividir;
//          constructor(public payload: number) {}
//        };

// export class ResetAction implements Action {
//     readonly type = reset;
   
// };



// // Modificación necesaria para que aprescan los payload
//  // acciones validas son de este tipo
// export type actions = IncrementarAction |
//                       DecrementarAction | 
//                       MultiplicarAction |
//                       DividirAction     |
//                       ResetAction; 
