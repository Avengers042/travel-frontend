export class DadosFormulario {
	pontosTuristicos: EstruturaBase[] = [];
	hospedagem: EstruturaBase[] = [];
	alimentacao: EstruturaBase[] = [];
	clima: EstruturaBase = new EstruturaBase();
}

export class EstruturaBase {
	codigo: number | null = null;
	descricao: string | undefined;
}

export class ResultadoViagem {
	cidade: string | null = "";
	categoria: string | null = "";
	descricao_categoria: string | null = "";
	descricao_alimentacao: string | null = "";
	descricao_hospedagem: string | null = "";
}
