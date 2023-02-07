import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'i-frame-view',
  templateUrl: './i-frame-view.component.html',
  styleUrls: ['./i-frame-view.component.css'],
})
export class IFrameViewComponent implements AfterViewInit {
  @ViewChild('iframeView') segasIframe!: ElementRef;

  private sgUrl = '';

  constructor(private route: ActivatedRoute, private platform: Platform) {
    this.sgUrl = (this.route.snapshot.paramMap.get('id') as string) ?? '';
  }

  ngAfterViewInit() {
    this.segasIframe.nativeElement.src = `https://www.segas.gr/${this.sgUrl}`;
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      window.history.back();
      processNextHandler();
    });
  }
}
