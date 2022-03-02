import { Component, OnInit } from '@angular/core';
import { LoggingService } from './loggingservice.service';
//import { LoggingService } from './loggingservice.service';
import { Persona } from './persona.model';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [LoggingService]
})
export class AppComponent implements OnInit {
  title = 'Listado de personas';
  
  personas: Persona[] = [];

  constructor(private logginservice: LoggingService,
              private personaservice: PersonaService){

                personaservice.saludar.subscribe(
                  (indice: number) => alert("El indice es: " + (indice + 1))
                );
              }

  ngOnInit(): void {
      this.personas = this.personaservice.personas;
  }

/*   agregarPersona(persona: Persona){
    this.logginservice.enviarAconsola("Se agrego a la lista la persona con nombre: " + persona.nombre + " y apellido: " + persona.apellido );
    //this.personas.push(persona)
    this.personaservice.agregarPersona(persona);
  } */

}
