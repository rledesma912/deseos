import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/listadeseos';
import { PendientesComponent } from '../../pages/pendientes/pendientes.component';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number = 0;
  lista:Lista;

  constructor(
    public nav: NavController,
    public params:NavParams,
    public alertCtrl:AlertController,
    public srv:ListaDeseosService) {
      console.log(this.params);

      this.idx = this.params.get("idx");
      this.lista = this.params.get("lista");
    }

    ngOnInit() {

    }

    actualizar(item: ListaItem){
      item.completado = !item.completado;
      this.srv.actualizarDatos();

    }

    borrarLista(){

      let alert = this.alertCtrl.create({
        title: 'Eliminación de lista',
        subTitle: `¿Confirma eliminar la lista ${this.lista.nombre}?`,
        buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            //nada
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.srv.eliminarLista(this.idx);
            this.nav.push(PendientesComponent);
          }
        }
      ]
      });

      alert.present();

    }
  }
