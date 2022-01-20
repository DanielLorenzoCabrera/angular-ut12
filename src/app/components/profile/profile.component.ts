import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile', // como llamamos al componente en la aplicacion
  templateUrl: './profile.component.html', // ruta de la vista html
  styleUrls: ['./profile.component.css'] // ruta de los estilos del componente
})

export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
