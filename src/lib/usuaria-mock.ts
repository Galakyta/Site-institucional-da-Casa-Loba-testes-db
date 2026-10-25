/**
 * Sem integração ainda, só placeholder -- Att Lanna
 */

export interface Usuaria {
  nome: string;
  // Endereço da foto de perfil. Sem ela, o cabeçalho mostra a inicial do nome.
  imagem?: string;
}

export const usuariaMock: Usuaria = {
  nome: "Larissa",
};
