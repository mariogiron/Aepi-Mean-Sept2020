import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reves'
})
export class AlrevesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('').reverse().join('');
  }

}
