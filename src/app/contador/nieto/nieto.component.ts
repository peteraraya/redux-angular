import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions';

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
    this.store.dispatch(actions.reset());
  }

}
