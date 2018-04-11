import { Component } from '@angular/core';
import {AppEventoService} from './app-evento.service';
import {Evento} from './_model/evento';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public video: any;
  public imagemRelatorioSrc: any;

  constructor(private eventoService: AppEventoService) {
  }


  public imageReportChange(fileInput: any) {
    this.video = fileInput.target.files[0];

    const reader1 = new FileReader();
    reader1.onload = (e) => {
      this.imagemRelatorioSrc = reader1.result;
    };
    reader1.readAsDataURL(this.video);
  }

  public salvar(){
    let evento :Evento = new Evento;
    this.eventoService.criarEventoComVideo(evento, this.video).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

  }




}
