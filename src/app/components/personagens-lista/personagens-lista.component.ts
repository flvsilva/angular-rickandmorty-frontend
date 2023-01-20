import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../../personagem.service';

@Component({
  selector: 'app-personagens-lista',
  templateUrl: './personagens-lista.component.html',
  styleUrls: ['./personagens-lista.component.css'],
})
export class PersonagensListaComponent implements OnInit {
  PersonagensList: any = [];

  ngOnInit() {
    this.loadPersonagens();
  }
  constructor(public personagemService: PersonagemService) {}

  loadPersonagens() {
    return this.personagemService.GetPersonagens().subscribe((data: {}) => {
      this.PersonagensList = data;
    });
  }
}
