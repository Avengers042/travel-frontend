export class DadosFormulario {
	pontoTuristico: number | null = null;
	hospedagem: number | null = null;
	alimentacao: number | null = null;
	clima: number | null = null;
}

export class ResultadoViagem {
	cidade: string | null = "Sem cidade selecionada";
	categoria: string | null = "Sem categoria definida";
	descricao_categoria: string | null = "Sem descrição definida";
	descricao_alimentacao: string | null = "Sem alimentação definida";
	descricao_hospedagem: string | null = "Sem hospedagem definida";
}
