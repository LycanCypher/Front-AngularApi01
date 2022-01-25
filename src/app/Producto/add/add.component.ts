import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Model/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  modelProducto = new Producto()

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {

  }

  Guardar (modelProducto) {
    this.service.createProducto(modelProducto)
    .subscribe(data=>{
      alert("El producto se agregó con éxito!!!");
      this.router.navigate(["listar"]);
    })
  }
}
