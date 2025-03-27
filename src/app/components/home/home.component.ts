import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, RippleModule, MenubarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      {
        
        
      },
      {
        label: 'Edit Rule'
      }
    ]
  }
}
