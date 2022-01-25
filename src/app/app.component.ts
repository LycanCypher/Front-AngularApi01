import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Este es el título
  title = 'Api01';

  constructor (private router: Router) {}
  //Se definen los métodos de ruteo
  listar () {
    this.router.navigate(["listar"]);
  }

  nuevo () {
    this.router.navigate(["agregar"]);
  }
}
