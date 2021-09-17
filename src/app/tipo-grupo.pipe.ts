import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoGrupo'
})
export class TipoGrupoPipe implements PipeTransform {

  transform(input: number): string{ //string type
    if ((input) == 0) {
      return "Casual";
    }

    if (input == 1) {
      return "Competitivo";
    }

    if (input == 2) {
      return "Charla";
    }

    else {
      return "Charla";
    }
 }

}
