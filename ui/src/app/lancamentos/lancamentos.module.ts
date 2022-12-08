import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento.component';
import { LancamentosPesquisaComponent } from './lancamento-pesquisa/lancamento-pesquisa.component';
import { SharedModule } from 'src/app/shared/shared.module';


import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,

    CurrencyMaskModule,

    SharedModule



  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent


  ]
})
export class LancamentosModule  { }
