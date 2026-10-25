/**
 * Sem integração ainda, só placeholder -- Att Lanna
 */

export interface Plano {
  nome: string;
  beneficios: string[];
}

export interface Usuaria {
  nome: string;
  // Endereço da foto de perfil. Sem ela, o cabeçalho mostra a inicial do nome.
  imagem?: string;
  email: string;
  plano: Plano;
}

export const usuariaMock: Usuaria = {
  nome: "Larissa",
  email: "exemploemail@gmail.com",
  plano: {
    nome: "loba",
    beneficios: ["benefício 1", "benefício 2", "benefício 3"],
  },
};
