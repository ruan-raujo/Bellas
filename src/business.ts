// Public profile and embed consulted on 2026-11-13.
// Photo sources: .taste-skill/karla-instagram-source.json and karla-post-*.json.
export const business = {
  name: 'Bellas Espaço da Beleza',
  handle: '@bellas_espacodabeleza',
  instagram: 'https://www.instagram.com/bellas_espacodabeleza/',
  // WhatsApp number supplied by the user.
  phone: '+55 88 99282-3116',
  whatsapp: 'https://wa.me/5588992823116',
  portrait: '/assets/karla/Depu6gNj8ZO-2.jpg',
  cutout: '/assets/bellas/retrato-recortado.png',
};

export const whatsappLink = (message: string) =>
  `${business.whatsapp}?text=${encodeURIComponent(message)}`;

export const services = [
  { id: 'alisamentos', name: 'Alisamentos', image: '/assets/karla/trabalho-05.jpg' },
  { id: 'mechas', name: 'Mechas e coloração', image: '/assets/karla/trabalho-04.jpg' },
  { id: 'mega-hair', name: 'Mega hair', image: '/assets/karla/trabalho-06.jpg' },
  { id: 'penteados', name: 'Penteados e finalização', image: '/assets/karla/DfmY8WfoJyh-2.jpg' },
];

export const posts = [
  { id: 'liso-frente', postId: 'De1etSfm4Nq', image: '/assets/karla/trabalho-05.jpg', title: 'Cabelo preto liso', category: 'alisamentos' },
  { id: 'loiro-costas', postId: 'DfmY8WfoJyh', image: '/assets/karla/trabalho-01.jpg', title: 'Ondas e comprimento', category: 'penteados' },
  { id: 'caramelo', postId: 'Depu6gNj8ZO', image: '/assets/karla/trabalho-06.jpg', title: 'Mega hair em tons caramelo', category: 'mega-hair' },
  { id: 'mechas', postId: 'DfTQUVZjd1X', image: '/assets/karla/trabalho-04.jpg', title: 'Mechas e finalização', category: 'mechas' },
  { id: 'liso-detalhe', postId: 'De1etSfm4Nq', image: '/assets/karla/De1etSfm4Nq-2.jpg', title: 'Brilho e movimento dos fios lisos', category: 'alisamentos' },
  { id: 'ondas', postId: 'DfmY8WfoJyh', image: '/assets/karla/DfmY8WfoJyh-3.jpg', title: 'Finalização com ondas', category: 'penteados' },
].map(post => ({ ...post, url: `https://www.instagram.com/p/${post.postId}/` }));

export const showcase = {
  left: '/assets/karla/DfTQUVZjd1X-2.jpg',
  center: '/assets/karla/De1etSfm4Nq-3.jpg',
  right: '/assets/karla/Depu6gNj8ZO-3.jpg',
  videoPoster: '/assets/karla/DfmY8WfoJyh-2.jpg',
  videoPost: 'https://www.instagram.com/p/DflJx52PImc/',
};
