import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twitchUrl'
})

// La API de Twitch en vivo nos devuelve un formato extraño para las imágenes
// {width}x{height}, como pensado para modificarlo después
// El pipe modifica esa parte por el tamaño que nosotros queramos

export class TwitchUrlPipe implements PipeTransform {

  transform(value: string): any {
    return value.replace("{width}x{height}", "200x200");
  }

}
