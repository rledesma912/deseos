import { Injectable } from '@angular/core';
import { Lista } from '../clases/lista';

@Injectable()
export class ListaDeseosService {

  listas : Lista[] = []

  constructor(){
    // let lista1 = new  Lista('compras del super');
    // let lista2 = new  Lista('juegos que comprar');
    // let lista3 = new  Lista('tp de universidad');
    //
    // this.listas.push(lista1);
    // this.listas.push(lista2);
    // this.listas.push(lista3);

    this.cargarData();
    console.log('servicio inicializado');
  }

  actualizarDatos(){
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarData(){
    if (localStorage.getItem("data")){
      this.listas = JSON.parse(localStorage.getItem("data"));
    }
  }

  agregarLista(lista:Lista){
    this.listas.push(lista);
    this.actualizarDatos();
  }
}
