import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  // recibo del padre
  // @Input() contador: number;  

  // enviar info
  // @Output() contadorCambio = new EventEmitter<number>();

  contador: number;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('contador')
        .subscribe
        ( contador => {
          this.contador = contador;
        });
  }

  reset(){
    // this.contador=0;
    // this.contadorCambio.emit(0);  
    const accion = new ResetAction();

    this.store.dispatch(accion);
  }

}
