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
