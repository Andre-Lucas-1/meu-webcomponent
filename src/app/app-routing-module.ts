import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Painel } from './feature/dashboard/pages/painel/painel';
import { MocksTags } from './feature/mocks/pages/mocks-tags/mocks-tags';
import { ListaBackends } from './feature/backends/pages/lista-backends/lista-backends';
import { ListaTags } from './feature/tags/pages/lista-tags/lista-tags';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'painel' },
  { path: 'painel', component: Painel },
  { path: 'mocks-tags', component: MocksTags },
  { path: 'backends', component: ListaBackends },
  { path: 'tags', component: ListaTags },
  { path: '**', redirectTo: 'painel' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
