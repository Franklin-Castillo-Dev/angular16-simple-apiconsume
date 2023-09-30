// el input yo lo coloque, no viene por defecto
import { Component, Input } from '@angular/core';

// Traemos el interfaz de Producto
import { Product } from '../../models/product.model'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  //Cuando le colocamos "!" significa que no se preocupe, que despues lo inicializamos
  @Input() product!: Product;

}
