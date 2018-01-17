import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/listadeseos';
import { AgregarComponent } from '../../pages/agregar/agregar.component';
import { DetalleComponent } from '../../pages/detalle/detalle.component';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})

export class PendientesComponent implements OnInit {

  constructor(
    private srv : ListaDeseosService,
    private nav: NavController ) {

    }

    ngOnInit() {

    }

    irAgregar(){
      this.nav.push(AgregarComponent);
    }

    verDetalle(lista, idx){
      this.nav.push(DetalleComponent, { lista , idx });

    }
  }
