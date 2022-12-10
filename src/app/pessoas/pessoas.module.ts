import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import {InputMaskModule} from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PessoaCadastroComponent,
    PessoasPesquisaComponent],

  imports: [
    CommonModule,
    FormsModule,

    SharedModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule

  ],
  exports: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent
  ]
})
export class PessoasModule { }
