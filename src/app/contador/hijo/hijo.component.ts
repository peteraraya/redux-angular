import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

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
    // this.contador *= 2;
    // this.cambiContador.emit(this.contador);  // emitiendo

    const accion = new MultiplicarAction(5);
    // ejecuta dispatch
    this.store.dispatch( accion );
  }

  dividir(){
    // this.contador /= 2;
    // this.cambiContador.emit(this.contador); // emitiendo
    
    const accion = new DividirAction(2);
    // ejecuta dispatch
    this.store.dispatch( accion );
  }
  

  resetNieto( nuevoContador){
    this.contador = nuevoContador;
    // this.cambiContador.emit(nuevoContador);
  }

}
