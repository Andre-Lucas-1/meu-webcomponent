import { Component, computed, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private currentUrl = signal('');
  protected pageTitle = computed(() => {
    const url = this.currentUrl();
    if (url.includes('mocks-tags')) return 'Mocks e Tags';
    if (url.includes('backends')) return 'Backends';
    if (url.includes('tags')) return 'Tags';
    return 'Painel';
  });

  constructor(router: Router) {
    this.currentUrl.set(router.url);
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => this.currentUrl.set(event.urlAfterRedirects));
  }
}
