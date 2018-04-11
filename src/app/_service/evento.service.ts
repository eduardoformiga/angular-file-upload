import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ApiCfg} from '../_const/api-config';
import {Evento} from '../_model/evento';

@Injectable()
export class EventoService {
  novoEventoComAnexo = '/evento/comAnexo/';

  constructor(private http: Http) {
  }


  public criarEventoComVideo(evento: Evento, video: any) {
    const formData = new FormData();
    formData.append('evento',
      new Blob([JSON.stringify(evento)],
        {
          type: 'application/json'
        })
    );

    formData.append('fotos', video, 'video.mp4');

    const options = new RequestOptions({});
    return this.http.post(ApiCfg.getApiRoute(this.novoEventoComAnexo), formData, options)
      .map((res: Response) => res.json());
  }

}
