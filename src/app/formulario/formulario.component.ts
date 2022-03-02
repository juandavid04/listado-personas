import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../loggingservice.service';
import { Persona } from '../persona.model';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent{
  constructor(private loggingservice: LoggingService,
              private personaservice: PersonaService) {}

  nombreInput: string = '';
  apellidoInput: string = '';

  //@Output() personaCreada = new EventEmitter<Persona>()

  agregar() {
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    //this.loggingservice.enviarAconsola("Se envio la persona con nombre: " + persona.nombre + " y apellido: " + persona.apellido);
    //this.personas.push(persona);s
    //this.personaCreada.emit(persona);
    this.personaservice.agregarPersona(persona);
  }
}
