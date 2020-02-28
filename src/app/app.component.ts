import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
// import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import * as fromContador from './contador/contador.actions';

import { AppState } from './app.reducers';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  contador: number;

  constructor(
    // Inyectamos store
    private store: Store<AppState>
  ) {
    // this.contador = 10;
    this.store.select("contador") // escuchando una propiedad espesifica del estado que tenga nuestra app
        .subscribe(contador => {
        // cualquier cambio que sufra el state
        console.log(contador);
        this.contador = contador;
    });
  }

  incrementar() {
    // 1 forma
    // this.contador ++;
    // 2 forma
    // const action: Action = {
    //   type: "INCREMENTAR"
    // };
    
    const accion = new fromContador.IncrementarAction();

    this.store.dispatch( accion );
  }

  decrementar() {
    // 1 forma
    // this.contador --;
    // 2 forma
    // const action: Action = {
    //   type: "DECREMENTAR"
    // };

    const accion = new fromContador.DecrementarAction();

    this.store.dispatch( accion );
  }
}
