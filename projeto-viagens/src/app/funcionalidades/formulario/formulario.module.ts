import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormularioRoutingModule } from "./formulario-routing.module";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		FormularioRoutingModule,
		FormsModule,
		BrowserModule,
		HttpClientModule,
	],
})
export class FormularioModule {}
