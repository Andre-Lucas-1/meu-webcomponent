import { Service, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Service()
export class Backends {
    private http = inject(HttpClient);
    private baseUrl = 'http://127.0.0.1:4010/v1/backends';

    listar() {
        const headers = new HttpHeaders({
            Authorization: 'Bearer qualquer-token-aqui',
        });
        return this.http.get(this.baseUrl, { headers });
    }

    criar(backend: any) {
        const headers = new HttpHeaders({
            Authorization: 'Bearer qualquer-token-aqui',
        });
        return this.http.post(this.baseUrl, backend, { headers });
    }

    excluir(id: string) {
        const headers = new HttpHeaders({
            Authorization: 'Bearer qualquer-token-aqui',
        });
        return this.http.delete(`${this.baseUrl}/${id}`, { headers });
    }

    atualizar(id: string, backend: any) {
        const headers = new HttpHeaders({
            Authorization: 'Bearer qualquer-token-aqui',
        });
        return this.http.put(`${this.baseUrl}/${id}`, backend, { headers });
    }

    rodarPipeline(backendId: string) {
        const headers = new HttpHeaders({ Authorization: 'Bearer qualquer-token-aqui' });
        return this.http.post(`http://127.0.0.1:4010/v1/integration/gitlab/${backendId}/runpipe`, null, { headers });
    }

    verificarGitlab(backendId: string) {
        const headers = new HttpHeaders({ Authorization: 'Bearer qualquer-token-aqui' });
        return this.http.get(`http://127.0.0.1:4010/v1/integration/gitlab/${backendId}/verificacao`, { headers })
    }

    statusBackend(backendId: string) {
        const headers = new HttpHeaders({ Authorization: 'Bearer qualquer-token-aqui' });
        return this.http.get(`http://127.0.0.1:4010/v1/integration/backend/${backendId}/status`, { headers })
    }

    statusPipeline(backendId: string, pipelineId: string) {
        const headers = new HttpHeaders({ Authorization: 'Bearer qualquer-token-aqui' });
        return this.http.get(`http://127.0.0.1:4010/v1/integration/gitlab/${backendId}/statuspipe/${pipelineId}`, { headers });
    }

    validarVersao(backendId: string, pipelineId: string) {
        const headers = new HttpHeaders({ Authorization: 'Bearer qualquer-token-aqui' });
        return this.http.get(`http://127.0.0.1:4010/v1/integration/gitlab/versao/validacao/${backendId}/${pipelineId}`, { headers });
    }

}
