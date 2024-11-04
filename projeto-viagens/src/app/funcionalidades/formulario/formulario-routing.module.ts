import { NgModule } from "@angular/core";
// biome-ignore lint/style/useImportType: <explanation>
import { RouterModule, Routes } from "@angular/router";
import { FormularioComponent } from "./componente/formulario/formulario.component";

const routes: Routes = [{ path: "formulario", component: FormularioComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FormularioRoutingModule {}
