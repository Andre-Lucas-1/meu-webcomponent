import { Component, inject, OnInit, signal } from '@angular/core';
import { Backends } from '../../../backends/services/backends';
import { Tags } from '../../../tags/services/tags';

@Component({
  selector: 'app-mocks-tags',
  standalone: false,
  styleUrl: './mocks-tags.css',
  templateUrl: './mocks-tags.html',
})
export class MocksTags implements OnInit {
  private backendsService = inject(Backends);
  private tagsService = inject(Tags);

  backends = signal<any[]>([]);
  tags = signal<any[]>([]);
  endpointSelecionado = signal<string | null>(null);
  tagSelecionada = signal<string | null>(null);

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.backendsService.listar().subscribe({
      next: (resposta: any) => {
        const lista = resposta?.content ?? [];
        this.backends.set(lista);
        if (lista.length && !this.endpointSelecionado()) this.endpointSelecionado.set(String(lista[0].id));
      },
      error: () => this.backends.set([]),
    });
    this.tagsService.listar().subscribe({
      next: (resposta: any) => this.tags.set(resposta?.content ?? []),
      error: () => this.tags.set([]),
    });
  }

  selecionarBackend(id: string): void {
    this.endpointSelecionado.set(id);
    this.tagSelecionada.set(null);
  }

  selecionarTag(id: string): void {
    this.tagSelecionada.set(id);
  }

  tagClasse(tag: any): string {
    const nome = String(tag?.name ?? '').toLowerCase();
    if (/erro|falha|timeout/.test(nome)) return 'tag-chip danger';
    if (/vazio|incompleto|atenção|atencao/.test(nome)) return 'tag-chip warning';
    if (/sucesso|ok|normal/.test(nome)) return 'tag-chip success';
    return 'tag-chip';
  }

  get backendSelecionado(): any | undefined {
    return this.backends().find(item => String(item.id) === this.endpointSelecionado());
  }

  get tagAtiva(): any | undefined {
    return this.tags().find(item => String(item.id) === this.tagSelecionada());
  }

  isBackendSelected(id: any): boolean {
    return String(id) === this.endpointSelecionado();
  }

  isTagSelected(id: any): boolean {
    return String(id) === this.tagSelecionada();
  }
}
