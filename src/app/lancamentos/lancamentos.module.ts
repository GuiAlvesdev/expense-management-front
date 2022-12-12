import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../shared/shared.module';
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

    SharedModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputNumberModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule
  ],
  exports: []
})
export class LancamentosModule { }
