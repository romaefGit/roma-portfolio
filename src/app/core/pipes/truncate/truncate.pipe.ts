import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text:string, limit:number, ellipsis = '...', show: boolean = true) {
    if(show) {
      if (text.length <= limit) {
        return text;
      } else {
        return text.slice(0, limit) + ellipsis;
      }
    } else return false
  }

}
