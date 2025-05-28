import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Cafes Frios', '#e9b8c7'),
  new Category('c2', 'Cafes Calientes', '#cfd9c2'),
  new Category('c3', 'Frappes', '#ffebee'),
  new Category('c4', 'Crepas', '#f0fff0'),
  new Category('c5', 'Sandwiches', '#d4d4aa'),
  new Category('c6', 'Bagels', '#41d95d'),
  new Category('c7', 'Pasteles(Rebanadas)', '#9eecff'),
  new Category('c8', 'Smoothies', '#b9ffb0'),
  new Category('c9', 'Donas', '#ffc7ff'),
  new Category('c10', 'Ensaldas', '#47fced')
];

export const MENU = [
  new Meal(
    'm1',
    ['c1'],
    'White Chocolate Mocha',
    'affordable',
    'simple',
    'https://2amorescafe.com/wp-content/uploads/2024/04/latte-frio-cnchocolate.jpg',
    4,
    [
      '2 Shots de espresso',
      '1 cucharada de sirope de chocolate blanco',
      '250 ml de leche de tu eleccion',
      'Nata',
      
    ],
    [
      'Prepara 2 shots de espresso',
      'Agrega tu expresso a tu taza.',
      'Agrega sirope de chocolate blanco. Se recomienda una cucharada.',
      'Revuelve la salsa de chocolate blanco en el espresso.',
      'Espuma la leche calentada durante 15 segundos',
      'Vierte la leche espumada sobre el espresso y el chocolate blanco.',
      'Agrega nata montada por encima.',
      'Espolvorea chispas de chocolate blanco para decorar.',
      '',
      '',
      '',
    ],
    false,
    true,
    true,
    true
  ),
   
  new Meal(
    'm2',
    ['c1'],
    'Sparkling Mint Espresso',
    'affordable',
    'simple',
    'https://2amorescafe.com/wp-content/uploads/2024/04/latte-frio-cnchocolate.jpg',
    2,
    [
      '1 Shots de espresso',
      '2 cucharada de sirope',
      '8 Ramitas de menta fresca',
      '120 ml de agua con gas',
      'Cubitos de Hielo'
    ],
    [
      'Prepara a shot de espresso',
      'Llena la coctelera con hielo',
      'Ahora agrega el sirope, la menta y el cafe a la coctelera y agita energicamente',
      'Llena 3/4 de la capacidad de tu vaso con hielo',
      'Vierte lamezcla de la coctelera sobre el vaso lleno de hielo',
      'Completa esta receta añadiendo agua con gas y una ramita de menta',
      '',
      '',
      '',
    ],
    false,
    true,
    true,
    true
  ),
 
  new Meal(
    'm3',
    ['c1'],
    'Vietnamese Iced Coffee',
    'affordable',
    'simple',
    'https://2amorescafe.com/wp-content/uploads/2024/04/latte-frio-cnchocolate.jpg',
    3,
    [
      '180 ml de cafe',
      '2 cucharaditas de leche condensada',
      '1 ramita de menta fresca',
      'Cubitos de Hielo'
    ],
    [
      'Prepara el cafe',
      'Llena tu vaso con hielo',
      'Vierte el cafe recien preparado en tu vaso',
      'Vierte lentamente la leche condensada',
      'Decora tu bebida con una ramita de menta',
      '',
      '',
      '',
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm4',
    ['c1'],
    'Iced Latte',
    'affordable',
    'simple',
    'https://2amorescafe.com/wp-content/uploads/2024/04/latte-frio-cnchocolate.jpg',

    4,
    [
      '1 Shots de espresso',
      '180 ml de leche (De tu eleccion)',
      'Endulzante de tu eleccion',
      'Cubitos de Hielo'
    ],
    [
      'Prepara un shot de espresso',
      'Llena tu vaso con hielo y vierte el espresso',
      'En otro vaso añade la leche de tu eleccion con un toque de endulzante y batelo',
      'Ahora vierte la leche endlzada sobre el hielo y el espresso y disfruta!!!',
      '',
      '',
      '',
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm5',
    ['c2'],
    'Cafe Chai Latte',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    
    4,
    [
      '2 shots de espresso',
      '250 ml de leche de tu eleccion',
      '1/4 de cucharadita de mezcla de especies de chai',
      '1 cucharadita de miel',
      
    ],
    [
      'Prepara 2 shots de espresso',
      'Agrega la mezcla de especies chai en una taza',
      'Agrega la miel al vaso',
      'Vierte el espresso sobre la mezcla de especies chai y miel',
      'Toma una cucharadita y revuelvelo bien hasta que este bo¿ien mezclado',
      'Espuma la leche calentada durante 20 segundos',
      'Vierte la leche espumada sobre el espresso, la miel y las especies chai',
      
    ],
    false,
    false,
    false,
    false
  ),

  
];