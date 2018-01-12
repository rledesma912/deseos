import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/listadeseos';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(private srv : ListaDeseosService) {
    
  }

  ngOnInit() {

  }
}
