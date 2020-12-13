import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.scss']
})
export class PerfisComponent implements OnInit {

  public titulo = 'Perfil'

  public perfis = [
    'perfil1',
    'perfil2',
    'perfil3',
    'perfil4',
    'perfil5',
    'perfil6',
  ];

  constructor() { }

  ngOnInit() {
  }

}
