'use client';

import { useEffect, useMemo, useState } from 'react';

function ProductImage({ src, alt, className }: { src?: string; alt: string; className?: string }) {
  const fallbackSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#17191c"/>
          <stop offset="100%" stop-color="#2d2f33"/>
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#bg)"/>
      <circle cx="650" cy="120" r="84" fill="#d2231a" opacity="0.9"/>
      <path d="M130 360 L304 150 L420 318 L520 220 L670 360 Z" fill="#f4f4f4" opacity="0.9"/>
      <path d="M210 324 L390 150 L516 286 L676 156 L695 360 L210 360 Z" fill="#d2231a" opacity="0.65"/>
      <text x="400" y="430" text-anchor="middle" fill="#ffffff" font-size="46" font-family="Arial, Helvetica, sans-serif" font-weight="700">MOTO</text>
    </svg>
  `;

  return (
    <img
      src={src || `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(fallbackSvg)}`}
      alt={alt}
      className={className}
      onError={(event) => {
        const target = event.currentTarget as HTMLImageElement;
        target.onerror = null;
        target.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(fallbackSvg)}`;
      }}
    />
  );
}

function LogoMark() {
  return (
    <img
      src="/logo.png"
      alt="Logo"
      className="brand-logo"
      draggable={false}
    />
  );
}

type Product = {
  id: number;
  name: string;
  brand: 'Corven' | 'Voge' | 'Motomel' | 'Zanella';
  model: string;
  category:
    | 'Cub'
    | 'On/Off'
    | 'Scooter'
    | 'Street'
    | 'Fun'
    | 'Urbanas'
    | 'Custom'
    | 'Utility'
    | 'ATV'
    | 'Motori'
    | 'Ceccato';
  cc: number;
  badge: string;
  price: number;
  image: string;
  colors: string[];
  variantImages: Record<string, string>;
  pdfUrl: string;
  rating: number;
  stock: number;
  description: string;
  specs: string[];
};

const getSafeImage = (value?: string) => value && value.startsWith('http') ? value : '';

const products: Product[] = [
  {
    id: 1,
    name: 'Energy 110 Nueva',
    brand: 'Corven',
    model: 'Energy 110 Nueva',
    category: 'Cub',
    cc: 106.7,
    badge: 'Novedad',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/Energy-110-AD-Roja.jpg',
    colors: ['Roja', 'Negra', 'Blanca', 'Azul'],
    variantImages: {
      Roja: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/Energy-110-AD-Roja.jpg',
      Negra: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/Energy-110-AD-Negra.jpg',
      Blanca: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/Energy-110-AD-Blanca.jpg',
      Azul: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/Energy-110-AD-Azul.jpg',
    },
    pdfUrl: 'https://corvenmotos.com.ar/wp-content/uploads/2026/01/Ficha-Tecnica-Corven-Energy-110-AD.pdf',
    rating: 4.9,
    stock: 8,
    description: 'Moto urbana de 106,7 cc con diseño moderno, amplio baúl bajo asiento y excelente maniobrabilidad para la ciudad.',
    specs: [
      'Motor monocilíndrico, 4 tiempos, 106.7 cc',
      'Potencia máxima: 6.7 HP @ 8000 rpm',
      'Torque: 6.9 Nm @ 6000 rpm',
      'Transmisión: 4 velocidades',
      'Encendido: CDI con arranque eléctrico y patada',
      'Suspensión delantera: horquilla hidráulica',
      'Suspensión trasera: doble amortiguador',
      'Freno delantero: disco',
      'Freno trasero: tambor',
      'Neumático delantero: 110/90-17',
      'Neumático trasero: 80/100-14',
      'Capacidad del tanque: 4 litros',
      'Dimensiones: 1960 × 700 × 1100 mm',
      'Peso: 97 kg',
      'Extras: amplio baúl bajo asiento',
    ],
  },
  {
    id: 2,
    name: 'Energy Tuning',
    brand: 'Corven',
    model: 'Energy Tuning',
    category: 'Cub',
    cc: 106.7,
    badge: 'Novedad',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/Energy-Tuning-Silverstone.png',
    colors: ['Silverstone', 'DarkMate'],
    variantImages: {
      Silverstone: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/Energy-Tuning-Silverstone.png',
      DarkMate: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/Energy-Tuning-DarkMate.png',
    },
    pdfUrl: 'https://corvenmotos.com.ar/project/energy-tuning/',
    rating: 4.9,
    stock: 6,
    description: 'Versión urban style de la Energy con diseño más deportivo, presencia premium y una identidad visual distinta para la ciudad.',
    specs: [
      'Motor monocilíndrico, 4 tiempos, 106.7 cc',
      'Potencia máxima: 6.7 HP @ 8000 rpm',
      'Transmisión: 4 velocidades',
      'Arranque: eléctrico y a patada',
      'Freno delantero: disco',
      'Freno trasero: tambor',
      'Suspensión delantera: horquilla hidráulica',
      'Suspensión trasera: doble amortiguador',
      'Capacidad del tanque: 4 litros',
      'Peso: 97 kg',
      'Estilo: urban sport',
    ],
  },
  {
    id: 3,
    name: 'Energy 110 RT',
    brand: 'Corven',
    model: 'Energy 110 RT',
    category: 'Cub',
    cc: 106.7,
    badge: 'Novedad',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/energy110-rt-roja.jpg',
    colors: ['Roja', 'Negra', 'Blanca', 'Azul'],
    variantImages: {
      Roja: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/energy110-rt-roja.jpg',
      Negra: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/energy110-rt-negra.jpg',
      Blanca: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/energy110-rt-blanca.jpg',
      Azul: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/energy110-rt-azul.jpg',
    },
    pdfUrl: 'https://corvenmotos.com.ar/wp-content/uploads/2026/01/Ficha-Tecnica-Corven-Energy-110-RT.pdf',
    rating: 4.9,
    stock: 8,
    description: 'Moto urbana de 106,7 cc con diseño moderno, asiento cómodo y excelente manejo para uso diario.',
    specs: [
      'Motor monocilíndrico, 4 tiempos, 106.7 cc',
      'Potencia máxima: 6.7 HP @ 8000 rpm',
      'Torque: 6.9 Nm @ 6000 rpm',
      'Transmisión: 4 velocidades',
      'Encendido: CDI con arranque eléctrico y patada',
      'Suspensión delantera: horquilla hidráulica',
      'Suspensión trasera: doble amortiguador',
      'Freno delantero: disco',
      'Freno trasero: tambor',
      'Neumático delantero: 80/100-17',
      'Neumático trasero: 80/100-14',
      'Capacidad del tanque: 4 litros',
      'Dimensiones: 1960 × 700 × 1100 mm',
      'Peso: 97 kg',
      'Extras: amplio asiento biplaza',
    ],
  },
  {
    id: 3,
    name: 'Mirage 110 RT',
    brand: 'Corven',
    model: 'Mirage 110 RT',
    category: 'Cub',
    cc: 110,
    badge: 'Novedad',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/mirage-110-rt-blanca.jpg',
    colors: ['Blanca', 'Gris Plata', 'Negra'],
    variantImages: {
      Blanca: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/mirage-110-rt-blanca.jpg',
      'Gris Plata': 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/mirage-110-rt-gris-plata.jpg',
      Negra: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/mirage-110-rt-negra.jpg',
    },
    pdfUrl: 'https://corvenmotos.com.ar/project/mirage-110-rt/',
    rating: 4.8,
    stock: 7,
    description: 'Moto urbana de 110 cc con diseño moderno, buen desempeño y gran comodidad para la ciudad.',
    specs: [
      'Motor monocilíndrico, 4 tiempos, 110 cc',
      'Transmisión: 4 velocidades',
      'Freno delantero: disco',
      'Freno trasero: tambor',
      'Suspensión delantera: horquilla',
      'Suspensión trasera: doble amortiguador',
      'Capacidad del tanque: 4 litros',
    ],
  },
  {
    id: 4,
    name: 'Mirage 110 AD',
    brand: 'Corven',
    model: 'Mirage 110 AD',
    category: 'Cub',
    cc: 110,
    badge: 'Novedad',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/mirage-110-ad-blanca.jpg',
    colors: ['Blanca', 'Gris Plata', 'Negra'],
    variantImages: {
      Blanca: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/mirage-110-ad-blanca.jpg',
      'Gris Plata': 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/mirage-110-ad-gris-plata.jpg',
      Negra: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/mirage-110-ad-negra.jpg',
    },
    pdfUrl: 'https://corvenmotos.com.ar/project/mirage-110-ad/',
    rating: 4.8,
    stock: 6,
    description: 'Versión de uso urbano con gran presencia visual, comodidad y excelente respuesta en ciudad.',
    specs: [
      'Motor monocilíndrico, 4 tiempos, 110 cc',
      'Transmisión: 4 velocidades',
      'Freno delantero: disco',
      'Freno trasero: tambor',
      'Rueda delantera: 17"',
      'Rueda trasera: 14"',
      'Capacidad del tanque: 4 litros',
    ],
  },
  {
    id: 5,
    name: 'Triax 150 One',
    brand: 'Corven',
    model: 'Triax 150 One',
    category: 'On/Off',
    cc: 150,
    badge: 'Novedad',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2026/05/Triax-150-One-Blanca.png',
    colors: ['Blanca', 'Rojo', 'Negro', 'Gris nardo'],
    variantImages: {
      Blanca: 'https://corvenmotos.com.ar/wp-content/uploads/2026/05/Triax-150-One-Blanca.png',
      Rojo: 'https://corvenmotos.com.ar/wp-content/uploads/2026/05/Triax-150-One-Rojo.png',
      Negro: 'https://corvenmotos.com.ar/wp-content/uploads/2026/05/Triax-150-One-Negro.png',
      'Gris nardo': 'https://corvenmotos.com.ar/wp-content/uploads/2026/05/Triax-150-One-Gris-nardo.png',
    },
    pdfUrl: 'https://corvenmotos.com.ar/triax-150-one/',
    rating: 4.7,
    stock: 5,
    description: 'Moto On/Off de 150 cc pensada para uso versátil, con imagen robusta y performance de paseo.',
    specs: [
      'Motor monocilíndrico, 4 tiempos, 150 cc',
      'Potencia máxima: 11 HP',
      'Transmisión: 5 velocidades',
      'Freno delantero: disco',
      'Freno trasero: disco',
      'Suspensión delantera: horquilla',
      'Suspensión trasera: monoamortiguador',
    ],
  },
  {
    id: 6,
    name: 'Triax 150 Max',
    brand: 'Corven',
    model: 'Triax 150 Max',
    category: 'On/Off',
    cc: 150,
    badge: 'Novedad',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2026/06/Triax-150-Max-Blanca.jpg',
    colors: ['Blanca', 'Roja', 'Gris', 'Negra'],
    variantImages: {
      Blanca: 'https://corvenmotos.com.ar/wp-content/uploads/2026/06/Triax-150-Max-Blanca.jpg',
      Roja: 'https://corvenmotos.com.ar/wp-content/uploads/2026/06/Triax-150-Max-Roja.jpg',
      Gris: 'https://corvenmotos.com.ar/wp-content/uploads/2026/06/Triax-150-Max-Gris.jpg',
      Negra: 'https://corvenmotos.com.ar/wp-content/uploads/2026/06/Triax-150-Max-Negra.jpg',
    },
    pdfUrl: 'https://corvenmotos.com.ar/triax-150-max/',
    rating: 4.7,
    stock: 4,
    description: 'On/Off de 150 cc con mejor versatilidad para tránsito y caminos de tierra.',
    specs: [
      'Motor monocilíndrico, 4 tiempos, 150 cc',
      'Transmisión: 5 velocidades',
      'Freno delantero: disco',
      'Freno trasero: disco',
      'Suspensión delantera: horquilla',
      'Suspensión trasera: monoamortiguador',
    ],
  },
  {
    id: 7,
    name: 'Triax 200 R3',
    brand: 'Corven',
    model: 'Triax 200 R3',
    category: 'On/Off',
    cc: 200,
    badge: 'Novedad',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/IMG_9236-scaled.png',
    colors: ['Roja', 'Blanca', 'Negra'],
    variantImages: {
      Roja: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/IMG_9236-scaled.png',
      Blanca: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/IMG_9252-scaled.png',
      Negra: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/IMG_9261-scaled.png',
    },
    pdfUrl: 'https://corvenmotos.com.ar/project/triax-200-r3/',
    rating: 4.8,
    stock: 5,
    description: 'Moto On/Off con más capacidad, mejor presencia y excelente comportamiento en ruta y viaje.',
    specs: [
      'Motor monocilíndrico, 4 tiempos, 200 cc',
      'Transmisión: 5 velocidades',
      'Freno delantero: disco',
      'Freno trasero: disco',
      'Suspensión delantera: horquilla',
      'Suspensión trasera: monoamortiguador',
    ],
  },
  {
    id: 8,
    name: 'Triax 250 R3',
    brand: 'Corven',
    model: 'Triax 250 R3',
    category: 'On/Off',
    cc: 250,
    badge: 'Novedad',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/IMG_9041-scaled.png',
    colors: ['Roja', 'Blanca', 'Negra'],
    variantImages: {
      Roja: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/IMG_9041-scaled.png',
      Blanca: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/IMG_9064-scaled.png',
      Negra: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/IMG_9049-scaled.png',
    },
    pdfUrl: 'https://corvenmotos.com.ar/project/triax-250-r3/',
    rating: 4.8,
    stock: 4,
    description: 'Moto de alto desempeño con presencia fuerte, velocidad y versatilidad para uso intenso.',
    specs: [
      'Motor monocilíndrico, 4 tiempos, 250 cc',
      'Transmisión: 5 velocidades',
      'Freno delantero: disco',
      'Freno trasero: disco',
      'Suspensión delantera: horquilla',
      'Suspensión trasera: monoamortiguador',
    ],
  },
  {
    id: 9,
    name: 'Triax 250 Adventure',
    brand: 'Corven',
    model: 'Triax 250 Adventure',
    category: 'On/Off',
    cc: 250,
    badge: 'Novedad',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2025/08/Triax-250-adv-base-blanca.png',
    colors: ['Blanca', 'Negra', 'Gris nardo'],
    variantImages: {
      Blanca: 'https://corvenmotos.com.ar/wp-content/uploads/2025/08/Triax-250-adv-base-blanca.png',
      Negra: 'https://corvenmotos.com.ar/wp-content/uploads/2025/08/Triax-250-adv-base-negra.png',
      'Gris nardo': 'https://corvenmotos.com.ar/wp-content/uploads/2025/08/Triax-250-adv-gris-nardo-lateral.png',
    },
    pdfUrl: 'https://corvenmotos.com.ar/project/triax-250-adventure/',
    rating: 4.8,
    stock: 3,
    description: 'Versión adventure con actitud touring, gran confort y alcance para viajes y rutas variadas.',
    specs: [
      'Motor monocilíndrico, 4 tiempos, 250 cc',
      'Transmisión: 5 velocidades',
      'Frenos: disco delantero y trasero',
      'Suspensión delantera: horquilla',
      'Suspensión trasera: monoamortiguador',
      'Diseño adventure',
    ],
  },
  {
    id: 13,
    name: 'Hunter 150 AD',
    brand: 'Corven',
    model: 'Hunter 150 AD',
    category: 'Street',
    cc: 150,
    badge: 'Novedad',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/hunter-150-ad-roja.jpg',
    colors: ['Roja', 'Gris', 'Blanca', 'Azul'],
    variantImages: {
      Roja: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/hunter-150-ad-roja.jpg',
      Gris: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/hunter-150-ad-gris.jpg',
      Blanca: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/hunter-150-ad-blanca.jpg',
      Azul: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/hunter-150-ad-azul.jpg',
    },
    pdfUrl: 'https://corvenmotos.com.ar/project/hunter-150-ad/',
    rating: 4.7,
    stock: 5,
    description: 'Street de 150 cc con presencia agresiva, mejor agarre y uso urbano.',
    specs: [
      'Motor monocilíndrico, 150 cc',
      'Transmisión: 5 velocidades',
      'Freno delantero: disco',
      'Freno trasero: disco',
      'Suspensión delantera: horquilla',
      'Suspensión trasera: monoamortiguador',
    ],
  },
  {
    id: 14,
    name: 'Hunter 150 R2',
    brand: 'Corven',
    model: 'Hunter 150 R2',
    category: 'Street',
    cc: 150,
    badge: 'Novedad',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/Hunter-150r2-azul.png',
    colors: ['Azul', 'Roja', 'Negra', 'Plata'],
    variantImages: {
      Azul: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/Hunter-150r2-azul.png',
      Roja: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/Hunter-150r2-roja.png',
      Negra: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/Hunter-150r2-negra.png',
      Plata: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/Hunter-150r2-plata.png',
    },
    pdfUrl: 'https://corvenmotos.com.ar/project/hunter-150-r2/',
    rating: 4.8,
    stock: 4,
    description: 'Street de diseño deportivo con buen desempeño en ciudad y ruta corta.',
    specs: [
      'Motor monocilíndrico, 150 cc',
      'Transmisión: 5 velocidades',
      'Freno delantero: disco',
      'Freno trasero: disco',
      'Suspensión delantera: horquilla',
      'Suspensión trasera: monoamortiguador',
    ],
  },
  {
    id: 15,
    name: 'Hunter 150 RT',
    brand: 'Corven',
    model: 'Hunter 150 RT',
    category: 'Street',
    cc: 150,
    badge: 'Novedad',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/hunter-150-rt-roja.jpg',
    colors: ['Roja', 'Gris', 'Blanca', 'Azul'],
    variantImages: {
      Roja: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/hunter-150-rt-roja.jpg',
      Gris: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/hunter-150-rt-gris.jpg',
      Blanca: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/hunter-150-rt-blanca.jpg',
      Azul: 'https://corvenmotos.com.ar/wp-content/uploads/2025/12/hunter-150-rt-azul.jpg',
    },
    pdfUrl: 'https://corvenmotos.com.ar/project/hunter-150-rt/',
    rating: 4.8,
    stock: 5,
    description: 'Versión street con diseño más deportivo y mayor presencia visual para uso diario.',
    specs: [
      'Motor monocilíndrico, 150 cc',
      'Transmisión: 5 velocidades',
      'Freno delantero: disco',
      'Freno trasero: disco',
      'Asiento deportivo',
      'Diseño city-street',
    ],
  },
  {
    id: 16,
    name: 'DX 70',
    brand: 'Corven',
    model: 'DX 70',
    category: 'Fun',
    cc: 70,
    badge: 'Nuevo',
    price: 0,
    image: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/Dx-70-001-Rojo-scaled.png',
    colors: ['Rojo', 'Azul', 'Negro', 'Blanca'],
    variantImages: {
      Rojo: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/Dx-70-001-Rojo-scaled.png',
      Azul: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/Dx-70-007-Azul-scaled.png',
      Negro: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/Dx-70-001-Negro-scaled.png',
      Blanca: 'https://corvenmotos.com.ar/wp-content/uploads/2025/07/dx_blanca_2-scaled.png',
    },
    pdfUrl: 'https://corvenmotos.com.ar/project/dx-70/',
    rating: 4.5,
    stock: 8,
    description: 'Moto compacta y económica, ideal para uso sencillo, práctico y económico.',
    specs: [
      'Cilindrada: 70 cc',
      'Motor 4 tiempos',
      'Transmisión: automática',
      'Freno delantero: disco',
      'Freno trasero: tambor',
      'Uso urbano y recreativo',
    ],
  },
];

const vogeProducts: Product[] = [
  {
    id: 101,
    name: 'Voge 300 DS',
    brand: 'Voge',
    model: '300 DS',
    category: 'On/Off',
    cc: 300,
    badge: 'Novedad',
    price: 0,
    image: 'https://fichamotos.com.ar/assets/images/voge-300ds.png',
    colors: ['Negro', 'Gris'],
    variantImages: {
      Negro: 'https://fichamotos.com.ar/assets/images/voge-300ds.png',
      Gris: 'https://fichamotos.com.ar/assets/images/voge-300ds.png',
    },
    pdfUrl: 'https://fichamotos.com.ar/fichas/voge/300ds/',
    rating: 4.8,
    stock: 4,
    description: 'Máxima presencia y una ergonomía pensada para el uso diario con carácter deportivo.',
    specs: [
      'Cilindrada: 300 cc',
      'Motor bicilíndrico',
      'Transmisión: 6 velocidades',
      'Freno delantero: disco',
      'Freno trasero: disco',
      'Suspensión: avanzada para ruta y ciudad',
    ],
  },
  {
    id: 102,
    name: 'Voge 500 DS',
    brand: 'Voge',
    model: '500 DS',
    category: 'On/Off',
    cc: 500,
    badge: 'Popular',
    price: 0,
    image: 'https://fichamotos.com.ar/assets/images/voge-500ds.jpg',
    colors: ['Negro', 'Blanco'],
    variantImages: {
      Negro: 'https://fichamotos.com.ar/assets/images/voge-500ds.jpg',
      Blanco: 'https://fichamotos.com.ar/assets/images/voge-500ds.jpg',
    },
    pdfUrl: 'https://fichamotos.com.ar/fichas/voge/500ds/',
    rating: 4.9,
    stock: 3,
    description: 'Versión más contundente, con empuje y diseño serio para quien busca performance y presencia.',
    specs: [
      'Cilindrada: 500 cc',
      'Motor bicilíndrico',
      'Transmisión: 6 velocidades',
      'Freno delantero: disco',
      'Freno trasero: disco',
      'Suspensión: reforzada y deportiva',
    ],
  },
  {
    id: 103,
    name: 'Voge DS525X',
    brand: 'Voge',
    model: 'DS525X',
    category: 'On/Off',
    cc: 525,
    badge: 'Novedad',
    price: 0,
    image: 'https://fichamotos.com.ar/assets/images/voge-ds525x.png',
    colors: ['Negro', 'Gris'],
    variantImages: {
      Negro: 'https://fichamotos.com.ar/assets/images/voge-ds525x.png',
      Gris: 'https://fichamotos.com.ar/assets/images/voge-ds525x.png',
    },
    pdfUrl: 'https://fichamotos.com.ar/fichas/voge/ds525x/',
    rating: 4.8,
    stock: 2,
    description: 'La referencia más aventura del segmento con presencia off-road y gran capacidad de uso mixto.',
    specs: [
      'Cilindrada: 525 cc',
      'Motor bicilíndrico',
      'Transmisión: 6 velocidades',
      'Freno delantero: disco',
      'Freno trasero: disco',
      'Uso: ruta + off-road',
    ],
  },
  {
    id: 104,
    name: 'Voge DS900X',
    brand: 'Voge',
    model: 'DS900X',
    category: 'On/Off',
    cc: 900,
    badge: 'Top',
    price: 0,
    image: 'https://fichamotos.com.ar/assets/images/voge-ds900x.jpg',
    colors: ['Negro', 'Blanco'],
    variantImages: {
      Negro: 'https://fichamotos.com.ar/assets/images/voge-ds900x.jpg',
      Blanco: 'https://fichamotos.com.ar/assets/images/voge-ds900x.jpg',
    },
    pdfUrl: 'https://fichamotos.com.ar/fichas/voge/ds900x/',
    rating: 5,
    stock: 2,
    description: 'La flagship de la línea Voge: alta cilindrada, imagen premium y capacidad para aprovechar cada kilómetro.',
    specs: [
      'Cilindrada: 900 cc',
      'Motor bicilíndrico',
      'Transmisión: 6 velocidades',
      'Freno delantero: disco doble',
      'Freno trasero: disco',
      'Suspensión: maxiplataforma premium',
    ],
  },
];

const motomelProducts: Product[] = [
  {
    id: 201,
    name: 'Sirius 190',
    brand: 'Motomel',
    model: 'Sirius 190',
    category: 'Street',
    cc: 190,
    badge: 'Novedad',
    price: 0,
    image: 'https://motomel.com.ar/wp-content/uploads/2023/01/Sirius-190-slide-azul.png',
    colors: ['Azul', 'Negra', 'Roja'],
    variantImages: {
      Azul: 'https://motomel.com.ar/wp-content/uploads/2023/01/Sirius-190-slide-azul.png',
      Negra: 'https://motomel.com.ar/wp-content/uploads/2023/01/Sirius-190-slide-negra.png',
      Roja: 'https://motomel.com.ar/wp-content/uploads/2023/01/Sirius-190-slide-roja.png',
    },
    pdfUrl: 'https://motomel.com.ar/productos/sirius-190/',
    rating: 4.7,
    stock: 4,
    description: 'Moto de calle con imagen moderna y buena presencia para uso diario.',
    specs: ['Cilindrada: 190 cc', 'Motor monocilíndrico', 'Transmisión: 5 velocidades'],
  },
];

const zanellaProducts: Product[] = [
  {
    id: 301,
    name: 'RX 150 Full Nardo Gray',
    brand: 'Zanella',
    model: 'RX 150 Full',
    category: 'Street',
    cc: 150,
    badge: 'Novedad',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_NARDO-GRAY.png',
    colors: ['Nardo Gray', 'Rojo', 'Negro', 'Blanco'],
    variantImages: {
      'Nardo Gray': 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_NARDO-GRAY.png',
      Rojo: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_RED.png',
      Negro: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_BLACK.png',
      Blanco: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_WHITE.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/rx-150-full/',
    rating: 4.8,
    stock: 4,
    description: 'Moto urbana con presencia premium, líneas deportivas y excelente respuesta para uso diario.',
    specs: ['Cilindrada: 150 cc', 'Motor monocilíndrico', 'Transmisión: 5 velocidades'],
  },
  {
    id: 302,
    name: 'RX 150 Full Red',
    brand: 'Zanella',
    model: 'RX 150 Full',
    category: 'Street',
    cc: 150,
    badge: 'Popular',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_RED.png',
    colors: ['Rojo', 'Nardo Gray', 'Negro', 'Blanco'],
    variantImages: {
      Rojo: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_RED.png',
      'Nardo Gray': 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_NARDO-GRAY.png',
      Negro: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_BLACK.png',
      Blanco: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_WHITE.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/rx-150-full/',
    rating: 4.8,
    stock: 5,
    description: 'Versión vibrante y deportiva con una imagen muy marcada para la ciudad y la ruta corta.',
    specs: ['Cilindrada: 150 cc', 'Motor monocilíndrico', 'Diseño deportivo'],
  },
  {
    id: 303,
    name: 'RX 150 Full Black',
    brand: 'Zanella',
    model: 'RX 150 Full',
    category: 'Street',
    cc: 150,
    badge: 'Top',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_BLACK.png',
    colors: ['Negro', 'Rojo', 'Blanco', 'Nardo Gray'],
    variantImages: {
      Negro: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_BLACK.png',
      Rojo: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_RED.png',
      Blanco: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_WHITE.png',
      'Nardo Gray': 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_NARDO-GRAY.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/rx-150-full/',
    rating: 4.9,
    stock: 3,
    description: 'La versión más sobria y premium, con presencia negra y diseño muy moderno.',
    specs: ['Cilindrada: 150 cc', 'Motor monocilíndrico', 'Tonalidad premium'],
  },
  {
    id: 304,
    name: 'RX 150 Full White',
    brand: 'Zanella',
    model: 'RX 150 Full',
    category: 'Street',
    cc: 150,
    badge: 'Novedad',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_WHITE.png',
    colors: ['Blanco', 'Rojo', 'Negro', 'Nardo Gray'],
    variantImages: {
      Blanco: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_WHITE.png',
      Rojo: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_RED.png',
      Negro: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_BLACK.png',
      'Nardo Gray': 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/RX-150-FULL_NARDO-GRAY.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/rx-150-full/',
    rating: 4.7,
    stock: 4,
    description: 'Modelo con una imagen más limpia y urbana, pensado para quien quiere diseño y funcionalidad.',
    specs: ['Cilindrada: 150 cc', 'Motor monocilíndrico', 'Estilo urbano'],
  },
  {
    id: 305,
    name: 'ZB Z3 Full',
    brand: 'Zanella',
    model: 'ZB Z3 Full',
    category: 'Urbanas',
    cc: 125,
    badge: 'Novedad',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/zb-z3-full-colores1-960x634-1.png',
    colors: ['Negro', 'Blanco', 'Gris', 'Rojo'],
    variantImages: {
      Negro: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/zb-z3-full-colores1-960x634-1.png',
      Blanco: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/zb-z3-full-colores2-960x634-1.png',
      Gris: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/zb-z3-full-colores3-960x634-1.png',
      Rojo: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/zb-z3-full-colores4-960x634-1.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/zb-z3-full/',
    rating: 4.7,
    stock: 5,
    description: 'Urbanita de líneas modernas y gran presencia visual con un perfil muy contemporáneo.',
    specs: ['Cilindrada: 125 cc', 'Motor 4 tiempos', 'Diseño urbano premium'],
  },
  {
    id: 306,
    name: 'ZB 125 Sport',
    brand: 'Zanella',
    model: 'ZB 125 Sport',
    category: 'Urbanas',
    cc: 125,
    badge: 'Popular',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/colores1-960x634-1.png',
    colors: ['Negro', 'Verde', 'Blanco'],
    variantImages: {
      Negro: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/colores1-960x634-1.png',
      Verde: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/colores2-960x634-1.png',
      Blanco: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/colores3-960x634-1.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/zb-125-sport/',
    rating: 4.7,
    stock: 6,
    description: 'Urbanita con mucha presencia visual y mayor identidad deportiva.',
    specs: ['Cilindrada: 125 cc', 'Motor 4 tiempos', 'Estilo sport'],
  },
  {
    id: 307,
    name: 'ZB 110 Full',
    brand: 'Zanella',
    model: 'ZB 110 Full',
    category: 'Urbanas',
    cc: 110,
    badge: 'Popular',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/zb-z3-full-colores2-960x634-1.png',
    colors: ['Rojo', 'Gris', 'Blanco', 'Azul'],
    variantImages: {
      Rojo: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/zb-z3-full-colores1-960x634-1.png',
      Gris: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/zb-z3-full-colores2-960x634-1.png',
      Blanco: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/zb-z3-full-colores3-960x634-1.png',
      Azul: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/zb-z3-full-colores4-960x634-1.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/zb-110-full/',
    rating: 4.7,
    stock: 6,
    description: 'Modelo urbano práctico y ágil con mantenimiento sencillo y un diseño muy cómodo para la ciudad.',
    specs: ['Cilindrada: 110 cc', 'Transmisión semiautomática', 'Uso urbano diario'],
  },
  {
    id: 308,
    name: 'Due 125 Sport',
    brand: 'Zanella',
    model: 'Due 125 Sport',
    category: 'Urbanas',
    cc: 125,
    badge: 'Popular',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/due-125-st-colores1-960x634-1.png',
    colors: ['Blanco', 'Rojo', 'Negro', 'Gris'],
    variantImages: {
      Blanco: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/due-125-st-colores1-960x634-1.png',
      Rojo: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/due-125-st-colores2-960x634-1.png',
      Negro: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/due-125-st-colores3-960x634-1.png',
      Gris: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/due-125-st-colores4-960x634-1.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/FT-DUE-125-SPORT-2025_.pdf',
    rating: 4.7,
    stock: 5,
    description: 'Diseño urbano con actitud deportiva y estilo muy moderno para moverse con presencia.',
    specs: ['Cilindrada: 125 cc', 'Motor 4 tiempos', 'Estilo urbano deportivo', 'FICHA TÉCNICA oficial'],
  },
  {
    id: 309,
    name: 'Due 110 ST',
    brand: 'Zanella',
    model: 'Due 110 ST',
    category: 'Urbanas',
    cc: 110,
    badge: 'Popular',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/DUE-110-ST-colores2-960x634-1.png',
    colors: ['Azul', 'Blanco', 'Rojo', 'Negro'],
    variantImages: {
      Azul: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/DUE-110-ST-colores2-960x634-1.png',
      Blanco: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/DUE-110-ST-colores1-960x634-1.png',
      Rojo: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/DUE-110-ST-colores3-960x634-1.png',
      Negro: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/DUE-110-ST-colores4-960x634-1.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/due-110-st/',
    rating: 4.6,
    stock: 5,
    description: 'Versión accesible y segura para moverse con comodidad, foco en la practicidad del día a día.',
    specs: ['Cilindrada: 110 cc', 'Tablero analógico', 'Uso urbano sencillo'],
  },
  {
    id: 310,
    name: 'Hot 90 Shot',
    brand: 'Zanella',
    model: 'Hot 90 Shot',
    category: 'Urbanas',
    cc: 90,
    badge: 'Popular',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/hot90_lateralgrande.png',
    colors: ['Brit Green', 'Azul zafiro', 'Rojo borgoña'],
    variantImages: {
      'Brit Green': 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/hot90_lateralgrande.png',
      'Azul zafiro': 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/hot90_lateralgrande_azul.png',
      'Rojo borgoña': 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/hot90_lateralgrande_roja.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/hot-90-shot/',
    rating: 4.5,
    stock: 4,
    description: 'Estilo vintage con personalidad y un uso muy sencillo, ideal para un look clásico pero moderno.',
    specs: ['Cilindrada: 90 cc', 'Diseño retro', 'Uso urbano y divertido'],
  },
  {
    id: 311,
    name: 'Andina 300',
    brand: 'Zanella',
    model: 'Andina 300',
    category: 'Ceccato',
    cc: 300,
    badge: 'Novedad',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2026/01/azul-andina-300.png',
    colors: ['Azul', 'Gris', 'Silver', 'Verde'],
    variantImages: {
      Azul: 'https://zanellaglobal.com/ar/wp-content/uploads/2026/01/azul-andina-300.png',
      Gris: 'https://zanellaglobal.com/ar/wp-content/uploads/2026/01/gris-andina-300.png',
      Silver: 'https://zanellaglobal.com/ar/wp-content/uploads/2026/01/silver-andina-300.png',
      Verde: 'https://zanellaglobal.com/ar/wp-content/uploads/2026/01/verde-andina-300.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/wp-content/uploads/2026/01/FT_CECCATO-ANDINA-300.pdf',
    rating: 4.8,
    stock: 4,
    description: 'Adventure clásica con rendimiento urbano y capacidad para recorrer más kilómetros con estilo.',
    specs: ['Cilindrada: 292 cc', 'Motor monocilíndrico', 'Diseño adventure clásico'],
  },
  {
    id: 312,
    name: 'Roadster 500',
    brand: 'Zanella',
    model: 'Roadster 500',
    category: 'Ceccato',
    cc: 500,
    badge: 'Top',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/11/ceccato-roadster-500-red.png',
    colors: ['Rojo', 'Negro', 'Plata'],
    variantImages: {
      Rojo: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/11/ceccato-roadster-500-red.png',
      Negro: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/11/ceccato-roadster-500-black.png',
      Plata: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/11/ceccato-roadster-500-silver.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/12/FT-CECCATO-RDS500.pdf',
    rating: 4.9,
    stock: 3,
    description: 'Roadster de alto nivel con presencia y un motor bicilíndrico que se destaca por su entrega.',
    specs: ['Cilindrada: 486 cc', 'Motor bicilíndrico', 'Diseño premium Ceccato'],
  },
  {
    id: 313,
    name: 'ZR 250 OHC',
    brand: 'Zanella',
    model: 'ZR 250 OHC',
    category: 'On/Off',
    cc: 250,
    badge: 'Top',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/modelo1-silver-green-zr250-ohc-2.png',
    colors: ['Silver Green', 'Red', 'Deep Blue', 'White'],
    variantImages: {
      'Silver Green': 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/modelo1-silver-green-zr250-ohc-2.png',
      Red: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/modelo2-red-zr250-ohc-2.png',
      'Deep Blue': 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/ZR250-OHC-disco-disco-Blue.png',
      White: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/ZR250-OHC-disco-disco-White.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/zr-250/',
    rating: 4.9,
    stock: 5,
    description: 'Moto ON/OFF de alta presencia, con potencia, agarre y un estilo pensado para dominar terrenos y ciudad.',
    specs: ['Cilindrada: 250 cc', 'Motor OHC', '6 velocidades', 'Frenos a disco'],
  },
  {
    id: 314,
    name: 'ZR 200 OHC',
    brand: 'Zanella',
    model: 'ZR 200 OHC',
    category: 'On/Off',
    cc: 200,
    badge: 'Popular',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/ZR-200-OHC-SILVER-1.png',
    colors: ['Azul', 'Blanco', 'Rojo', 'Silver'],
    variantImages: {
      Azul: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/ZR-200-OHC-BLUE.png',
      Blanco: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/ZR-200-OHC-PEARL-WHITE.png',
      Rojo: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/ZR-200-OHC-RED.png',
      Silver: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/ZR-200-OHC-SILVER-1.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/zr-200-ohc/',
    rating: 4.8,
    stock: 6,
    description: 'Versión ON/OFF equilibrada, con rendimiento sólido y una ergonomía pensada para ciudades y caminos.',
    specs: ['Cilindrada: 200 cc', 'Motor OHC', '5 velocidades', 'Suspensión versátil'],
  },
  {
    id: 315,
    name: 'ZR 150 OHC',
    brand: 'Zanella',
    model: 'ZR 150 OHC',
    category: 'On/Off',
    cc: 150,
    badge: 'Popular',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/ZR-150-OHC_white.png',
    colors: ['White', 'Blue', 'Red', 'Silver'],
    variantImages: {
      White: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/ZR-150-OHC_white.png',
      Blue: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/ZR-150-OHC_BLUE-2.png',
      Red: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/ZR-150-OHC_RED.png',
      Silver: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/ZR-150-OHC_SILVER.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/zr-150-ohc/',
    rating: 4.7,
    stock: 7,
    description: 'Moto ON/OFF accesible y funcional, con buena presencia visual y excelente actitud en la ciudad y el campo.',
    specs: ['Cilindrada: 150 cc', 'Motor OHC', '5 velocidades', 'Full LED'],
  },
  {
    id: 316,
    name: 'ZT 150',
    brand: 'Zanella',
    model: 'ZT 150',
    category: 'On/Off',
    cc: 150,
    badge: 'Popular',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/zt150_lateral01-1.png',
    colors: ['Deep Blue', 'White', 'Dark Grey', 'Dark Red'],
    variantImages: {
      'Deep Blue': 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/zt150_lateral01-1.png',
      White: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/zt150_lateral02.png',
      'Dark Grey': 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/zt150_lateral03.png',
      'Dark Red': 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/zt150_lateral04.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/zt-150/',
    rating: 4.6,
    stock: 6,
    description: 'Diseño ON/OFF con actitud deportiva, buenos recorridos y una propuesta versátil para uso diario y aventuras cortas.',
    specs: ['Cilindrada: 150 cc', 'Motor 4 tiempos', 'Suspensión monoshock', 'Arranque eléctrico'],
  },
  {
    id: 317,
    name: 'ZB 110 ST',
    brand: 'Zanella',
    model: 'ZB 110 ST',
    category: 'Urbanas',
    cc: 110,
    badge: 'Popular',
    price: 0,
    image: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/colores3-960x634-2.png',
    colors: ['Rojo', 'Negro', 'Blanco'],
    variantImages: {
      Rojo: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/zb-110st-roja.png.png',
      Negro: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/zb-110st-ng.png',
      Blanco: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/08/colores4-960x634-1.png',
    },
    pdfUrl: 'https://zanellaglobal.com/ar/producto/zb-110-st/',
    rating: 4.6,
    stock: 6,
    description: 'Versión deportiva de la ZB 110, pensada para moverse con estilo.',
    specs: ['Cilindrada: 110 cc', 'Motor 4 tiempos', 'Diseño juvenil'],
  },
];

const heroVideos = [
  { id: 'oQ4pUZfgZ5M', title: 'Corven Motion 01' },
  { id: 'S76QunE4hY8', title: 'Corven Motion 02' },
  { id: 'TKTrl5_kuJM', title: 'Corven Motion 03' },
  { id: 'ptajL0W3ozs', title: 'Corven Motion 04' },
  { id: 'PhjkRp0H2iQ', title: 'Corven Motion 05' },
];

const brandLogos = [
  { name: 'Corven', src: 'https://corvenmotos.com.ar/wp-content/uploads/2024/10/cropped-Logotipo-Corven-Fondo-oscuro.jpg' },
  { name: 'Zanella', src: 'https://zanellaglobal.com/ar/wp-content/uploads/2025/07/logo-zanella.png' },
  { name: 'Marca 3', src: 'https://static.wixstatic.com/media/9df0a2_bd1caf819e7e451597a9d72b76cd45c9~mv2.png/v1/fill/w_166,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9df0a2_bd1caf819e7e451597a9d72b76cd45c9~mv2.png' },
  { name: 'Motomel', src: 'https://vectorseek.com/wp-content/uploads/2023/08/Motomel-Motos-Logo-Vector.svg-.png' },
  { name: 'Voge', src: 'https://vogeargentina.com.ar/wp-content/uploads/2026/05/VOGE_ISOLOGO_BLANCO.png' },
  { name: 'Marca 6', src: 'https://tse1.mm.bing.net/th/id/OIP.f5gJL6WCoOUPg4lOD7PD7AAAAA?r=0&pid=Api&P=0&h=180' },
  { name: 'Marca 7', src: 'https://tse3.mm.bing.net/th/id/OIP.igoFQE5zWYrBm2sQZlLD7QHaCi?r=0&pid=Api&P=0&h=180' },
];
const corvenModels = [
  { name: 'Energy 110 Nueva', info: 'Cub • Ciudad' },
  { name: 'Energy Tuning', info: 'Cub • Urban Sport' },
  { name: 'Energy 110 RT', info: 'Cub • Ciudad' },
  { name: 'Mirage 110 RT', info: 'Cub • Urbano' },
  { name: 'Mirage 110 AD', info: 'Cub • Urbano' },
  { name: 'Triax 150 One', info: 'On/Off • Versátil' },
  { name: 'Triax 150 Max', info: 'On/Off • Versátil' },
  { name: 'Triax 200 R3', info: 'On/Off • Performance' },
  { name: 'Triax 250 R3', info: 'On/Off • Sport' },
  { name: 'Triax 250 Adventure', info: 'On/Off • Adventure' },
  { name: 'Hunter 150 AD', info: 'Street • Urbana' },
  { name: 'Hunter 150 R2', info: 'Street • Deportivo' },
  { name: 'Hunter 150 RT', info: 'Street • Deportivo' },
  { name: 'DX 70', info: 'Fun • Compacta' },
];
const locations = [
  {
    name: 'POCITO',
    detail: 'Av. Aberastain 403 (Sur) / Lunes a Sábados de 09:00 hs a 13:00 hs y 17:00 hs a 21:00 hs',
  },
  {
    name: 'CAPITAL',
    detail: 'Av. Rawson 186 (Norte) / Lunes a Viernes de 09:00 hs a 13:00 hs y 16:30 hs a 20:30 hs / Sábados de 09:00 hs a 17:00 hs',
  },
  {
    name: 'CAUCETE',
    detail: 'Diagonal Sarmiento 950 / Lunes a Sábados de 09:00 hs a 13:00 hs y de 17:00 hs a 21:00 hs',
  },
  {
    name: 'SARMIENTO',
    detail: 'Av. 25 de Mayo 79 / Lunes a Sábados de 09:00 hs a 13:00 hs y de 17:00 hs a 21:00 hs',
  },
];

export default function HomePage() {
  const brandFilter = 'Corven';
  const [modelFilter, setModelFilter] = useState('Todos');
  const [ccFilter, setCcFilter] = useState('Todas');
  const [categoryFilter, setCategoryFilter] = useState('Todas');
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState('Roja');
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([]);
  const [showAllCorven, setShowAllCorven] = useState(false);
  const [showAllVoge, setShowAllVoge] = useState(false);
  const [showAllZanella, setShowAllZanella] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    setVideoReady(false);
    const intervalId = window.setInterval(() => {
      setCurrentVideoIndex((current) => {
        let next = Math.floor(Math.random() * heroVideos.length);
        while (next === current && heroVideos.length > 1) {
          next = Math.floor(Math.random() * heroVideos.length);
        }
        return next;
      });
    }, 12000);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentVideo = heroVideos[currentVideoIndex];
  const currentVideoUrl = `https://www.youtube-nocookie.com/embed/${currentVideo.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${heroVideos.map((video) => video.id).join(',')}&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3&fs=0&enablejsapi=1`;

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0]);
  };

  const currentVariantImage = selectedProduct
    ? getSafeImage(selectedProduct.variantImages[selectedColor] ?? selectedProduct.image)
    : null;

  const uniqueModels = useMemo(
    () => ['Todos', ...Array.from(new Set(products.map((product) => product.model)))],
    [],
  );

  const featuredCorvenModels = useMemo(() => {
    const preferredOrder = [
      'Energy 110 Nueva',
      'Mirage 110 RT',
      'Hunter 150 RT',
      'Triax 250 Adventure',
    ];

    const featured = products.filter((product) => preferredOrder.includes(product.name));
    const rest = products.filter((product) => !preferredOrder.includes(product.name));

    return showAllCorven ? [...featured, ...rest] : featured;
  }, [showAllCorven]);

  const vogeFeaturedModels = useMemo(() => {
    const preferredOrder = ['Voge 300 DS', 'Voge 500 DS', 'Voge DS525X', 'Voge DS900X'];

    const featured = vogeProducts.filter((product) => preferredOrder.includes(product.name));
    const rest = vogeProducts.filter((product) => !preferredOrder.includes(product.name));

    return showAllVoge ? [...featured, ...rest] : featured;
  }, [showAllVoge]);

  const zanellaFeaturedModels = useMemo(() => {
    const preferredOrder = [
      'RX 150 Full Nardo Gray',
      'ZB 110 Full',
      'Roadster 500',
      'ZR 250 OHC',
    ];

    const featured = zanellaProducts.filter((product) => preferredOrder.includes(product.name));
    const rest = zanellaProducts.filter((product) => !preferredOrder.includes(product.name));

    return showAllZanella ? [...featured, ...rest] : featured;
  }, [showAllZanella]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesBrand = product.brand === brandFilter;
      const matchesModel = modelFilter === 'Todos' || product.model === modelFilter;
      const matchesCc = ccFilter === 'Todas' || String(product.cc) === ccFilter;
      const matchesCategory = categoryFilter === 'Todas' || product.category === categoryFilter;
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase()) ||
        product.model.toLowerCase().includes(search.toLowerCase());
      return matchesBrand && matchesModel && matchesCc && matchesCategory && matchesSearch;
    });
  }, [brandFilter, categoryFilter, ccFilter, modelFilter, search]);

  const cartTotal = 0;

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...current, { product, qty: 1 }];
    });
  };

  const changeQty = (productId: number, delta: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.product.id === productId
            ? { ...item, qty: Math.max(0, item.qty + delta) }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <div className="brand">
            <LogoMark />
          </div>
          <nav className="nav-links">
            <a href="#beneficios">Financiación</a>
            <a href="#marcas">Marcas</a>
            <a href="#sucursales">Sucursales</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <div className="nav-actions">
            <a
              className="credit-link"
              href="https://clck.ru/3VPtto"
              target="_blank"
              rel="noreferrer"
            >
              Consultá tu crédito ya
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-card hero-banner-card">
              <div className="hero-video-shell">
                <iframe
                  className={`hero-video-frame ${videoReady ? 'is-ready' : ''}`}
                  src={currentVideoUrl}
                  title={currentVideo.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen={false}
                  loading="eager"
                  onLoad={() => setVideoReady(true)}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="promo-strip container">
          <div className="promo-card red">
            <span>Financiación</span>
            <strong>Hasta 36 cuotas</strong>
          </div>
          <div className="promo-card dark">
            <span>Stock</span>
            <strong>Entrega inmediata</strong>
          </div>
          <div className="promo-card gray">
            <span>Garantía</span>
            <strong>Service y seguridad</strong>
          </div>
        </section>

        <section className="section featured">
          <div className="container">
            <div className="section-head compact-head">
              <div>
                <span className="eyebrow">Las elegidas del mes</span>
                <h2>Llevátelas solo con DNI</h2>
              </div>
            </div>

            <div className="brand-strip">
              <div className="brand-strip-text">
                <strong>CORVEN</strong>
              </div>
              <button
                type="button"
                className="link-text link-text-button"
                onClick={() => setShowAllCorven((current) => !current)}
              >
                {showAllCorven ? 'Ver menos' : 'Más modelos'}
              </button>
            </div>

            <div className="featured-grid compact-grid compact-shell compact-strip">
              {featuredCorvenModels.map((product) => (
                <article key={product.id} className="feature-card compact-card">
                  <ProductImage src={product.image} alt={product.name} className="feature-card-image compact-image" />
                  <div className="feature-card-body compact-body">
                    <h3>{product.name}</h3>
                    <div className="feature-card-meta compact-meta">
                      <span>{product.category}</span>
                    </div>
                    <button className="btn btn-primary full-width compact-btn" onClick={() => openProduct(product)}>Ver más</button>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        <section className="section featured">
          <div className="container">
            <div className="brand-strip">
              <div className="brand-strip-text">
                <strong>VOGE</strong>
              </div>
              <button
                type="button"
                className="link-text link-text-button"
                onClick={() => setShowAllVoge((current) => !current)}
              >
                {showAllVoge ? 'Ver menos' : 'Más modelos'}
              </button>
            </div>

            <div className="featured-grid compact-grid compact-shell compact-strip">
              {vogeFeaturedModels.map((product) => (
                <article key={product.id} className="feature-card compact-card">
                  <ProductImage src={product.image} alt={product.name} className="feature-card-image compact-image" />
                  <div className="feature-card-body compact-body">
                    <h3>{product.name}</h3>
                    <div className="feature-card-meta compact-meta">
                      <span>{product.category}</span>
                    </div>
                    <button className="btn btn-primary full-width compact-btn" onClick={() => openProduct(product)}>Ver más</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section featured">
          <div className="container">
            <div className="brand-strip">
              <div className="brand-strip-text">
                <strong>ZANELLA</strong>
              </div>
              <button
                type="button"
                className="link-text link-text-button"
                onClick={() => setShowAllZanella((current) => !current)}
              >
                {showAllZanella ? 'Ver menos' : 'Más modelos'}
              </button>
            </div>

            <div className="featured-grid compact-grid compact-shell compact-strip">
              {zanellaFeaturedModels.map((product) => (
                <article key={product.id} className="feature-card compact-card">
                  <ProductImage src={product.image} alt={product.name} className="feature-card-image compact-image" />
                  <div className="feature-card-body compact-body">
                    <h3>{product.name}</h3>
                    <div className="feature-card-meta compact-meta">
                      <span>{product.category}</span>
                    </div>
                    <button className="btn btn-primary full-width compact-btn" onClick={() => openProduct(product)}>Ver más</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section brands" id="marcas">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Marcas</span>
                <h2>Nuestras Marcas</h2>
              </div>
            </div>
            <div className="brand-grid">
              {brandLogos.map((brand) => (
                <div key={brand.src} className="brand-pill">
                  <img src={brand.src} alt={brand.name} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section service-block" id="beneficios">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Post-venta</span>
                <h2>Atención completa antes y después de tu compra</h2>
              </div>
            </div>
            <div className="service-grid">
              <div className="service-box">
                <h3>Garantía</h3>
                <p>Entrega 0km con manual, garantía oficial y asesoramiento de fábrica.</p>
              </div>
              <div className="service-box">
                <h3>Seguro</h3>
                <p>Te ayudamos a elegir la mejor opción según tu moto y tu perfil.</p>
              </div>
              <div className="service-box">
                <h3>Taller</h3>
                <p>Contamos con respaldo técnico para servicios, revisión y mantenimiento.</p>
              </div>
              <div className="service-box">
                <h3>Asesoramiento</h3>
                <p>Te guiamos en la elección ideal para tu día a día o tus viajes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section locations" id="sucursales">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Sucursales</span>
                <h2>Encontrá tu sucursal más cercana</h2>
              </div>
            </div>
            <div className="locations-grid">
              {locations.map((location) => (
                <div key={location.name} className="location-card">
                  <strong>{location.name}</strong>
                  <span>{location.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-block" id="contacto">
          <div className="container split">
            <div className="info-box">
              <span className="eyebrow">Pedí tu crédito</span>
              <h2>Comprá sin fricción.</h2>
              <ul className="info-list">
                <li><span className="dot" /> Aprobación en el día.</li>
                <li><span className="dot" /> Cuotas fijas hasta 36 meses.</li>
                <li><span className="dot" /> Asesoramiento por WhatsApp.</li>
                <li><span className="dot" /> Entrega en sucursal o con coordinación.</li>
              </ul>
            </div>

            <div className="form-shell">
              <h3>Solicitá información</h3>
              <input type="text" placeholder="Nombre y apellido" />
              <input type="tel" placeholder="Celular" />
              <input type="email" placeholder="Email" />
              <select>
                <option>Quiero consultar por...</option>
                <option>Corven</option>
                <option>Keller</option>
                <option>Voge</option>
                <option>Otra marca</option>
              </select>
              <textarea placeholder="Mensaje o modelo que te interesa" />
              <button className="btn btn-primary">Enviar consulta</button>
            </div>
          </div>
        </section>
      </main>

      {selectedProduct && (
        <div className="modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="modal-grid">
              <div
                className="modal-image"
                style={{
                  backgroundImage: `url(${currentVariantImage ?? getSafeImage(selectedProduct.image)})`,
                  filter: 'none',
                }}
              />
              <div className="modal-content">
                <div className="model-header">
                  <span className="badge-dark">{selectedProduct.brand}</span>
                  <span className="model-chip">{selectedProduct.category}</span>
                </div>
                <h3>{selectedProduct.name}</h3>
                <p className="modal-price">Consultar precio</p>
                <p className="modal-summary">{selectedProduct.description}</p>

                <div className="color-block">
                  <span className="mini-label">Colores</span>
                  <div className="color-pills">
                    {selectedProduct.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={`color-pill ${selectedColor === color ? 'active' : ''}`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pdf-row">
                  <a className="pdf-link" href={selectedProduct.pdfUrl} target="_blank" rel="noreferrer">Ficha técnica PDF</a>
                </div>

                <ul className="modal-specs">
                  {selectedProduct.specs.slice(0, 8).map((spec) => <li key={spec}>{spec}</li>)}
                </ul>
                <div className="modal-actions">
                  <button className="btn btn-secondary" onClick={() => setSelectedProduct(null)}>Seguir viendo</button>
                  <button className="btn btn-primary" onClick={() => addToCart(selectedProduct)}>Solicitar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h4>Atención</h4>
            <ul>
              <li>ventas@electromotos.com</li>
              <li>+2645546700</li>
              <li>WhatsApp</li>
            </ul>
          </div>
          <div>
            <h4>Horarios</h4>
            <ul>
              <li>Lunes a Sábados de 09:00 hs a 13:00 hs</li>
              <li>y de 17:00 hs a 21:00 hs</li>
              <li>San Juan, Argentina</li>
            </ul>
          </div>
        </div>
        <div className="container footer-row">
          <div>© 2026 Electromoto</div>
          <div>San Juan, Argentina</div>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href="https://wa.me/5492645546700"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3.5a12.45 12.45 0 0 0-10.7 18.8L3.6 28.4l6.3-1.65A12.5 12.5 0 1 0 16 3.5Zm0 22.7a10.2 10.2 0 0 1-5.2-1.43l-.37-.22-3.74.98 1-3.64-.24-.38A10.2 10.2 0 1 1 16 26.2Zm5.6-7.62c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.04c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.25-.58-.5-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.92 1.23 3.12c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
        </svg>
      </a>
    </>
  );
}
