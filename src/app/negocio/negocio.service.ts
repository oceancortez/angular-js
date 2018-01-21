import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NegocioService {

  constructor(private http: HttpClient) { }

  getAllNegocios(): Observable<any> {
    return this.http.get('//localhost:8080/omc-spring-boot/api/rest/negocio/getNegocios');
  }

}
