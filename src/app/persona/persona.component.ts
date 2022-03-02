import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent{

  constructor(private personasService: PersonaService) { }

  @Input() persona: Persona;
  @Input() indice: number; 

  saludar(){
    this.personasService.saludar.emit(this.indice);
  }

}
