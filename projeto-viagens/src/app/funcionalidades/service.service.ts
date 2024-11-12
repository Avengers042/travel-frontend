// biome-ignore lint/style/useImportType: <explanation>
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
// biome-ignore lint/style/useImportType: <explanation>
import {
	DadosFormulario,
	ResultadoViagem,
} from "./formulario/model/formulario.model";
// biome-ignore lint/style/useImportType: <explanation>
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ServiceService {
	private readonly urlEnviarDados =
		"http://localhost:8000/api/preferences/recommendation";

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	private respostasObtidas = new BehaviorSubject<any>(null);

	constructor(private http: HttpClient) {}

	public enviarDadosFormulario(
		dadosFormulario: DadosFormulario,
	): Observable<ResultadoViagem> {
		return this.http
			.post<ResultadoViagem>(this.urlEnviarDados, dadosFormulario)
			.pipe(
				tap((resposta) => {
					this.respostasObtidas.next(resposta);
				}),
			);
	}

	public getRespostasObtidas() {
		return this.respostasObtidas.asObservable();
	}
}
