import { NgModule } from '@angular/core';
import { SortAlphabeticallyPipe } from './sort-alphabetically/sort-alphabetically.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

const PIPES = [SortAlphabeticallyPipe, TruncatePipe];

@NgModule({
  declarations: PIPES,
  imports: [TranslateModule, CommonModule],
  exports: PIPES,
})
export class PipeModule {}
