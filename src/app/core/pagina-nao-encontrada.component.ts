import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-nao-encontrada',
  template: `
    <div class="container">
      <h1 class="text-center">Ops! Página não encontrada</h1>
      <img src="assets/chocado.png">
    <div>
  `,
  styles: []
})
export class PaginaNaoEncontradaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
