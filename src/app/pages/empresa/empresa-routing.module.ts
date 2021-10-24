import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpresaConsultaComponent } from './consulta/empresa-consulta.component';

const routes: Routes = [
  {
    path: 'consulta',
    component: EmpresaConsultaComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class EmpresaRoutingModule {
}
