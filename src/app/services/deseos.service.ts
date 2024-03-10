import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];


  constructor() {

    this.cargarStorage();


  }


  crearLista(titulo: string) {

    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;

  }

  borrarLista(lista: Lista) {

    this.listas = this.listas.filter(listaData => listaData.id !== lista.id);

    this.guardarStorage();

  }


  obtenerLista(id: string | number) {

    id = Number(id);

    return this.listas.find(listaData => listaData.id === id);

  }



  guardarStorage() {

    localStorage.setItem('data', JSON.stringify(this.listas));

  }
  cargarStorage() {
    if (typeof localStorage !== 'undefined') {
      const data = localStorage.getItem('data');
      if (data) {
        this.listas = JSON.parse(data);
      } else {
        this.listas = [];
      }
    } else {
      // Manejar el caso en que localStorage no está disponible
      console.log('localStorage no está disponible en este entorno.');
      this.listas = [];
    }
  }

}
