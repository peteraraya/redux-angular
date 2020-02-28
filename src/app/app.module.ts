import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule } from "@ngrx/store";
import { contadorReducer } from "./contador/contador.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from '../environments/environment'; 

import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';



@NgModule({
  declarations: [AppComponent, HijoComponent, NietoComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador: contadorReducer }), //ngrx store
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states (mantenga los ultimos 25 estados o acciones --> podemos regresar en el tiempo)
      logOnly: environment.production // Restrict extension to log-only mode , impedimos que otros usuarios modifiquen 
      // 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
