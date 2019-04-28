import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ClientesModule } from "./clientes/clientes.module";

@NgModule({
  declarations: [AppComponent],
  imports: [FormsModule, BrowserModule, HttpClientModule, ClientesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
