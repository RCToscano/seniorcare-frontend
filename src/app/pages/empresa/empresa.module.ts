import { LOCALE_ID, NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpresaService } from './empresa.service';
import { EmpresaConsultaComponent } from './consulta/empresa-consulta.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    EmpresaRoutingModule,
    NbSelectModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EmpresaConsultaComponent,
  ],
  providers: [
    EmpresaService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
})
export class EmpresaModule { }
