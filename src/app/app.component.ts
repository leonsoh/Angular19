import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { RulesComponent } from './components/rules/rules.component';
import { HomeComponent } from './components/home/home.component';


@Component({
  selector: 'app-root',
  imports: [HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dbs-assessment';
}
