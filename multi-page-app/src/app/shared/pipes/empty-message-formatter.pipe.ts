import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'emptyMessageFormatter' })
export class EmptyMessageFormatterPipe implements PipeTransform {
  transform(value: string | null, fallback: string = 'No items found'): string {
    return value ? `No powers found for ${value}` : fallback;
  }
}