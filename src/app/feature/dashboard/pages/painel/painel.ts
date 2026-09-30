import { Component, inject, OnInit, signal } from '@angular/core';
import { Backends } from '../../../backends/services/backends';
import { Tags } from '../../../tags/services/tags';

@Component({
  selector: 'app-painel',
  standalone: false,
  styleUrl: './painel.css',
  templateUrl: './painel.html',
})
export class Painel implements OnInit {
  private backendsService = inject(Backends);
  private tagsService = inject(Tags);

  backends = signal<any[]>([]);
  tags = signal<any[]>([]);
  carregando = signal(true);

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.carregando.set(true);
    this.backendsService.listar().subscribe({
      next: (resposta: any) => this.backends.set(resposta?.content ?? []),
      error: () => this.backends.set([]),
      complete: () => this.carregarTags(),
    });
  }

  private carregarTags(): void {
    this.tagsService.listar().subscribe({
      next: (resposta: any) => this.tags.set(resposta?.content ?? []),
      error: () => this.tags.set([]),
      complete: () => this.carregando.set(false),
    });
  }

  get endpointsMockados(): number {
    return this.backends().reduce((total, backend) => total + Number(backend.apiNumbers || 0), 0);
  }

  get tagsAtivas(): number {
    return this.tags().length;
  }

  get revisoes(): number {
    return this.tags().filter(tag => String(tag.type ?? '').toLowerCase().includes('revis')).length;
  }

  get simulacoes(): number {
    return this.tags().filter(tag => /timeout|latência|latencia|falha|instabilidade/i.test(`${tag.name ?? ''} ${tag.type ?? ''}`)).length;
  }

  statusClasse(status: string): string {
    const valor = String(status ?? '').toLowerCase();
    if (valor.includes('ativo') || valor.includes('online') || valor.includes('sucesso')) return 'status status--success';
    if (valor.includes('erro') || valor.includes('inativo') || valor.includes('offline')) return 'status status--danger';
    return 'status status--neutral';
  }
}
