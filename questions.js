// ============================================================
// BASE DE QUESTIONS 1 — CAP AEPE
// Biologie, Nutrition, SMS, Parasitoses, Soins, Accueil
// ============================================================
const QUESTIONS_1 = [

  // === 🧬 Biologie – Corps humain ===
  {cat:'🧬 Biologie – Corps humain', src:'Organisation du corps humain',
   q:'De quoi est composée une cellule humaine ?',
   opts:[
     'Membrane, cytoplasme, organites et noyau',
     'Membrane, noyau, os et tendons',
     'Épiderme, derme, organites et cytoplasme',
     'Cytoplasme, dendrites, axones et noyau'
   ], ans:0,
   exp:'La cellule humaine comprend la membrane cellulaire (barrière externe), le cytoplasme, les organites et le noyau (centre de commande contenant l\'ADN).'},

  {cat:'🧬 Biologie – Corps humain', src:'Organisation du corps humain',
   q:'Combien de chromosomes contient une cellule humaine normale (non sexuelle) ?',
   opts:[
     '23 chromosomes',
     '46 chromosomes',
     '48 chromosomes',
     '92 chromosomes'
   ], ans:1,
   exp:'Toutes les cellules somatiques contiennent 46 chromosomes (23 paires). Les gamètes n\'en ont que 23 ; la fécondation reconstitue les 46.'},

  {cat:'🧬 Biologie – Corps humain', src:'Organisation du corps humain',
   q:'Quels sont les 4 types de tissus du corps humain ?',
   opts:[
     'Épithélial, conjonctif, nerveux et musculaire',
     'Osseux, cartilagineux, graisseux et épithélial',
     'Sanguin, lymphatique, nerveux et musculaire',
     'Hépatique, rénal, conjonctif et épithélial'
   ], ans:0,
   exp:'Les 4 types de tissus : épithélial (revêtement), conjonctif (soutien/nutrition), nerveux (communication) et musculaire (contraction).'},

  {cat:'🧬 Biologie – Corps humain', src:'Organisation du corps humain',
   q:'Quel système transporte l\'oxygène et les nutriments vers les cellules ?',
   opts:[
     'Le système lymphatique',
     'Le système circulatoire',
     'Le système digestif',
     'Le système nerveux autonome'
   ], ans:1,
   exp:'Le système circulatoire (cœur, artères, veines, capillaires) transporte O2 et nutriments vers les cellules et évacue les déchets.'},

  {cat:'🧬 Biologie – Corps humain', src:'Organisation du corps humain',
   q:'Quels sont les deux types de division cellulaire ?',
   opts:[
     'La mitose et la méiose',
     'La mitose et la cytolyse',
     'La méiose et l\'apoptose',
     'La fission et la méiose'
   ], ans:0,
   exp:'La mitose (toutes cellules somatiques, croissance et réparation) et la méiose (gamètes seulement, produit des cellules à 23 chromosomes).'},

  {cat:'🧬 Biologie – Corps humain', src:'Organisation du corps humain',
   q:'Quel est le rôle principal du système lymphatique ?',
   opts:[
     'Produire des globules rouges et de l\'hémoglobine',
     'Défendre l\'organisme et drainer les liquides interstitiels',
     'Réguler la glycémie en secrétant de l\'insuline',
     'Transporter les nutriments issus de la digestion'
   ], ans:1,
   exp:'Le système lymphatique draine les liquides entre les cellules et joue un rôle central dans l\'immunité en transportant les lymphocytes.'},

  // === 🧬 Biologie – La peau ===
  {cat:'🧬 Biologie – La peau', src:'La peau',
   q:'De quelles 3 couches est composée la peau ?',
   opts:[
     'Épiderme, muqueuse et hypoderme',
     'Épiderme, derme et hypoderme',
     'Kératine, mélanine et collagène',
     'Cuticule, derme et tissu conjonctif'
   ], ans:1,
   exp:'Épiderme (protection externe), derme (tissu vascularisé de soutien) et hypoderme (tissu adipeux profond).'},

  {cat:'🧬 Biologie – La peau', src:'La peau',
   q:'Quel est le rôle principal de la mélanine dans l\'épiderme ?',
   opts:[
     'Imperméabiliser la peau contre la perte en eau',
     'Nourrir les kératinocytes en profondeur',
     'Absorber les UV et donner la couleur à la peau',
     'Déclencher la cicatrisation après une blessure'
   ], ans:2,
   exp:'La mélanine (produite par les mélanocytes) absorbe les UV, donne la couleur à la peau et la protège des dommages solaires.'},

  {cat:'🧬 Biologie – La peau', src:'La peau',
   q:'Quelle protéine produite par les kératinocytes assure l\'imperméabilité de la peau ?',
   opts:[
     'L\'élastine',
     'Le collagène',
     'La mélanine',
     'La kératine'
   ], ans:3,
   exp:'La kératine est une protéine insoluble qui imperméabilise la peau et la protège contre les agressions mécaniques et la perte en eau.'},

  {cat:'🧬 Biologie – La peau', src:'La peau',
   q:'Quelle couche de la peau constitue la réserve énergétique et assure l\'isolation thermique ?',
   opts:[
     'L\'épiderme',
     'La couche cornée',
     'Le derme',
     'L\'hypoderme'
   ], ans:3,
   exp:'L\'hypoderme, composé principalement de tissu adipeux, constitue la réserve d\'énergie et assure l\'isolation thermique du corps.'},

  {cat:'🧬 Biologie – La peau', src:'La peau',
   q:'Quel est le principal ennemi de la peau à protéger chez l\'enfant ?',
   opts:[
     'Le chlore de l\'eau de piscine',
     'L\'humidité et la transpiration',
     'Le soleil (UV)',
     'Le froid et le vent combinés'
   ], ans:2,
   exp:'Le soleil est le principal agresseur de la peau. Les coups de soleil répétés dès l\'enfance augmentent le risque de mélanome. Protection solaire et règles d\'hygiène doivent être enseignées dès le plus jeune âge.'},

  // === 🧬 Biologie – Micro-organismes ===
  {cat:'🧬 Biologie – Micro-organismes', src:'Pouvoir pathogène',
   q:'Qu\'est-ce qu\'un micro-organisme pathogène ?',
   opts:[
     'Un micro-organisme bénéfique présent dans la flore intestinale',
     'Un micro-organisme nocif capable de provoquer des maladies',
     'Un micro-organisme visible à l\'œil nu en conditions normales',
     'Un micro-organisme inoffensif qui vit en symbiose avec l\'hôte'
   ], ans:1,
   exp:'Un micro-organisme pathogène est nocif et peut provoquer des maladies, parfois graves. Il se distingue des micro-organismes inoffensifs ou bénéfiques.'},

  {cat:'🧬 Biologie – Micro-organismes', src:'Pouvoir pathogène',
   q:'Quelle est la caractéristique principale des bactéries ?',
   opts:[
     'Organismes unicellulaires eucaryotes avec noyau délimité',
     'Organismes pluricellulaires sans membrane nucléaire',
     'Organismes unicellulaires procaryotes (sans noyau délimité)',
     'Micro-organismes inertes ne pouvant se reproduire seuls'
   ], ans:2,
   exp:'Les bactéries sont unicellulaires et procaryotes : leur ADN flotte directement dans le cytoplasme, sans noyau délimité par une membrane.'},

  {cat:'🧬 Biologie – Micro-organismes', src:'Pouvoir pathogène',
   q:'Un virus peut-il se reproduire sans cellule hôte vivante ?',
   opts:[
     'Oui, dans tout milieu suffisamment humide et chaud',
     'Oui, mais uniquement à température ambiante stable',
     'Non, il reste inactif et ne se reproduit qu\'à l\'intérieur d\'une cellule hôte',
     'Oui, en présence d\'oxygène et de nutriments appropriés'
   ], ans:2,
   exp:'Le virus est un parasite intracellulaire obligatoire : sans cellule hôte, il n\'a aucune activité métabolique et ne peut pas se reproduire.'},

  {cat:'🧬 Biologie – Micro-organismes', src:'Pouvoir pathogène',
   q:'Quelle infection est causée par le champignon Candida albicans chez le nourrisson ?',
   opts:[
     'La gale bébé',
     'La teigne du cuir chevelu',
     'Le muguet buccal',
     'L\'impétigo buccal'
   ], ans:2,
   exp:'Le muguet buccal est une infection fongique due à Candida albicans, fréquente chez le nourrisson. Points blancs sur la muqueuse, succion douloureuse, traitement antifongique.'},

  {cat:'🧬 Biologie – Micro-organismes', src:'Pouvoir pathogène',
   q:'Quelle maladie est causée par le protozoaire parasite Plasmodium ?',
   opts:[
     'La toxoplasmose',
     'La giardiose intestinale',
     'La leishmaniose cutanée',
     'Le paludisme (malaria)'
   ], ans:3,
   exp:'Plasmodium, transmis par la piqûre du moustique Anophèle, cause le paludisme. C\'est une des maladies parasitaires les plus meurtrières au monde.'},

  {cat:'🧬 Biologie – Micro-organismes', src:'Pouvoir pathogène',
   q:'Quelle différence entre une endotoxine et une exotoxine ?',
   opts:[
     'Les exotoxines sont libérées à la mort des bactéries ; les endotoxines sont sécrétées par des bactéries vivantes',
     'Endotoxines = libérées à la destruction des bactéries ; exotoxines = sécrétées par des bactéries vivantes',
     'Les deux termes désignent le même mécanisme de toxicité bactérienne',
     'Les endotoxines agissent localement ; les exotoxines uniquement dans le sang'
   ], ans:1,
   exp:'Endotoxines : dans la membrane bactérienne, libérées à la mort de la bactérie (choc septique possible). Exotoxines : sécrétées par des bactéries vivantes, très virulentes, servent à fabriquer certains vaccins (anti-tétanique).'},

  // === 🧬 Biologie – Défense de l'organisme ===
  {cat:'🧬 Biologie – Défense de l\'organisme', src:'Défense de l\'organisme',
   q:'Qu\'est-ce que l\'immunité innée (non spécifique) ?',
   opts:[
     'La mémoire immunitaire conservée après une infection ou vaccination',
     'La réponse produite uniquement par les lymphocytes B et T',
     'La 1ère ligne de défense qui réagit contre tout agent sans distinction',
     'La réponse spécifique déclenchée par la reconnaissance d\'un antigène'
   ], ans:2,
   exp:'L\'immunité innée est immédiate et non spécifique. Elle agit contre tout agent étranger sans distinction : peau, muqueuses, mucus, phagocytose, cellules NK.'},

  {cat:'🧬 Biologie – Défense de l\'organisme', src:'Défense de l\'organisme',
   q:'Qu\'est-ce que la phagocytose ?',
   opts:[
     'La production d\'anticorps spécifiques contre un antigène identifié',
     'La destruction des cellules cancéreuses par les lymphocytes T',
     'L\'ingestion et la digestion des pathogènes par des cellules phagocytaires',
     'Le mécanisme de mémorisation immunitaire après vaccination'
   ], ans:2,
   exp:'Des cellules phagocytaires (macrophages, neutrophiles) migrent vers une lésion, ingèrent et digèrent les agents pathogènes : c\'est la phagocytose, mécanisme clé de l\'immunité innée.'},

  {cat:'🧬 Biologie – Défense de l\'organisme', src:'Défense de l\'organisme',
   q:'Quel rôle jouent les lymphocytes B dans l\'immunité adaptative ?',
   opts:[
     'Détruire directement les cellules infectées par contact physique',
     'Synthétiser des anticorps spécifiques contre des antigènes',
     'Déclencher la réaction inflammatoire locale immédiate',
     'Coordonner la réponse innée en sécrétant des interférons'
   ], ans:1,
   exp:'Les lymphocytes B synthétisent des anticorps spécifiques contre un antigène particulier. Les lymphocytes T coordonnent la réponse et détruisent les cellules infectées.'},

  {cat:'🧬 Biologie – Défense de l\'organisme', src:'Défense de l\'organisme',
   q:'Comment fonctionne un vaccin pour protéger l\'organisme ?',
   opts:[
     'Il détruit directement les bactéries présentes dans le sang',
     'Il stimule le foie à produire des enzymes protectrices',
     'Il renforce les barrières naturelles comme la peau et les muqueuses',
     'Il injecte un antigène inactivé pour créer une mémoire immunitaire'
   ], ans:3,
   exp:'Le vaccin injecte un antigène inactivé ou atténué. L\'organisme produit les anticorps correspondants et garde une mémoire immunitaire pour réagir vite si le vrai pathogène se présente.'},

  {cat:'🧬 Biologie – Défense de l\'organisme', src:'Défense de l\'organisme',
   q:'Quel est le rôle du mucus des muqueuses dans la défense ?',
   opts:[
     'Nourrir les cellules muqueuses en profondeur grâce aux nutriments qu\'il transporte',
     'Piéger et neutraliser les agents pathogènes',
     'Produire des anticorps locaux de type IgA',
     'Réguler la température corporelle par évaporation'
   ], ans:1,
   exp:'Le mucus produit par les muqueuses (voies respiratoires, digestives, génitales) piège les agents pathogènes et peut les neutraliser — barrière physico-chimique de l\'immunité innée.'},

  // === 🥗 Nutrition – Besoins nutritionnels ===
  {cat:'🥗 Nutrition – Besoins nutritionnels', src:'Les besoins nutritionnels',
   q:'Quels sont les 3 macronutriments énergétiques essentiels ?',
   opts:[
     'Vitamines, minéraux et fibres',
     'Protéines, glucides et lipides',
     'Calcium, fer et vitamines du groupe B',
     'Glucides, fibres et vitamines liposolubles'
   ], ans:1,
   exp:'Les 3 macronutriments : protéines (construction tissus), glucides (énergie rapide) et lipides (énergie et fonctions structurales).'},

  {cat:'🥗 Nutrition – Besoins nutritionnels', src:'Les besoins nutritionnels',
   q:'Quelle est la principale source d\'énergie du corps et du cerveau ?',
   opts:[
     'Les lipides alimentaires stockés dans l\'hypoderme',
     'Les acides aminés issus des protéines animales',
     'Les glucides (glucose)',
     'Les vitamines liposolubles A, D, E et K'
   ], ans:2,
   exp:'Les glucides fournissent du glucose, énergie principale des cellules. Le cerveau fonctionne essentiellement au glucose et ne peut pas utiliser directement les acides gras.'},

  {cat:'🥗 Nutrition – Besoins nutritionnels', src:'Les besoins nutritionnels',
   q:'Quelle est la différence entre glucides simples et glucides complexes ?',
   opts:[
     'Les glucides simples sont digérés lentement, les complexes rapidement',
     'Les glucides simples ont une saveur sucrée (lactose, fructose, saccharose) ; les complexes sont sans goût sucré (céréales, riz, pâtes)',
     'Les glucides complexes ont une saveur sucrée ; les simples sont insipides',
     'Il n\'y a aucune différence nutritionnelle entre les deux catégories'
   ], ans:1,
   exp:'Glucides simples : saveur sucrée (lactose, fructose, saccharose). Glucides complexes : sans goût sucré, digestion plus lente (céréales, pâtes, riz, légumineuses).'},

  {cat:'🥗 Nutrition – Besoins nutritionnels', src:'Les besoins nutritionnels',
   q:'Quelles vitamines sont liposolubles et peuvent être stockées dans l\'organisme ?',
   opts:[
     'Vitamines B1, B6, B9 et B12',
     'Vitamines C, B2, B3 et B5',
     'Vitamines A, D, E et K',
     'Toutes les vitamines sont liposolubles'
   ], ans:2,
   exp:'Vitamines liposolubles (A, D, E, K) : stockées dans l\'organisme. Vitamines hydrosolubles (B1→B12, C) : non stockées, éliminées dans l\'urine si excès.'},

  {cat:'🥗 Nutrition – Besoins nutritionnels', src:'Les besoins nutritionnels',
   q:'Combien de groupes d\'aliments composent une alimentation équilibrée ?',
   opts:[
     '4 groupes',
     '5 groupes',
     '6 groupes',
     '8 groupes'
   ], ans:2,
   exp:'6 groupes : produits laitiers, viandes/poissons/œufs, féculents, végétaux frais, corps gras et produits sucrés.'},

  {cat:'🥗 Nutrition – Besoins nutritionnels', src:'Les besoins nutritionnels',
   q:'Quel minéral est essentiel à la solidité des os et des dents chez l\'enfant ?',
   opts:[
     'Le magnésium',
     'Le fer',
     'Le zinc',
     'Le calcium'
   ], ans:3,
   exp:'Le calcium est le minéral clé de la solidité osseuse et dentaire, particulièrement important pendant la croissance. Principal source : produits laitiers.'},

  // === 🍼 Nutrition – Alimentation lactée ===
  {cat:'🍼 Nutrition – Alimentation lactée', src:'Alimentation lactée',
   q:'Jusqu\'à quel âge l\'alimentation est-elle exclusivement lactée ?',
   opts:[
     '2 mois',
     '3 mois',
     '4 à 6 mois',
     '12 mois'
   ], ans:2,
   exp:'De 0 à 4-6 mois, alimentation exclusivement lactée. Le système digestif immature ne peut traiter les protéines d\'autres aliments sans risque d\'allergie.'},

  {cat:'🍼 Nutrition – Alimentation lactée', src:'Alimentation lactée',
   q:'Quel est l\'avantage principal du lait maternel par rapport au lait infantile ?',
   opts:[
     'Il est plus riche en vitamine D et en fer biodisponible',
     'Il est plus calorique et favorise une prise de poids plus rapide',
     'Il s\'adapte aux besoins du bébé et apporte les anticorps maternels',
     'Il se conserve plus longtemps à température ambiante'
   ], ans:2,
   exp:'Le lait maternel s\'adapte en temps réel aux besoins du bébé et lui transmet les anticorps maternels pour se défendre contre les infections.'},

  {cat:'🍼 Nutrition – Alimentation lactée', src:'Alimentation lactée',
   q:'Quelle est la règle d\'Appert pour calculer la ration lactée ?',
   opts:[
     'Poids (en g) ÷ 10 + 250 = ml/jour',
     'Poids (en g) × 10 + 250 = ml/jour',
     'Poids (en g) ÷ 7 + 200 = ml/jour',
     'Âge en semaines × 30 + 100 = ml/jour'
   ], ans:0,
   exp:'Règle d\'Appert : Poids (en grammes) ÷ 10 + 250 = quantité totale de lait par jour en ml. Repère indicatif à adapter selon l\'appétit et l\'avis médical.'},

  {cat:'🍼 Nutrition – Alimentation lactée', src:'Alimentation lactée',
   q:'Quel lait est recommandé entre 4-6 mois et 12 mois ?',
   opts:[
     'Lait 1er âge',
     'Lait de croissance',
     'Lait 2ème âge',
     'Lait de vache demi-écrémé'
   ], ans:2,
   exp:'Le lait 2ème âge est adapté entre 4-6 mois et 12 mois. Le lait reste essentiel : calcium, protéines, iode, vitamines B12 et D.'},

  {cat:'🍼 Nutrition – Alimentation lactée', src:'Alimentation lactée',
   q:'À partir de quel âge la diversification alimentaire peut-elle débuter ?',
   opts:[
     '3 mois',
     '4 mois',
     '6 mois',
     '9 mois'
   ], ans:2,
   exp:'La diversification commence à 6 mois pour éviter troubles digestifs et allergies. On commence par les fromages, yaourts, puis légumes et fruits.'},

  {cat:'🍼 Nutrition – Alimentation lactée', src:'Alimentation lactée',
   q:'Comment vérifier la température d\'un biberon avant de le donner au bébé ?',
   opts:[
     'En versant quelques gouttes sur la face interne du poignet',
     'En le goûtant directement avec une cuillère propre',
     'En observant si de la vapeur se dégage légèrement',
     'Avec un thermomètre de cuisine trempé dans le lait'
   ], ans:0,
   exp:'On verse quelques gouttes sur la face interne du poignet (zone très sensible). Le lait doit être tiède (~37°C), jamais brûlant.'},

  // === 🏥 SMS – Maladies infectieuses ===
  {cat:'🏥 SMS – Maladies infectieuses', src:'Maladies infectieuses',
   q:'La varicelle est causée par quel agent ?',
   opts:[
     'Le paramyxovirus',
     'Le rotavirus de type 3',
     'Le virus varicelle-zona (VZV)',
     'Le streptocoque du groupe A'
   ], ans:2,
   exp:'La varicelle est due au VZV (virus varicelle-zona). Ce virus peut rester latent et réapparaître à l\'âge adulte sous forme de zona. Contagiosité : 2-4 jours avant l\'éruption jusqu\'à 5-7 jours après.'},

  {cat:'🏥 SMS – Maladies infectieuses', src:'Maladies infectieuses',
   q:'Quelle maladie éruptive est d\'origine BACTÉRIENNE ?',
   opts:[
     'La varicelle',
     'La rubéole',
     'La rougeole',
     'La scarlatine'
   ], ans:3,
   exp:'La scarlatine est la seule maladie éruptive bactérienne (streptocoque groupe A). Les autres (varicelle, rougeole, rubéole) sont virales — les antibiotiques n\'y sont pas efficaces.'},

  {cat:'🏥 SMS – Maladies infectieuses', src:'Maladies infectieuses',
   q:'Quels symptômes caractérisent la rougeole ?',
   opts:[
     'Gonflement des glandes salivaires sous les oreilles',
     'Éruption débutant par le visage, fièvre 39-40°C, larmoiements et toux',
     'Petites vésicules prurigineuses apparaissant d\'abord sur le tronc',
     'Toux aboyante sans fièvre avec stridor inspiratoire'
   ], ans:1,
   exp:'La rougeole est très contagieuse : éruption qui débute au visage, fièvre 39-40°C, larmoiements, écoulement nasal et toux. Complications possibles : otite, pneumonie, encéphalite.'},

  {cat:'🏥 SMS – Maladies infectieuses', src:'Maladies infectieuses',
   q:'Quel est le meilleur moyen de prévention contre les maladies infectieuses ?',
   opts:[
     'Le lavage rigoureux des mains à chaque contact',
     'La prise d\'antibiotiques en traitement préventif dès l\'automne',
     'La vaccination',
     'L\'éviction systématique des enfants malades de la collectivité'
   ], ans:2,
   exp:'La vaccination reste le meilleur moyen de prévention collective. Elle évite maladies graves, épidémies et complications. Les professionnels informent et sensibilisent les familles.'},

  {cat:'🏥 SMS – Maladies infectieuses', src:'Maladies infectieuses',
   q:'La coqueluche est causée par quelle bactérie ?',
   opts:[
     'Le streptocoque β-hémolytique du groupe A',
     'Le staphylocoque doré',
     'Bordetella pertussis',
     'Haemophilus influenzae de type b'
   ], ans:2,
   exp:'Bordetella pertussis provoque des quintes de toux avec inspirations sifflantes et vomissements. Gravissime chez le nourrisson non vacciné.'},

  {cat:'🏥 SMS – Maladies infectieuses', src:'Maladies infectieuses',
   q:'Combien de jours avant la parotide les oreillons sont-ils déjà contagieux ?',
   opts:[
     '2 jours avant',
     '4 jours avant',
     '7 jours avant',
     '14 jours avant'
   ], ans:2,
   exp:'La contagiosité débute 7 jours avant l\'apparition de la parotide et se prolonge jusqu\'à 9 jours après.'},

  {cat:'🏥 SMS – Maladies infectieuses', src:'Maladies infectieuses',
   q:'Quelle complication grave peut causer la rubéole chez une femme enceinte non immunisée ?',
   opts:[
     'Un ictère néonatal sévère nécessitant une exsanguino-transfusion',
     'Des malformations congénitales graves du fœtus',
     'Une pneumonie néonatale bilatérale',
     'Un retard de croissance post-natal modéré'
   ], ans:1,
   exp:'La rubéole, bénigne chez l\'enfant, est très dangereuse pour une femme enceinte non immunisée : malformations congénitales cardiaques, oculaires et auditives, surtout au 1er trimestre.'},

  // === 🧴 SMS – Affections peau & muqueuses ===
  {cat:'🧴 SMS – Affections peau & muqueuses', src:'Affections peau et muqueuses',
   q:'L\'érythème fessier est-il contagieux ?',
   opts:[
     'Oui, très contagieux par contact avec les selles',
     'Oui, modérément, par contact avec la peau lésée',
     'Non, pas du tout contagieux',
     'Seulement s\'il est surinfecté par un champignon'
   ], ans:2,
   exp:'L\'érythème fessier (dermite du siège) est une dermatose bénigne NON contagieuse, causée par contact prolongé avec une couche souillée. Traitement : hygiène rigoureuse et crème protectrice.'},

  {cat:'🧴 SMS – Affections peau & muqueuses', src:'Affections peau et muqueuses',
   q:'Où se localise principalement l\'eczéma chez l\'enfant ?',
   opts:[
     'Sur le cuir chevelu et derrière les oreilles uniquement',
     'Sur les fesses et dans la région périnéale',
     'Sur le visage et les plis d\'articulation (coudes, poignets, genoux)',
     'Sur la plante des pieds et les paumes des mains'
   ], ans:2,
   exp:'L\'eczéma (non contagieux, souvent allergique) se localise au visage et aux plis d\'articulation. Plaques rouges → vésicules suintantes → croûtes.'},

  {cat:'🧴 SMS – Affections peau & muqueuses', src:'Affections peau et muqueuses',
   q:'L\'impétigo : quelle origine et quel niveau de contagiosité ?',
   opts:[
     'Peu contagieux, d\'origine virale (herpèsvirus)',
     'Très contagieux, d\'origine bactérienne (streptocoque ou staphylocoque)',
     'Modérément contagieux, d\'origine allergique et fongique',
     'Non contagieux, d\'origine parasitaire cutanée'
   ], ans:1,
   exp:'L\'impétigo est très contagieux et bactérien (streptocoque ou staphylocoque). Bulles → croûtes suintantes. Traitement antibiotique nécessaire.'},

  {cat:'🧴 SMS – Affections peau & muqueuses', src:'Affections peau et muqueuses',
   q:'Qu\'est-ce que la conjonctivite et comment se manifeste-t-elle ?',
   opts:[
     'Une infection de l\'oreille externe avec rougeur du pavillon',
     'Une infection très contagieuse de la conjonctive avec yeux rouges et écoulement',
     'Une inflammation de la cornée sans écoulement ni fièvre',
     'Une infection cutanée de la paupière d\'origine bactérienne'
   ], ans:1,
   exp:'Infection contagieuse de la conjonctive (bactérienne ou virale). Yeux et paupières rouges, larmoiements, photophobie, écoulement purulent.'},

  {cat:'🧴 SMS – Affections peau & muqueuses', src:'Affections peau et muqueuses',
   q:'Qu\'est-ce que le muguet buccal ?',
   opts:[
     'Une inflammation bactérienne des gencives due au streptocoque',
     'Une infection par Candida albicans de la muqueuse buccale, surtout chez le nourrisson',
     'Une infection virale des lèvres et de la muqueuse buccale',
     'Une inflammation des dents de lait lors de la poussée dentaire'
   ], ans:1,
   exp:'Le muguet est une infection fongique (Candida albicans) de la muqueuse buccale, fréquente chez le nourrisson. Points blancs, succion douloureuse. Traitement antifongique.'},

  // === 🦠 SMS – Parasitoses ===
  {cat:'🦠 SMS – Parasitoses', src:'Parasitoses',
   q:'Qu\'est-ce que la pédiculose ?',
   opts:[
     'Une infestation par des oxyures dans le côlon',
     'Une infestation du cuir chevelu par des poux (Pediculus capitis)',
     'Une dermatose bactérienne du cuir chevelu et de la nuque',
     'Une allergie cutanée aux acariens de la literie'
   ], ans:1,
   exp:'La pédiculose est une parasitose causée par les poux de tête. Très contagieuse en collectivité, elle provoque des démangeaisons intenses.'},

  {cat:'🦠 SMS – Parasitoses', src:'Parasitoses',
   q:'La présence de poux indique-t-elle un manque d\'hygiène ?',
   opts:[
     'Oui, c\'est le principal indicateur d\'une hygiène capillaire insuffisante',
     'Non, tout enfant peut attraper des poux quelle que soit sa propreté',
     'Oui, surtout chez les enfants qui ne se lavent pas les cheveux souvent',
     'Seulement lorsque les infestations se répètent plusieurs fois par an'
   ], ans:1,
   exp:'La présence de poux N\'INDIQUE PAS un manque d\'hygiène. Les poux préfèrent même les cheveux propres. Tout enfant peut en attraper. Éviter tout jugement, réconforter la famille.'},

  {cat:'🦠 SMS – Parasitoses', src:'Parasitoses',
   q:'Qu\'est-ce que l\'oxyurose et quel est son principal symptôme ?',
   opts:[
     'Une infection cutanée du cuir chevelu causée par des acariens',
     'Une parasitose digestive avec prurit anal, surtout la nuit',
     'Une maladie respiratoire causée par l\'inhalation de spores fongiques',
     'Une infection urinaire d\'origine parasitaire chez la petite fille'
   ], ans:1,
   exp:'L\'oxyurose est due aux oxyures (Enterobius vermicularis), petits vers blancs du gros intestin. Symptôme clé : prurit anal nocturne.'},

  {cat:'🦠 SMS – Parasitoses', src:'Parasitoses',
   q:'Pourquoi les oxyures récidivent-ils souvent après traitement ?',
   opts:[
     'Le traitement médicamenteux est insuffisamment dosé pour les œufs',
     'Les œufs sous les ongles réinfestent quand les mains touchent la bouche',
     'Ils se transmettent par voie aérienne entre enfants dans la même pièce',
     'Ils proviennent de la consommation d\'eau ou d\'aliments contaminés'
   ], ans:1,
   exp:'Les œufs d\'oxyures se fixent sous les ongles. Si les mains touchent la bouche, l\'enfant se réinfeste. D\'où l\'importance cruciale du lavage des mains après chaque passage aux toilettes.'},

  // === 📋 EP1 – Posture professionnelle ===
  {cat:'📋 EP1 – Posture professionnelle', src:'Responsabilité civile et pénale',
   q:'Qu\'est-ce que la responsabilité civile d\'un professionnel de la petite enfance ?',
   opts:[
     'L\'obligation légale de signaler toute situation de maltraitance suspectée',
     'L\'obligation de réparer les dommages causés dans l\'exercice de ses fonctions',
     'Le respect absolu du secret professionnel en toutes circonstances',
     'L\'obligation de se former régulièrement pour maintenir ses compétences'
   ], ans:1,
   exp:'La responsabilité civile engage le professionnel (ou son employeur) à réparer les préjudices causés. Distincte de la responsabilité pénale (sanctions pénales : prison, amende).'},

  {cat:'📋 EP1 – Posture professionnelle', src:'Secret professionnel',
   q:'Que signifie concrètement le secret professionnel pour un professionnel AEPE ?',
   opts:[
     'Ne jamais parler de l\'enfant, même aux parents ou à l\'équipe',
     'Garder confidentielles les informations sur l\'enfant et sa famille, sauf dérogations légales',
     'Refuser de transmettre tout dossier au médecin ou à l\'assistante sociale',
     'Ne communiquer qu\'avec la directrice de la structure, pas avec les collègues'
   ], ans:1,
   exp:'Secret professionnel : confidentialité des informations obtenues dans l\'exercice des fonctions. Dérogations légales notamment pour signaler les situations de maltraitance (art. 226-14 Code pénal).'},

  {cat:'📋 EP1 – Posture professionnelle', src:'Droits de l\'enfant',
   q:'En quelle année la Convention Internationale des Droits de l\'Enfant a-t-elle été adoptée par l\'ONU ?',
   opts:[
     '1959',
     '1979',
     '1989',
     '1999'
   ], ans:2,
   exp:'La CIDE a été adoptée le 20 novembre 1989 et ratifiée par la France en 1990. 4 principes fondamentaux : non-discrimination, intérêt supérieur, droit à la vie et au développement, participation.'},

  {cat:'📋 EP1 – Posture professionnelle', src:'Principe de laïcité',
   q:'Que signifie la laïcité dans un EAJE ?',
   opts:[
     'Promouvoir les valeurs culturelles françaises auprès de toutes les familles',
     'Interdire toute fête ou célébration au sein de la structure',
     'Garantir la neutralité religieuse et l\'égalité de traitement de tous les enfants',
     'Accepter uniquement les pratiques religieuses de la majorité des familles'
   ], ans:2,
   exp:'La laïcité impose la neutralité religieuse. En EAJE : accueil de tous sans discrimination, pas de préférences religieuses affichées, respect de toutes les familles.'},

  {cat:'📋 EP1 – Bientraitance', src:'La bientraitance',
   q:'Qu\'est-ce que la bientraitance ?',
   opts:[
     'L\'interdiction de tout conflit ou frustration pour l\'enfant',
     'Une démarche active visant le bien-être de l\'enfant en respectant ses droits et sa dignité',
     'La satisfaction immédiate de toutes les demandes de l\'enfant pour éviter les pleurs',
     'L\'application stricte d\'un protocole de soins standardisé pour tous les enfants'
   ], ans:1,
   exp:'La bientraitance est une démarche positive visant le bien-être et le développement de l\'enfant, en respectant ses droits, ses besoins et sa dignité. Elle inclut la prévention de la maltraitance.'},

  {cat:'📋 EP1 – Bientraitance', src:'La bientraitance',
   q:'Qu\'est-ce qu\'un PAI (Projet d\'Accueil Individualisé) ?',
   opts:[
     'Le planning hebdomadaire de l\'équipe soignante',
     'Un document pour un enfant ayant des besoins spécifiques (allergie, maladie chronique)',
     'Le projet pédagogique annuel de la structure d\'accueil',
     'Le compte-rendu mensuel des soins et des observations sur l\'enfant'
   ], ans:1,
   exp:'Le PAI est un document élaboré avec la famille, le médecin et la structure pour les enfants atteints de maladies chroniques, d\'allergies ou de handicaps. Il précise les aménagements et mesures d\'urgence.'},

  {cat:'📋 EP1 – Soins quotidiens', src:'Mort inattendue du nourrisson',
   q:'Quelle est la position recommandée pour prévenir la mort inattendue du nourrisson ?',
   opts:[
     'Sur le dos dans un lit rigide sans objets mous',
     'Sur le ventre pour faciliter la digestion et réduire les régurgitations',
     'Sur le côté droit pour éviter les régurgitations et les fausses routes',
     'En position semi-assise à 30-45° dans un transat adapté'
   ], ans:0,
   exp:'Coucher sur le dos dans un lit rigide adapté, à bonne température, sans peluches ni coussins. Cette pratique a fait chuter considérablement les décès par mort inattendue du nourrisson.'},

  {cat:'📋 EP1 – Soins quotidiens', src:'Le change',
   q:'Dans quel sens nettoyer les fesses d\'une petite fille lors du change ?',
   opts:[
     'De l\'avant vers l\'arrière (vulve → anus)',
     'De l\'arrière vers l\'avant (anus → vulve)',
     'En mouvements circulaires du centre vers l\'extérieur',
     'Du bas vers le haut en partant des cuisses'
   ], ans:0,
   exp:'Toujours de l\'avant vers l\'arrière (vulve → anus) pour éviter de contaminer l\'urètre avec des bactéries fécales et prévenir les infections urinaires.'},

  // === 📋 EP2 – Accueil collectif ===
  {cat:'📋 EP2 – Accueil collectif', src:'Acquisition du langage',
   q:'Vers quel âge apparaissent les premiers mots chez un enfant à développement typique ?',
   opts:[
     '3 à 5 mois',
     '6 à 8 mois',
     '10 à 14 mois',
     '18 à 24 mois'
   ], ans:2,
   exp:'Premiers mots : généralement 10-14 mois. Babillage : 6-9 mois. Association 2 mots : 18-24 mois. Petites phrases : vers 3 ans.'},

  {cat:'📋 EP2 – Accueil collectif', src:'Entretien du linge',
   q:'Que signifie un triangle sur l\'étiquette d\'un vêtement ?',
   opts:[
     'Instructions de séchage en tambour à basse température',
     'Ne pas repasser sous peine d\'endommager le tissu',
     'Instructions de blanchiment',
     'Lavage à la main recommandé uniquement'
   ], ans:2,
   exp:'Le triangle indique le blanchiment. Triangle vide = autorisé. Triangle avec 2 lignes = sans chlore seulement. Triangle barré = aucun blanchiment.'},

  {cat:'📋 EP2 – Accueil collectif', src:'Techniques de nettoyage',
   q:'Quelle est la différence entre nettoyage et désinfection ?',
   opts:[
     'Ce sont deux termes synonymes désignant la même opération',
     'Le nettoyage enlève les saletés visibles ; la désinfection détruit les micro-organismes pathogènes',
     'Le nettoyage détruit les microbes ; la désinfection enlève les souillures visibles',
     'La désinfection est réservée aux hôpitaux et blocs opératoires'
   ], ans:1,
   exp:'Le nettoyage enlève les souillures visibles. La désinfection détruit les micro-organismes pathogènes. Ces deux étapes sont complémentaires et toujours réalisées dans cet ordre.'},

  {cat:'📋 EP2 – Accueil collectif', src:'Aménagement de l\'espace',
   q:'Pourquoi le coin repos doit-il être séparé du coin jeux en crèche ?',
   opts:[
     'Pour faciliter la surveillance visuelle par les professionnels',
     'Pour respecter le rythme de l\'enfant et lui permettre un vrai repos sans stimulations',
     'Pour des raisons d\'organisation pratique du mobilier',
     'Pour que les jouets ne soient pas abîmés pendant les temps calmes'
   ], ans:1,
   exp:'L\'enfant doit pouvoir dormir dans un espace calme, séparé du bruit. Respecter le rythme individuel de sommeil est un principe fondamental de bientraitance.'},

  // === 📋 EP3 – Accueil individuel ===
  {cat:'📋 EP3 – Accueil individuel', src:'L\'équilibre alimentaire',
   q:'Combien de prises alimentaires un enfant de 1 à 3 ans a-t-il besoin par jour ?',
   opts:[
     '2 repas principaux suffisants pour couvrir les besoins',
     '3 repas sans collation intermédiaire',
     '4 à 5 prises (3 repas + 1-2 collations)',
     '6 petits repas répartis toutes les 2-3 heures'
   ], ans:2,
   exp:'4 à 5 prises/jour : petit-déjeuner, déjeuner, goûter, dîner (+éventuellement un 2e petit-déjeuner). Le goûter couvre les besoins énergétiques de croissance.'},

  {cat:'📋 EP3 – Accueil individuel', src:'Allergies et intolérances',
   q:'Quelle est la différence entre allergie et intolérance alimentaire ?',
   opts:[
     'L\'allergie se développe avec l\'âge ; l\'intolérance est toujours congénitale',
     'L\'allergie implique une réaction immunitaire (pouvant être grave) ; l\'intolérance ne mobilise pas le système immunitaire',
     'L\'intolérance est plus grave car elle peut déclencher un choc anaphylactique',
     'Les deux termes sont interchangeables en pratique clinique courante'
   ], ans:1,
   exp:'Allergie alimentaire : réponse immunitaire (IgE), risque de choc anaphylactique. Intolérance (ex : au lactose) : pas de réaction immunitaire, troubles digestifs surtout.'},

  {cat:'📋 EP3 – Accueil individuel', src:'Produits toxicologiques',
   q:'Que faire si un enfant ingère un produit toxique (eau de Javel, produit ménager) ?',
   opts:[
     'Appeler le 15 ou le Centre Antipoison (0800 59 59 59), ne jamais faire vomir',
     'Faire vomir immédiatement pour éliminer le produit ingéré',
     'Donner du lait ou de l\'eau en grande quantité pour diluer le produit',
     'Attendre l\'apparition des premiers symptômes avant d\'appeler les secours'
   ], ans:0,
   exp:'Ne JAMAIS faire vomir (brûlures à la remontée). Appeler immédiatement le 15 ou le Centre Antipoison. Garder le produit pour donner les informations exactes.'},

  {cat:'📋 EP3 – Accueil individuel', src:'L\'entretien du réfrigérateur',
   q:'À quelle température doit fonctionner un réfrigérateur pour conserver les aliments en sécurité ?',
   opts:[
     'Entre 0°C et 4°C',
     'Entre 5°C et 8°C',
     'Entre 8°C et 10°C',
     'Entre -2°C et 0°C'
   ], ans:0,
   exp:'Entre 0°C et 4°C (idéalement 4°C) pour ralentir la prolifération bactérienne. Au-delà de 4°C, les bactéries se multiplient rapidement. Vérifier régulièrement avec un thermomètre.'},

  // === 🧬 Biologie – Circulation sanguine ===
  {cat:'🧬 Biologie – Circulation sanguine', src:'Circulation sanguine',
   q:'Quel est le rôle des globules rouges ?',
   opts:[
     'Défendre l\'organisme contre les agents infectieux',
     'Transporter l\'oxygène des poumons vers les cellules grâce à l\'hémoglobine',
     'Produire les anticorps lors d\'une réponse immunitaire',
     'Assurer la coagulation sanguine en cas de blessure'
   ], ans:1,
   exp:'Les hématies (globules rouges) contiennent l\'hémoglobine qui fixe l\'O2 dans les poumons et le transporte vers les cellules. Ils transportent aussi le CO2 en sens inverse.'},

  {cat:'🧬 Biologie – Circulation sanguine', src:'Circulation sanguine',
   q:'Quel est le rôle des globules blancs (leucocytes) ?',
   opts:[
     'Transporter l\'oxygène et le dioxyde de carbone dans le sang',
     'Assurer la coagulation et cicatrisation en cas de plaie',
     'Défendre l\'organisme contre les agents infectieux',
     'Produire de l\'hémoglobine et distribuer les nutriments'
   ], ans:2,
   exp:'Les leucocytes assurent la défense immunitaire : identification et élimination des agents infectieux. Plusieurs types : neutrophiles, lymphocytes, monocytes, éosinophiles.'},

  {cat:'🧬 Biologie – Circulation sanguine', src:'Circulation sanguine',
   q:'Quel organe est le moteur de la circulation sanguine ?',
   opts:[
     'Le foie',
     'Les poumons',
     'Les reins',
     'Le cœur'
   ], ans:3,
   exp:'Le cœur est le muscle central de la circulation. Il se contracte ~70 fois/min au repos pour propulser le sang dans tout l\'organisme.'},

  // === 🧬 Biologie – Système nerveux ===
  {cat:'🧬 Biologie – Système nerveux', src:'Le système nerveux',
   q:'Quelle est la différence entre SNC et SNP ?',
   opts:[
     'Le SNC contrôle le mouvement ; le SNP contrôle les organes internes',
     'SNC = cerveau + moelle épinière ; SNP = tous les nerfs en dehors',
     'Le SNC est périphérique ; le SNP est central et profond',
     'SNC = système autonome ; SNP = système volontaire uniquement'
   ], ans:1,
   exp:'SNC (système nerveux central) : cerveau et moelle épinière. SNP (périphérique) : tous les nerfs reliant le SNC au reste du corps (organes, muscles, peau).'},

  {cat:'🧬 Biologie – Système nerveux', src:'Le système nerveux',
   q:'Comment s\'appelle la cellule de base du système nerveux ?',
   opts:[
     'L\'érythrocyte',
     'Le myocyte',
     'Le neurone',
     'L\'astrocyte'
   ], ans:2,
   exp:'Le neurone transmet l\'influx nerveux via ses dendrites (réception) et son axone (transmission). Les neurones forment des réseaux complexes coordonnant toutes les fonctions nerveuses.'},

  // === 🚨 Sécurité & Urgences ===
  {cat:'🚨 Sécurité & Urgences', src:'Urgences médicales',
   q:'Quels sont les signes d\'alerte d\'une méningite bactérienne chez le nourrisson ?',
   opts:[
     'Fièvre élevée, fontanelle bombante, purpura (taches violacées ne disparaissant pas à la pression)',
     'Légère fièvre avec toux sèche et écoulement nasal clair',
     'Diarrhée liquide avec éruption rosée sur le tronc',
     'Toux aboyante nocturne avec stridor sans fièvre'
   ], ans:0,
   exp:'Méningite bactérienne = urgence vitale. Nourrisson : fièvre, fontanelle bombante, pleurs aigus, hypotonie, refus de tétée, purpura (taches violacées = signe majeur). Appel 15 immédiat !'},

  {cat:'🚨 Sécurité & Urgences', src:'Sécurité',
   q:'Que faire en cas d\'obstruction totale des voies aériennes chez un enfant > 1 an ?',
   opts:[
     '5 claques dans le dos puis 5 compressions abdominales (Heimlich)',
     'Mettre l\'enfant à plat ventre et donner 5 claques dorsales uniquement',
     'Souffler dans la bouche de l\'enfant pour dégager l\'obstruction',
     'Allonger l\'enfant sur le dos et appuyer sur l\'abdomen à deux mains'
   ], ans:0,
   exp:'5 claques dans le dos (entre omoplates), puis 5 compressions abdominales (Heimlich). Pour nourrisson < 1 an : 5 tapes + 5 compressions THORACIQUES (jamais abdominales).'},

  {cat:'🚨 Sécurité & Urgences', src:'Sécurité',
   q:'Quels sont les numéros d\'urgence en France ?',
   opts:[
     '15 (SAMU), 17 (Police), 18 (Pompiers), 112 (Urgence européenne)',
     '15 (Pompiers), 17 (SAMU), 18 (Police), 112 (Urgences)',
     '15 uniquement pour toutes les urgences depuis 2020',
     '18 (SAMU), 15 (Pompiers), 17 (Police), 115 (Urgence européenne)'
   ], ans:0,
   exp:'15 = SAMU (urgences médicales), 17 = Police, 18 = Pompiers, 112 = numéro européen, 114 = sourds/malentendants, 0800 59 59 59 = Centre Antipoison.'},

  {cat:'🚨 Sécurité & Urgences', src:'Sécurité',
   q:'Qu\'est-ce que le purpura fulminans ?',
   opts:[
     'Des taches violacées ne disparaissant pas à la pression — signe de méningite grave',
     'Une fièvre très élevée (>40°C) accompagnée de convulsions fébriles',
     'Une éruption allergique diffuse avec plaques urticariennes et démangeaisons',
     'Une vasodilatation généralisée causée par un choc anaphylactique sévère'
   ], ans:0,
   exp:'Le purpura fulminans = taches violacées résistant à la pression d\'un verre. Signe d\'une méningite à méningocoque grave. Urgence absolue : appel 15 immédiat sans attendre.'},

  // === 🏫 Modes d'accueil ===
  {cat:'🏫 Modes d\'accueil', src:'L\'accueil de l\'enfant',
   q:'Qu\'est-ce qu\'une halte-garderie ?',
   opts:[
     'Un accueil collectif régulier à temps plein pour les enfants de 0 à 3 ans',
     'Une structure d\'accueil collectif occasionnel et flexible pour les moins de 6 ans',
     'Un accueil uniquement en dehors des heures scolaires pour les > 3 ans',
     'Un service d\'accueil spécialisé pour enfants en situation de handicap'
   ], ans:1,
   exp:'La halte-garderie offre un accueil collectif ponctuel (quelques heures/semaine). Distincte de la crèche (accueil régulier).'},

  {cat:'🏫 Modes d\'accueil', src:'L\'accueil de l\'enfant',
   q:'Quelle est la différence entre accueil collectif et individuel ?',
   opts:[
     'L\'accueil collectif est public ; l\'individuel est exclusivement privé',
     'L\'accueil collectif regroupe plusieurs enfants dans une structure ; l\'individuel se fait chez une assistante maternelle ou à domicile',
     'L\'accueil individuel est réservé aux nourrissons de moins de 3 mois',
     'Il n\'existe pas de différence réglementaire entre les deux modes'
   ], ans:1,
   exp:'Accueil collectif : crèche, halte-garderie, jardin d\'enfants. Accueil individuel : chez une assistante maternelle agréée ou par une garde à domicile.'},

  {cat:'🏫 Modes d\'accueil', src:'L\'accueil de l\'enfant',
   q:'Qu\'est-ce qu\'un Relais Petite Enfance (RPE) ?',
   opts:[
     'Un service hospitalier pédiatrique de proximité',
     'Un service d\'information et de coordination pour l\'accueil individuel (assistantes maternelles, gardes à domicile)',
     'Une crèche collective gérée par une association de parents',
     'Un dispositif de remplacement pour assistantes maternelles malades'
   ], ans:1,
   exp:'Le RPE (ex-RAM) informe et anime le réseau de l\'accueil individuel : aide aux parents, assistantes maternelles et gardes à domicile dans leurs démarches.'},

  // === 🧼 Hygiène professionnelle ===
  {cat:'🧼 Hygiène professionnelle', src:'Les biocontaminations',
   q:'Qu\'est-ce qu\'une biocontamination ?',
   opts:[
     'Une pollution chimique causée par des pesticides ou des solvants',
     'Une contamination par des agents biologiques vivants (bactéries, virus, champignons, parasites)',
     'Une contamination aux métaux lourds dans les jouets ou peintures',
     'Une réaction allergique cutanée à des produits d\'entretien'
   ], ans:1,
   exp:'Biocontamination : contamination par agents biologiques vivants. En EAJE : voie aérienne (toux), fécale-orale (mains sales) et contact direct.'},

  {cat:'🧼 Hygiène professionnelle', src:'Les produits d\'entretien',
   q:'Quelle est la différence entre détergent et désinfectant ?',
   opts:[
     'Ces deux termes désignent exactement la même opération de nettoyage',
     'Le détergent nettoie les saletés ; le désinfectant tue les micro-organismes pathogènes',
     'Le désinfectant nettoie les surfaces ; le détergent détruit les microbes',
     'Les détergents sont toujours plus efficaces que les désinfectants en crèche'
   ], ans:1,
   exp:'Détergent : enlève les souillures (dégraissage). Désinfectant : détruit les pathogènes. On applique toujours d\'abord le détergent, puis le désinfectant.'},

  {cat:'🧼 Hygiène professionnelle', src:'Soins d\'hygiène',
   q:'Pourquoi ne pas introduire de coton-tige dans le conduit auditif d\'un bébé ?',
   opts:[
     'Cela peut tasser le cérumen, abîmer le tympan et provoquer une otite',
     'Les cotons-tiges ne sont pas homologués pour les nourrissons de moins de 6 mois',
     'Le nourrisson ne tolère pas la sensation et peut se blesser en bougeant',
     'Cela risque d\'irriter les poils du conduit et de provoquer une allergie'
   ], ans:0,
   exp:'Introduction dans le canal : tasse le cérumen (bouchon), risque d\'abîmer le tympan, douleur, otite. On nettoie uniquement le pavillon externe avec le coin d\'un gant humide.'},

  {cat:'🧼 Hygiène professionnelle', src:'Hygiène des mains',
   q:'Quand doit-on se laver les mains en EAJE ?',
   opts:[
     'Uniquement avant les repas et après être allé aux toilettes',
     'Seulement après le change et après contact avec des sécrétions',
     'Avant et après chaque soin, avant de préparer les repas, après le change, après contact avec des sécrétions',
     'Uniquement quand les mains sont visiblement sales ou malodorantes'
   ], ans:2,
   exp:'Le lavage des mains est la mesure d\'hygiène la plus efficace. Obligatoire : avant/après chaque soin, change, préparation des repas, contact avec des sécrétions ou surfaces souillées.'},
];
