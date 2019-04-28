export class ClienteResource {
  nome: string;
  email: string;
  _links: ClienteLinksResource;

  constructor (values: Object[]) {
    Object.assign(this, values);
  }

}

class ClienteLinksResource {
  self: Link;
}

class Link {
  href: string;
}
