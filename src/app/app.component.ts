import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
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
    this.store.dispatch(actions.incrementar());
  }

  decrementar() {
    this.store.dispatch(actions.decrementar());
  }
}
