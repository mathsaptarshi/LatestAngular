import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]):unknown {
    // if (args.length > 0 && typeof value === 'string') {
      const formatType = args[0];
      console.log(formatType);
      // if (formatType === 'uppercase') {
      //   return value.toUpperCase();
      // } else if (formatType === 'lowercase') {
      //   return value.toLowerCase();
      // } else {
      //   return value;
      // }
      return value.toUpperCase();
    // }
  }
}
