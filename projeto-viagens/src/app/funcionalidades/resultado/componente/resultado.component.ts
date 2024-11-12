// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from "@angular/core";
// biome-ignore lint/style/useImportType: <explanation>
import { Router, RouterOutlet } from "@angular/router";
import { ModalComponent } from "../../modal/componente/modal.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ServiceService } from "../../service.service";
import { ResultadoViagem } from "../../formulario/model/formulario.model";

@Component({
	selector: "app-resultado",
	standalone: true,
	imports: [RouterOutlet, ModalComponent, CommonModule, HttpClientModule],
	providers: [ServiceService],
	templateUrl: "./resultado.component.html",
	styleUrl: "./resultado.component.css",
})
export class ResultadoComponent implements OnInit {
	openModal = false;
	respostasObtidas: ResultadoViagem = new ResultadoViagem();

	constructor(
		private router: Router,
		private service: ServiceService,
	) {}

	ngOnInit(): void {
		// JSON.parse(window.localStorage.getItem("userPreferences"))

		this.service.getRespostasObtidas().subscribe((dados) => {
			if (dados) {
				this.respostasObtidas = dados;
				console.log(dados);
			}
		});
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
