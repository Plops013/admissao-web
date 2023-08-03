import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { Coperado } from '../_domain/interfaces/coperado';

@Injectable({ providedIn: 'root' })
export class CoperadoService {
  constructor(private httpClient: HttpClient) {}

  // O parâmetro cpf é apenas para simular uma consulta no banco de dados, visto que estamos utilizando um mock no back-end.
  getByCpf(cpf: string): Observable<Coperado> {
    return this.httpClient.get<Coperado>(`${environment.API}/coperado/1`).pipe(
      // map altera o cpf para o valor passado como parâmetro, para deixar mais realista.
      map((coperado: Coperado) => ({
        ...coperado,
        cpf: cpf
      }))
    );
  }
}
