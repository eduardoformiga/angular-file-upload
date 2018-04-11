import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppEventoService} from './app-evento.service';
import {EventoService} from './_service/evento.service';
import {HttpModule} from '@angular/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AppEventoService, EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
