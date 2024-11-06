// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from "@angular/core";
// biome-ignore lint/style/useImportType: <explanation>
import { Router, RouterOutlet } from "@angular/router";
import { ModalComponent } from "../../modal/componente/modal.component";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-resultado",
	standalone: true,
	imports: [RouterOutlet, ModalComponent, CommonModule],
	templateUrl: "./resultado.component.html",
	styleUrl: "./resultado.component.css",
})
export class ResultadoComponent implements OnInit {
	openModal = false;

	constructor(private router: Router) {}

	ngOnInit(): void {
		// JSON.parse(window.localStorage.getItem("userPreferences"))
	}

	closeModal(event: boolean) {
		this.openModal = event;
	}

	limparPreferencias() {
		this.openModal = true;
	}

	adicionarPreferencias() {
		this.router.navigateByUrl("/formulario");
	}
}
