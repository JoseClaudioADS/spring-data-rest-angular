import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientesService } from "./clientes.service";
import { ClientesComponent } from "./clientes.component";
import { FormsModule } from "@angular/forms";
import {
  NgbPaginationModule,
  NgbAlertModule,
  NgbModalModule
} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbAlertModule,
    NgbModalModule,
    NgbPaginationModule
  ],
  providers: [ClientesService],
  exports: [ClientesComponent]
})
export class ClientesModule {}
