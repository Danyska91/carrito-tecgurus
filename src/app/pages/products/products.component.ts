import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[] = [{
    nombre: 'Pan',
    descripcion: 'Descripcion 1',
    precio: 1.12763,
    idproducto: 1,
    sku: "sku",
    stock: 100
  }, {
    nombre: 'Refrescos',
    descripcion: 'Descripcion 2',
    precio: 2.892366723,
    idproducto: 2,
    sku: "sku",
    stock: 100
  }, {
    nombre: 'Leche',
    descripcion: 'Descripcion 3',
    precio: 3.1666734634947,
    idproducto: 3,
    sku: "sku",
    stock: 100
  }];

  consulta: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  find(event : any) {
    this.consulta =  event.target.value;
  }
}
