import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Model/Producto';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  productos:Producto[];

  constructor(private http:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.Listar();
    
  }

  Listar () {
    this.http.getProductos()
    .subscribe(data=>{
      this.productos = data;
    })
  }

  Editar (producto:Producto) {
      localStorage.setItem("id", producto.id.toString());
      this.router.navigate(["editar"]);
  }

  Borrar (producto:Producto) {
    this.http.deleteProducto(producto)
    .subscribe(data=>{
      this.productos = this.productos!.filter(p => p! == producto);
      //alert("Producto eliminado");
      this.Listar();
    })
  }

}
