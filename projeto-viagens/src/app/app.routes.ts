import type { Routes } from "@angular/router";
import { FormularioComponent } from "./funcionalidades/formulario/componente/formulario/formulario.component";
import { HomeComponent } from "./funcionalidades/home/componente/home.component";
import { ResultadoComponent } from "./funcionalidades/resultado/componente/resultado.component";
import { ModalComponent } from "./funcionalidades/modal/componente/modal.component";

export const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "formulario", component: FormularioComponent },
	{ path: "resultado", component: ResultadoComponent },
	{ path: "modal", component: ModalComponent },
];
