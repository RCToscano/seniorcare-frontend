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

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TextMaskModule } from 'angular2-text-mask';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

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
    NgMultiSelectDropDownModule.forRoot(),
    TextMaskModule,
    GooglePlaceModule,
    ScrollToModule.forRoot(),
    NgxSpinnerModule,
    FileUploadModule,
    AutocompleteLibModule,
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
