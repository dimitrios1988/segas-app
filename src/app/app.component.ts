import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  showToolbar: boolean = false;
  constructor(private platform: Platform) {}

  ngOnInit(): void {
    this.platform.ready().then(() => {
      if (this.platform.is('ios')) {
        this.showToolbar = true;
      }
    });
  }
}
