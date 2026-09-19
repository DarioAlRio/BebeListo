"use strict";

// Contenido real del sitio: guías de compra y artículos de blog.
// Nada de datos de producto inventados (ni precios exactos, ni valoraciones,
// ni modelos) en el cuerpo de la guía: son guías de criterio, no fichas de
// producto. Los productos concretos van en el array `products` de cada guía,
// verificados en Amazon.es (ASIN, título, precio e imagen reales, capturados
// en septiembre de 2026).

const GUIDES = [
  {
    slug: "sillas-de-coche-para-bebe",
    img: "/assets/img/guias/sillas-de-coche-para-bebe.jpg",
    title: "Cómo elegir una silla de coche para bebé",
    dek: "Grupo, normativa i-Size, instalación Isofix y a contramarcha: los criterios que de verdad importan antes de comprar, no el color.",
    updated: "2026-09-17",
    intro: [
      "La silla de coche es, junto con la cuna, la compra de seguridad más importante de los primeros años: mal elegida o mal instalada, reduce mucho su eficacia real en un choque, aunque el modelo sea caro. La buena noticia es que los criterios para comparar cualquier silla son pocos y claros, y no dependen de la marca ni del precio de tapa.",
      "Esta guía no recomienda un modelo concreto: te da las claves para comparar cualquier silla de coche homologada que compres, en Amazon o en cualquier otro sitio."
    ],
    sections: [
      {
        heading: "Grupo de peso/altura y normativa i-Size",
        body: [
          "Las sillas homologadas por el nuevo estándar i-Size (ECE R129) se clasifican por altura del niño, no solo por peso, y son las que hoy se consideran más seguras y fáciles de elegir bien: cubren tramos como 40-105 cm, 76-150 cm o combinados 40-150 cm (\"todo en uno\"). Las sillas de normativa anterior (ECE R44) siguen siendo legales pero se clasifican por grupos de peso (0, 0+, 1, 2, 3) y tienden a desaparecer del mercado.",
          "Una silla \"todo en uno\" (grupo 0/1/2/3, de 0 a 12 años) ahorra comprar varias sillas con el tiempo, pero suele ser más pesada y menos óptima en cada tramo concreto que una silla pensada solo para un grupo. Si el presupuesto lo permite, dos sillas específicas (una para bebé y otra para niño mayor) suelen ajustar mejor que una única silla para todo el recorrido."
        ],
      },
      {
        heading: "A contramarcha: cuánto tiempo merece la pena",
        body: [
          "Viajar a contramarcha (mirando hacia atrás) reduce mucho el riesgo de lesión cervical en un choque frontal, porque reparte la fuerza por toda la espalda en lugar de concentrarla en el cuello. La recomendación de los organismos de seguridad infantil es mantener al niño a contramarcha el mayor tiempo posible, idealmente hasta los 4 años si la silla lo permite, no solo hasta el mínimo legal.",
          "Las sillas i-Size de primera etapa (40-105 cm) obligan a ir a contramarcha hasta un mínimo de 15 meses; las evolutivas 0-4 años amplían ese margen mucho más allá del mínimo, lo que compensa el gasto mayor si de verdad se va a aprovechar esa función."
        ],
      },
      {
        heading: "Isofix, cinturón o ambos",
        body: [
          "El anclaje Isofix (broches metálicos que encajan directamente en la carrocería del coche) reduce muchísimo el margen de error de instalación frente a sujetar la silla solo con el cinturón de seguridad: es más rápido, más intuitivo y deja menos holgura. La base Isofix suele venderse por separado o incluida según el modelo, y no todos los coches tienen anclajes Isofix en todas las plazas, así que conviene comprobarlo antes de comprar.",
          "El anclaje superior Top Tether (una correa que sujeta la parte alta de la silla al maletero) reduce el desplazamiento hacia delante en un choque y viene ya integrado en la mayoría de sillas i-Size orientadas hacia delante; comprobar que el coche tiene el punto de anclaje correspondiente es igual de importante que fijarse en el propio Isofix."
        ],
      },
      {
        heading: "Instalación real, no solo la ficha técnica",
        body: [
          "Una silla con las mejores especificaciones de papel no protege igual si se instala mal: el margen de error humano en instalación es, según distintos estudios de seguridad infantil, uno de los factores que más reduce la protección real de una silla. Antes de comprar, comprueba en la ficha del fabricante si la silla es compatible con la lista de vehículos homologados (universal Isofix suele cubrir más coches que sistemas propietarios).",
          "Muchas tiendas físicas ofrecen revisión gratuita de instalación; aunque compres por Amazon, merece la pena llevar la silla a revisar una vez instalada, sobre todo la primera vez."
        ],
      },
    ],
    checklist: [
      "Normativa i-Size (ECE R129) preferible sobre la antigua ECE R44",
      "A contramarcha el mayor tiempo posible, no solo el mínimo legal",
      "Isofix + Top Tether reduce mucho el margen de error de instalación",
      "Comprobar compatibilidad real con tu coche antes de comprar",
      "Revisar la instalación una vez montada, aunque la hayas hecho tú mismo"
    ],
    faq: [
      { q: "¿Es obligatorio que la silla sea Isofix?", a: "No: el cinturón de seguridad del propio coche también es un sistema de instalación homologado y legal en la mayoría de sillas. Isofix no es obligatorio, pero reduce mucho el margen de error de una instalación manual con cinturón, especialmente para quien no instala sillas de coche a menudo." },
      { q: "¿Hasta qué edad debe ir el niño a contramarcha?", a: "La recomendación de los organismos de seguridad infantil es mantenerlo a contramarcha el mayor tiempo posible, idealmente hasta los 4 años si la silla y la altura del niño lo permiten, muy por encima del mínimo legal de 15 meses." },
      { q: "¿Puedo usar una silla de segunda mano?", a: "Solo si conoces con certeza que nunca ha sufrido un accidente y no supera la vida útil marcada por el fabricante (normalmente entre 6 y 10 años desde la fecha de fabricación): un golpe puede dañar la estructura interna sin dejar marca visible." },
    ],
    products: [
      {
        asin: "B0DKXQZ8H7",
        title: "KikkaBoo Silla Coche Bebe Grupo 0 1 2 3 ISOFIX (0-36 kg) i-SECURE, Giratoria 360°, Reclinable, Protección SPS i-Size",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones. Destaca con anclaje Isofix y giro 360°.",
        img: "https://m.media-amazon.com/images/I/81nNfq8NIeL._AC_UL320_.jpg",
        price: "161,10",
        rating: "4,5★",
      },
      {
        asin: "B0BZ8B477B",
        title: "Kinderkraft I-GROW Silla de coche, I-SIZE 40-150 cm, Isofix, Grupo 0+/1/2/3, 0-36 kg, Gris",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones. Destaca con anclaje Isofix.",
        img: "https://m.media-amazon.com/images/I/71AQ2xS1OeL._AC_UL320_.jpg",
        price: "129,90",
        rating: "4,5★",
      },
      {
        asin: "B0H1WXCZD3",
        title: "Asalvo Mimmo Silla de auto recién nacido (Grupo 0+) i-Size a contramarcha, ultraligera 2,80 kg, Negra",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/61L1YfEazML._AC_UL320_.jpg",
        price: "75,99",
        rating: "4,8★",
      },
      {
        asin: "B0CGM5ZVT7",
        title: "Toral Alzador Coche Niño - Silla Coche Grupo 1 2 3 i-Size, 76-150 cm, Gris",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/71jRQFZew4L._AC_UL320_.jpg",
        price: "56,99",
        rating: "4,4★",
      },
      {
        asin: "B0DS6C4XR8",
        title: "KikkaBoo Silla de Coche Bebe ISOFIX Grupo 1 2 3 (9-36 kg) i-FLIT, Top Tether, Negro",
        note: "Entrada de gama, buena relación precio-funciones. Destaca con anclaje Isofix.",
        img: "https://m.media-amazon.com/images/I/81XnPs20vNL._AC_UL320_.jpg",
        price: "97,03",
        rating: "4,5★",
      },
      {
        asin: "B0DJM9RTQ9",
        title: "Chicco Silla de Coche Mokita I-Size, Isofix, 76-150 cm, Reductor Incluido, Gris",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección. Destaca con anclaje Isofix.",
        img: "https://m.media-amazon.com/images/I/61bq-69EwkL._AC_UL320_.jpg",
        price: "246,94",
        rating: "4,5★",
      },
      {
        asin: "B0C6KZCY6Z",
        title: "Chicco Unico EVO I'Size Classic, Silla de Coche ISOFIX 40-150 cm, Grupo 0123, Giratoria 360º, Negra",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección. Destaca con anclaje Isofix y giro 360°.",
        img: "https://m.media-amazon.com/images/I/61vCqNAY53L._AC_UL320_.jpg",
        price: "228,65",
        rating: "4,5★",
      },
      {
        asin: "B09Q9V51MJ",
        title: "KIDIZ Silla de coche para bebés Isofix Top Tether 360° giratoria, grupo 0/1/2/3, 0-36 kg, con toldo",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones. Destaca con anclaje Isofix y giro 360°.",
        img: "https://m.media-amazon.com/images/I/91+aCotwt1L._AC_UL320_.jpg",
        price: "142,80",
        rating: "4,5★",
      },
      {
        asin: "B0C6R47BCV",
        title: "Maxi-Cosi Pearl 360 silla coche bebe i-Size, 360 giratoria, ISOFIX, 3 meses-4 años, ClimaFlow, Authentic Graphite",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección. Destaca con anclaje Isofix y giro 360°.",
        img: "https://m.media-amazon.com/images/I/714i7Cdhx1L._AC_UL320_.jpg",
        price: "270,00",
        rating: "4,4★",
      },
      {
        asin: "B0BYP63YCW",
        title: "Kinderkraft COMFORT UP i-Size 75-150 cm, Silla coche bebé, regula en 11 niveles, Grupo 1/2/3, Rosa",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/81X5+-r31sL._AC_UL320_.jpg",
        price: "67,15",
        rating: "4,4★",
      },
      {
        asin: "B0GRFX6HKC",
        title: "Reecle I-Size Silla de Coche Giratoria 360 con ISOFIX, 40-150cm",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones. Destaca con anclaje Isofix y giro 360°.",
        img: "https://m.media-amazon.com/images/I/71Oa43tOZpL._AC_UL320_.jpg",
        price: "147,99",
        rating: "4,5★",
      },
      {
        asin: "B0H99BSH49",
        title: "Play Scout i-Size Silla de coche Evolutiva Grupo 0/1/2/3, 40-150cm, Contramarcha hasta 4 años",
        note: "Entrada de gama, buena relación precio-funciones. Destaca evolutivo, dura más años.",
        img: "https://m.media-amazon.com/images/I/71aD37+ZZ0L._AC_UL320_.jpg",
        price: "74,99",
        rating: "4,3★",
      },
    ],
  },
  {
    slug: "cochecitos-y-carritos-de-bebe",
    img: "/assets/img/guias/cochecitos-y-carritos-de-bebe.jpg",
    title: "Cómo elegir un cochecito o carrito de bebé",
    dek: "Sistema de viaje, peso, plegado y terreno: lo que cambia realmente el día a día con el carrito, más allá del diseño.",
    updated: "2026-09-17",
    intro: [
      "El carrito es el objeto que más se usa a diario durante los primeros años, así que un mal ajuste a tu rutina real (subir escaleras, entrar en el metro, guardarlo en el maletero) se nota mucho más que en casi cualquier otro producto de bebé. Antes de mirar el diseño, conviene tener claro para qué terreno, qué maletero y qué trayectos vas a usarlo.",
      "Como en el resto de guías de este sitio, aquí no se recomienda una marca concreta: se explican los criterios para comparar cualquier cochecito por su cuenta."
    ],
    sections: [
      {
        heading: "Sistema de viaje: capazo, silla de coche y silla de paseo",
        body: [
          "Un \"sistema de viaje\" o carrito 3 en 1 combina un capazo para recién nacido, una silla de coche (grupo 0+) y una silla de paseo sobre el mismo chasis, permitiendo pasar al bebé del coche al carrito sin despertarlo. Esta combinación tiene sentido sobre todo si vas a usar el coche a menudo con el bebé recién nacido; si te mueves más a pie o en transporte público, un carrito ligero de silla de paseo desde el principio puede bastar y pesar mucho menos.",
          "Comprueba si la silla de coche incluida en el pack es i-Size (más moderna y con mejores criterios de seguridad) o de normativa anterior, porque no todos los \"3 en 1\" incluyen lo mismo pese a llamarse igual."
        ],
      },
      {
        heading: "Peso y plegado: el criterio más subestimado",
        body: [
          "Un cochecito de más de 12-13 kg se nota mucho al subir escaleras sin ascensor, meterlo en un maletero pequeño o cargarlo en un vuelo. Los carritos ligeros (6-9 kg) sacrifican algo de amortiguación y capacidad de la cesta a cambio de ser mucho más manejables en el día a día urbano.",
          "El plegado con una sola mano (sin tener que soltar al niño de la otra mano) es una comodidad real que solo se aprecia cuando falta: pruébalo, si puedes, antes de comprar, porque el mecanismo varía mucho de un modelo a otro en lo intuitivo que resulta."
        ],
      },
      {
        heading: "Ruedas y terreno",
        body: [
          "Ruedas grandes con suspensión absorben mejor los baches de aceras en mal estado y superficies no asfaltadas (parques, caminos de tierra), mientras que ruedas pequeñas giratorias 360° facilitan mucho las maniobras en espacios estrechos (ascensores, pasillos de tiendas, transporte público). Pocos carritos son igual de buenos en ambos terrenos: conviene priorizar según dónde vayas a usarlo más.",
          "El freno de aparcamiento accionado con el pie (no con la mano) es más seguro en cuestas o al soltar el carrito un momento, y viene ya de serie en la mayoría de modelos actuales."
        ],
      },
      {
        heading: "Capota, cesta y compatibilidad con la silla de coche",
        body: [
          "Una capota extensible con protección UPF 50+ cubre mejor de sol y lluvia que una capota corta fija; revisa también si tiene ventana de rejilla para ver al bebé sin levantar toda la capota. La cesta inferior, aunque parezca un detalle menor, marca la diferencia entre poder cargar la compra o el bolso de pañales cómodamente o tener que llevarlo todo en bandolera.",
          "Si ya tienes o vas a comprar una silla de coche concreta, comprueba que el chasis del carrito admite esa silla mediante un adaptador (muchos fabricantes venden el adaptador por separado): no todas las combinaciones de marcas son compatibles entre sí."
        ],
      },
    ],
    checklist: [
      "Sistema de viaje (3 en 1) solo si vas a combinar coche y paseo a menudo",
      "Peso real del chasis, no solo el peso máximo que soporta",
      "Plegado con una sola mano si sueles ir sola/o con el bebé en brazos",
      "Ruedas grandes con suspensión para exterior, giratorias para ciudad/interior",
      "Compatibilidad de la silla de coche con el chasis mediante adaptador"
    ],
    faq: [
      { q: "¿Merece la pena un carrito \"3 en 1\" o mejor comprar las piezas por separado?", a: "El pack suele salir más barato que comprar cada pieza suelta si vas a usar las tres (capazo, silla de coche y silla de paseo), pero si sabes que no vas a usar alguna pieza —por ejemplo, si nunca vas a llevar al bebé en coche— comprar solo lo que necesitas puede ahorrar peso y dinero." },
      { q: "¿A partir de qué edad se puede pasar del capazo a la silla de paseo?", a: "La mayoría de fabricantes marca los 6 meses o cuando el bebé se sostiene sentado sin ayuda, lo que ocurra después; revisa siempre la ficha técnica del modelo concreto, porque varía." },
    ],
    products: [
      {
        asin: "B0D6GHTF4W",
        title: "Kinderkraft ESME Carrito bebé 3 en 1 Set, con Portabebés Mink PRO I-Size, Sistema de Viaje, Beige",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/81n5Qm+4+pL._AC_UL320_.jpg",
        price: "215,10",
        rating: "4,4★",
      },
      {
        asin: "B0HDZ17B1H",
        title: "Asalvo Málaga Silla de paseo plegado libro con una mano, 0 meses-22 kg, capota UPF 50+, Verde",
        note: "Entrada de gama, buena relación precio-funciones. Destaca plegado compacto.",
        img: "https://m.media-amazon.com/images/I/51A5uCdSptL._AC_UL320_.jpg",
        price: "69,00",
        rating: "4,3★",
      },
      {
        asin: "B0DWTH8GVH",
        title: "Ms Silla de Paseo Street, Carrito Bebe ligero, 0-36 meses o 22 kg, Amortiguadores, Capota XXL",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/71e+uINqItL._AC_UL320_.jpg",
        price: "64,99",
        rating: "4,2★",
      },
      {
        asin: "B0D44VG8BS",
        title: "Kinderkraft MOOV2 Carrito bebé 3 en 1, Mink PRO I-Size, Sistema de Viaje, hasta 3 años, Gris",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/81H8EfVj6nL._AC_UL320_.jpg",
        price: "234,00",
        rating: "4,4★",
      },
      {
        asin: "B0CV4RLD9H",
        title: "KikkaBoo Silla de Paseo Ligera CIELA, Carrito Bebé Compacto hasta 22 kg, Plegado Automático, Negro",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones. Destaca plegado compacto.",
        img: "https://m.media-amazon.com/images/I/8147fALZE1L._AC_UL320_.jpg",
        price: "125,67",
        rating: "4,2★",
      },
      {
        asin: "B0G4RKLDCS",
        title: "Cochecito Bebe 3 en 1, 0-3 años, Máx. 22 kg, Estructura Metálica Ligera, con i-Size Silla Coche, Rosa",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/71xIbPtzxUL._AC_UL320_.jpg",
        price: "169,99",
        rating: "4,2★",
      },
      {
        asin: "B0CWB2JTLM",
        title: "Gcarebb Carrito Bebe 3 en 1, con Asiento De Auto, asa regulable en altura, 0-4 años",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/81shmXxIKSL._AC_UL320_.jpg",
        price: "189,99",
        rating: "4,5★",
      },
      {
        asin: "B0G3X6NPFD",
        title: "BEBBY Cochecito de bebé 3 en 1, Carrito con Asiento, Plegable, Marco de Aluminio, Beige",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección. Destaca plegado compacto.",
        img: "https://m.media-amazon.com/images/I/71RRqi2QubL._AC_UL320_.jpg",
        price: "189,99",
        rating: "4,6★",
      },
      {
        asin: "B0D453BJCG",
        title: "Kinderkraft MOOV 2, carrito 3 en 1 con capazo y silla de paseo, ruedas grandes antipinchazos, hasta 22 kg, Negro",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/71KnOkcvMZL._AC_UL320_.jpg",
        price: "234,00",
        rating: "4,4★",
      },
      {
        asin: "B0FB97GPDH",
        title: "Mobiclinic Carrito bebe, Plegable, Respaldo reclinable, Doble sistema de seguridad, arnés 5 puntos, Gris y negra",
        note: "Entrada de gama, buena relación precio-funciones. Destaca plegado compacto.",
        img: "https://m.media-amazon.com/images/I/71hIlmkvgZL._AC_UL320_.jpg",
        price: "49,95",
        rating: "4,1★",
      },
      {
        asin: "B0HDYFN98Z",
        title: "Asalvo Málaga Silla de paseo plegado libro con una mano, 0 meses-22 kg, capota UPF 50+, Beige",
        note: "Entrada de gama, buena relación precio-funciones. Destaca plegado compacto.",
        img: "https://m.media-amazon.com/images/I/61kFUbqQdjL._AC_UL320_.jpg",
        price: "69,00",
        rating: "4,3★",
      },
    ],
  },
  {
    slug: "tronas-para-bebe",
    img: "/assets/img/guias/tronas-para-bebe.jpg",
    title: "Cómo elegir una trona para bebé",
    dek: "Evolutiva o clásica, limpieza y seguridad en el arnés: los criterios que hacen que una trona dure y se use de verdad.",
    updated: "2026-09-16",
    intro: [
      "La trona pasa de usarse varias veces al día a acumular polvo en un rincón en cuanto deja de ajustarse a la edad del niño o resulta incómoda de limpiar: por eso los criterios de evolución y mantenimiento importan casi tanto como la seguridad del arnés.",
      "Esta guía compara criterios, no modelos concretos: sirve para decidir con cabeza cualquier trona, la compres donde la compres."
    ],
    sections: [
      {
        heading: "Trona clásica vs. evolutiva",
        body: [
          "Una trona clásica está pensada para el periodo de alimentación con silla alta (aproximadamente 6 meses a 3 años) y suele ser más compacta y barata. Una trona evolutiva se transforma en silla infantil normal (y a veces en silla de escritorio) a medida que el niño crece, alargando su vida útil hasta los 6-10 años a cambio de un precio inicial mayor.",
          "Si el espacio en casa es limitado o no te importa cambiar de trona con los años, la clásica suele ser suficiente; si prefieres una única compra que dure toda la infancia, la evolutiva amortiza mejor el gasto con el tiempo."
        ],
      },
      {
        heading: "Regulación de altura, reclinación y bandeja",
        body: [
          "Varias posiciones de altura permiten ajustar la trona a la mesa de casa y a la estatura de quien da de comer al niño; la reclinación es importante sobre todo en los primeros meses, cuando el bebé aún no se sostiene erguido del todo. Una bandeja extraíble y, mejor aún, con doble nivel (bandeja principal desmontable sobre otra fija) facilita mucho pasar al niño directamente a comer en la mesa familiar sin desmontar toda la trona.",
          "El reposapiés regulable, aunque parezca un detalle menor, mejora la postura y ayuda al niño a empujar con los pies al masticar, algo que muchas tronas económicas omiten."
        ],
      },
      {
        heading: "Limpieza: el criterio que más se nota con el uso diario",
        body: [
          "Las superficies lisas de plástico o polipiel sin costuras se limpian con un paño en segundos; las tapicerías de tela acolchada son más cómodas pero acumulan restos de comida en las costuras y algunas no se pueden lavar en lavadora. Revisa si el fabricante especifica que la funda es lavable a máquina antes de comprar un modelo con mucho acolchado.",
          "Una trona plegable facilita guardarla cuando no se usa o llevarla de viaje, aunque las plegables ultraligeras suelen sacrificar algo de estabilidad frente a los modelos fijos más robustos."
        ],
      },
      {
        heading: "Seguridad del arnés y estabilidad",
        body: [
          "El arnés de 5 puntos (hombros, cintura y entrepierna) sujeta mejor que uno de 3 puntos, sobre todo cuando el niño empieza a moverse e intentar levantarse durante la comida. La base debe ser lo bastante ancha y con patas antideslizantes para que la trona no se tambalee si el niño empuja la mesa o se apoya en el borde."
        ],
      },
    ],
    checklist: [
      "Clásica si buscas algo compacto y barato; evolutiva si quieres que dure años",
      "Varias alturas y al menos una posición reclinada para los primeros meses",
      "Bandeja extraíble, a poder ser con doble nivel",
      "Funda lavable a máquina si el acolchado es de tela",
      "Arnés de 5 puntos y base ancha con patas antideslizantes"
    ],
    faq: [
      { q: "¿A partir de qué edad se puede usar una trona?", a: "La mayoría de fabricantes marca los 6 meses o desde que el bebé se sostiene sentado con apoyo, coincidiendo normalmente con el inicio de la alimentación complementaria; revisa siempre la ficha técnica del modelo concreto." },
      { q: "¿Compensa una trona de madera frente a una de plástico?", a: "La madera suele ser más robusta y estética a largo plazo, y muchos modelos evolutivos de madera duran hasta la edad escolar, pero pesa más y es algo más cara; el plástico es más ligero, barato y fácil de limpiar, aunque su vida útil suele ser más corta." },
    ],
    products: [
      {
        asin: "B08MBC4WQ9",
        title: "Kinderkraft ENOCK Trona bebé de Madera, Portátil, Evolutiva, Ergonómica, con Barrera y Bandeja, Madera natural",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones. Destaca evolutivo, dura más años y estructura de madera.",
        img: "https://m.media-amazon.com/images/I/61GXlncUCPL._AC_UL320_.jpg",
        price: "79,90",
        rating: "4,3★",
      },
      {
        asin: "B0F6D9XNQD",
        title: "Trona Evolutiva Bebé Portátil Silla Comer Reclinable, Azul",
        note: "Entrada de gama, buena relación precio-funciones. Destaca evolutivo, dura más años.",
        img: "https://m.media-amazon.com/images/I/61ccWB-Lp4L._AC_UL320_.jpg",
        price: "59,95",
        rating: "4,4★",
      },
      {
        asin: "B0CKBY2FDC",
        title: "ALMAR Baby Trona para bebe convertible en silla 2 en 1, acolchada, evolutiva 6-36 meses, gris",
        note: "Entrada de gama, buena relación precio-funciones. Destaca evolutivo, dura más años.",
        img: "https://m.media-amazon.com/images/I/71gosrPrNaL._AC_UL320_.jpg",
        price: "49,95",
        rating: "4,6★",
      },
      {
        asin: "B0CKHP854R",
        title: "Hauck Beta+ Trona Evolutiva de Madera con Certificado FSC, Natural",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección. Destaca evolutivo, dura más años y estructura de madera.",
        img: "https://m.media-amazon.com/images/I/61rnoHh9dOL._AC_UL320_.jpg",
        price: "111,62",
        rating: "4,1★",
      },
      {
        asin: "B0H5K3WL2F",
        title: "KikkaBoo Trona de Bebé OATY 2 en 1, Convertible hasta 15 kg y 3 años, Doble Bandeja con Portavasos, Beige",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/61Z-K2XUmwL._AC_UL320_.jpg",
        price: "39,90",
        rating: "4,8★",
      },
      {
        asin: "B07GDN22TF",
        title: "Kinderkraft Trona Bebé Ajustable Yummy, con Bandeja, hasta 3 años, Gris",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/61k6dT0LG+L._AC_UL320_.jpg",
        price: "76,00",
        rating: "4,7★",
      },
      {
        asin: "B0DZ2YM2G6",
        title: "Ms BabyWorld Trona Evolutiva Tasty, 7 posiciones de altura y 3 de reclinación, Portátil, hasta 3 años, Rosa",
        note: "Entrada de gama, buena relación precio-funciones. Destaca evolutivo, dura más años.",
        img: "https://m.media-amazon.com/images/I/613MNMb7S7L._AC_UL320_.jpg",
        price: "59,99",
        rating: "4,3★",
      },
      {
        asin: "B0DKFXQ14M",
        title: "Chicco Zest Plus Trona evolutiva, 6 meses a 40 kg, plegable, asiento lavable, cinturón 5 puntos",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones. Destaca plegado compacto y evolutivo, dura más años.",
        img: "https://m.media-amazon.com/images/I/61HtpUlQMDL._AC_UL320_.jpg",
        price: "76,49",
        rating: "4,6★",
      },
      {
        asin: "B0DDPTDQFV",
        title: "Kinderkraft DINNLY Trona bebé, Bandeja Ajustable, Fácil de limpiar, hasta 20 kg, Gris claro",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/61uHBrU798L._AC_UL320_.jpg",
        price: "54,00",
        rating: "4,4★",
      },
      {
        asin: "B0CRZ6KCMR",
        title: "Bebeconfort Lily Trona, 6 meses-3 años, plegado ultracompacto, ligera 4 kg, Mineral Green",
        note: "Entrada de gama, buena relación precio-funciones. Destaca plegado compacto.",
        img: "https://m.media-amazon.com/images/I/61RzlFb10WL._AC_UL320_.jpg",
        price: "44,99",
        rating: "4,5★",
      },
      {
        asin: "B0DW48FXC4",
        title: "BATHBY Trona Evolutiva 3 en 1, Plegable y Portátil, 8 Niveles de Regulación, hasta 6 años, Gris",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones. Destaca plegado compacto y evolutivo, dura más años.",
        img: "https://m.media-amazon.com/images/I/61npg-jFSKL._AC_UL320_.jpg",
        price: "79,95",
        rating: "4,1★",
      },
    ],
  },
  {
    slug: "monitores-y-vigilabebes",
    img: "/assets/img/guias/monitores-y-vigilabebes.jpg",
    title: "Cómo elegir un vigilabebés o monitor de bebé",
    dek: "Con o sin WiFi, alcance real, batería y privacidad: los criterios para no quedarte sin señal justo cuando más lo necesitas.",
    updated: "2026-09-16",
    intro: [
      "Un vigilabebés falla casi siempre en el peor momento: cuando pierde la señal a media noche o cuando la batería se agota sin avisar. Elegirlo bien significa mirar más allá de la pantalla y fijarse en el alcance real, la autonomía y qué pasa con la privacidad de esas imágenes o ese audio.",
      "Esta guía no recomienda una marca: da los criterios para comparar cualquier vigilabebés, con o sin cámara, con o sin conexión a internet."
    ],
    sections: [
      {
        heading: "Con WiFi (app) o sin WiFi (señal propia)",
        body: [
          "Los vigilabebés sin WiFi transmiten por una frecuencia propia entre la cámara y una pantalla dedicada: no dependen del router de casa, tienen menos retardo y, al no pasar por internet, reducen el riesgo de acceso externo no autorizado. Los modelos con WiFi y app permiten ver al bebé desde el móvil estés donde estés (otra habitación, el jardín, incluso fuera de casa), a cambio de depender de la cobertura WiFi y de la seguridad de tu cuenta en la nube.",
          "Si tu prioridad es la privacidad y solo necesitas vigilar desde una habitación cercana, un modelo sin WiFi con pantalla dedicada suele ser más que suficiente y evita cualquier duda sobre dónde viaja esa señal."
        ],
      },
      {
        heading: "Alcance real y interferencias",
        body: [
          "El alcance que anuncia el fabricante (habitualmente 250-300 metros) se mide en espacio abierto sin obstáculos: dentro de una vivienda normal, con paredes de hormigón o varias plantas de por medio, el alcance real puede reducirse a una fracción de esa cifra. Si vas a vigilar desde plantas distintas o con paredes gruesas de por medio, prioriza modelos pensados específicamente para mayor alcance o valora repetidores WiFi si es un modelo con app."
        ],
      },
      {
        heading: "Batería y autonomía nocturna",
        body: [
          "La autonomía de la pantalla (no de la cámara, que suele ir enchufada) determina si aguanta toda la noche sin cargarse: modelos con más de 10-12 horas de batería son los que de verdad libran de sustos por quedarse sin batería a las 4 de la madrugada. Comprobar el tiempo de carga completa también ayuda a planificar cuándo cargarla sin dejarla sin batería justo cuando se necesita."
        ],
      },
      {
        heading: "Funciones útiles: temperatura, VOX y visión nocturna",
        body: [
          "El sensor de temperatura ambiente integrado en la pantalla evita tener que comprobarlo por separado, útil sobre todo en los primeros meses. La función VOX (activación solo por sonido/voz, apantalla en negro sin ruido) ahorra batería frente a la transmisión de vídeo continua, especialmente en modelos sin cámara o con cámara desactivable.",
          "La visión nocturna infrarroja es prácticamente estándar hoy y suficiente para ver si el bebé se ha movido o llora sin necesidad de encender una luz que lo despierte."
        ],
      },
    ],
    checklist: [
      "Sin WiFi si priorizas privacidad y solo vigilas desde cerca; con WiFi/app si necesitas verlo desde fuera de casa",
      "Alcance real (no el de la ficha técnica) según la distribución de tu vivienda",
      "Autonomía de la pantalla de al menos 10-12 horas",
      "Función VOX si quieres ahorrar batería sin perder ninguna alerta importante",
      "Visión nocturna infrarroja y, si puedes, sensor de temperatura integrado"
    ],
    faq: [
      { q: "¿Es más seguro un vigilabebés sin WiFi que uno con app?", a: "En términos de privacidad, sí: al no pasar por internet ni por una cuenta en la nube, un modelo sin WiFi reduce el riesgo de acceso externo no autorizado. La contrapartida es que solo puedes ver la imagen desde la pantalla dedicada, no desde el móvil en cualquier lugar." },
      { q: "¿Cuánto alcance necesito realmente?", a: "Depende de la distribución de tu vivienda: para una habitación contigua o en la misma planta, 50-100 metros de alcance real suelen bastar; si hay varias plantas o paredes gruesas de hormigón de por medio, conviene un modelo con mayor alcance anunciado, porque la señal se pierde antes de la cifra de la ficha técnica." },
    ],
    products: [
      {
        asin: "B0CYCDTZ6G",
        title: "HelloBaby HB6560 Cámara Vigilancia Bebé sin WiFi, Pantalla IPS de 6\", PTZ, 30h batería",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones. Destaca con app/conexión.",
        img: "https://m.media-amazon.com/images/I/71+Z6E4Z6UL._AC_UL320_.jpg",
        price: "89,99",
        rating: "4,4★",
      },
      {
        asin: "B0FVFCZ43J",
        title: "Dr.Care Cámara Vigilancia Bebé WiFi 2K, Pantalla 5\", App, Soporte con Pinza",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección. Destaca con app/conexión.",
        img: "https://m.media-amazon.com/images/I/71Gra0622+L._AC_UL320_.jpg",
        price: "139,98",
        rating: "4,3★",
      },
      {
        asin: "B0DG2QS4GG",
        title: "Blemil Cámara Vigilancia Bebé, 6'' IPS Sin WiFi, Batería de 4000 mAh",
        note: "Entrada de gama, buena relación precio-funciones. Destaca con app/conexión.",
        img: "https://m.media-amazon.com/images/I/618SGoIqJNL._AC_UL320_.jpg",
        price: "69,99",
        rating: "4,5★",
      },
      {
        asin: "B07JJ4FZTL",
        title: "BOIFUN Cámara Vigilancia Bebé sin WiFi, Visión Nocturna Invisible, Pantalla 4\" IPS",
        note: "Entrada de gama, buena relación precio-funciones. Destaca con app/conexión.",
        img: "https://m.media-amazon.com/images/I/61QnCVs+ZRL._AC_UL320_.jpg",
        price: "52,24",
        rating: "4,5★",
      },
      {
        asin: "B0D5HRWS4Z",
        title: "Motorola Nursery VM75 Vigilabebés Vídeo 5\", Visión Nocturna, Comunicación Bidireccional",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/51mJB8y3nRL._AC_UL320_.jpg",
        price: "69,99",
        rating: "4,1★",
      },
      {
        asin: "B0817G6365",
        title: "GHB Cámara Vigilancia Bebé con Pantalla 3.2\" HD",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/61WsC+BybeL._AC_UL320_.jpg",
        price: "42,99",
        rating: "4,5★",
      },
      {
        asin: "B0CZRNSXZW",
        title: "Vigilabebés con Cámara, Pantalla HD 720P 2.8'', Zoom 2X 4X, VOX, Monitoreo de Temperatura",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/61E-jUwU49L._AC_UL320_.jpg",
        price: "39,99",
        rating: "4,3★",
      },
      {
        asin: "B0BZYJWCMS",
        title: "Blemil 5\" Cámara Vigilancia Bebé, Monitor Bebé sin WiFi, Batería 30 Horas",
        note: "Entrada de gama, buena relación precio-funciones. Destaca con app/conexión.",
        img: "https://m.media-amazon.com/images/I/61bcaU0ircL._AC_UL320_.jpg",
        price: "63,99",
        rating: "4,5★",
      },
      {
        asin: "B0GTK3SWZ3",
        title: "BURNNOVE Vigilabebés con Cámara 2.8\" IPS, Sin WiFi y Visión Nocturna",
        note: "Entrada de gama, buena relación precio-funciones. Destaca con app/conexión.",
        img: "https://m.media-amazon.com/images/I/61lz6hErnFL._AC_UL320_.jpg",
        price: "39,99",
        rating: "4,4★",
      },
      {
        asin: "B0D9K2XTYF",
        title: "TakTark Cámara Vigilancia Bebé 2,8\" 720P IPS, 20h autonomía, sin WiFi, VOX, Zoom 3x",
        note: "Entrada de gama, buena relación precio-funciones. Destaca con app/conexión.",
        img: "https://m.media-amazon.com/images/I/61HKP6S-1wL._AC_UL320_.jpg",
        price: "35,96",
        rating: "4,4★",
      },
      {
        asin: "B0DFMCR7KN",
        title: "BOIFUN Cámara Vigilancia Bebé 2K/3MP con WiFi y App Móvil, Pantalla 5\"",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones. Destaca con app/conexión.",
        img: "https://m.media-amazon.com/images/I/71EcBVgw6sL._AC_UL320_.jpg",
        price: "85,49",
        rating: "4,6★",
      },
    ],
  },
  {
    slug: "cunas-de-viaje-y-minicunas",
    img: "/assets/img/guias/cunas-de-viaje-y-minicunas.jpg",
    title: "Cómo elegir una cuna de viaje o minicuna",
    dek: "Peso, plegado, colchón y estabilidad: lo que marca la diferencia entre una cuna de viaje que se usa y una que acaba en el trastero.",
    updated: "2026-09-15",
    intro: [
      "Una cuna de viaje se compra casi siempre pensando en un uso puntual (una visita a los abuelos, unas vacaciones), pero muchas familias terminan usándola también como cuna principal en casa durante los primeros meses por el ahorro de espacio. Los criterios cambian según cuál sea el uso real que le vas a dar.",
      "Como siempre en este sitio, aquí no se recomienda una marca concreta: se explican los criterios para comparar cualquier cuna de viaje o minicuna por su cuenta."
    ],
    sections: [
      {
        heading: "Peso y tamaño plegada: el criterio de viaje",
        body: [
          "Si el uso principal va a ser viajar (avión, coche, casa de familiares), el peso de la cuna plegada y su tamaño una vez guardada en la bolsa de transporte son casi tan importantes como la comodidad del bebé: hay modelos por debajo de 5 kg pensados específicamente para facturar o llevar en el maletero sin ocupar todo el espacio.",
          "Las cunas más robustas (con estructura reforzada, ruedas, cambiador incorporado) suelen pesar más y no están pensadas para viajar a menudo, sino para quedarse fija en una habitación como cuna secundaria."
        ],
      },
      {
        heading: "Colchón: grosor y firmeza",
        body: [
          "El colchón que incluyen de serie muchas cunas de viaje es más fino que el de una cuna convencional, lo que puede notarse en la comodidad si el bebé va a dormir ahí muchas noches seguidas. Comprueba el grosor incluido y si existe un colchón de repuesto más grueso compatible con las mismas medidas, sobre todo si piensas usarla como cuna principal y no solo ocasional.",
          "La firmeza también importa por seguridad: los organismos de prevención de muerte súbita del lactante recomiendan superficies firmes, no blandas ni mullidas, así que un colchón demasiado blando no es preferible aunque parezca más cómodo."
        ],
      },
      {
        heading: "Entrada lateral y accesos",
        body: [
          "Una cremallera o cierre lateral para sacar y meter al bebé sin tener que levantarlo por encima del borde es una comodidad que se aprecia mucho a diario, especialmente en cunas más altas. Revisa que el sistema de cierre sea firme y no se abra accidentalmente: es uno de los puntos donde más varía la calidad entre fabricantes."
        ],
      },
      {
        heading: "Estabilidad y superficie de apoyo",
        body: [
          "Las patas o la base deben quedar completamente estables sobre el suelo, sin balanceo, incluso si el niño se agarra a los laterales para incorporarse a partir de los 6-8 meses. Los modelos con ruedas facilitan mover la cuna de una habitación a otra, pero conviene que las ruedas tengan freno para que no se desplace sola una vez colocada."
        ],
      },
    ],
    checklist: [
      "Peso y tamaño plegada según si el uso principal va a ser viajar o quedarse fija",
      "Grosor y firmeza del colchón, sobre todo si va a usarse muchas noches seguidas",
      "Entrada lateral con cierre firme para sacar y meter al bebé con comodidad",
      "Estabilidad de la base, con freno en las ruedas si las tiene",
      "Bolsa de transporte incluida si vas a viajar con ella a menudo"
    ],
    faq: [
      { q: "¿Puede una cuna de viaje sustituir a una cuna normal en casa?", a: "Muchas familias la usan así los primeros meses sin problema, pero conviene revisar el grosor y la firmeza del colchón incluido: si vas a usarla como cuna principal, un colchón de repuesto algo más grueso (compatible con las mismas medidas) suele mejorar bastante el descanso." },
      { q: "¿Hasta qué edad o peso se puede usar una cuna de viaje?", a: "Depende del modelo, pero la mayoría marca un límite entre 15 y 25 kg o hasta que el niño pueda salir trepando por sí mismo, lo que ocurra antes; revisa siempre la ficha técnica del fabricante." },
    ],
    products: [
      {
        asin: "B0FDX3TF45",
        title: "Lionelo Cuna de Viaje Parque Cuna Bebe 3 en 1 Alice, 0 a 15 kg, Colchón de Espuma, 2 Niveles de Altura, Plegable",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones. Destaca plegado compacto.",
        img: "https://m.media-amazon.com/images/I/81pt0XRjbKL._AC_UL320_.jpg",
        price: "89,99",
        rating: "4,4★",
      },
      {
        asin: "B08J4XJ5NZ",
        title: "Hauck Cuna de Viaje para Bebé Dream N Play con Bolsa de Transporte, Beige",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/71xvIZ1bUrL._AC_UL320_.jpg",
        price: "54,89",
        rating: "4,5★",
      },
      {
        asin: "B09JWRPSH4",
        title: "Bebeconfort Soft Dreams Cuna de Viaje, 0-3 años (0-15 kg), Colchón Espuma y Fibra, Navy Blue",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/71bWw2Uf-KL._AC_UL320_.jpg",
        price: "43,99",
        rating: "4,4★",
      },
      {
        asin: "B0CM41TS29",
        title: "Kinderkraft Joy 2 Cuna de Viaje 3 en 1, hasta 25 kg, Plegado rápido, Entrada Lateral, Beige",
        note: "Entrada de gama, buena relación precio-funciones. Destaca plegado compacto.",
        img: "https://m.media-amazon.com/images/I/71mJexugj3L._AC_UL320_.jpg",
        price: "59,90",
        rating: "4,4★",
      },
      {
        asin: "B0DQDSDXJ7",
        title: "Mobiclinic Cuna de Viaje 3 en 1, Parque Infantil, Cambiador, Ruedas con Freno, Caelum",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/81Gng7Ziu2L._AC_UL320_.jpg",
        price: "76,95",
        rating: "4,3★",
      },
      {
        asin: "B0DNMVR6VR",
        title: "Lionelo Stefi Cuna de Viaje Apertura Lateral, Colchoneta 120x60 cm, Lados de Malla Transpirable",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/81UjEc4JiSL._AC_UL320_.jpg",
        price: "54,99",
        rating: "4,5★",
      },
      {
        asin: "B07N4QBJ36",
        title: "Moby-System Cuna de Viaje para Bebé, Parque Cuna 2 en 1 con Colchón, 2 Alturas, Ruedas con Freno",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/81+IRFMIpzL._AC_UL320_.jpg",
        price: "45,74",
        rating: "4,4★",
      },
      {
        asin: "B0F8NZKXB6",
        title: "Asalvo Baleares Cuna de Viaje Bebé Plegable 0-3 años (15 kg), Colchón, Bolsa y Ruedas con Freno, Beige",
        note: "Entrada de gama, buena relación precio-funciones. Destaca plegado compacto.",
        img: "https://m.media-amazon.com/images/I/61PAItAo+dL._AC_UL320_.jpg",
        price: "47,50",
        rating: "4,1★",
      },
      {
        asin: "B0CM6JPC2Z",
        title: "Kinderkraft Joy Light Cuna de Viaje, hasta 25 kg, Plegado rápido, Entrada Lateral, Gris",
        note: "Entrada de gama, buena relación precio-funciones. Destaca plegado compacto.",
        img: "https://m.media-amazon.com/images/I/511jilQ32aL._AC_UL320_.jpg",
        price: "54,90",
        rating: "4,7★",
      },
      {
        asin: "B0DK2ZDW21",
        title: "RELAX4LIFE Cuna Plegable Bebe 5 en 1 con 2 Ruedas Bloqueables y Cambiador",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección. Destaca plegado compacto.",
        img: "https://m.media-amazon.com/images/I/71mpsNgD-FL._AC_UL320_.jpg",
        price: "109,99",
        rating: "4,3★",
      },
      {
        asin: "B07RT9XH6H",
        title: "All Kids United Cuna de Viaje con Cambiador y Móvil, Plegable, 10 kg",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección. Destaca plegado compacto.",
        img: "https://m.media-amazon.com/images/I/71Y8B4VHplL._AC_UL320_.jpg",
        price: "94,90",
        rating: "4,4★",
      },
    ],
  },
  {
    slug: "portabebes-y-mochilas-ergonomicas",
    img: "/assets/img/guias/portabebes-y-mochilas-ergonomicas.jpg",
    title: "Cómo elegir un portabebés o mochila ergonómica",
    dek: "Posición fisiológica, soporte lumbar y rango de edad: los criterios de la Asociación Internacional de Porteo, explicados sin tecnicismos.",
    updated: "2026-09-15",
    intro: [
      "Un portabebés mal elegido puede resultar incómodo tanto para quien lo lleva como, sobre todo, para la cadera y la columna del bebé si no respeta su posición fisiológica natural. Los criterios que marcan la diferencia entre un portabebés cómodo y uno que se abandona al mes están bastante estandarizados y son fáciles de comprobar antes de comprar.",
      "Esta guía no recomienda una marca: explica los criterios de porteo ergonómico para comparar cualquier mochila portabebés, la compres donde la compres."
    ],
    sections: [
      {
        heading: "Posición fisiológica: la \"M\" de piernas y la espalda en \"C\"",
        body: [
          "La posición ergonómica recomendada por pediatras y asociaciones de porteo coloca las piernas del bebé en forma de \"M\" (rodillas más altas que las caderas, abiertas hacia los lados) en lugar de colgando rectas, lo que reparte mejor el peso en la articulación de la cadera y reduce el riesgo de displasia. La espalda del bebé debe poder curvarse de forma natural en forma de \"C\", no quedar completamente recta ni forzada.",
          "Los portabebés que solo sujetan al bebé colgado de la entrepierna, sin apoyo bajo los muslos hasta la rodilla, no cumplen este criterio por mucho que se anuncien como \"ergonómicos\": conviene comprobarlo en las fotos del producto, no solo en la etiqueta."
        ],
      },
      {
        heading: "Soporte lumbar para quien porta",
        body: [
          "Un cinturón lumbar ancho y bien acolchado reparte el peso del bebé entre la cadera y los hombros de quien lo porta, en lugar de cargarlo todo sobre la zona lumbar baja: esto se nota mucho a partir del cuarto o quinto mes, cuando el bebé ya pesa varios kilos. Los tirantes cruzados o en \"X\" en la espalda distribuyen mejor el peso que los tirantes rectos paralelos, especialmente para porteos largos."
        ],
      },
      {
        heading: "Rango de edad y adaptabilidad",
        body: [
          "Algunos portabebés cubren desde el nacimiento (con un reductor o posición especial para recién nacidos) hasta los 3-4 años, mientras que otros están pensados solo para un tramo concreto (por ejemplo, a partir de los 3-4 meses cuando el bebé ya sostiene el cuello). Si buscas una sola compra que dure toda la etapa de porteo, revisa que el modelo incluya de forma explícita el modo recién nacido, no solo que lo permita \"con ajustes\".",
          "La posición frontal mirando hacia quien porta es la recomendada en todas las edades; la posición mirando hacia delante (de cara al mundo) no es la más recomendada por las asociaciones de porteo por la carga que supone en la columna del bebé, y muchos fabricantes ya la han retirado de sus modelos más recientes."
        ],
      },
      {
        heading: "Facilidad de ajuste y de puesta",
        body: [
          "Los sistemas con hebillas de ajuste rápido facilitan compartir el mismo portabebés entre dos personas con complexión distinta (madre y padre, por ejemplo) sin tener que reajustar toda la mochila cada vez. Un portabebés que cuesta más de un par de minutos ponerse correctamente tiende a usarse menos, aunque sea el más ergonómico del mercado."
        ],
      },
    ],
    checklist: [
      "Piernas del bebé en \"M\", con apoyo hasta la rodilla, no colgando rectas",
      "Espalda del bebé libre para curvarse en \"C\", sin quedar forzada",
      "Cinturón lumbar ancho y tirantes cruzados para porteos largos",
      "Modo recién nacido explícito si buscas una sola mochila para toda la etapa",
      "Ajuste rápido si va a compartirse entre dos personas distintas"
    ],
    faq: [
      { q: "¿Desde qué edad se puede usar un portabebés ergonómico?", a: "Los modelos con modo recién nacido explícito pueden usarse desde el nacimiento, siempre respetando el peso mínimo indicado por el fabricante (normalmente 3-3,5 kg); otros modelos solo son aptos a partir de los 3-4 meses, cuando el bebé ya controla mejor el cuello." },
      { q: "¿Es malo que el bebé mire hacia delante en el portabebés?", a: "No es la posición más recomendada por las asociaciones de porteo, porque reparte peor el peso sobre la columna del bebé y no permite la posición de piernas en \"M\" de forma tan natural; la posición frontal mirando hacia quien porta se considera preferible en la mayoría de edades." },
    ],
    products: [
      {
        asin: "B0C2Z2XZQ1",
        title: "Ergobaby Adapt Portabebés para el período de 0 a 48 meses",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/91g-hHXF4VL._AC_UL320_.jpg",
        price: "120,00",
        rating: "4,6★",
      },
      {
        asin: "B0FJRPSM7Y",
        title: "Momcozy Mochila Portabebés Ergonómica, Cómoda y Ligera, 3-24 Meses, Soporte Lumbar Mejorado",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/71VbeMHsGAL._AC_UL320_.jpg",
        price: "50,39",
        rating: "4,3★",
      },
      {
        asin: "B07JNN42R7",
        title: "Boba X Mochila Portabebés Ergonómica, Ajustable, Recién Nacidos y Niños Pequeños (3-20 kg), Denim Rain",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/81wLz4aG-9L._AC_UL320_.jpg",
        price: "165,00",
        rating: "4,6★",
      },
      {
        asin: "B0FGD6WXR2",
        title: "GAGAKU Mochila Portabebés Ergonómica, 3,2 a 15 kg, Advanced 4 en 1, Caqui",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/61lfdnTBGnL._AC_UL320_.jpg",
        price: "29,44",
        rating: "4,4★",
      },
      {
        asin: "B0DKNPD8JB",
        title: "Jané Dual Mochila Portabebé Ergonómica, desde nacimiento (3,5-15 kg), 3 Posiciones, Verde",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/51ADixPShsL._AC_UL320_.jpg",
        price: "38,20",
        rating: "4,2★",
      },
      {
        asin: "B01FF518KK",
        title: "Infantino Mochila Portabebé Flip Advanced 4-en-1, Convertible, 3,6-14,5 kg, Gris",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/818tcJFOBoL._AC_UL320_.jpg",
        price: "31,92",
        rating: "4,5★",
      },
      {
        asin: "B0D94SXBFR",
        title: "Mochila Portabebés 6 en 1 Recién Nacido, Transpirable y Ergonómica, incluye Muselina de Regalo",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/81QG3GounzL._AC_UL320_.jpg",
        price: "35,95",
        rating: "4,4★",
      },
      {
        asin: "B08HN1X9Y2",
        title: "Ergobaby Embrace Mochila Portabebé Ergonómica Recién Nacidos, Extra Suave y Ultraligero, Rosa",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/712D0CWSCiL._AC_UL320_.jpg",
        price: "83,92",
        rating: "4,7★",
      },
      {
        asin: "B0G528VC2H",
        title: "Grownsy Mochila Portabebés Ergonómica Ajustable para Recién Nacidos, 3-20 kg",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/715ejWpvaBL._AC_UL320_.jpg",
        price: "42,99",
        rating: "4,5★",
      },
      {
        asin: "B0BWSMDNSM",
        title: "Boba Bliss Portabebés Recién Nacidos y Niños Pequeños, Fular 2 en 1, sin Ataduras, 3-15 kg, Gris",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/71xszdE2yJL._AC_UL320_.jpg",
        price: "84,99",
        rating: "4,4★",
      },
      {
        asin: "B07B41952V",
        title: "Ergobaby Portabebés Omni Classic para el período de 0 a 48 meses",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/717XMlWF5SL._AC_UL320_.jpg",
        price: "139,00",
        rating: "4,6★",
      },
    ],
  },
  {
    slug: "esterilizadores-y-calientabiberones",
    img: "/assets/img/guias/esterilizadores-y-calientabiberones.jpg",
    title: "Cómo elegir un esterilizador o calientabiberones",
    dek: "Vapor eléctrico, microondas o UV, y calentamiento uniforme sin puntos calientes: lo que de verdad cambia entre modelos.",
    updated: "2026-09-14",
    intro: [
      "Esterilizar biberones y calentar la leche son dos de las tareas más repetidas del día a día con un bebé, así que la comodidad y la rapidez del aparato elegido se notan mucho más que en productos de uso puntual. Existen varias tecnologías distintas para cada tarea, y ninguna es universalmente mejor: depende de tu rutina.",
      "Esta guía compara criterios, no marcas concretas: sirve para decidir con cabeza cualquier esterilizador o calientabiberones, lo compres donde lo compres."
    ],
    sections: [
      {
        heading: "Esterilizador: vapor eléctrico, microondas o UV",
        body: [
          "Los esterilizadores eléctricos de vapor son autónomos (no dependen del microondas) y suelen tener más capacidad, a cambio de ocupar más espacio en la encimera. Los esterilizadores para microondas son más compactos y baratos, pero su tiempo y resultado dependen de la potencia del microondas de cada casa, lo que hace más difícil garantizar un resultado uniforme entre distintos hogares.",
          "Los esterilizadores UV (menos comunes) no usan calor ni vapor, lo que permite esterilizar objetos que no soportan altas temperaturas, pero su eficacia depende mucho de la correcta colocación de cada pieza frente a la luz, sin zonas de sombra."
        ],
      },
      {
        heading: "Capacidad y compatibilidad de piezas",
        body: [
          "La capacidad se mide en número de biberones estándar, pero las piezas más grandes o de formas irregulares (biberones anchos, extractores de leche completos) pueden no encajar en esterilizadores pensados solo para biberones estrechos. Si usas un extractor de leche a menudo, comprueba que el esterilizador tiene espacio y accesorios pensados para esas piezas, no solo para biberones."
        ],
      },
      {
        heading: "Calientabiberones: uniformidad y control de temperatura",
        body: [
          "El riesgo real de un calientabiberones mal diseñado no es que caliente poco, sino que caliente de forma desigual y deje \"puntos calientes\" en la leche que no se detectan al tacto del biberón por fuera. Los modelos con sistema de calentamiento al baño maría (agua alrededor del biberón, no calor directo) reparten mejor la temperatura que los que calientan por contacto directo con una resistencia.",
          "Un control de temperatura preciso con apagado automático evita tanto que la leche se quede fría como que se sobrecaliente y pierda nutrientes o, peor, queme al bebé; los modelos con pantalla y temperatura programable dan más control que los de un solo botón de encendido."
        ],
      },
      {
        heading: "Tiempo de calentamiento y versatilidad",
        body: [
          "Un calientabiberones rápido (2-4 minutos) evita esperas con un bebé llorando de hambre, pero conviene comprobar que ese tiempo no compromete la uniformidad de la temperatura. Los modelos que también descongelan o calientan potitos de comida añaden versatilidad a partir de la introducción de la alimentación complementaria, alargando su vida útil más allá de la etapa solo de leche."
        ],
      },
    ],
    checklist: [
      "Vapor eléctrico si quieres autonomía; microondas si priorizas ahorro de espacio",
      "Capacidad y compatibilidad real con tus biberones y extractor de leche",
      "Calentamiento al baño maría para evitar puntos calientes en la leche",
      "Control de temperatura preciso con apagado automático",
      "Función de descongelado o calentado de potitos si buscas un aparato que dure más etapas"
    ],
    faq: [
      { q: "¿Es necesario esterilizar los biberones cada vez?", a: "Las guías pediátricas actuales suelen recomendar esterilizar a fondo sobre todo en los primeros meses (hasta los 3-4 meses, cuando el sistema inmunitario del bebé es más vulnerable) y con un lavado normal a fondo el resto del tiempo, aunque cada pediatra puede matizar según el caso; conviene seguir la pauta que te indiquen." },
      { q: "¿Un calientabiberones calienta de forma más segura que el microondas?", a: "Sí, en general: el microondas calienta de forma muy desigual y puede dejar zonas de leche mucho más calientes que otras sin que se note a simple vista, mientras que un calientabiberones con baño maría reparte el calor de forma más uniforme por todo el biberón." },
    ],
    products: [
      {
        asin: "B0FR8NDLM1",
        title: "Momcozy Esterilizador y Secador Eléctrico para Biberones, 4 en 1, para Biberones, Accesorios y Extractores de Leche",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/61VJxYIvdIL._AC_UL320_.jpg",
        price: "59,50",
        rating: "4,7★",
      },
      {
        asin: "B0FRM4RHM7",
        title: "Momcozy Esterilizador Biberones 8-en-1, Eléctrico de Vapor, Función de Secado, Capacidad 8 Biberones",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/614AHmdJGoL._AC_UL320_.jpg",
        price: "84,99",
        rating: "4,4★",
      },
      {
        asin: "B01C6ZWAQI",
        title: "Tommee Tippee Esterilizador de Vapor para Microondas para Biberones",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/51g9364w+WL._AC_UL320_.jpg",
        price: "29,99",
        rating: "4,6★",
      },
      {
        asin: "B09XFCVGCQ",
        title: "Chicco Esterilizador Eléctrico de Biberones, Sacaleches y Chupete, 3 Configuraciones, hasta 6 Biberones, Blanco",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/513F0qsFyBL._AC_UL320_.jpg",
        price: "41,74",
        rating: "4,5★",
      },
      {
        asin: "B0058RPKN2",
        title: "Hartig + Helling Esterilizador de Biberón, Blanco",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/61FS+HwIOfL._AC_UL320_.jpg",
        price: "28,99",
        rating: "4,4★",
      },
      {
        asin: "B08DPPY1SC",
        title: "Philips Avent Esterilizador y Secador de Biberones, elimina 99,9% de bacterias, capacidad 6 biberones",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/51chAAswa+L._AC_UL320_.jpg",
        price: "109,99",
        rating: "4,6★",
      },
      {
        asin: "B001RTU4DQ",
        title: "Tigex Esterilizador Biberones para Microondas, capacidad 5 biberones, esteriliza en 4 minutos",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/81JO3KK-izL._AC_UL320_.jpg",
        price: "14,99",
        rating: "4,6★",
      },
      {
        asin: "B0D12QMXD2",
        title: "Grownsy Calienta Biberones Doble Bebé 9 en 1 con Esterilizador",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/71TXPB8eYsL._AC_UL320_.jpg",
        price: "45,12",
        rating: "4,5★",
      },
      {
        asin: "B0H11BYCRC",
        title: "Grownsy Calienta Biberones para Bebé, Rápido y Preciso",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/518OXIfjI7L._AC_UL320_.jpg",
        price: "38,99",
        rating: "4,4★",
      },
      {
        asin: "B0GT8RW3ZY",
        title: "Calienta Biberones Inteligente, calentador de leche rápido, control de temperatura, descongelación suave y esterilizador de vapor",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/51zjOsRnysL._AC_UL320_.jpg",
        price: "27,99",
        rating: "4,5★",
      },
      {
        asin: "B084PMMS2H",
        title: "Philips Avent Premium Calientabiberones rápido, control de temperatura inteligente, sistema al baño maría",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/71shzTT-riL._AC_UL320_.jpg",
        price: "54,99",
        rating: "4,1★",
      },
    ],
  },
  {
    slug: "basculas-de-bebe",
    img: "/assets/img/guias/basculas-de-bebe.jpg",
    title: "Cómo elegir una báscula de bebé",
    dek: "Precisión, función tara y superficie de pesaje segura: lo que hace que una báscula sirva para algo más que decoración.",
    updated: "2026-09-13",
    intro: [
      "Una báscula de bebé no es imprescindible si acudes a revisiones pediátricas regulares, pero resulta muy útil para seguir el peso entre visitas, sobre todo durante la lactancia o si el pediatra ha pedido un seguimiento más de cerca. La precisión y la seguridad de la superficie de pesaje son los dos criterios que marcan la diferencia real entre modelos.",
      "Esta guía no recomienda una marca: explica los criterios para comparar cualquier báscula de bebé, la compres donde la compres."
    ],
    sections: [
      {
        heading: "Precisión: gramos, no solo kilos",
        body: [
          "Para seguir la ganancia de peso de un recién nacido, una precisión de 5-10 gramos es mucho más útil que una báscula que solo marca variaciones de 50-100 gramos: en las primeras semanas, esos gramos de diferencia son justo lo que el pediatra quiere ver. A partir de los primeros meses, cuando las variaciones de peso son mayores, la precisión exacta importa algo menos."
        ],
      },
      {
        heading: "Función tara y bandeja segura",
        body: [
          "La función tara permite poner un pañal, una manta o el reductor de la bandeja sin que ese peso se sume al del bebé, algo casi imprescindible si el bebé no puede quedarse quieto y desnudo mucho tiempo en invierno. La bandeja debe tener bordes elevados y una superficie ligeramente cóncava para que el bebé no pueda rodar ni caerse mientras se mueve durante el pesaje."
        ],
      },
      {
        heading: "Multiuso: báscula para niños grandes, adultos o mascotas",
        body: [
          "Muchas básculas de bebé están pensadas para servir también como báscula de baño convencional una vez el niño crece (retirando la bandeja), lo que alarga su vida útil más allá de los primeros meses. Otras se anuncian específicamente como multiuso para mascotas o para pesar cualquier objeto, con una capacidad máxima mucho mayor que la necesaria solo para un bebé."
        ],
      },
      {
        heading: "Apagado automático y estabilidad de la lectura",
        body: [
          "El apagado automático tras unos segundos de inactividad ahorra pilas, importante en un aparato que no se usa a diario. Una función de \"lectura estable\" o promedio de varias mediciones da un resultado más fiable que una lectura instantánea cuando el bebé se mueve, ya que las básculas simples pueden mostrar cifras que varían mucho segundo a segundo si el bebé no está del todo quieto."
        ],
      },
    ],
    checklist: [
      "Precisión de 5-10 gramos si vas a seguir el peso en las primeras semanas",
      "Función tara para restar el peso de pañal, manta o reductor",
      "Bandeja con bordes elevados y superficie cóncava, sin riesgo de caída",
      "Capacidad máxima suficiente para seguir usándola cuando el niño crezca",
      "Apagado automático y lectura estable si el bebé se mueve durante el pesaje"
    ],
    faq: [
      { q: "¿Es imprescindible comprar una báscula de bebé?", a: "No, si acudes a revisiones pediátricas con la frecuencia recomendada; resulta más útil en situaciones concretas como el seguimiento de la lactancia, bebés prematuros o cuando el pediatra pide vigilar el peso más de cerca entre visitas." },
      { q: "¿Cómo se pesa correctamente a un bebé en casa?", a: "Siempre en la misma báscula, a la misma hora del día (idealmente antes de una toma), con el bebé desnudo o con la misma cantidad de ropa cada vez, y usando la función tara para descontar cualquier manta o pañal que quede debajo." },
    ],
    products: [
      {
        asin: "B0F3TNBF6Z",
        title: "Grownsy Báscula Bebé Digital 150 kg para Bebés, Mascotas y Adultos",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/61y3u7qHr6L._AC_UL320_.jpg",
        price: "49,99",
        rating: "4,4★",
      },
      {
        asin: "B0H2F44WC3",
        title: "Momcozy Báscula Bebé Multifuncional para Peso y Altura, Bandeja Extraíble",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/61Jqoi8q+rL._AC_UL320_.jpg",
        price: "49,99",
        rating: "4,7★",
      },
      {
        asin: "B09NTVN5WQ",
        title: "Báscula Digital de Bebé con Pantalla LCD y Precisión, hasta 20 kg, Función Tara",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/51rqggn8arL._AC_UL320_.jpg",
        price: "29,99",
        rating: "4,2★",
      },
      {
        asin: "B0BQ1L5798",
        title: "Cecotec Báscula Bebé Digital Nana BabyCare SmartWeight, Pantalla LED, 50 g a 40 kg, Multifunción",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/71eDLVflIHL._AC_UL320_.jpg",
        price: "24,90",
        rating: "4,4★",
      },
      {
        asin: "B07B4SDTQB",
        title: "Grundig Báscula Bebé Digital Recién Nacido, 10 g de precisión, Función de Tara, Blanco",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/51O+-KYpnDL._AC_UL320_.jpg",
        price: "29,99",
        rating: "4,3★",
      },
      {
        asin: "B00GMV5HDG",
        title: "Chicco Báscula Electrónica Digital para Bebés, hasta 20 kg, Función de Tara y Estabilizadora",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/71twJlA1IJL._AC_UL320_.jpg",
        price: "60,42",
        rating: "4,6★",
      },
      {
        asin: "B0CQSZF48L",
        title: "BAGAIL Báscula para Bebés, superficie de pesaje segura, dos en uno, hasta 180 kg",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/61OmpTj0U9L._AC_UL320_.jpg",
        price: "31,92",
        rating: "4,5★",
      },
      {
        asin: "B0CKVWZ4R5",
        title: "BAGAIL Báscula para Bebés con Bandeja, Gran Pantalla LCD, Tara y Retención, Multiusos",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/510hn92QiZL._AC_UL320_.jpg",
        price: "38,66",
        rating: "4,4★",
      },
      {
        asin: "B07K69SQCR",
        title: "Báscula Bebé Bluetooth con Bandeja Extraíble, Tara y Retención, App gratuita, hasta 100 kg",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección. Destaca con app/conexión y con Bluetooth.",
        img: "https://m.media-amazon.com/images/I/612Gob-2S0L._AC_UL320_.jpg",
        price: "59,99",
        rating: "4,6★",
      },
      {
        asin: "B0FVFG357J",
        title: "Silvergear Báscula Bebé Inteligente con Bluetooth y App, hasta 20 kg, Blanco",
        note: "Entrada de gama, buena relación precio-funciones. Destaca con app/conexión y con Bluetooth.",
        img: "https://m.media-amazon.com/images/I/71GtAB+XtYL._AC_UL320_.jpg",
        price: "34,99",
        rating: "3,9★",
      },
    ],
  },
  {
    slug: "hamacas-y-balancines-para-bebe",
    img: "/assets/img/guias/hamacas-y-balancines-para-bebe.jpg",
    title: "Cómo elegir una hamaca o balancín para bebé",
    dek: "Vibración, reclinación y arnés: los criterios de seguridad y comodidad antes de dejar al bebé sentado unos minutos.",
    updated: "2026-09-12",
    intro: [
      "Una hamaca o balancín da un lugar seguro donde dejar al bebé unos minutos mientras haces otra tarea, pero no todos los modelos ofrecen el mismo nivel de seguridad ni de comodidad real. Los criterios que importan son pocos: reclinación adecuada a la edad, arnés fiable y estabilidad de la base.",
      "Como en el resto de guías de este sitio, aquí no se recomienda una marca concreta: se explican los criterios para comparar cualquier hamaca de bebé por su cuenta."
    ],
    sections: [
      {
        heading: "Reclinación según la edad",
        body: [
          "En los primeros meses, cuando el bebé aún no controla bien el cuello, conviene una posición más reclinada (semi-tumbada); a partir de los 3-4 meses, cuando ya sostiene la cabeza, se puede ir incorporando la hamaca a posiciones más verticales para que interactúe mejor con su entorno. Los modelos con varias posiciones de reclinación se adaptan a todo ese recorrido sin tener que cambiar de hamaca.",
          "Nunca se recomienda dejar dormir al bebé de forma prolongada en una hamaca reclinada: los pediatras insisten en que el sueño, sobre todo nocturno, debe hacerse siempre en una superficie firme y plana (cuna o moisés), no en una hamaca inclinada."
        ],
      },
      {
        heading: "Vibración y música: para calmar, no para dormir toda la noche",
        body: [
          "La vibración suave y la música o sonidos de la naturaleza ayudan a calmar al bebé en momentos de llanto o para conciliar una siesta corta vigilada, pero no sustituyen a la cuna para el sueño nocturno. Los modelos con varios niveles de intensidad de vibración permiten ajustar según lo sensible que sea cada bebé a ese estímulo."
        ],
      },
      {
        heading: "Arnés y estabilidad de la base",
        body: [
          "El arnés de 3 o 5 puntos debe sujetar bien sin apretar, y es imprescindible siempre que el bebé esté en la hamaca, incluso en los primeros meses cuando parece que no se puede mover: los bebés se sorprenden a sí mismos moviéndose antes de lo esperado. La base debe ser ancha y con pies antideslizantes para que no se desplace ni se vuelque si el bebé se balancea con fuerza o un hermano mayor se apoya en ella."
        ],
      },
      {
        heading: "Peso máximo y vida útil",
        body: [
          "El peso máximo soportado (normalmente entre 9 y 18 kg según el modelo) determina cuánto tiempo real vas a poder usar la hamaca: algunos modelos se quedan pequeños hacia los 6 meses, otros aguantan hasta bien entrado el segundo año. Si buscas que dure más tiempo, revisa este dato con atención, porque varía mucho entre fabricantes pese a tener un aspecto similar."
        ],
      },
    ],
    checklist: [
      "Varias posiciones de reclinación adaptadas a la edad del bebé",
      "Nunca usar la hamaca para el sueño nocturno prolongado",
      "Vibración con varios niveles de intensidad para calmar, no para dormir toda la noche",
      "Arnés de 3-5 puntos usado siempre, incluso en los primeros meses",
      "Peso máximo soportado según cuánto tiempo quieras que dure"
    ],
    faq: [
      { q: "¿Puede el bebé dormir toda la noche en la hamaca?", a: "No se recomienda: los pediatras insisten en que el sueño, especialmente el nocturno y prolongado, debe hacerse siempre en una superficie firme y plana como la cuna, no en una hamaca reclinada, por el riesgo asociado a superficies inclinadas o blandas." },
      { q: "¿Es necesario el arnés si el bebé todavía no se mueve?", a: "Sí: los bebés se sorprenden a sí mismos con movimientos repentinos antes de lo que muchos padres esperan, así que el arnés debe usarse siempre desde la primera vez que se coloca al bebé en la hamaca, no solo cuando ya gatea o se mueve de forma evidente." },
    ],
    products: [
      {
        asin: "B07R2Y3YLC",
        title: "Bright Starts Asiento Infantil Vibrador, Barra de Juguetes Removible, 0-6 Meses hasta 9 kg, Safari Fun",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/81KwG5CuhLL._AC_UL320_.jpg",
        price: "29,99",
        rating: "4,4★",
      },
      {
        asin: "B07QVLTZ6R",
        title: "Ingenuity Hamaca Mecedora para Bebés hasta 18 kg, Cuddle Lamb con vibraciones, 12 melodías",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/719YtUazpfL._AC_UL320_.jpg",
        price: "62,46",
        rating: "4,3★",
      },
      {
        asin: "B08PDPK1JS",
        title: "Ingenuity Hamaca Mecedora para Bebés 3en1 Keep Cozy, Vibraciones Relajantes, Arnés de 5 Puntos, hasta 18 kg",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/81x2NaWOZqL._AC_UL320_.jpg",
        price: "69,99",
        rating: "4,5★",
      },
      {
        asin: "B09PZ241GD",
        title: "MS BabyWorld Lullaby Hamaca para Bebé 2 en 1, Mecedora y Silla Reclinable, Vibración Suave, hasta 9 kg",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/61JFMsPQrQL._AC_UL320_.jpg",
        price: "37,99",
        rating: "4,6★",
      },
      {
        asin: "B08148QQT4",
        title: "Bright Starts Hamaca para Bebés Jungle Vines, Vibraciones Relajantes y 7 Melodías, Arnés de 3 Puntos",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/81flIWbezvL._AC_UL320_.jpg",
        price: "43,69",
        rating: "4,5★",
      },
      {
        asin: "B0DWT4Y4BF",
        title: "MoMi Kenani Mecedora para niños hasta 9 kg, Pantalla LED, Mando a Distancia, Bluetooth, Arnés de 5 Puntos",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección. Destaca con Bluetooth.",
        img: "https://m.media-amazon.com/images/I/61kM4-G4CPL._AC_UL320_.jpg",
        price: "99,50",
        rating: "4,1★",
      },
      {
        asin: "B0CFVN4RKT",
        title: "Olmitos Hamaca de Bebé Multifunción, Balanceo Natural, 2 Reclinados, Vibración y 8 Melodías, Gris",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/51QdZaTJMaL._AC_UL320_.jpg",
        price: "54,95",
        rating: "4,2★",
      },
      {
        asin: "B00E3RKC36",
        title: "Ingenuity Columpio Compacto y Plegable Cozy Kingdom, 6 Velocidades de Balanceo, Arnés de 5 Puntos",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones. Destaca plegado compacto.",
        img: "https://m.media-amazon.com/images/I/71XT52VhfAL._AC_UL320_.jpg",
        price: "62,63",
        rating: "4,4★",
      },
      {
        asin: "B003SSGL0O",
        title: "Bright Starts Mecedora para Bebés Rosy Rainbow, Vibraciones Relajantes, Reclinable, hasta 18 kg",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/714upTbLKoL._AC_UL320_.jpg",
        price: "49,01",
        rating: "4,4★",
      },
      {
        asin: "B0FN88ZCM2",
        title: "MoMi Glossy Mecedora para Bebés hasta 9 kg, Arnés de 3 Puntos, Estructura Metálica, 1,7 kg",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/51GK2ieaZRL._AC_UL320_.jpg",
        price: "39,99",
        rating: "4,2★",
      },
      {
        asin: "B08V49RTP4",
        title: "Ingenuity Ity Hamaca para Bebé Bouncity Bounce, Vibraciones Relajantes, Arco de Actividades, 0-6 Meses",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/81Exh+DawUL._AC_UL320_.jpg",
        price: "39,99",
        rating: "4,4★",
      },
    ],
  },
  {
    slug: "termometros-y-humidificadores-para-bebe",
    img: "/assets/img/guias/termometros-y-humidificadores-para-bebe.jpg",
    title: "Cómo elegir un termómetro o un humidificador para bebé",
    dek: "Precisión sin contacto, alarma de fiebre y humedad segura en la habitación: dos aparatos distintos, criterios igual de concretos.",
    updated: "2026-09-11",
    intro: [
      "Termómetros y humidificadores resuelven problemas distintos —medir la fiebre y cuidar el ambiente de la habitación— pero comparten algo: ambos se compran deprisa, casi siempre en un momento de preocupación, y conviene saber de antemano qué mirar para no acertar a medias.",
      "Esta guía junta ambos productos porque suelen comprarse en la misma etapa y con la misma urgencia; los criterios de cada uno se explican por separado."
    ],
    sections: [
      {
        heading: "Termómetro: infrarrojo sin contacto o de oído",
        body: [
          "Los termómetros infrarrojos de frente (sin contacto) son los más cómodos para no despertar a un bebé dormido: basta acercarlos a unos centímetros de la piel para obtener una lectura en 1-2 segundos, aunque su precisión puede variar algo con la temperatura ambiente o si el bebé ha estado tapado justo antes. Los termómetros de oído son algo más precisos en general, pero requieren una colocación correcta en el canal auditivo que no siempre es sencilla con un bebé que se mueve.",
          "El termómetro rectal, aunque menos usado por comodidad, sigue considerándose el más preciso en los primeros meses según muchas guías pediátricas; conviene seguir la recomendación de tu pediatra sobre qué método usar según la edad del bebé."
        ],
      },
      {
        heading: "Alarma de fiebre y memoria de mediciones",
        body: [
          "Una alarma visual o sonora que avisa cuando la temperatura supera un umbral (normalmente configurable) ayuda a valorar rápido si hay fiebre sin tener que recordar el rango normal de memoria, especialmente de noche y medio dormido. La memoria de últimas mediciones permite ver si la temperatura sube o baja con el tiempo sin tener que anotarlo a mano."
        ],
      },
      {
        heading: "Humidificador: capacidad, autonomía y limpieza",
        body: [
          "La capacidad del depósito (en litros) determina cuántas horas puede funcionar sin rellenar: para una habitación de bebé durante toda la noche, conviene un depósito que aguante al menos 8-10 horas sin tener que levantarse a rellenarlo. El vapor frío (ultrasónico) es preferible al vapor caliente en habitaciones de bebé por seguridad, ya que elimina el riesgo de quemadura si el niño llega a tocar el aparato.",
          "La limpieza regular del depósito es tan importante como elegir un buen modelo: el agua estancada en un humidificador sucio puede acumular moho o bacterias que después se dispersan por el aire de la habitación, así que revisa qué tan fácil es desmontar y limpiar cada modelo antes de comprarlo."
        ],
      },
      {
        heading: "Nivel de ruido y luz nocturna",
        body: [
          "Un humidificador ruidoso puede despertar al bebé o impedir que se duerma, así que los modelos con menos de 30 decibelios son preferibles para dormitorios. Muchos incluyen luz nocturna regulable, una función cómoda de aprovechar sin tener que comprar una lámpara aparte, aunque conviene que sea opcional y se pueda apagar del todo si prefieres oscuridad total."
        ],
      },
    ],
    checklist: [
      "Infrarrojo sin contacto para comodidad; de oído si buscas algo más de precisión",
      "Alarma de fiebre configurable y memoria de mediciones anteriores",
      "Depósito del humidificador con autonomía de al menos 8-10 horas",
      "Vapor frío (ultrasónico) en lugar de vapor caliente por seguridad",
      "Menos de 30 dB de ruido y fácil de desmontar para limpiar"
    ],
    faq: [
      { q: "¿Qué termómetro es más preciso para un recién nacido?", a: "Muchas guías pediátricas consideran el termómetro rectal el más preciso en los primeros meses, aunque es el menos cómodo de usar; los infrarrojos sin contacto y los de oído son más prácticos para el día a día, y conviene seguir la pauta que indique tu pediatra según la edad del bebé." },
      { q: "¿Puede un humidificador ser perjudicial si se usa mal?", a: "Sí: un exceso de humedad en la habitación (por encima del 60% aproximadamente) puede favorecer la aparición de moho y ácaros, y un depósito sucio puede dispersar bacterias por el aire; conviene medir la humedad con un higrómetro y limpiar el depósito con regularidad." },
    ],
    products: [
      {
        asin: "B0F7HSPJL7",
        title: "THERMOBIO Termómetro Infrarrojo Frontal Sin Contacto, Grado Médico, Resultado en 1 Segundo",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/71mTFdgH0wL._AC_UL320_.jpg",
        price: "29,99",
        rating: "4,4★",
      },
      {
        asin: "B0GCH6Z2X2",
        title: "Berrcom Termómetro Digital Frente Infrarrojo sin Contacto, Pantalla Retroiluminada 3 Colores",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/61AoJeDaZqL._AC_UL320_.jpg",
        price: "17,99",
        rating: "4,4★",
      },
      {
        asin: "B0865RL4PH",
        title: "Femometer Termómetro Digital Infrarrojo para Bebés, Niños y Adultos, Alarma de Fiebre",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/71CTEqu5S3L._AC_UL320_.jpg",
        price: "16,99",
        rating: "4,0★",
      },
      {
        asin: "B0BXX7Z3VM",
        title: "Yuwell Termómetro de Oído para Niños y Adultos, Infrarrojo, Alarma de Fiebre",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/717ijC0WdnL._AC_UL320_.jpg",
        price: "22,99",
        rating: "4,2★",
      },
      {
        asin: "B0GJD9K1DM",
        title: "Viproud Termómetro Digital Infrarrojo sin Contacto para Bebés, Niños y Adultos, Alarma de Fiebre",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/61e4C3zmmKL._AC_UL320_.jpg",
        price: "19,99",
        rating: "4,5★",
      },
      {
        asin: "B00M35Y326",
        title: "Braun Age Precision Termómetro Digital, para usar en múltiples sitios",
        note: "Entrada de gama, buena relación precio-funciones.",
        img: "https://m.media-amazon.com/images/I/61UIKDcIcUL._AC_UL320_.jpg",
        price: "13,99",
        rating: "4,3★",
      },
      {
        asin: "B09JT679BX",
        title: "Homvana Top-Fill Humidificador Bebés Cool Mist, 3.6L, Gris",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/61k8GrdmN7L._AC_UL320_.jpg",
        price: "39,99",
        rating: "4,6★",
      },
      {
        asin: "B0CCVX6FSD",
        title: "Dreo 4L Humidificador Bebés Inteligente con Alexa, Vapor Frío, Difusor y Luz Nocturna, 32h Autonomía",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/61geNjAk7aL._AC_UL320_.jpg",
        price: "57,17",
        rating: "4,5★",
      },
      {
        asin: "B0G2LPXFKF",
        title: "Levoit Humidificador Classic 160, 23dB, Sin BPA, Blanco",
        note: "Punto medio de la categoría, buen equilibrio de prestaciones.",
        img: "https://m.media-amazon.com/images/I/615RE170RqL._AC_UL320_.jpg",
        price: "31,99",
        rating: "4,3★",
      },
      {
        asin: "B0FXGK76DF",
        title: "Dreo Humidificador Bebés Silencioso 3L con Sensor de Humedad, Blanco Hielo",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/61BFRLYHu2L._AC_UL320_.jpg",
        price: "45,99",
        rating: "4,5★",
      },
      {
        asin: "B0GXVQVRKC",
        title: "Levoit Humidificador NeoClassic 450S, 4,2L hasta 42h, Inteligente, Blanco",
        note: "Gama alta: más funciones y materiales por encima del resto de la selección.",
        img: "https://m.media-amazon.com/images/I/61p16xAScRL._AC_UL320_.jpg",
        price: "53,99",
        rating: "4,7★",
      },
    ],
  },
];

const ARTICLES = [
  {
    slug: "que-necesitas-realmente-para-la-llegada-del-bebe",
    img: "/assets/img/blog/que-necesitas-realmente-para-la-llegada-del-bebe.jpg",
    title: "Qué necesitas realmente para la llegada del bebé (y qué puede esperar)",
    dek: "La lista mínima razonable frente a la lista interminable que venden algunas tiendas antes de que nazca el bebé.",
    updated: "2026-09-17",
    body: [
      "Es fácil dejarse llevar por listas de \"imprescindibles\" que suman decenas de artículos antes de que el bebé haya nacido siquiera. En realidad, el número de cosas que se necesitan desde el primer día es mucho más corto que el número de cosas que terminan comprándose con el tiempo.",
      "Para el primer mes, lo razonable es tener: un lugar seguro donde duerma (cuna, moisés o minicuna), una <a href='/guias/sillas-de-coche-para-bebe.html'>silla de coche</a> si vas a moverte en coche desde el hospital, ropa de recién nacido en cantidad moderada (se ensucia y se cambia de talla rápido), pañales del tamaño más pequeño y artículos básicos de higiene. El resto —trona, cochecito de paseo grande, hamaca, monitor con cámara— puede esperar semanas o incluso meses sin ningún problema real.",
      "Un error habitual es comprar todo el ajuar de una talla, sobre todo en ropa: los bebés crecen deprisa las primeras semanas y buena parte de la ropa de recién nacido apenas llega a usarse un par de veces. Comprar poco al principio y completar sobre la marcha, según lo que realmente se gasta o se necesita, suele salir más barato y generar menos desperdicio.",
      "Las guías de este sitio (sillas de coche, carritos, tronas, cunas de viaje, <a href='/guias/portabebes-y-mochilas-ergonomicas.html'>portabebés</a>, monitores, esterilizadores, básculas, hamacas y termómetros/humidificadores) desarrollan cada categoría por separado con más detalle de criterios de compra, para cuando llegue el momento de decidir cada una con calma."
    ],
  },
  {
    slug: "errores-comunes-al-elegir-silla-de-coche",
    img: "/assets/img/blog/errores-comunes-al-elegir-silla-de-coche.jpg",
    title: "5 errores comunes al elegir silla de coche para el bebé",
    dek: "Fallos fáciles de evitar que reducen la seguridad real de la silla, aunque el modelo sea bueno.",
    updated: "2026-09-15",
    body: [
      "Comprar una <a href='/guias/sillas-de-coche-para-bebe.html'>silla de coche</a> cara o bien valorada no garantiza una instalación y un uso correctos si se cometen algunos de estos errores habituales, todos evitables sin gastar más dinero.",
      "1. Pasar de contramarcha a marcha adelante demasiado pronto. El mínimo legal (15 meses en sillas i-Size) no es la recomendación real de los organismos de seguridad infantil, que aconsejan mantener al niño a contramarcha el mayor tiempo posible, idealmente hasta los 4 años si la silla lo permite.",
      "2. No comprobar la compatibilidad real con el coche antes de comprar. Una silla anunciada como \"universal\" puede no encajar bien en todos los modelos de vehículo; revisar la ficha de compatibilidad del fabricante antes de comprar evita sorpresas al intentar instalarla.",
      "3. Dejar holgura en el arnés o en el cinturón de instalación. Un arnés demasiado suelto reduce mucho la protección en caso de choque; la prueba del \"pellizco\" (no poder pellizcar tela sobrante en la correa a la altura del hombro) es una forma sencilla de comprobar el ajuste correcto.",
      "4. Usar una silla que ha sufrido un accidente, aunque no tenga daños visibles. Un golpe puede dañar la estructura interna de la silla sin dejar marca externa, por lo que cualquier silla implicada en un accidente de cierta consideración debería sustituirse, aunque parezca intacta.",
      "5. No revisar la fecha de caducidad o vida útil de la silla. La mayoría de fabricantes marca una vida útil de entre 6 y 10 años desde la fecha de fabricación (no de compra): pasado ese tiempo, los materiales pueden degradarse aunque la silla se vea en buen estado."
    ],
  },
  {
    slug: "como-preparar-la-habitacion-del-bebe",
    img: "/assets/img/blog/como-preparar-la-habitacion-del-bebe.jpg",
    title: "Cómo preparar la habitación del bebé sin gastar de más",
    dek: "El orden lógico para ir montando la habitación sin comprarlo todo el primer mes.",
    updated: "2026-09-13",
    body: [
      "Montar la habitación del bebé desde cero da la tentación de comprarlo todo de golpe, pero casi siempre compensa más empezar por lo que cubre la necesidad más inmediata y ampliar después según lo que realmente se use.",
      "Un orden razonable para la mayoría de familias: primero, un lugar seguro donde duerma (cuna, moisés o minicuna) con un colchón firme y adecuado a las medidas exactas de esa cuna, sin huecos laterales. Segundo, control de temperatura y humedad de la habitación (un termómetro ambiental sencillo y, si el clima de la zona lo justifica, un humidificador) para mantener un entorno cómodo para dormir. Tercero, si el presupuesto lo permite, un <a href='/guias/monitores-y-vigilabebes.html'>vigilabebés</a> para poder estar en otra parte de la casa sin preocupación. Por último, mobiliario de almacenaje (cómoda, cesto de ropa) que puede completarse con calma, incluso con muebles que ya tengas en casa reutilizados.",
      "Un error habitual es sobrecargar la cuna con peluches, mantas sueltas o protectores acolchados de barrotes, elementos que las guías de prevención de muerte súbita del lactante recomiendan evitar en <a href='/guias/cunas-de-viaje-y-minicunas.html'>la cuna</a> durante el sueño: la superficie debe quedar despejada, con el colchón firme como única base.",
      "La iluminación también importa: una luz regulable de intensidad baja para las tomas nocturnas evita encender la luz principal y despertar del todo al bebé (y a quien le atiende) de madrugada."
    ],
  },
  {
    slug: "porteo-ergonomico-preguntas-frecuentes",
    img: "/assets/img/blog/porteo-ergonomico-preguntas-frecuentes.jpg",
    title: "Porteo ergonómico: las preguntas que más se repiten antes de comprar el primer portabebés",
    dek: "Aclaraciones rápidas sobre posición, edad y seguridad antes de decidirte por un modelo.",
    updated: "2026-09-10",
    body: [
      "El porteo ergonómico genera bastantes dudas la primera vez, sobre todo porque se mezcla información de fabricantes con recomendaciones de asociaciones de porteo que no siempre coinciden del todo.",
      "¿Se puede portear desde el primer día? Sí, siempre que el <a href='/guias/portabebes-y-mochilas-ergonomicas.html'>portabebés</a> tenga un modo específico para recién nacidos (a veces con un reductor o cojín adicional) y se respete el peso mínimo indicado por el fabricante, normalmente entre 3 y 3,5 kg. Fuera de ese modo específico, no se recomienda adaptar un portabebés pensado para bebés mayores.",
      "¿Cuánto tiempo se puede portear de una sola vez? No hay un límite fijo, pero conviene hacer pausas si el bebé o quien porta muestran signos de incomodidad, y revisar cada rato que la posición de piernas y espalda sigue siendo correcta, ya que un bebé que se mueve puede desplazarse de la posición inicial.",
      "¿Es igual de válido el porteo con fular que con mochila estructurada? Ambos pueden ser ergonómicos si respetan la posición en \"M\" de las piernas y la curva natural de la espalda; el fular ofrece más versatilidad de posiciones pero tiene una curva de aprendizaje mayor, mientras que la <a href='/guias/portabebes-y-mochilas-ergonomicas.html'>mochila estructurada</a> con hebillas es más rápida de ajustar para quien empieza.",
      "¿Hasta qué edad tiene sentido seguir porteando? Depende sobre todo de la comodidad de quien porta y del propio niño: muchos portabebés cubren hasta los 3-4 años o 15-20 kg, pero no hay una edad \"límite\" estricta más allá de lo que resulte cómodo y seguro para ambos."
    ],
  },
  {
    slug: "cuanto-gastar-en-puericultura-el-primer-ano",
    img: "/assets/img/blog/cuanto-gastar-en-puericultura-el-primer-ano.jpg",
    title: "¿Cuánto merece la pena gastar en puericultura el primer año?",
    dek: "Dónde está el salto de valor real entre lo básico, lo intermedio y lo premium en los artículos de bebé.",
    updated: "2026-09-08",
    body: [
      "No existe una cifra única correcta para todas las familias, pero sí hay tramos de precio donde el salto de utilidad real es claro y otros donde ya se paga sobre todo por marca o por diseño.",
      "El primer salto importante, y el más rentable, está entre no invertir nada en seguridad y cubrir lo básico: una <a href='/guias/sillas-de-coche-para-bebe.html'>silla de coche</a> homologada bien instalada y una cuna con colchón firme adecuado. Ese paso no es negociable y no depende del presupuesto: existen opciones seguras y homologadas en casi todos los rangos de precio, así que el gasto mínimo en estas dos categorías rara vez es la parte más cara del primer año.",
      "El segundo salto, ya opcional, está en la comodidad diaria: un carrito más ligero y fácil de plegar, una <a href='/guias/tronas-para-bebe.html'>trona evolutiva</a> que dure varios años en lugar de una clásica que se sustituye pronto, o un portabebés ergonómico bien ajustado. Este tramo compensa sobre todo si se va a usar el producto muy a menudo (el carrito o la trona, por ejemplo, se usan literalmente todos los días).",
      "A partir de cierto nivel de gasto, lo que se añade suele ser diseño, marca o funciones muy específicas (apps avanzadas, materiales premium, colecciones limitadas) más que una mejora real en seguridad o funcionalidad: los criterios que de verdad importan en cada categoría —los que desarrollamos en cada guía de este sitio— ya estaban cubiertos en el tramo anterior.",
      "La pregunta que más ayuda a decidir no es \"¿cuánto cuesta la mejor marca?\" sino \"¿qué voy a usar de verdad todos los días?\": priorizar el gasto ahí (<a href='/guias/cochecitos-y-carritos-de-bebe.html'>carrito</a>, trona, portabebés si porteas a menudo) suele dar mejor relación uso-precio que gastar más en productos de uso puntual."
    ],
  },
  {
    slug: "silla-de-coche-i-size-que-significa-realmente",
    title: "Silla de coche i-Size: qué significa realmente y por qué importa",
    dek: "El estándar i-Size explicado sin tecnicismos: en qué cambia frente a la normativa anterior y qué debes mirar antes de comprar.",
    updated: "2026-09-19",
    body: [
      "Cuando se busca una <a href='/guias/sillas-de-coche-para-bebe.html'>silla de coche</a> es habitual encontrarse la etiqueta \"i-Size\" en casi todos los modelos recientes, pero no siempre queda claro qué significa realmente ni por qué se ha impuesto sobre el sistema anterior de \"grupos\" de peso.",
      "La diferencia principal es el criterio de clasificación: mientras que el sistema clásico agrupaba las sillas por peso del niño (grupo 0, 0+, 1, 2, 3), i-Size clasifica por altura, que se considera un indicador más fiable del desarrollo físico del niño en cada momento, sobre todo en los primeros años. Por eso una silla i-Size suele indicar un rango como \"40-105 cm\" en lugar de un peso concreto.",
      "Otra diferencia relevante es que las sillas i-Size solo se instalan con anclaje Isofix (más el punto de apoyo correspondiente, ya sea pata de carga o Top Tether), lo que reduce el margen de error frente a instalar con el cinturón de seguridad del coche. Esto no significa que las sillas homologadas con cinturón dejen de ser seguras, sino que i-Size estandariza un método de instalación más sencillo de hacer bien a la primera.",
      "Para quien compra hoy, lo práctico es esto: si el coche tiene anclajes Isofix en la plaza donde va a ir la silla, una i-Size suele ser la opción más cómoda de instalar correctamente sin depender tanto de la pericia de quien la coloca. Conviene comprobar siempre, de todas formas, la ficha de compatibilidad del fabricante con el modelo concreto de coche antes de comprar, porque no todas las combinaciones encajan igual de bien."
    ],
  },
  {
    slug: "cochecito-de-paseo-ciudad-o-todoterreno",
    title: "Cochecito de paseo: ciudad o todoterreno, cómo decidir sin arrepentirse",
    dek: "Las preguntas que de verdad predicen si vas a estar contento con el carrito dentro de seis meses.",
    updated: "2026-09-19",
    body: [
      "Antes de fijarse en el diseño de un <a href='/guias/cochecitos-y-carritos-de-bebe.html'>cochecito</a>, conviene hacerse una pregunta muy concreta: ¿dónde vas a usarlo la mayoría de los días? La respuesta cambia bastante qué tipo de carrito conviene más, y es fácil acabar con un modelo pensado para otro terreno distinto del que realmente se pisa a diario.",
      "Si el uso principal va a ser en ciudad —aceras, transporte público, ascensores, entrar y salir de tiendas—, lo que más se agradece es un carrito ligero, con giro de ruedas delanteras a 360° para maniobrar en espacios estrechos, y un plegado rápido que no ocupe demasiado en el maletero de un coche urbano o en la entrada de casa. El peso del chasis pesa (nunca mejor dicho) mucho más en el día a día que la amortiguación extra de un modelo todoterreno.",
      "Si en cambio se va a usar sobre todo en caminos de tierra, parques sin asfaltar o superficies irregulares, ruedas más grandes con buena suspensión marcan una diferencia real en la comodidad del bebé y en el esfuerzo de quien empuja: un carrito ligero de ciudad se nota mucho más incómodo ahí, aunque sea más manejable en un portal estrecho.",
      "Pocos carritos son igual de buenos en ambos terrenos a la vez, así que merece la pena ser sincero sobre el uso real antes de dejarse llevar por las fotos del producto: un carrito que se adapta bien a tu rutina diaria se acaba usando más y mejor que uno objetivamente más completo sobre el papel."
    ],
  },
  {
    slug: "cuando-y-como-usar-un-monitor-de-video-para-bebes",
    title: "Cuándo y cómo usar un monitor de vídeo para bebés con tranquilidad",
    dek: "Ni sustituye la supervisión ni es imprescindible desde el primer día: para qué sirve de verdad un vigilabebés con cámara.",
    updated: "2026-09-19",
    body: [
      "Muchas familias se plantean comprar un <a href='/guias/monitores-y-vigilabebes.html'>vigilabebés</a> con cámara antes incluso de que nazca el bebé, y no siempre está claro en qué momento empieza a ser útil de verdad ni qué expectativas es razonable tener de él.",
      "Un monitor de vídeo no sustituye la supervisión directa: es una herramienta para poder estar en otra habitación (la cocina, el salón, otra planta de la casa) con la tranquilidad de oír o ver si el bebé se despierta o llora, no un sistema de vigilancia que garantice que nunca puede pasar nada. Conviene tener esa expectativa clara desde el principio para no generar una falsa sensación de control total.",
      "En cuanto al momento de empezar a usarlo, no hay una edad fija: algunas familias lo usan desde la primera noche en casa, sobre todo si el bebé duerme en una habitación distinta desde el principio; otras prefieren tener al bebé cerca las primeras semanas y empiezan a usar el monitor cuando pasa a su propia habitación, algo que suele ocurrir en algún momento entre los primeros meses y el primer año, según cada familia.",
      "Para un uso tranquilo conviene revisar dos cosas antes de instalarlo: colocar la cámara fuera del alcance del bebé y de la cuna (nunca colgando cerca con cables sueltos), y decidir con conocimiento si prefieres un modelo sin WiFi, que no depende de tu red ni de una cuenta en la nube, frente a uno con app que permite ver la imagen desde el móvil en cualquier lugar de la casa o fuera de ella."
    ],
  },
  {
    slug: "portabebes-postura-correcta-y-edad-recomendada",
    title: "Portabebés ergonómico: postura correcta y edad recomendada",
    dek: "Cómo comprobar en dos minutos si el porteo se está haciendo bien, sin necesidad de conocimientos previos.",
    updated: "2026-09-19",
    body: [
      "Uno de los mayores frenos para empezar a portear es la duda sobre si se está haciendo \"bien\": la buena noticia es que los criterios de un <a href='/guias/portabebes-y-mochilas-ergonomicas.html'>porteo ergonómico</a> correcto son pocos y se pueden comprobar a simple vista cada vez que se coloca al bebé.",
      "Lo primero que hay que mirar son las piernas del bebé: deben quedar en forma de \"M\", con las rodillas más altas que las caderas y separadas hacia los lados, apoyadas desde el muslo hasta detrás de la rodilla, nunca colgando rectas sujetas solo por la entrepierna. Esta posición reparte mejor el peso en la articulación de la cadera, que en los primeros meses todavía está en desarrollo.",
      "Lo segundo es la espalda: debe poder curvarse de forma natural en forma de \"C\", ni completamente recta ni forzada hacia atrás. Un portabebés demasiado rígido en la zona del tronco puede impedir esa curva natural aunque las piernas estén bien colocadas, así que conviene revisar ambos puntos, no solo uno.",
      "Sobre la edad recomendada, la mayoría de los portabebés ergonómicos actuales incluyen un modo específico para recién nacidos (a veces con un reductor o cojín adicional) a partir de un peso mínimo indicado por el fabricante, habitualmente entre 3 y 3,5 kg, y se pueden seguir usando hasta los 3-4 años o el peso máximo que marque cada modelo. Fuera de ese modo específico para recién nacidos, no conviene adaptar un portabebés pensado solo para bebés mayores, aunque parezca que \"se puede ajustar\"."
    ],
  },
  {
    slug: "para-que-sirve-realmente-una-bascula-de-bebe",
    title: "Báscula de bebé: para qué sirve realmente en casa",
    dek: "No es solo para controlar el peso: los usos prácticos que hacen que algunas familias la usen a diario y otras casi nunca.",
    updated: "2026-09-19",
    body: [
      "Una <a href='/guias/basculas-de-bebe.html'>báscula de bebé</a> no es un producto de primera necesidad en el mismo sentido que una cuna o una silla de coche, y por eso genera dudas sobre si de verdad compensa comprarla o si basta con pesar al bebé en las revisiones periódicas.",
      "El uso más habitual, sobre todo en los primeros meses, es el seguimiento de la ganancia de peso entre visitas, algo que puede dar tranquilidad en periodos de más incertidumbre (por ejemplo, al iniciar o ajustar la lactancia) sin tener que esperar a la siguiente revisión para comprobar una tendencia. Dicho esto, una báscula casera no sustituye el criterio profesional: sirve para observar tendencias generales en casa, no para interpretar cifras concretas ni tomar decisiones sobre alimentación por cuenta propia.",
      "Otro uso menos conocido pero práctico es pesar el equipaje del bebé o comprobar el peso máximo admitido de otros productos (por ejemplo, si una silla de paseo o un portabebés se acerca a su límite), aprovechando que muchas básculas de bebé también funcionan como báscula de precisión para objetos pequeños.",
      "Si se opta por comprar una, dos características marcan la diferencia en el uso diario: una plataforma lo bastante grande y con bordes que eviten que el bebé se mueva o resbale, y una función de \"tara\" o bloqueo de lectura para poder pesar a un bebé que no para quieto sin tener que hacer varias lecturas seguidas a mano."
    ],
  },
  {
    slug: "esterilizador-de-biberones-es-necesario",
    title: "Esterilizador de biberones: ¿es realmente necesario?",
    dek: "Qué aporta frente a hervir los biberones a mano y en qué casos compensa más comprarlo.",
    updated: "2026-09-19",
    body: [
      "Antes de la lactancia con biberón o del uso de chupetes, muchas familias se preguntan si un esterilizador es un gasto imprescindible o si basta con los métodos tradicionales de toda la vida, como hervir el material en una olla.",
      "Hervir biberones y tetinas en agua durante varios minutos sigue siendo un método de esterilización válido y no requiere comprar nada adicional, pero tiene inconvenientes prácticos: hay que estar pendiente del tiempo, controlar que no se dañe el plástico o la silicona por el calor prolongado, y repetir el proceso cada vez que se necesita material limpio, lo que se nota especialmente durante la noche o con varias tomas seguidas.",
      "Un esterilizador eléctrico o de microondas automatiza ese proceso: coloca el material, programa un ciclo (normalmente entre 5 y 10 minutos) y avisa cuando termina, lo que ahorra tiempo y reduce el margen de error respecto a calcular el tiempo de hervido a ojo. La diferencia se nota más cuanto más biberones se usan al día, por ejemplo con lactancia mixta o exclusivamente de biberón.",
      "En la práctica, si el bebé toma pecho de forma exclusiva y usa pocos accesorios, puede que el esterilizador se use con poca frecuencia y compense menos; si hay varios biberones, tetinas, chupetes o accesorios de extracción que limpiar cada día, el ahorro de tiempo suele justificar bastante el gasto inicial."
    ],
  },
  {
    slug: "hamaca-o-balancin-cuando-aporta-y-cuando-no",
    title: "Hamaca o balancín para bebé: cuándo aporta y cuándo no",
    dek: "Un producto muy útil en ciertas rutinas y prescindible en otras: cómo saber en qué grupo estás antes de comprarlo.",
    updated: "2026-09-19",
    body: [
      "La <a href='/guias/hamacas-y-balancines-para-bebe.html'>hamaca o balancín</a> es uno de esos productos que algunas familias usan varias veces al día y otras apenas tocan tras las primeras semanas, y la diferencia suele estar más en la rutina de cada casa que en la calidad del producto en sí.",
      "Aporta más valor en situaciones muy concretas: tener un lugar seguro y reclinado donde dejar al bebé unos minutos mientras se cocina, se ducha o se atiende a un hermano mayor; o como apoyo en los primeros meses cuando el bebé aún no se sostiene sentado y necesita pasar tiempo despierto fuera de los brazos o de la cuna. El movimiento suave de balanceo (manual o automático, según el modelo) ayuda a calmar a algunos bebés, aunque no funciona igual con todos.",
      "En cambio, si el bebé pasa la mayor parte del tiempo despierto en brazos, en el suelo con supervisión o siendo porteado, es posible que la hamaca se use mucho menos de lo previsto y acabe siendo un mueble más que ocupa espacio. Tampoco es un lugar pensado para dormir siestas largas de forma habitual: los organismos de seguridad infantil recomiendan una superficie firme y plana para el sueño, no una superficie reclinada e inclinada como la de una hamaca.",
      "Si hay dudas sobre si se va a usar de verdad, valorar el espacio disponible en casa y si ya existen alternativas (una manta en el suelo, los brazos de otro adulto, un moisés cerca) ayuda a decidir mejor que fijarse solo en las funciones que ofrece cada modelo."
    ],
  },
  {
    slug: "temperatura-y-humedad-en-la-habitacion-del-bebe",
    title: "Temperatura y humedad en la habitación del bebé: cómo controlarlas sin obsesionarse",
    dek: "Qué papel juegan un termómetro ambiental y un humidificador, y cuándo merece la pena tenerlos.",
    updated: "2026-09-19",
    body: [
      "El ambiente de la habitación influye en la calidad del sueño del bebé, pero es fácil pasarse tanto por exceso de control como por falta de él. Un <a href='/guias/termometros-y-humidificadores-para-bebe.html'>termómetro ambiental sencillo</a> ayuda a tener una referencia objetiva sin depender solo de la sensación térmica de los adultos, que no siempre coincide con la que necesita un bebé.",
      "No hace falta perseguir una cifra exacta de temperatura: lo habitual es mantener la habitación en un rango templado y constante, evitando tanto el frío excesivo como el sobrecalentamiento, que es un factor que distintos organismos de prevención de muerte súbita del lactante recomiendan vigilar, sobre todo evitando arropar en exceso o subir demasiado la calefacción por la noche. El termómetro sirve sobre todo para detectar cambios bruscos, no para ajustar la temperatura al grado exacto.",
      "El humidificador tiene más sentido en climas o épocas del año con ambientes muy secos (calefacción central en invierno, por ejemplo), donde puede ayudar a aliviar mucosidad o sequedad de las vías respiratorias del bebé. En ambientes ya húmedos de por sí, un humidificador adicional puede resultar contraproducente y favorecer la aparición de moho si se usa en exceso, así que conviene observar la humedad real de la habitación antes de dejarlo encendido de forma continua.",
      "Un detalle práctico que se pasa por alto: cualquier humidificador necesita limpieza regular del depósito de agua para evitar acumulación de bacterias o cal, algo que conviene revisar en la ficha del fabricante antes de comprar, sobre todo si se va a usar todas las noches durante meses seguidos."
    ],
  },
  {
    slug: "cuna-de-viaje-o-cuna-fija-como-decidir",
    title: "Cuna de viaje o cuna fija: cómo decidir según tu situación",
    dek: "No es solo una cuestión de presupuesto: el uso real que le vas a dar cambia bastante cuál conviene más.",
    updated: "2026-09-19",
    body: [
      "Una duda habitual antes de montar la habitación del bebé es si conviene comprar directamente una <a href='/guias/cunas-de-viaje-y-minicunas.html'>cuna de viaje</a> que sirva para todo, o invertir en una cuna fija más tradicional pensada para quedarse en la habitación varios años.",
      "La cuna de viaje tiene sentido claro si se prevén desplazamientos frecuentes con el bebé (visitas a familiares, vacaciones, fines de semana fuera) o si el espacio en casa es reducido y conviene poder plegarla y guardarla cuando no se usa. Su punto débil suele ser el colchón, más fino de serie que el de una cuna convencional, algo que se nota más si se usa como cuna principal muchas noches seguidas en lugar de solo de forma puntual.",
      "La cuna fija, en cambio, compensa más si no hay previsión de viajar mucho con el bebé y se prioriza la comodidad a largo plazo: suele admitir un colchón más grueso y firme, y algunos modelos incluyen barrotes regulables en altura o la opción de convertirse en cama infantil más adelante, alargando su vida útil varios años.",
      "Una tercera opción intermedia, cada vez más habitual, es comprar una cuna de viaje robusta pensada también para uso diario (con colchón de repuesto más grueso) y reservar el presupuesto de la cuna fija para más adelante, si realmente se necesita. No hay una respuesta única válida para todas las familias: depende sobre todo de cuántas veces al año se prevé viajar con el bebé y de cuánto espacio hay disponible en casa."
    ],
  },
  {
    slug: "trona-cuando-empezar-y-como-pasar-a-la-mesa-familiar",
    title: "Trona de bebé: cuándo empezar a usarla y cómo hacer la transición a la mesa familiar",
    dek: "Las señales que indican que el bebé está listo, y cómo hacer más simple el paso de la trona a comer con el resto de la familia.",
    updated: "2026-09-19",
    body: [
      "El momento de empezar a usar una <a href='/guias/tronas-para-bebe.html'>trona</a> suele coincidir con el inicio de la alimentación complementaria, en torno a los 6 meses según la mayoría de fabricantes, pero la señal más fiable no es tanto la edad exacta como que el bebé se sostenga sentado con la espalda erguida, con apoyo si hace falta.",
      "Antes de ese momento, algunas familias usan una hamaca reclinable o el propio regazo para las primeras tomas, y pasan a la trona cuando el bebé gana suficiente control de tronco como para sentarse cómodamente con el arnés puesto durante toda la comida sin resbalar hacia los lados.",
      "La transición de la trona a comer en la mesa familiar suele hacerse de forma gradual, no de golpe: muchas tronas evolutivas permiten primero elevar la altura del asiento a la de la mesa manteniendo el arnés y la bandeja, y más adelante retirar la bandeja para que el niño coma directamente en la mesa mientras sigue usando la silla como asiento elevado. Esta transición progresiva suele generar menos resistencia que cambiar todo de golpe.",
      "Durante todo este proceso, la seguridad del arnés sigue siendo importante mientras el niño esté aprendiendo a mantenerse sentado por su cuenta: conviene seguir usándolo hasta que se tenga la certeza de que no intentará levantarse o inclinarse de forma brusca durante la comida, algo que varía bastante de un niño a otro."
    ],
  },
];

// Un producto destacado por categoría, para el bloque "Lo más recomendado"
// que aparece en todas las páginas (ver featuredProductsSection en lib.js).
// Se reutilizan los datos ya cargados en GUIDES para no duplicar imagen/precio.
function pickFeatured(guideSlug, asin) {
  const g = GUIDES.find((x) => x.slug === guideSlug);
  const p = g.products.find((x) => x.asin === asin);
  return { ...p, category: g.slug, categoryTitle: g.title };
}

const FEATURED = [
  pickFeatured("sillas-de-coche-para-bebe", "B0H1WXCZD3"),
  pickFeatured("cochecitos-y-carritos-de-bebe", "B0D6GHTF4W"),
  pickFeatured("tronas-para-bebe", "B0H5K3WL2F"),
  pickFeatured("monitores-y-vigilabebes", "B0DG2QS4GG"),
  pickFeatured("cunas-de-viaje-y-minicunas", "B0CM41TS29"),
  pickFeatured("portabebes-y-mochilas-ergonomicas", "B0C2Z2XZQ1"),
  pickFeatured("esterilizadores-y-calientabiberones", "B09XFCVGCQ"),
  pickFeatured("basculas-de-bebe", "B0BQ1L5798"),
  pickFeatured("hamacas-y-balancines-para-bebe", "B08PDPK1JS"),
  pickFeatured("termometros-y-humidificadores-para-bebe", "B09JT679BX"),
];

module.exports = { GUIDES, ARTICLES, FEATURED };
