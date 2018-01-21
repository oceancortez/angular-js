import { Component, OnInit } from '@angular/core';

import { NegocioService } from './negocio.service';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css']
})
export class NegocioComponent implements OnInit {

  negocio: any = [];

  constructor(private negocioService: NegocioService) { }

  ngOnInit() {

     console.log(' Entrou no init do negocioComponent ');

      this.negocioService.getAllNegocios().subscribe((negocio: any) => {
      this.negocio = negocio;
      console.log(negocio);
    });
  }

}
