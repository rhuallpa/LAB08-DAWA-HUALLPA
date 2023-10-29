import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appAngular';
  nombre = 'Rebeca Soledad Huallpa Centeno';
  edad = 20;
  email = 'rebeca.huallpa@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  sitio='http://www.google.com';

  profesion='';
  anios='';

  contador=1;
  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

  esActivo() {
    if (this.activo) {
      return 'Trabajador activo';
    } else {
      return 'Trabajador inactivo';
    }
  }

  ultimos3Sueldos() {
    let suma = 0;
    for (let x = 0; x < this.sueldos.length; x++) {
      suma += this.sueldos[x];
    }
    return suma;
  }
}



  