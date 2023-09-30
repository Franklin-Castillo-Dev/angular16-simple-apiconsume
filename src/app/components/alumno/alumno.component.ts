import { Component, Input } from '@angular/core';

import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {
  //Cuando le colocamos "!" significa que no se preocupe, que despues lo inicializamos
  @Input() alumno!: Alumno;
}
