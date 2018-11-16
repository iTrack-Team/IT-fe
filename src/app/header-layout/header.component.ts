import { Component, Input } from '@angular/core';


@Component({
  selector: 'exc-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  @Input() login: boolean;
  @Input() registrate: boolean;
}
