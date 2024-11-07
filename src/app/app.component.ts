import { Component } from '@angular/core';
import { CrzToolbarComponent } from './crz-toolbar/crz-toolbar.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CrzToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private readonly translate: TranslateService) {
    this.translate.addLangs(['en', 'it']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  title = 'concertz';
}
