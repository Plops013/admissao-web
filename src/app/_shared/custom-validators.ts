import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

function cpf(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let value = control.value;

    if (!value) {
      return null;
    }

    value = value.replace(/\D/g, '');

    const validFormat =
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(
        value
      );

    const isInvalidKnowCpf =
      [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
      ].indexOf(value) !== -1;

    function validateCpf(cpf: string) {
      let resto: number;
      let soma: number = 0;
      let valido: boolean = true;

      for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(9, 10))) valido = false;

      soma = 0;
      for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(10, 11))) valido = false;

      if(cpf.length > 11) valido = false;

      return valido;
    }

    const validCpf = validFormat && validateCpf(value) && !isInvalidKnowCpf;

    return !validCpf ? { cpfInvalid: true } : null;
  };
}

const CustomValidators = { cpf };

export default CustomValidators;
