import { Component, OnInit } from "@angular/core";
import { ClientesService } from "./clientes.service";
import { ClienteResource } from "./cliente";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ClientePesquisarResource } from "./cliente-pesquisar";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.css"]
})
export class ClientesComponent implements OnInit {
  cliente: ClienteResource;
  clientes: ClientePesquisarResource;
  pagina: number = 1;

  constructor(
    private clienteService: ClientesService,
    private modalService: NgbModal
  ) {
    this.resetarCliente();
  }

  ngOnInit() {
    this.carregarClientes();
  }

  carregarClientes() {
    this.clienteService.pesquisarDefault(0).subscribe(res => {
      this.clientes = res;
    });
  }

  pesquisar() {
    this.clienteService
      .pesquisarDefault(this.pagina - 1)
      .subscribe(res => (this.clientes = res));
  }

  salvar() {
    const chamada =
      this.cliente._links && this.cliente._links.self.href
        ? this.clienteService.alterar(this.cliente)
        : this.clienteService.cadastrar(this.cliente);
    chamada.subscribe(res => {
      this.carregarClientes();
      this.resetarCliente();
    });
  }

  abrirModal(conteudo, cliente: ClienteResource) {
    this.clienteService.detalhar(cliente._links.self.href).subscribe(res => {
      this.cliente = res;
      this.modalService
        .open(conteudo)
        .result.then(() => this.resetarCliente(), () => this.resetarCliente());
    });
  }

  alterar(cliente: ClienteResource) {
    this.cliente = Object.assign(new ClienteResource([]), cliente);
  }

  excluir() {
    this.clienteService.excluir(this.cliente._links.self.href).subscribe(() => {
      this.carregarClientes();
      this.modalService.dismissAll();
    });
  }

  private resetarCliente() {
    this.cliente = new ClienteResource([]);
  }
}
