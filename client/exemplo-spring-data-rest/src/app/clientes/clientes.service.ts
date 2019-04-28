import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ClienteResource } from "./cliente";
import { Observable } from "rxjs";
import { ClientePesquisarResource } from "./cliente-pesquisar";

@Injectable({
  providedIn: "root"
})
export class ClientesService {
  static URL_BASE = "http://localhost:8080/clientes";

  constructor(private http: HttpClient) {}

  pesquisarDefault(pagina: number): Observable<ClientePesquisarResource> {
    return this.http.get<ClientePesquisarResource>(
      `${ClientesService.URL_BASE}?page=${pagina}&size=5`
    );
  }

  cadastrar(cliente: ClienteResource) {
    return this.http.post(`${ClientesService.URL_BASE}`, cliente);
  }

  alterar(cliente: ClienteResource) {
    return this.http.put(`${cliente._links.self.href}`, cliente);
  }

  excluir(href: string) {
    return this.http.delete(href);
  }

  detalhar(href: string): Observable<ClienteResource> {
    return this.http.get<ClienteResource>(href);
  }
}
