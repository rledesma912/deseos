import {Component, OnInit} from '@angular/core';
import { ListaItem, Lista} from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/listadeseos';

@Component ({
  selector:'app-agregar',
  templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {

  nombreLista:string = "";
  nombreItem: string = "";

  items: ListaItem[] = [];

  constructor(public alertCtrl:AlertController,
    public nav:NavController,
    public srv: ListaDeseosService){
    }

    ngOnInit(){

    }

    agregar(){
      if  (this.nombreItem.length == 0){
        return;
      }

      let item = new ListaItem(this.nombreItem);

      this.items.push(item);


      //limpio para poder agregar otro
      this.nombreItem = "";

    }

    eliminar(indice:number){
      this.items.splice(indice,1);
      console.log('eliminado');
    }

    guardarLista(){
      console.log(this.nombreLista);

      if(this.nombreLista.length == 0){
        let alert = this.alertCtrl.create({
          title: 'Nombre de la lista',
          subTitle: 'El nombre de la lista el mandatorio',
          buttons: ['OK']
        });
        alert.present();
      }
      else{
        let lista = new Lista(this.nombreLista);
        lista.items = this.items;

        //this.srv.listas.push(lista);
        this.srv.agregarLista(lista);

        this.nav.pop();
      }
    }
  }
