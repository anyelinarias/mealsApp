import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Cafes Frios', '#e9b8c7'),
  new Category('c2', 'Cafes Calientes', '#cfd9c2'),
  new Category('c3', 'Frappes', '#ffebee'),
  new Category('c4', 'Smoothies', '#f0fff0'),
  new Category('c5', 'Sandwiches', '#d4d4aa'),
  new Category('c6', 'Bagels', '#41d95d'),
  new Category('c7', 'Pasteles(Rebanadas)', '#9eecff'),
  new Category('c8', 'Crepas', '#b9ffb0'),
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
    'https://lowcarbyum.com/wp-content/uploads/2022/04/iced-white-chocolate-mocha-sq.jpg',
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
    'https://www.starbucksathome.com/mx/sites/default/files/2021-06/18-SparklingEspressoWithMint_LongShadow_Cream.png',
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
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXxr8Of7MooCg_JDYWLU076e5m_vJy_-hhA&s',
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
    'https://www.acouplecooks.com/wp-content/uploads/2021/08/Iced-Latte-003.jpg',

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
    'https://www.tapasmagazine.es/wp-content/uploads/2024/03/Receta-de-Chai-Latte-1024x1024.jpg',
    
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

  new Meal(
    'm6',
    ['c2'],
    'Vainilla Cappuccino',
    'affordable',
    'simple',
    'https://www.webstaurantstore.com/images/products/large/499151/1908273.jpg',
    
    5,
    [
      '1 shots de espresso',
      '250 ml de leche de tu eleccion',
      '1 cucharadita de sirope de vainilla',
      
    ],
    [
      'Prepara 1 shots de espresso',
      'Vierte tu espresso recién preparado en una taza.',
      'Vierte el sirope de vainilla en tu taza.',
      'Toma una cuchara y revuelve bien.',
      'Espuma la leche caliente.',
      'Espuma la leche calentada durante 30 segundos',
      'Vierte la leche espumada sobre el espresso.',
      'Vierte lentamente la leche espumada y ve como se mezclan y disfruta!!!'
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm7',
    ['c2'],
    'Latte Macchiato',
    'affordable',
    'simple',
    'https://starbuckspr.com/wp-content/uploads/2022/12/Latte-Macchiato-768x768-1.jpg',
    
    2,
    [
      '1 un espresso',
      '3/4 de Taza de leche al gusto/ 250 ml',
      
      
    ],
    [
      'Prepara un espresso',
      'Haz espuma con la leche o bebida vegetal tibia',
      'Vierte la espuma de leche caliente en tu taza',
      'Llenala practicamente hasta el borde',
      'Vierte lentamente el cafe en el centro de la taza. Y disfruta!!',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm8',
    ['c2'],
    'Cafe Americano',
    'affordable',
    'simple',
    'https://i.blogs.es/139e0f/cafe-americano2/450_1000.jpeg',
    
    4,
    [
      '2 shots de espresso',
      '250 ml de agua caliente',
      
    ],
    [
      'Hierve el agua y viertela en tu taza de preferencia.',
      'Vierte lentamente el espresso preparando en la taza con agua caliente',
      '',
      
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm9',
    ['c3'],
    'Frappe de Cafe Clasico',
    'affordable',
    'simple',
    'https://starbuckspr.com/wp-content/uploads/2022/12/Mocha-Frappuccino%C2%AE-1024x1024-1-1024x1024.jpg',
    
    5,
    [
      '1 taza de hielo',
      '1/2 taza de cafe frio (mejor si es fuerte)',
      '1/4 taza de leche',
      '2 cucharadas de azucar (Al gusto)',
      'Crema batida (Es es opcional)'
      
    ],
    [
      'Coloca el hielo, el cafe, la leche y el azucar en la licuadora',
      'Licua durante 30-45 segundos o hasta obtener una mezcla homogenea y espesa',
      'Sirve en un vasp alto',
      'Decora con crema batida si deseas',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm10',
    ['c3'],
    'Frappe de Chocolate',
    'affordable',
    'simple',
    'https://st.depositphotos.com/2040193/3403/i/450/depositphotos_34035117-stock-photo-frappuccino.jpg',
    
    5,
    [
      '1 Taza de hielo',
      '1/2 Taza de leche',
      '2 Cucharadas de jarabe de chocolate',
      '2 Cucharadas de azucar',
      'Crema batida y chispas de chocolate(Opcional)'
      
    ],
    [
      'En la licuadora, mezcla hielo, leche y jarabe de chcolate y azucar.',
      'Licua hasta obtener una textura suave y espesa.',
      'Vierte en un vaso.',
      'Anade crema batida y chispas de chocolate si deseas.',
      
    ],
    false,
    false,
    false,
    false
  ),
 
  new Meal(
    'm11',
    ['c3'],
    'Frappe de Vainilla con Galletas',
    'affordable',
    'simple',
    'https://newmansown.com/wp-content/uploads/2022/11/Pumpkin-Spice-Vanilla-Cookie-Milkshake.jpg',
    
    6,
    [
      '1 Taza de hielo',
      '1/2 Taza de leche',
      '1 Bola de helado de vainilla',
      '1 Cucharada de azucar(opcional)',
      'Crema batida(Opcional)',
    ],
    [
      'Coloca en la licuadora el hielo, la leche, las galletas y el azucar.',
      'Licua hasta que las galletas esten bien integradas.',
      'Sirve en un vaso grande.',
      'Decora con crema batida y una galleta adicional si deseas.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm12',
    ['c3'],
    'Frappe de Fresa Natural',
    'affordable',
    'simple',
    'https://www.deleitas.com/pics_fotosproductos/22/xmed_fit_frappe-con-sirope-fresa.jpg.pagespeed.ic.fJsv4-RoXX.jpg',
    
    5,
    [
      '1 Taza de hielo',
      '1/2 Taza de fresas (pueden ser congeladas)',
      '1/2 Taza de leche',
      '2 Cucharadas de azucar o miel',
      'Crema batida y trozos de fresa(Opcional)'
      
    ],
    [
      'Lava y corta las fresas si son frescas.',
      'Licua el hielo, las fresas, la leche y el azucar/miel.',
      'Procesa hasta lograr una textura espesa.',
      'Sirve en un vaso y decora al gusto.',
      
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm13',
    ['c4'],
    'Smoothie de Mango y Platano',
    'affordable',
    'simple',
    'https://micocinadominicana.com/wp-content/uploads/2021/01/Mango-Banana-Smoothie-Smart-Little-Cookie-2.jpg',
    
    4,
    [
      '1/2 Mango maduro',
      '1 Platano',
      '1/2 Taza de yogur natural o griego',
      '1/2 Taza de leche de su preferencia',
      '1 Cucharadita de miel (opcional)',
      'Hielo al gusto',
      
    ],
    [
      'Pela y corta el mago y el platano',
      'Coloca todos los ingredientes en la licuadora.',
      'Licua hasta que quede suave y cremoso.',
      'Sirve frio en un vaso.',
      
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm14',
    ['c4'],
    'Smoothie Verde',
    'affordable',
    'simple',
    'https://www.nattahometaste.com/wp-content/uploads/2020/02/smoothie-verde-receta-500x500.jpga',
    
    5,
    [
      '1 Taza de espinaca fresca',
      '1/2 Manzana verde',
      '1/2 Platano',
      '1/2 Taza de agua fria o agua de coco',
      'Jugo de 1/2 limon',
      'Hielo al gusto',
      
    ],
    [
      'Lava bien todos los ingredientes.',
      'Agrega todo a la licuadora.',
      'Licua hasta obtener una textura homogenea.',
      'Sirve inmediatamnete para conservar los nutrientes.',
      
    ],
    false,
    false,
    false,
    false
  ),
  
  new Meal(
    'm15',
    ['c4'],
    'Smoothie de Fresa y Avena',
    'affordable',
    'simple',
    'https://www.calidadpascual.com/wp-content/uploads/2022/10/c4cc16012490b66d5a8655338e3f5023.jpeg',
    
    8,
    [
      '1/2 Taza de fresas (frescas o congeladas)',
      '1/2 Taza de leche de su preferencia',
      '2 Cucharadas de avena en hojuelas',
      '1 Cucharadita de miel o jarabe de agave',
      '1/2 Platano',
      'Hielo (opcional)',
      
    ],
    [
      'Coloca todos los ingredientesen la licuadora.',
      'Licua hasta que la mezcla sea cremosa.',
      'Puedes dejar reposar 2 minutos si quieres que la avena se hidrate bien.',
      'Sirve y disfruta!!!!.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm16',
    ['c4'],
    'Smoothie de PinaColada',
    'affordable',
    'simple',
    'https://www.onelovelylife.com/wp-content/uploads/2024/05/Pina-Colada-Smoothie2-2.jpg',
    
    6,
    [
      '1/2 Taza de pina en trozos',
      '1/2 Taza de leche de coco',
      '1/4 Taza de yogur natural',
      '1 Cucharada de coco rallado (opcional)',
      'Hielo al gusto)',
      'Endulzante natural al gusto (opcional)',
      
    ],
    [
      'Coloca todos los ingredientes en la licuadora.',
      'Licua hasta que la mezcla este suave.',
      'Sirve frio y decora con un poco de coco rallado o trozos de pina.',
      
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm17',
    ['c5'],
    'Sandwich Cubano',
    'affordable',
    'simple',
    'https://keyfoodhollywood.com/wp-content/uploads/2023/07/cuban-sandwich-2021-12-09-09-24-54-utc.jpg',
    
    17,
    [
      'Mostaza de Dijon 5g',
      'Pan de Chapata Individual ',
      'Jamon cocido lonchas 2',
      'Salami lonchas 3',
      'Lomo de cerdo asado lonchas 2',
      'Pepinillo grande 1',
      'Mantequilla temperatura ambiente 5g',
      
    ],
    [
      'Cortamos los panes por la mitad, longitudinalmente,',
      'y untamos el interior de la tapa con mostaza.',
      'En las otras mitades del pan vamos colocando los ingredientes:',
      'el jamos, el salami, el lomo, el queso y el pepinillo(previamente loncheado)',
      'Es importante respetar el orden de los ingredientes.',
      'Cerramos los bocadillos con las tapas y pincelamos la superficie de cada uno con mantequilla.',
      'Si la fundimos unos segundos en el microondas sera mas facil la tarea.',
      'Colocamos los bocadillos en una plancha con calor regulable,',
      'lo ponemos a temperatura suave para que el queso se funda lentamente,',
      'Una vez listos, cortamos los sandwiches cubanos por la mitad y servimos.',
      
    ],
    false,
    false,
    false,
    false
  ),
  
  new Meal(
    'm18',
    ['c5'],
    'Sandwich de Ensalada de Pollo con Aguacate',
    'affordable',
    'simple',
    'https://okdiario.com/img/2018/10/15/sandwich-de-pollo-y-aguacate-655x368.jpg',
    
    20,
    [
      '1 Pechuga de pollo',
      '1 Aguacate maduro',
      '2 Rebanadas de pan',
      '25 g de Cebolla morada',
      '7 ml de Aceite de oliva extras virgen',
      '7 g de mayonesa',
      '2 g de Hierbas finas',
      'Sal',
      'Pimienta negra molida',
      
    ],
    [
      'Para iniciar la receta vamos a cortar las pechugas de pollo en cuadritos de unos 2 cm de largo,',
      'Calentamos un poco de aceite de oliva en un sarten y asamos los trocitos de pollo por unos 5 min, a fuego medio,',
      'hasta que quedan bien dorados. A media coccion sazonamos con las finas hierbas, sal y pimienta al gusto.',
      'Caundo este listo retiramos de la lumbre y dejamos enfriar.',
      'Ahora vamos a cortar los aguacates en dos, retirarles el hueso, la piel y cortarlos en cubitos',
      'de tamano similar al pollo. Picamos la cebolla y la colocamos junto con el aguacate en un recipiente.',
      'Anadimos el pollo, ya tibio o frio, la mayonesa, el aceite de oliva, sal y pimienta.',
      'Revolvemos muy bien. Calentamos el pan y armamos los sandwiches.',
      'Si lo deseas agregale unas hojas de lechuuga o un poco de queso.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm19',
    ['c5'],
    'Sandwich de Attune',
    'affordable',
    'simple',
    'https://png.pngtree.com/thumb_back/fw800/background/20240630/pngtree-tuna-sandwich-on-white-background-image_15830971.jpg',
    
    10,
    [
      '40 g de atun en conserva al natural',
      '17 ml de mayonesa',
      '17 ml de cilantro fresco',
      '12 g cebolla morada',
      '12 g de pimiento rojo',
      '1/2 cucharaditas de zumo de limon',
      'sal',
      'Pimientas negra molida',
      '2 Rebanas de pan',
      
    ],
    [
      'Pica bien todas las verduras y mezclalas en un recipiente, junto  2 latas pequenas de atun,',
      'las alcaparras bien escurridas y la mayonesa echa sal y pimienta al gusto.',
      'Ten en cuenta que el atun lleva siempre sal, por lo que es importante probarlo todo.',
      'Opcionalmente, puedes anadir tambien un poco de salsa picante.',
      'Unta la mezcla entre dos rebanadas de pan de tu eleccion y disfruta.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm20',
    ['c5'],
    'Sandwich Tradicional de Jamon',
    'affordable',
    'simple',
    'https://static5.depositphotos.com/1020804/534/i/450/depositphotos_5347946-stock-photo-sandwich-with-bacon.jpg',
    
    5,
    [
      '2 Rebanadas de pan integral',
      '1 Rebanada de jamon de pavo',
      '1 Rebanada de queso americano',
      '1 Rebanada de queso panela',
      '2 Rodajas de jitomate',
      '2 Rebanadas de aguacate',
      '1 Hoja de lechuga',
      
    ],
    [
      'Untar en ambas rebanadas de pan la mayonesa.',
      'Colocar sobre una de ellas primero la lechuga,',
      'el jitomate, el aguacate y la cebolla.',
      'Y ahora disfruta!!!!!!',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm21',
    ['c6'],
    'Bagel de Queso, Bacon y Huevo a la Plancha',
    'affordable',
    'simple',
    'https://www.hola.com/horizon/landscape/973ae9735c89-bagel-huevoplancha-adob-t.jpg',
    
    12,
    [
      '1 Bagel',
      '1 Huevo',
      '1 Lonchas de Bacon',
      '2 Lonchas de queso havarti',
      'Lechuga(hojas frescas)',
      'Mostaza de Dijon',
      'Aceite de Oliva',
      'Sal',
      'Pimienta',
      
    ],
    [
      'Lava y corta las fresas si son frescas.',
      'Licua el hielo, las fresas, la leche y el azucar/miel.',
      'Procesa hasta lograr una textura espesa.',
      'Sirve en un vaso y decora al gusto.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm22',
    ['c6'],
    'Bagel Integral',
    'affordable',
    'simple',
    'https://www.hola.com/horizon/square/bfe5c12c1c61-bagels-rucula-adob-t.jpg',
    
    10,
    [
      '4 Bagel (integrales con semillas y pipas)',
      '1 Aguacate maduro',
      '1 Tomate',
      'Lechuga',
      '4 Rabanitos',
      'Queso cremoso',
      'Sal',
      'Aceite de oliva extra virgen',
      'Pimienta',
      
    ],
    [
      'Pelar el aguacate, retirar el hueso y hacer laminas finas con la carne.',
      'Lavar el tomate, secarlo y cortarlo en laminas finas.',
      'Lavar, secar y cortar, tambien en laminas finas, los rabanitos.',
      'Lavar y secar las hojas de lechuga y trocearlas en cachos no muy pequenos.',
      'Untar la cara interior de los bagels con una capa generosa de queso cremoso.',
      'Dispones encia de cada rebanadita inferior las hojas de lechuga laminas de aguacate',
      'tomate y rebanitos.',
      'Por ultimo puedes echarle un chorrito de aceite y listo.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm23',
    ['c6'],
    'Bagel de Chocolate y Platano',
    'affordable',
    'simple',
    'https://www.theblondechef.com/wp-content/uploads/2015/08/CL1A3213.jpg',
    
    15,
    [
      '2 Unidades de bagels partidos por la mitad',
      '4 Unidades de Platano',
      '100 g de Chocolate negro',
      '350 ml de nata para montar',
      '25 g de azucar glas',
      '1 Cucharas de almendra laminada tostada',
    
      
    ],
    [
      'Rallar el chocolate.',
      'Llevar a ebullicion en un cazo 150 ml de nata.',
      'Retirar el fuego, anadir el chcolate, mezclar bieny dejar enfriar.',
      'Tostar las mitades de bagle.',
      'Repartir el chocolate por encima y cubrir con rodajas de platano.',
      'Montar el resto de nata agregando el azucar al final hasta que este bien firme,',
      'Emplatar, disponer una fligrama de nata sobre las rodajas de platano.',
      'Y espolvorear con las almendras fileteadas.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm24',
    ['c7'],
    'Pastel de Chocolate Clasico',
    'affordable',
    'simple',
    'https://www.cocinadelirante.com/sites/default/files/images/2023/08/receta-de-pastel-de-chocolate-facil.jpg',
    
    50,
    [
      '1 ¾ taza de harina',
      '¾ taza de cacao en polvo',
      '2 tazas de azúcar',
      '1 ½ cucharadita de polvo de hornear',
      '1 ½ cucharadita de bicarbonato de sodio',
      '1 cucharadita de sal',
      '2 huevos',
      '1 taza de leche',
      '½ taza de aceite vegetal',
      '2 cucharaditas de extracto de vainilla',
      '1 taza de agua caliente',
      
    ],
    [
      'Precalienta el horno a 180°C. Engrasa y enharina un molde para pastel.',
      'Mezcla los ingredientes secos en un bol grande.',
      'Agrega los huevos, la leche, el aceite y la vainilla. Bate bien.',
      'Incorpora el agua caliente lentamente. La mezcla será líquida.',
      'Vierte en el molde y hornea por 30-35 minutos.',
      'Deja enfriar antes de desmoldar y decorar.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm25',
    ['c7'],
    'Pastel de Zanahoria',
    'affordable',
    'simple',
    'https://cafedelaflor.com/images/productos/20230315161514pag.web_-_2023-03-15t160734.748.jpg',
    
    45,
    [
      '2 taza de harina',
      '2 tazas de azúcar',
      '1 cucharadita de polvo de hornear',
      '1 cucharadita de bicarbonato de sodio',
      '1/2 cucharadita de sal',
      '2 cucharaditas de canela',
      '4 huevos',
      '1 taza de aceite vegetal',
      '2 tazas de zanahoria rallada',
      '½ taza de nueces picadas (opcional)',
      
    ],
    [
      'Precalienta el horno a 180°C y engrasa un molde.',
      'Mezcla los ingredientes secos en un bol.',
      'En otro bol, bate los huevos y el aceite, luego añade la zanahoria.',
      'Vierte en el molde y hornea por 30-35 minutos.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm26',
    ['c7'],
    'Pastel de Tres Leches',
    'affordable',
    'simple',
    'https://www.laylita.com/recetas/wp-content/uploads/2018/09/1-Receta-del-tres-leches.jpg',
    
    55,
    [
      '1 taza de harina',
      '1 ½ cucharadita de polvo de hornear',
      '5 huevos',
      '1 taza de azúcar',
      '1/3 taza de leche entera',
      '1 cucharadita de vainilla',
      '1 lata de leche condensada',
      '1 lata de leche evaporada',
      '1 taza de crema de leche',
      
      
    ],
    [
      'Precalienta el horno a 180°C y engrasa un molde.',
      'Bate las yemas con ¾ de taza de azúcar hasta que estén espesas.',
      'Añade la leche y la vainilla, luego la harina y el polvo de hornear.',
      'VAparte, bate las claras a punto de nieve con el azúcar restante. Incorpóralas a la mezcla anterior',
      'Hornea por 25-30 minutos.',
      'Mezcla las tres leches y vierte sobre el pastel aún caliente.',
      'Refrigera por varias horas. Puedes decorar con crema batida.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm27',
    ['c8'],
    'Crepa Dulce Basica',
    'affordable',
    'simple',
    'https://peopleenespanol.com/thmb/a3G6sm7sKOWS83VeXoe8aRZzJg8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/recetas-10075-masa-para-crepas-basica-2000-1ed1f706c7134ce1a04f2903bf13df84.jpg',
    
    25,
    [
      '1 taza de harina',
      '2 huevos',
      '1  taza de leche',
      '2 cucharadas de mantequilla derretida',
      '1 cucharadita de esencia de vainilla',
      '1 cucharada de azúcar',
      'Pizca de sal',
      
    ],
    [
      'Mezcla todos los ingredientes con batidor o licuadora.',
      'Calienta la sartén y unta con mantequilla.',
      'Vierte un poco de mezcla y extiende uniformemente.',
      'Cocina por ambos lados hasta dorar.',
      'Rellena con frutas, Nutella, cajeta o lo que prefieras.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm28',
    ['c8'],
    'Crepa Salada',
    'affordable',
    'simple',
    'https://i.pinimg.com/564x/a6/1c/20/a61c20f106c7d3d585c5898186084730.jpg',
    
    25,
    [
      '1 taza de harina',
      '2 huevos',
      '1 ¼ taza de leche',
      '2 cucharadas de mantequilla derretida',
      '(Opcional) ¼ cucharadita de pimienta o hierbas secas',
      '1 cucharada de azúcar',
      'Pizca de sal',
      
    ],
    [
      'Mezcla todos los ingredientes con batidor o licuadora.',
      'Calienta la sartén y unta con mantequilla.',
      'Vierte un poco de mezcla y extiende uniformemente.',
      'Cocina por ambos lados hasta dorar.',
      'Rellena con jamón y queso, espinacas con champiñones, pollo con crema, etc.',
      
    ],
    false,
    false,
    false,
    false
  ),
  

  new Meal(
    'm29',
    ['c9'],
    'Dona Clasicas Fritas',
    'affordable',
    'simple',
    'https://i.pinimg.com/736x/74/e8/e4/74e8e4389ff2f4b939a90f5d12aa92e5.jpg',
    
    30,
    [
      '2 ½ tazas de harina de trigo',
      '2 ¼ cucharaditas de levadura seca',
      '½ taza de leche tibia',
      '¼ taza de azúcar',
      '2 huevos',
      '¼ taza de mantequilla derretida',
      '½ cucharadita de sal',
      'Aceite para freír',
      '1 taza de azúcar glas',
      '2-3 cucharadas de leche',
      '½ cucharadita de vainilla',
      
    ],
    [
      'Mezcla la levadura con la leche tibia y una cucharadita de azúcar.',
      'Deja reposar 10 minutos.',
      'Agrega huevos, mantequilla, azúcar y sal.',
      'Mezcla y añade poco a poco la harina.',
      'Amasa hasta tener una masa suave.',
      'Deja reposar 1 hora hasta que doble su tamaño.',
      'Extiende la masa y corta las donas con molde o vaso.',
      'Deja reposar 30 minutos más.',
      'Fríe en aceite caliente (180 °C) hasta que estén doradas.',
      'Escurre en papel absorbente y cubre con el glaseado.',
      
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm30',
    ['c9'],
    'Donas de Chocolate',
    'affordable',
    'simple',
    'https://i.pinimg.com/564x/ee/43/df/ee43df09241e564322f0f1a170e95b53.jpg',
    
    25,
    [
      '1 taza de harina',
      '½ taza de cacao en polvo',
      '½ taza de azúcar',
      '1 cucharadita de polvo de hornear',
      '½ cucharadita de bicarbonato',
      '¼ cucharadita de sal',
      '½ taza de leche',
      '2 huevos',
      '1 cucharadita de vainilla',
      '¼ taza de aceite vegetal',
      
    ],
    [
      'Precalienta el horno a 180 °C y engrasa el molde.',
      'Mezcla ingredientes secos por un lado y los líquidos por otro.',
      'Combina todo y mezcla bien.',
      'Vierte en los moldes y hornea por 12–15 minutos.',
      'Baña en ganache o glaseado de chocolate una vez frías.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm31',
    ['c10'],
    'Ensalda Mediterreanea con Queso Feta',
    'affordable',
    'simple',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDpuNeeNlJoF__2V57mtJ-zJb4abLqnmhJGPkgVw4WwQyRZSivByGCBj21zhnlcM8vBJQ9oWuzDUTYu39nTMRtVtc7RjeaZecgQYQ2oPALwaOFGisW_bE2YGYw_BPatz8FAXg-ELBTcWg/w1200-h630-p-k-no-nu/20190122_154322+%25282%2529.jpg',
    
    7,
    [
      '½ taza de lechuga romana troceada',
      '¼ taza de pepino en rodajas',
      '¼ taza de tomate cherry partidos a la mitad',
      '2 cucharadas de cebolla morada en tiras finas',
      '2 cucharadas de aceitunas negras sin hueso',
      '2 cucharadas de queso feta desmoronado',
      '1 cucharada de aceite de oliva',
      '½ cucharadita de vinagre balsámico o jugo de limón',
      'Sal y pimienta al gusto',
      
    ],
    [
      'Lava y corta todos los vegetales.',
      'Mezcla en un bowl la lechuga, pepino, tomate, cebolla y aceitunas.',
      'Agrega el queso feta.',
      'Baña con el aceite, vinagre, sal y pimienta justo antes de servir o empacar.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm32',
    ['c10'],
    'Ensalada de Pollo',
    'affordable',
    'simple',
    'https://comedera.com/wp-content/uploads/sites/9/2015/10/ensalada-de-pollo.jpg',
    
    10,
    [
      '1 taza de mezcla de lechugas',
      '½ pechuga de pollo a la plancha, cortada en tiras',
      '¼ taza de zanahoria rallada',
      '2 cucharadas de maíz dulce',
      '2 cucharadas de crutones',
      '1 cucharada de aderezo de miel y mostaza',
      
    ],
    [
      'Coloca la mezcla de lechugas en el fondo del bowl.',
      'Añade la zanahoria, el maíz y el pollo en tiras.',
      'Agrega los crutones justo antes de servir para mantener su textura.',
      'Acompaña con el aderezo aparte o servido al lado.',
      
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm33',
    ['c10'],
    'Ensalada de Caprese con Pesto',
    'affordable',
    'simple',
    'https://i.pinimg.com/736x/7f/c9/99/7fc9994fbbf2e0dc0af19628b8a1dd21.jpg',
    
    7,
    [
      '½ taza de hojas de espinaca fresca',
      '¼ taza de tomate cherry',
      '¼ taza de queso mozzarella en bolitas (bocconcini) o en cubos',
      '1 cucharada de salsa pesto',
      '1 cucharadita de aceite de oliva',
      'Sal y pimienta al gusto',
      
    ],
    [
      'Lava los tomates y las espinacas.',
      'Mezcla la espinaca con los tomates y la mozzarella.',
      'Aliña con pesto, aceite, sal y pimienta.',
      'Servir fría, ideal en envase transparente para mostrar los colores.',
      
    ],
    false,
    false,
    false,
    false
  ),


];