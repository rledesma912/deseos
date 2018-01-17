import { Injectable } from '@angular/core';
import { Lista } from '../clases/lista';

@Injectable()
export class ListaDeseosService {

  listas : Lista[] = []

  constructor(){

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

  eliminarLista(indice:number){
    //this.listas.pop(lista);
    this.listas.splice(indice, 1);
    this.actualizarDatos();
  }
}
