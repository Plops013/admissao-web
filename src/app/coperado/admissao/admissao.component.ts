import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Breadcrumb } from 'src/app/_domain/interfaces/breadcrumb';
import { Step } from 'src/app/_domain/interfaces/step';
import CustomValidators from 'src/app/_shared/custom-validators';
import { CoperadoService } from '../_services/coperado.service';
import { Coperado } from '../_domain/interfaces/coperado';

@Component({
  selector: 'app-admissao',
  templateUrl: './admissao.component.html',
  styleUrls: ['./admissao.component.scss'],
})
export class AdmissaoComponent {
  title: string = 'NOVA ADMISSÃO COOPERADO';
  breadcrumbs: Breadcrumb[] = [
    { label: 'Cadastro', route: '/admissao' },
    { label: 'Admissão do Cooperado', route: '/admissao' },
    { label: 'Nova Admissão de Cooperado', route: '/admissao' },
  ];
  steps: Step[] = [
    { label: 'Inicio', filled: false, active: true },
    { label: 'Documentos', filled: false, active: false },
    { label: 'Dados Cadastrais', filled: false, active: false },
    { label: 'Admissão', filled: false, active: false },
  ];
  coperado: Coperado | undefined;
  loading: boolean = false;

  admissaoForm = this.formBuilder.group({
    cpf: [
      '',
      [Validators.required, Validators.minLength(11), CustomValidators.cpf()],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private coperadoService: CoperadoService
  ) {}

  getCoperadoByCpf() {
    if (!this.admissaoForm.valid) return;
    
    this.loading = true;

    const cpf = this.admissaoForm.get('cpf')?.value ?? '';

    this.coperadoService.getByCpf(cpf).subscribe((coperado) => {
      console.log('coperado', coperado);
      this.coperado = coperado;
      this.loading = false;
    });
  }
}
