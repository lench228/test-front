import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companyName',
})
export class CompanyNamePipe implements PipeTransform {
  transform(suffix: string, business_name: string): string {
    return `${suffix} "${business_name}"`;
  }
}
