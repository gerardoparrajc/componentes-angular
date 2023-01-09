import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grados'
})
export class GradosPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string | null {
    const gradosFahrenheit = (value * 9 / 5) + 32;

    return gradosFahrenheit + ' ºF';
  }

}
