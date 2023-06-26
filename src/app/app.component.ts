import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gasin-ui';
  public links = [
    {name: 'Inicio', href: '/', icon: 'dashboard'},
    {name: 'Transacciones', href: '/table', icon: 'assignment'}
    ];
}

