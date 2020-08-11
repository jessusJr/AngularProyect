import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
import { isNull } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje [];
  constructor() { 
    this.destinos = [];
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, imagenUrl: string): boolean{

    this.destinos.push(new DestinoViaje(nombre, imagenUrl));
    console.log(this.destinos);
    return false;
  }

}
