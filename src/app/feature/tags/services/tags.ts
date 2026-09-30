import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Tags {
  private http = inject(HttpClient);
  private baseUrl = 'http://127.0.0.1:4010/v1/tags';

  listar() {
  const headers = new HttpHeaders({
    Authorization: 'Bearer qualquer-token-aqui',
  });
  return this.http.get(this.baseUrl, { headers });
}

criar(tag: any) {
  const headers = new HttpHeaders({
    Authorization: 'Bearer qualquer-token-aqui',
  });
  return this.http.post(this.baseUrl, tag, { headers });
}

excluir(id: string) {
  const headers = new HttpHeaders({
    Authorization: 'Bearer qualquer-token-aqui',
  });
  return this.http.delete(`${this.baseUrl}/${id}`, { headers });
}

atualizar(id: string, tag: any) {
  const headers = new HttpHeaders({
    Authorization: 'Bearer qualquer-token-aqui',
  });
  return this.http.put(`${this.baseUrl}/${id}`, tag, { headers });
}
}