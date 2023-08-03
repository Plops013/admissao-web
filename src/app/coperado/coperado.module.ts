import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmissaoComponent } from './admissao/admissao.component';
import { CoperadoRoutingModule } from './coperado-routing.module';
import { SharedModule } from '../_shared/shared.module';
import { CoperadoService } from './_services/coperado.service';

@NgModule({
  declarations: [AdmissaoComponent],
  imports: [
    CommonModule,
    CoperadoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CoperadoRoutingModule],
  providers: [CoperadoService],
})
export class CoperadoModule {}
