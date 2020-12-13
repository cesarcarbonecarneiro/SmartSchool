import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  
  public titulo = 'Alunos';
  
  public alunos = [
    {id: 1, nome: 'Marta', sobrenome: 'Silva', telefone: 15522265},
    {id: 2, nome: 'Paula', sobrenome: 'Cabral', telefone: 33250265},
    {id: 3, nome: 'Laura', sobrenome: 'Pontes', telefone: 46313265},
    {id: 4, nome: 'Luiza', sobrenome: 'Borges', telefone: 3325885},
    {id: 5, nome: 'Lucas', sobrenome: 'Menezes', telefone: 33252265},
    {id: 6, nome: 'Pedro', sobrenome: 'Souza', telefone: 3326565},
    {id: 7, nome: 'Paulo', sobrenome: 'Carvalho', telefone: 1542265},
    {id: 8, nome: 'Cesar', sobrenome: 'Alexandro', telefone: 3852265},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
