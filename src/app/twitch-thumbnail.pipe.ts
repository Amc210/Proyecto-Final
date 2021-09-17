import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twitchThumb'
})
export class TwitchThumbnailPipe implements PipeTransform {

  transform(value: string): any {
    return value.replace("{width}x{height}", "320x200");
  }

}
