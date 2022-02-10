import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "produtos",
    component: ProdutoCrudComponent,
  },
  {
    path: "produtos/create",
    component: ProdutoCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
