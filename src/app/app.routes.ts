import { Routes } from '@angular/router';
import { TabelaClienteComponent } from './tabela-cliente/tabela-cliente.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'tabela', component: TabelaClienteComponent},
  { path: 'novo', component: FormClienteComponent},
  {path: "edit/:id", component: FormClienteComponent},
  {path: '', redirectTo: '/tabela', pathMatch: 'full' },
  //{path: '', redirectTo: '/', pathMatch: 'full'}
  { path: '**', component: PageNotFoundComponent }
];
