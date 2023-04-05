import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoMenuComponent } from './temas/topo-menu/topo-menu.component';
import { ListagemFuncionariosComponent } from './funcionario/listagem-funcionarios/listagem-funcionarios.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { VendasComponent } from './vendas/vendas/vendas.component';
import { HomeComponent } from './temas/home/home.component';
import { FormsModule }   from '@angular/forms';
import { FormularioComponent } from './funcionario/formulario/formulario.component';



@NgModule({
  declarations: [
    AppComponent,
    TopoMenuComponent,
    ListagemFuncionariosComponent,
    ProdutosComponent,
    VendasComponent,
    HomeComponent,
    FormularioComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
