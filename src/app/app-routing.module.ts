import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemFuncionariosComponent } from './funcionario/listagem-funcionarios/listagem-funcionarios.component';
import { FormularioComponent } from './funcionario/formulario/formulario.component';
import { VendasComponent } from './vendas/vendas/vendas.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { HomeComponent } from './home/home.component';
import { TopoMenuComponent } from './temas/topo-menu/topo-menu.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'listagem', component: ListagemFuncionariosComponent },
  { path:'formulario', component: FormularioComponent},
  { path:'vendas', component: VendasComponent},
  { path:'produtos', component: ProdutosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
