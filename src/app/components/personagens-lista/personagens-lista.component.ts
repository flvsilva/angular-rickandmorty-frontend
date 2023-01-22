import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../../personagem.service';

@Component({
  selector: 'app-personagens-lista',
  templateUrl: './personagens-lista.component.html',
  styleUrls: ['./personagens-lista.component.css'],
})
export class PersonagensListaComponent implements OnInit {
  PersonagensList: any = [];
  name = '';

  ngOnInit() {
    this.loadPersonagens();
  }
  constructor(public personagemService: PersonagemService) {}

  loadPersonagens() {
    return this.personagemService.getPersonagens().subscribe((data: {}) => {
      this.PersonagensList = data;
    });
  }

  loadPersonagensPorNome(): void {
    this.personagemService
      .getPersonagensFiltro(this.name)
      .subscribe((data: {}) => {
        this.PersonagensList = data;
      });
  }
}
