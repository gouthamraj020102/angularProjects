import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pageTitleFormatter' })
export class PageTitleFormatterPipe implements PipeTransform {
  transform(name: string | null, fallback: string = 'Ben 10 Characters'): string {
    return name ? `${name}'s Powers` : fallback;
  }
}
