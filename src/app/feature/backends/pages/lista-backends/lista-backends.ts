import { Component, inject, OnInit, signal } from '@angular/core';
import { Backends } from '../../services/backends';

@Component({
  selector: 'app-lista-backends',
  standalone: false,
  styleUrl: './lista-backends.css',
  templateUrl: './lista-backends.html',
})
export class ListaBackends implements OnInit {
  private backendsService = inject(Backends)

  backends = signal<any[]>([]);

  ngOnInit() {
    this.backendsService.listar().subscribe((resposta: any) => {
      this.backends.set(resposta.content);
    });
  }

  novaDescricao = ''
  novoStatus = ''
  novaBaseUrl = ''
  novaVersao = ''
  novoApiNumbers = ''

  adicionar() {
    const novoBackend = { description: this.novaDescricao, status: this.novoStatus, baseUrl: this.novaBaseUrl, version: this.novaVersao, apiNumbers: this.novoApiNumbers };
    this.backendsService.criar(novoBackend).subscribe(() => {

      this.backendsService.listar().subscribe((resposta: any) => {
        this.backends.set(resposta.content);
      });

    });

    this.novaDescricao = '';
    this.novoStatus = '';
    this.novaBaseUrl = '';
    this.novaVersao = '';
    this.novoApiNumbers = '';

  }

  excluir(id: string) {
    this.backendsService.excluir(id).subscribe(() => {
      this.backendsService.listar().subscribe((resposta: any) => {
        this.backends.set(resposta.content);
      });
    });
  }

  editando: string | null = null;

  iniciarEdicao(id: string) {
    this.editando = id;
  }
  atualizar(id: string, tag: any) {
    tag.apiNumbers = String(tag.apiNumbers);
    this.backendsService.atualizar(id, tag).subscribe(() => {
      this.editando = null;
      this.backendsService.listar().subscribe((resposta: any) => {
        this.backends.set(resposta.content);
      });
    });
  }

pipelineIds: { [key: string]: string } = {};

  rodarPipeline(backendId: string) {
    this.backendsService.rodarPipeline(backendId).subscribe((resposta: any) => {
       this.pipelineIds[backendId] = resposta.pipeline.id;

    alert('Pipeline criada! ID: ' + resposta.pipeline.id);
    });
  }

  verificarGitlab(backendId: string) {
    this.backendsService.verificarGitlab(backendId).subscribe((resposta: any) => {
      alert(JSON.stringify(resposta));
    });
  }

  statusBackend(backendId: string) {
    this.backendsService.statusBackend(backendId).subscribe((resposta: any) => {
      alert(JSON.stringify(resposta));
    });
  }

  statusPipeline(backendId: string, pipelineId: string) {
    this.backendsService.statusPipeline(backendId, pipelineId).subscribe((resposta: any) => {
      alert(JSON.stringify(resposta));
    });
  }

  validarVersao(backendId: string, pipelineId: string) {
    this.backendsService.validarVersao(backendId, pipelineId).subscribe((resposta: any) => {
      alert(JSON.stringify(resposta));
    });
  }

}

