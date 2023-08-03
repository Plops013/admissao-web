import { Conta } from "./conta";

export interface Coperado {
    id: number;
    nome: string;
    cpf: string;
    regular: boolean;
    contas: Conta[];
}