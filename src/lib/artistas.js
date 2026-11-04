export const ARTISTAS = {
  Pedro: {
    nome: "Pedro",
    numero: "5588988151026",
    telefone: "(88) 98815-1026",
    especialidade: "Realismo e black and grey",
    instagram: "https://www.instagram.com/pedromenezes_3/",
    instagramHandle: "@pedromenezes_3",
    fotosCount: 9,
  },
  Bruna: {
    nome: "Bruna",
    numero: "5588997011400",
    telefone: "(88) 99701-1400",
    especialidade: "Realismo autoral e fineline",
    instagram: "https://www.instagram.com/_brunatattoo/",
    instagramHandle: "@_brunatattoo",
    fotosCount: 10,
  },
};

export const ENDERECO = "Rua Coronel Filemon Teles, 30, bairro José Geraldo da Cruz, Juazeiro do Norte - CE";
export const LINK_MAPA = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ENDERECO)}`;

export const linkWhats = (numero, mensagem) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
