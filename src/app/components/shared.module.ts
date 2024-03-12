import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipeModule } from '../core/pipes/pipe.module';

// Categorized components
import { HeaderComponent } from './header/header.component';

const COMPONENTS_SHARED = [
  HeaderComponent
];

@NgModule({
  declarations: COMPONENTS_SHARED,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  exports: COMPONENTS_SHARED,
})
export class SharedModule { }
