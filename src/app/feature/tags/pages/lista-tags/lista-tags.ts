import { Component, inject, OnInit, signal } from '@angular/core';
import { Tags } from '../../services/tags';

@Component({
  selector: 'app-lista-tags',
  standalone: false,
  styleUrl: './lista-tags.css',
  templateUrl: './lista-tags.html',
})

export class ListaTags implements OnInit {
  private tagsService = inject(Tags)

  tags = signal<any[]>([]);

  ngOnInit() {
    this.tagsService.listar().subscribe((resposta: any) => {
      this.tags.set(resposta.content);
    });
  }

  novoNome = ''
  novaDescricao = ''
  novoTipo = ''

  adicionar() {
  const novaTag = { name: this.novoNome, description: this.novaDescricao, type: this.novoTipo };
  this.tagsService.criar(novaTag).subscribe(() => {

    this.tagsService.listar().subscribe((resposta: any) => {
      this.tags.set(resposta.content);
    });

  });

  this.novoNome = '';
  this.novaDescricao = '';
  this.novoTipo = ''; 

}

excluir(id: string) {
   if (!confirm('Tem certeza que deseja excluir essa tag?')) {
    return;
  }
  this.tagsService.excluir(id).subscribe(() => {
    this.tagsService.listar().subscribe((resposta: any) => {
      this.tags.set(resposta.content);
    });
  });
}

editando: string | null = null;

iniciarEdicao(id: string) {
  this.editando = id;
}
atualizar(id: string, tag: any) {
  this.tagsService.atualizar(id, tag).subscribe(() => {
    this.editando = null;
    this.tagsService.listar().subscribe((resposta: any) => {
      this.tags.set(resposta.content);
    });
  });
}

}

