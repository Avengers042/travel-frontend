import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { ResultadoComponent } from "./funcionalidades/resultado/componente/resultado.component";
import { FormularioComponent } from "./funcionalidades/formulario/componente/formulario/formulario.component";
import { ModalComponent } from "./funcionalidades/modal/componente/modal.component";
import { HomeComponent } from "./funcionalidades/home/componente/home.component";

@NgModule({
	declarations: [
		AppComponent,
		ResultadoComponent,
		FormularioComponent,
		ModalComponent,
		HomeComponent,
	],
	imports: [BrowserModule, RouterModule.forRoot(routes)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
