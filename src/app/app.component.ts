// el inject nosotros lo importamos, no viene por defecto
import { Component, inject } from '@angular/core';

//Libreria para consumir APIs
import { HttpClient } from '@angular/common/http';

//Traemos Interfaz Producto
import { Product } from './models/product.model';

// Importamos Optimizador Imagenes
import { NgOptimizedImage } from '@angular/common';
import { Alumno } from './models/alumno.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consumoapi-app';
  http = inject(HttpClient);

  //Creamos lista de Productos
  products: Product[] = [];

  //Creamos lista de Alumnos
  alumnos: Alumno[] = [];


  changeTitle(){
    this.title = 'pruebatitulo';
  }

  // Es ejecutado cuando el componente ya esta renderizado.
  // Seria como el OnLoad en .NET
  ngOnInit(){
    //            TipoArray[] a Traer
    
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) =>{ 
          //el .subscribe seria equivalente a las promesas en JS; o los await en asp.          
          //esta inspirado en RxJS, se llaman "Observables"
          this.products = data;
      }
    );
    
    /*
    this.http.get<Alumno[]>('https://localhost:7210/api/Alumnos')
      .subscribe((data) =>{ 
          //el .subscribe seria equivalente a las promesas en JS; o los await en asp.          
          //esta inspirado en RxJS, se llaman "Observables"
          this.alumnos = data;
      }
    );
    */
  }
  
}
