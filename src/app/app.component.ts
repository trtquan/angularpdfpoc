import { Component } from '@angular/core';
import {PrintService} from './print.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aide print service';

  constructor(public printService: PrintService) { }

  onPrintInvoice() {
    const CDCIds = ['101', '102'];
    this.printService
      .printDocument('cdc', CDCIds);
  }
}
