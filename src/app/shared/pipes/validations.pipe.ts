import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validations'
})
export class ValidationsPipe implements PipeTransform {

  transform(error: { key: string, value: any}, ...args: unknown[]): unknown {
    
    const errorMessages: Record<string, string> = {
      required: "Este campo es requerido",
      minlength: "Debe tener más caracteres",
      email: "Ingresa un email válido"
    }

    return errorMessages[error.key];
  }

}
