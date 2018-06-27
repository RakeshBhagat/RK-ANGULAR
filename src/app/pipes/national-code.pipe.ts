import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalCode'
})
export class NationalCodePipe implements PipeTransform {

  transform(value: number, code: any='91',state:any='ABC'): any {
    return "+" +code + "-" +value + "-" + state;
  }

}
