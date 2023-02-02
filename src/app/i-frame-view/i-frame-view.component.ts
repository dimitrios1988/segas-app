import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'i-frame-view',
  templateUrl: './i-frame-view.component.html',
  styleUrls: ['./i-frame-view.component.css'],
})
export class IFrameViewComponent implements AfterViewInit {
  @ViewChild('iframeView') segasIframe!: ElementRef;

  private sgUrl = '';

  constructor(private route: ActivatedRoute) {
    this.sgUrl = (this.route.snapshot.paramMap.get('id') as string) ?? '';
  }

  ngAfterViewInit() {
    this.segasIframe.nativeElement.src = `https://www.segas.gr/${this.sgUrl}`;
  }
}
