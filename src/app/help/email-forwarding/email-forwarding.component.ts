import { Component } from '@angular/core';

@Component({
  selector: 'app-email-forwarding',
  templateUrl: './email-forwarding.component.html',
  styleUrls: ['./email-forwarding.component.css']
})
export class EmailForwardingComponent {
  selectedProvider: string = 'gmail';
}
