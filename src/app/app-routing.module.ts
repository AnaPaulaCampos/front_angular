
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { VendasComponent } from './vendas/vendas/vendas.component';
import { ListagemFuncionariosComponent } from './funcionario/listagem-funcionarios/listagem-funcionarios.component';
import { TopoMenuComponent } from './temas/topo-menu/topo-menu.component';
import { HomeComponent } from './temas/home/home.component';
import { NgModule } from '@angular/core';
import { FormularioComponent } from './funcionario/formulario/formulario.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'produtos', component: ProdutosComponent },
  {path:'vendas', component: VendasComponent },
  {path:'listar', component: ListagemFuncionariosComponent },
  {path:'cadastar', component: FormularioComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
