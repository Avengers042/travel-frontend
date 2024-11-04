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

@Component({
	selector: "app-formulario",
	standalone: true,
	imports: [FormsModule, ReactiveFormsModule, RouterOutlet],
	templateUrl: "./formulario.component.html",
	styleUrls: ["./formulario.component.css"],
})
export class FormularioComponent {
	formPreferenciasUsuario: FormGroup;
	dadosFormulario: DadosFormulario = new DadosFormulario();

	opcoesPreferencias = {
		pontoTuristico: [
			{ codigo: 1, descricao: "Natureza" },
			{ codigo: 2, descricao: "Cultura e Historia" },
			{ codigo: 3, descricao: "Aventura" },
			{ codigo: 4, descricao: "Vida noturna" },
		],
		hospedagem: [
			{ codigo: 5, descricao: "Hotel" },
			{ codigo: 6, descricao: "Airbnb" },
			{ codigo: 7, descricao: "Hostel" },
			{ codigo: 8, descricao: "Acampamento" },
		],
		clima: [
			{ codigo: 9, descricao: "Equatorial" },
			{ codigo: 10, descricao: "Tropical" },
			{ codigo: 11, descricao: "Subtropical" },
		],
		alimentacao: [
			{ codigo: 12, descricao: "Massas" },
			{ codigo: 13, descricao: "Hamburguer" },
			{ codigo: 14, descricao: "Sushi" },
			{ codigo: 15, descricao: "Churrasco" },
			{ codigo: 16, descricao: "Sobremesas" },
		],
	};

	constructor(
		private fb: FormBuilder,
		private router: Router,
	) {
		this.formPreferenciasUsuario = this.fb.group({
			pontoTuristico: [this.dadosFormulario.pontosTuristicos],
			hospedagem: [this.dadosFormulario.hospedagem],
			clima: [this.dadosFormulario.clima],
			alimentacao: [this.dadosFormulario.alimentacao],
		});
	}

	enviarPreferencias(form: FormGroup) {
		const userPreferences = {
			pontosTuristicos: this.dadosFormulario.pontosTuristicos,
			hospedagem: this.dadosFormulario.hospedagem,
			clima: this.dadosFormulario.clima,
			alimentacao: this.dadosFormulario.alimentacao,
		};

		window.localStorage.setItem(
			"userPreferences",
			JSON.stringify(userPreferences),
		);
		console.log(userPreferences);
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	pontoTuristicoChange(event: any) {
		const selectedCode = +event.target.value;
		const selectedPoint = this.opcoesPreferencias.pontoTuristico.find(
			(ponto) => ponto.codigo === selectedCode,
		);

		if (event.target.checked) {
			if (selectedPoint) {
				this.dadosFormulario.pontosTuristicos.push(selectedPoint);
			}
		} else {
			this.dadosFormulario.pontosTuristicos =
				this.dadosFormulario.pontosTuristicos.filter(
					(item) => item.codigo !== selectedCode,
				);
		}

		this.formPreferenciasUsuario.patchValue({
			pontosTuristicos: this.dadosFormulario.pontosTuristicos,
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
				this.dadosFormulario.hospedagem.push(selectedAccommodation);
			}
		} else {
			this.dadosFormulario.hospedagem =
				this.dadosFormulario.hospedagem.filter(
					(item) => item.codigo !== selectedCode,
				);
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
				this.dadosFormulario.alimentacao.push(selectedAccommodation);
			}
		} else {
			this.dadosFormulario.alimentacao =
				this.dadosFormulario.alimentacao.filter(
					(item) => item.codigo !== selectedCode,
				);
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
			this.dadosFormulario.clima = selectedClimate;
		}
		this.formPreferenciasUsuario.patchValue({
			clima: this.dadosFormulario.clima,
		});
	}

	voltarHome() {
		this.router.navigateByUrl("/");
	}
}
