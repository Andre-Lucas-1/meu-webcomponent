import { NgModule, Injector, DoBootstrap, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { TagsModule  } from './feature/tags/tags-module';
import { BackendsModule } from './feature/backends/backends-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, TagsModule, BackendsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(App, { injector: this.injector });
    customElements.define('meu-widget', el);
  }
}