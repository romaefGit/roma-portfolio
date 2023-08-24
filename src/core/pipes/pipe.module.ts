import { NgModule } from '@angular/core';
import { SortAlphabeticallyPipe } from './sort-alphabetically/sort-alphabetically.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';

const PIPES = [
  SortAlphabeticallyPipe,
  TruncatePipe
]

@NgModule({
  declarations: PIPES,
  imports: [],
  exports: PIPES,
})
export class PipeModule { }
