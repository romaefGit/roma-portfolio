import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private sectionToScroll = new BehaviorSubject<string | null>(null);
  sectionToScroll$ = this.sectionToScroll.asObservable();

  scrollTo(sectionId: string): void {
    this.sectionToScroll.next(sectionId);
  }
}
