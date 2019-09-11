import {
  Component,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-pecas',
  templateUrl: './pecas.component.html',
  styleUrls: ['./pecas.component.scss']
})
export class PecasComponent implements OnInit {
  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper: ElementRef;
  @Input('expanded') expanded: boolean = false;
  @Input('expandHeight') expandHeight: string = '150px';

  constructor(public renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.expandWrapper.nativeElement,
      'max-height',
      this.expandHeight
    );
  }
}
