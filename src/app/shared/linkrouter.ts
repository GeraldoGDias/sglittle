import { Injectable } from "@angular/core";

@Injectable()
export class LinkRouter {
    public readonly DashboardLink: string = '/';
    public readonly ProdutoLink: string = '/produtos';
    public readonly UsuarioLink: string = '/usuarios';
    public readonly ProdutoCreateLink: string = '/produtos/create';
}