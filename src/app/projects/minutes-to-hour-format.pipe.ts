import { Pipe, PipeTransform } from '@angular/core';

// Changing a number from minutes to HH:MM format.

@Pipe({
  name: 'minutesToHourFormat'
})
export class MinutesToHourFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const hours = Math.trunc(value / 60);
    const minutes = value % 60;
    return hours + ':' + minutes;
  }

}
