import { Component } from "@angular/core";
// biome-ignore lint/style/useImportType: <explanation>
import {
	FormBuilder,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
} from "@angular/forms";
import { DadosFormulario } from "../../model/formulario.model";
// biome-ignore lint/style/useImportType: <explanation>
import { Router, RouterOutlet } from "@angular/router";
import { ServiceService } from "../../../service.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
	selector: "app-formulario",
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule, RouterOutlet, HttpClientModule],
	templateUrl: "./formulario.component.html",
	styleUrls: ["./formulario.component.css"],
})
export class FormularioComponent {
	formPreferenciasUsuario: FormGroup;
	dadosFormulario: DadosFormulario = new DadosFormulario();

	opcoesPreferencias = {
		pontoTuristico: [
			{ codigo: 1 },
			{ codigo: 2 },
			{ codigo: 3 },
			{ codigo: 4 },
		],
		hospedagem: [
			{ codigo: 5 },
			{ codigo: 6 },
			{ codigo: 7 },
			{ codigo: 8 },
		],
		clima: [{ codigo: 9 }, { codigo: 10 }, { codigo: 11 }],
		alimentacao: [
			{ codigo: 12 },
			{ codigo: 13 },
			{ codigo: 14 },
			{ codigo: 15 },
			{ codigo: 16 },
		],
	};

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private service: ServiceService,
	) {
		this.formPreferenciasUsuario = this.fb.group({
			pontoTuristico: this.dadosFormulario.pontoTuristico,
			hospedagem: this.dadosFormulario.hospedagem,
			clima: this.dadosFormulario.clima,
			alimentacao: this.dadosFormulario.alimentacao,
		});
	}

	enviarPreferencias(form: FormGroup) {
		const userPreferences = {
			pontoTuristico: this.dadosFormulario.pontoTuristico,
			hospedagem: this.dadosFormulario.hospedagem,
			clima: this.dadosFormulario.clima,
			alimentacao: this.dadosFormulario.alimentacao,
		};

		console.log(`User Preferences: ${JSON.stringify(userPreferences)}`);
		console.log(
			`Dados Formulario: ${JSON.stringify(this.dadosFormulario)}`,
		);

		this.service
			.enviarDadosFormulario(userPreferences)
			.subscribe((dados) => {
				if (dados) {
					this.router.navigateByUrl("/resultado");
				}
			});
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	pontoTuristicoChange(event: any) {
		const selectedCode = +event.target.value;
		const selectedPoint = this.opcoesPreferencias.pontoTuristico.find(
			(ponto) => ponto.codigo === selectedCode,
		);

		if (event.target.checked) {
			if (selectedPoint) {
				this.dadosFormulario.pontoTuristico = selectedPoint.codigo;
			}
		}

		this.formPreferenciasUsuario.patchValue({
			pontoTuristico: this.dadosFormulario.pontoTuristico,
		});
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	hospedagemChange(event: any) {
		const selectedCode = +event.target.value;
		const selectedAccommodation = this.opcoesPreferencias.hospedagem.find(
			(hospedagem) => hospedagem.codigo === selectedCode,
		);

		if (event.target.checked) {
			if (selectedAccommodation) {
				this.dadosFormulario.hospedagem = selectedAccommodation.codigo;
			}
		}

		this.formPreferenciasUsuario.patchValue({
			hospedagem: this.dadosFormulario.hospedagem,
		});
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	alimentacaoChange(event: any) {
		const selectedCode = +event.target.value;
		const selectedAccommodation = this.opcoesPreferencias.alimentacao.find(
			(alimentacao) => alimentacao.codigo === selectedCode,
		);

		if (event.target.checked) {
			if (selectedAccommodation) {
				this.dadosFormulario.alimentacao = selectedAccommodation.codigo;
			}
		}

		this.formPreferenciasUsuario.patchValue({
			alimentacao: this.dadosFormulario.alimentacao,
		});
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	climaChange(event: any) {
		const selectedCode = +event.target.value; // Obtendo o valor selecionado
		const selectedClimate = this.opcoesPreferencias.clima.find(
			(clima) => clima.codigo === selectedCode,
		);
		if (selectedClimate) {
			this.dadosFormulario.clima = selectedClimate.codigo;
		}

		this.formPreferenciasUsuario.patchValue({
			clima: this.dadosFormulario.clima,
		});
	}

	voltarHome() {
		this.router.navigateByUrl("/");
	}
}
