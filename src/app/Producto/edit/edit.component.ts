import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Model/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  producto: Producto = new Producto();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar () {
    let id = localStorage.getItem("id");
    this.service.getProductoById(+id)
    .subscribe(data=>{
      this.producto = data;
    })
  }

  Actualizar (producto:Producto) {
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.producto = data;
      alert("Actualización exitosa del producto!!!");
      this.router.navigate(["listar"]);
    })
  }
}
