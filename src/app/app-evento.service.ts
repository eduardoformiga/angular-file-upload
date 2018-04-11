import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {EventoService} from './_service/evento.service';
import {Evento} from './_model/evento';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class AppEventoService {

    constructor(private eventoService: EventoService) {
    }

    public criarEventoComVideo(evento: Evento, video: any) {
        return this.eventoService.criarEventoComVideo(evento, video).flatMap((data) => {
            return new Observable(observer => {
                if (data) {
                    observer.next(true);
                    observer.complete();
                } else {
                    observer.error(new Error('Falha no envio da mensagem'));
                }
            });
        });
    }
}
