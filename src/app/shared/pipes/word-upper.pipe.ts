import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordUpper'
})
export class WordUpperPipe implements PipeTransform {

  transform(value: string, ...wordParts: string[]): string {
    wordParts.forEach(word => {
      value = value.replace(new RegExp(`([а-яА-ЯёЁ]*${word}[а-яё]*)`, 'gi') , (match) => {
        return match.toUpperCase()
      });
    })
    return value;

  }

}
