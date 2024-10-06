import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [TranslateModule, CommonModule],
  selector: 'app-roma',
  templateUrl: './roma.component.html',
  styleUrl: './roma.component.scss',
})
export class RomaComponent {}
