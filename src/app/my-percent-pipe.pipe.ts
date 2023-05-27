import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPercentPipe'
})
export class MyPercentPipePipe implements PipeTransform {

  transform(value: String): String {
    return value + " %";
  }

}
