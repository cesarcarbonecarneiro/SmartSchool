import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';

  public professores = [
        {id: 1, nome: 'Pofessor1 A', disciplina: 'disciplina A'},
        {id: 2, nome: 'MProfessor B', disciplina: 'disciplina B'},
        {id: 3, nome: 'Cesar',disciplina: 'disciplina C'},
        {id: 4, nome: 'Jariosvaldo', disciplina: 'disciplina D'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
