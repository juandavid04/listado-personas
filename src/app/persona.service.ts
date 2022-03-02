import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./loggingservice.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonaService {

  personas: Persona[] = [
    new Persona('Juan', 'Porras'),
    new Persona('David', 'Porras'),
    new Persona('Daniel', 'Ballesteros'),
    new Persona('Tania', 'Espinoza'),
  ];

  saludar = new EventEmitter<number>();

  constructor(private loggingservice: LoggingService){}

  agregarPersona(persona: Persona){
    this.loggingservice.enviarAconsola("Se agrego a la lista la persona con nombre: " + persona.nombre + " y apellido: " + persona.apellido );
    this.personas.push(persona);
  }

}
