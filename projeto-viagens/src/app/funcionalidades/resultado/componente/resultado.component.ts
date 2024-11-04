// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from "@angular/core";
// biome-ignore lint/style/useImportType: <explanation>
import { Router, RouterOutlet } from "@angular/router";

@Component({
	selector: "app-resultado",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./resultado.component.html",
	styleUrl: "./resultado.component.css",
})
export class ResultadoComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {
		// JSON.parse(window.localStorage.getItem("userPreferences"))
	}

	limparPreferencias() {
		window.localStorage.setItem("userPreferences", "");
	}
	adicionarPreferencias() {
		this.router.navigateByUrl("/formulario");
	}
}
