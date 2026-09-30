import { NgModule, Injector, DoBootstrap, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { TagsModule  } from './feature/tags/tags-module';
import { BackendsModule } from './feature/backends/backends-module';
import { DashboardModule } from './feature/dashboard/dashboard-module';
import { MocksModule } from './feature/mocks/mocks-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, TagsModule, BackendsModule, DashboardModule, MocksModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(App, { injector: this.injector });
    customElements.define('meu-widget', el);
  }
}