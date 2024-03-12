import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAlphabetically'
})
export class SortAlphabeticallyPipe implements PipeTransform {

  transform(items: any[], sortOrder: string, field: string): any[] {
    if (!items || items.length <= 1) {
      return items;
    }

    return items.sort((a, b) => {
      if(field == 'Title' && a[field]['NEUTRAL'] != "") {
        const comparison = a[field]['NEUTRAL'].localeCompare(b[field]['NEUTRAL']);
        return sortOrder === 'desc' ? -comparison : comparison;
      }
    });
  }

}
