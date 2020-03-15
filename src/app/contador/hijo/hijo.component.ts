import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {


  // recibo del padre
  // @Input() contador: number;  

  // sincronizar el componente hhijo con el padre
  // @Output() cambiContador = new EventEmitter<number>();

  // Trabajaremos con el store
  contador : number;

  constructor(
              // trabajaremos con el store
              private store: Store<AppState>
              )
     { }

  ngOnInit() {
    // nos subscribimos para escuchar cambios en el contador
    this.store.select('contador')
        .subscribe( contador => {
            this.contador = contador;
            console.log(contador);
        });
  }

  multiplicar(){
    this.store.dispatch(actions.multiplicar({ numero: 2 }));
  }

  dividir(){
    this.store.dispatch(actions.dividir({ numero: 2 }));
  }
  

  resetNieto( nuevoContador){
    this.contador = nuevoContador;
  }

}
