import { Component } from "@angular/core";
// biome-ignore lint/style/useImportType: <explanation>
import { Router, RouterOutlet } from "@angular/router";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {
	constructor(private router: Router) {}

	irParaFormulario() {
		this.router.navigateByUrl("/formulario");
	}
}
