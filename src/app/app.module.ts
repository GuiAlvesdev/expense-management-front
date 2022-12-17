import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule ,

    LancamentosModule,
    PessoasModule,
    SegurancaModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
