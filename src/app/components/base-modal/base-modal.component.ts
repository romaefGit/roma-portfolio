import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { CommonModule } from '@angular/common';
import { ClickListenerService } from 'src/app/app.component';
import { ModalService } from 'src/app/core/services/modal/modal.service';
const timeAnimation = 300; //  milliseconds
@Component({
  selector: 'app-base-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-modal.component.html',
  styleUrl: './base-modal.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'scale(1)',
          top: -16,
        }),
      ),
      state(
        'closed',
        style({
          opacity: 0,
          top: 0,
          transform: 'scale(0.6)',
        }),
      ),
      transition('open => closed', [
        animate(
          '0.4s ease-in-out',
          style({
            opacity: 0,
            transform: 'scale(0.6)',
          }),
        ),
      ]),
      transition('closed => open', [
        animate(
          '0.3s ease-in-out',
          style({
            opacity: 1,
            transform: 'scale(1)',
          }),
        ),
      ]),
    ]),
  ],
})
export class BaseModalComponent {
  @Input() header = '';
  @Input() styled = true;
  @Input() maxWidth!: string;

  @Input() showCloseButton = true;
  @Input() titleModal = '';
  @Input() bgPersonalized = '';
  @Input() messageInfoType: boolean = false;
  @Output() isOpened = new EventEmitter<any>();
  @Output() isClosed = new EventEmitter<any>();

  /**Passes as reference
   * @param baseDialog
   * @param dialogContent
   */
  @ViewChild('baseDialog') dialog!: ElementRef<HTMLDialogElement>;
  @ViewChild('dialogContent') dialogContent!: ElementRef<HTMLDialogElement>;

  /**This component is the modal base for others modals, it gives the basic funciontality such as closed, the button, title */

  isOpen = false;
  private subscription!: Subscription;
  private prematurelyClosed = false;

  constructor(
    private clickListenerService: ClickListenerService,
    private renderer: Renderer2,
    private modalService: ModalService,
  ) {}

  documentClickListener(target: any): void {
    if (
      this.dialog.nativeElement.open &&
      this.dialog.nativeElement.isEqualNode(target as HTMLElement)
    ) {
      this.closeDialog();
    }
  }

  ngOnInit(): void {
    this.subscription =
      this.clickListenerService.documentClickedTarget.subscribe((target: any) =>
        this.documentClickListener(target),
      );
  }

  ngAfterViewInit() {
    this.dialog.nativeElement.addEventListener('cancel', this.onCancel);
    this.dialog.nativeElement.addEventListener('close', this.onClose);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      if (this.dialog) {
        this.dialog.nativeElement.removeEventListener('cancel', this.onCancel);
        this.dialog.nativeElement.removeEventListener('close', this.onClose);
      }
    }
  }

  openDialog() {
    this.dialog.nativeElement.showModal();
    this.isOpen = true;
    this.isOpened.emit();
    this.renderer.addClass(document.body, 'blur');
    if (this.messageInfoType) {
      setTimeout(() => {
        this.closeDialog();
      }, 2000);
    }
  }

  closeDialog() {
    this.isOpen = false;
    this.renderer.removeClass(document.body, 'blur');
    setTimeout(() => {
      //Wait for the close animation to end before closing the <dialog>
      this.modalService.closeModal();
      this.isClosed.emit();
      this.dialog.nativeElement.close();
    }, timeAnimation);
  }

  private onCancel = (e: Event) => {
    this.isClosed.emit();

    if (e.target !== this.dialog.nativeElement) {
      this.prematurelyClosed = true;
    }
  };

  private onClose = (e: Event) => {
    if (this.prematurelyClosed) {
      //This is a workaround for a bug in chrome where the dialog closes after cancelling a file upload https://bugs.chromium.org/p/chromium/issues/detail?id=1442824
      this.prematurelyClosed = false;
      setTimeout(() => {
        this.dialog.nativeElement.showModal();
      }, 0);
    }
  };
}
