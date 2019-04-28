import { ClienteResource } from './cliente';

export class ClientePesquisarResource {
  _embedded: Embedded;
  _links: Links2;
  page: Page;
}

export interface Self {
  href: string;
}

export interface Cliente2 {
  href: string;
}

export interface Links {
  self: Self;
  cliente: Cliente2;
}

export interface Embedded {
  clientes: ClienteResource[];
}

export interface First {
  href: string;
}

export interface Self2 {
  href: string;
  templated: boolean;
}

export interface Next {
  href: string;
}

export interface Prev {
  href: string;
}

export interface Last {
  href: string;
}

export interface Profile {
  href: string;
}

export interface Links2 {
  first: First;
  self: Self2;
  prev: Prev;
  next: Next;
  last: Last;
  profile: Profile;
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
