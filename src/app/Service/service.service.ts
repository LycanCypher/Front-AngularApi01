import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/productos';

  getProductos () {
    return this.http.get<Producto[]>(this.Url + "/listar");
  }

  createProducto (producto:Producto) {
    return this.http.post<Producto>(this.Url + "/guardar", producto);
  }

  getProductoById (id:number) {
    return this.http.get<Producto>(this.Url + "/mostrar/" + id);
  }

  updateProducto (producto:Producto) {
    return this.http.put<Producto>(this.Url + "/actualizar", producto);
  }

  deleteProducto (producto:Producto) {
    return this.http.delete<Producto>(this.Url + "/borrar/" + producto.id);
  }
}
