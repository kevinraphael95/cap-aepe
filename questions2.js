// ============================================================
// BASE DE QUESTIONS 2 — CAP AEPE
// Thèmes : Développement de l'enfant, Psychomotricité,
//          Famille & cadre légal, Réglementation EAJE,
//          Sommeil, Jeu, Communication, Handicap
// ============================================================
const QUESTIONS_2 = [

  // === 👶 Développement – Nourrisson & Petite enfance ===
  {cat:'👶 Développement – Nourrisson & Petite enfance', src:'Développement de l\'enfant',
   q:'Vers quel âge un nourrisson commence-t-il à tenir sa tête sans soutien ?',
   opts:[
     '1 mois',
     '3 mois',
     '6 mois',
     '9 mois'
   ], ans:1,
   exp:'À 3 mois, le nourrisson tient sa tête dans l\'axe du corps lorsqu\'on le soulève. C\'est une étape clé du développement moteur céphalocaudal (de la tête vers les pieds).'},

  {cat:'👶 Développement – Nourrisson & Petite enfance', src:'Développement de l\'enfant',
   q:'Qu\'est-ce que la loi céphalo-caudale du développement moteur ?',
   opts:[
     'Le développement se fait des extrémités vers le centre du corps',
     'Le développement moteur progresse de la tête vers les pieds',
     'Le développement cognitif précède toujours le développement moteur',
     'Le développement suit un rythme identique pour tous les enfants'
   ], ans:1,
   exp:'Loi céphalo-caudale : la maîtrise motrice progresse de la tête (contrôle de la nuque) vers les pieds (marche). Loi proximo-distale : du centre vers les extrémités (tronc avant les doigts).'},

  {cat:'👶 Développement – Nourrisson & Petite enfance', src:'Développement de l\'enfant',
   q:'Vers quel âge apparaît la marche autonome chez la majorité des enfants ?',
   opts:[
     '9 à 10 mois',
     '12 à 15 mois',
     '18 à 20 mois',
     '24 mois'
   ], ans:1,
   exp:'La marche autonome apparaît généralement entre 12 et 15 mois. Elle peut survenir plus tôt (10 mois) ou plus tard (18 mois) sans que cela soit pathologique.'},

  {cat:'👶 Développement – Nourrisson & Petite enfance', src:'Développement de l\'enfant',
   q:'Qu\'est-ce que le sourire social chez le nourrisson ?',
   opts:[
     'Un réflexe automatique présent dès la naissance sans dimension relationnelle',
     'Un sourire déclenché par une interaction avec un visage humain, apparu vers 6 semaines',
     'Une mimique de bien-être liée uniquement à la satiété après le repas',
     'Un sourire volontaire et conscient acquis vers 6 mois'
   ], ans:1,
   exp:'Le sourire social apparaît vers 6 semaines : il est déclenché par un visage humain, une voix, une interaction. C\'est un signe majeur de développement socio-émotionnel et de lien d\'attachement.'},

  {cat:'👶 Développement – Nourrisson & Petite enfance', src:'Développement de l\'enfant',
   q:'Qu\'est-ce que la permanence de l\'objet selon Piaget ?',
   opts:[
     'La capacité à ramasser un objet avec la pince pouce-index',
     'La compréhension qu\'un objet existe même quand on ne le voit plus',
     'La préférence de l\'enfant pour les objets familiers plutôt que nouveaux',
     'La capacité à reconnaître sa propre image dans un miroir'
   ], ans:1,
   exp:'La permanence de l\'objet (Piaget) : l\'enfant comprend qu\'un objet continue d\'exister même caché. Acquise progressivement entre 6 et 18 mois. Avant : "l\'objet caché = disparu".'},

  {cat:'👶 Développement – Nourrisson & Petite enfance', src:'Développement de l\'enfant',
   q:'À quel stade Piaget associe-t-il les enfants de 0 à 2 ans ?',
   opts:[
     'Stade préopératoire',
     'Stade des opérations concrètes',
     'Stade sensorimoteur',
     'Stade formel ou hypothético-déductif'
   ], ans:2,
   exp:'Stade sensorimoteur (0-2 ans) : l\'enfant explore le monde par ses sens et ses actions motrices. Pas encore de représentation mentale abstraite. La permanence de l\'objet s\'y développe.'},

  {cat:'👶 Développement – Nourrisson & Petite enfance', src:'Développement de l\'enfant',
   q:'Que désigne le "non" de 18 mois chez l\'enfant ?',
   opts:[
     'Un signe de trouble du comportement nécessitant une consultation',
     'Une opposition normale liée à l\'affirmation de soi et à la séparation/individuation',
     'Un refus lié à une mauvaise relation avec les professionnels de la crèche',
     'Un retard de langage compensé par des gestes de refus'
   ], ans:1,
   exp:'Le "non" de 18 mois est une étape normale du développement : l\'enfant affirme son identité propre et se différencie de l\'adulte. C\'est une phase de séparation-individuation à accompagner avec bienveillance.'},

  // === 🧠 Développement – Attachement & Émotions ===
  {cat:'🧠 Développement – Attachement & Émotions', src:'Théories de l\'attachement',
   q:'Selon John Bowlby, qu\'est-ce que l\'attachement ?',
   opts:[
     'Un lien exclusivement biologique entre mère et nourrisson',
     'Un lien affectif fort entre l\'enfant et sa figure d\'attachement, garant de sa sécurité',
     'La dépendance temporaire de l\'enfant vis-à-vis de l\'adulte jusqu\'à 3 ans',
     'Un mécanisme de défense appris par conditionnement social'
   ], ans:1,
   exp:'Bowlby décrit l\'attachement comme un lien affectif durable envers une figure principale (base de sécurité). Il est essentiel au développement émotionnel, cognitif et social de l\'enfant.'},

  {cat:'🧠 Développement – Attachement & Émotions', src:'Théories de l\'attachement',
   q:'Qu\'est-ce que la "base de sécurité" dans la théorie de l\'attachement ?',
   opts:[
     'Un espace physique sécurisé dans la structure d\'accueil',
     'La figure d\'attachement qui rassure l\'enfant et lui permet d\'explorer sereinement',
     'Un protocole de soins garantissant la sécurité physique du nourrisson',
     'Le contrat d\'accueil signé entre les parents et la structure'
   ], ans:1,
   exp:'La base de sécurité est la figure d\'attachement (parent ou professionnel référent) vers qui l\'enfant revient pour être rassuré. Elle lui permet d\'explorer le monde en toute confiance.'},

  {cat:'🧠 Développement – Attachement & Émotions', src:'Théories de l\'attachement',
   q:'Qu\'est-ce que l\'angoisse de séparation, et à quel âge apparaît-elle ?',
   opts:[
     'Une peur des étrangers qui disparaît à 12 mois',
     'Une détresse normale lors des séparations, apparaissant vers 8-10 mois',
     'Un trouble anxieux pathologique nécessitant un suivi pédopsychiatrique',
     'Une réaction liée uniquement à une mauvaise qualité d\'accueil'
   ], ans:1,
   exp:'L\'angoisse de séparation est normale et apparaît vers 8-10 mois : l\'enfant comprend que la personne qui part pourrait ne pas revenir. Elle souligne la qualité du lien d\'attachement.'},

  {cat:'🧠 Développement – Attachement & Émotions', src:'Théories de l\'attachement',
   q:'Quel est le rôle de l\'objet transitionnel selon Winnicott ?',
   opts:[
     'Remplacer la figure maternelle de façon définitive',
     'Rassurer l\'enfant et l\'aider à tolérer la séparation d\'avec ses parents',
     'Stimuler le développement cognitif par la manipulation d\'objets',
     'Permettre à l\'enfant d\'apprendre la propreté plus facilement'
   ], ans:1,
   exp:'L\'objet transitionnel (doudou, tétine) est décrit par Winnicott comme un objet intermédiaire entre l\'enfant et sa mère. Il l\'aide à tolérer la séparation en conservant un sentiment de sécurité.'},

  // === 🤸 Psychomotricité & Motricité ===
  {cat:'🤸 Psychomotricité & Motricité', src:'Développement psychomoteur',
   q:'Qu\'est-ce que le schéma corporel chez l\'enfant ?',
   opts:[
     'Le poids et la taille mesurés lors des consultations pédiatriques',
     'La représentation mentale que l\'enfant se construit de son propre corps',
     'La posture naturelle de l\'enfant lorsqu\'il est au repos',
     'La coordination entre la vue et les mouvements des mains'
   ], ans:1,
   exp:'Le schéma corporel est la représentation mentale que l\'enfant se construit progressivement de son corps (limites, parties, mouvements). Il se construit par l\'expérience sensorielle et motrice.'},

  {cat:'🤸 Psychomotricité & Motricité', src:'Développement psychomoteur',
   q:'Vers quel âge l\'enfant acquiert-il la latéralité (main dominante) ?',
   opts:[
     '12 à 18 mois',
     '2 à 3 ans',
     '4 à 6 ans',
     '7 à 8 ans'
   ], ans:2,
   exp:'La latéralité (préférence pour la main droite ou gauche) se met en place progressivement et se stabilise vers 4-6 ans. Il ne faut jamais forcer un enfant à changer de main dominante.'},

  {cat:'🤸 Psychomotricité & Motricité', src:'Développement psychomoteur',
   q:'Qu\'est-ce que la pince pouce-index et à quel âge se développe-t-elle ?',
   opts:[
     'Une prise palmaire de la main entière, vers 4 mois',
     'La saisie précise d\'un petit objet entre le pouce et l\'index, vers 9-10 mois',
     'La capacité à tenir un crayon correctement, vers 18 mois',
     'Le réflexe d\'agrippement présent dès la naissance'
   ], ans:1,
   exp:'La pince pouce-index apparaît vers 9-10 mois : l\'enfant peut saisir de très petits objets avec précision. C\'est une étape clé de la motricité fine (surveillance : risque d\'ingestion de petits objets).'},

  {cat:'🤸 Psychomotricité & Motricité', src:'Développement psychomoteur',
   q:'Pourquoi le temps de motricité libre est-il important chez le nourrisson ?',
   opts:[
     'Pour occuper l\'enfant et faciliter le travail des professionnels',
     'Pour développer l\'autonomie, la confiance en soi et les compétences motrices à son rythme',
     'Pour éviter que l\'enfant s\'ennuie et réclame l\'attention des adultes',
     'Pour préparer l\'enfant à la scolarité et aux activités dirigées'
   ], ans:1,
   exp:'Le mouvement libre (Pikler-Lóczy) permet à l\'enfant de découvrir ses capacités à son propre rythme, sans aide ni contrainte imposée par l\'adulte. Il développe confiance, autonomie et compétences motrices réelles.'},

  {cat:'🤸 Psychomotricité & Motricité', src:'Développement psychomoteur',
   q:'Qu\'est-ce que la tonicité musculaire et pourquoi est-elle importante chez le nourrisson ?',
   opts:[
     'La force maximale des muscles lors d\'un effort intense',
     'Le niveau de tension musculaire au repos, indicateur du développement neurologique',
     'La capacité à courir et sauter acquise en fin de première année',
     'La souplesse articulaire mesurée lors des bilans de santé'
   ], ans:1,
   exp:'Le tonus musculaire (tension au repos) reflète la maturation neurologique du nourrisson. Une hypotonie (faible tonus) ou une hypertonie peuvent signaler des troubles nécessitant une évaluation médicale.'},

  // === 😴 Sommeil de l'enfant ===
  {cat:'😴 Sommeil de l\'enfant', src:'Le sommeil',
   q:'Combien d\'heures de sommeil un nourrisson de 3 mois a-t-il besoin par jour ?',
   opts:[
     '8 à 10 heures',
     '10 à 12 heures',
     '14 à 17 heures',
     '20 à 22 heures'
   ], ans:2,
   exp:'Un nourrisson de 3 mois a besoin de 14 à 17 heures de sommeil par jour (recommandations NSF). Le sommeil est fragmenté en plusieurs cycles courts (50-60 min) et évolue vers des nuits plus longues progressivement.'},

  {cat:'😴 Sommeil de l\'enfant', src:'Le sommeil',
   q:'Qu\'est-ce que le sommeil paradoxal chez le nourrisson ?',
   opts:[
     'Un sommeil profond sans mouvements oculaires ni activité cérébrale',
     'Une phase de sommeil actif avec mouvements oculaires rapides, rêves et consolidation mémorielle',
     'La sieste obligatoire de l\'après-midi en crèche',
     'Le sommeil calme qui précède le réveil matinal'
   ], ans:1,
   exp:'Le sommeil paradoxal (REM) est une phase active : mouvements oculaires, activité cérébrale intense, rêves. Il représente 50% du sommeil du nourrisson (contre 20-25% chez l\'adulte) et joue un rôle dans la maturation cérébrale.'},

  {cat:'😴 Sommeil de l\'enfant', src:'Le sommeil',
   q:'Que doit faire le professionnel lorsqu\'un enfant s\'endort en dehors de son heure habituelle ?',
   opts:[
     'Le réveiller immédiatement pour respecter le planning de la structure',
     'Respecter son rythme et le laisser dormir, même si ce n\'est pas l\'heure prévue',
     'Le stimuler pour qu\'il tienne jusqu\'à la sieste réglementaire',
     'Appeler les parents pour connaître leurs consignes particulières'
   ], ans:1,
   exp:'Le respect du rythme individuel de chaque enfant est fondamental. Forcer un enfant à rester éveillé ou le réveiller brutalement nuit à son bien-être et à son développement. Bientraitance = respecter les besoins physiologiques.'},

  // === 🎮 Le jeu & les activités ===
  {cat:'🎮 Le jeu & les activités', src:'Le jeu chez l\'enfant',
   q:'Qu\'est-ce que le jeu symbolique (ou jeu de faire-semblant) ?',
   opts:[
     'Un jeu de règles avec des gagnants et des perdants',
     'Un jeu où l\'enfant fait semblant d\'être quelqu\'un d\'autre ou simule des situations de la vie réelle',
     'Un jeu de construction avec des blocs ou des légos',
     'Un jeu sensoriel avec de l\'eau, du sable ou de la peinture'
   ], ans:1,
   exp:'Le jeu symbolique (à partir de 18 mois-2 ans) : l\'enfant fait semblant (joue à la dînette, imite les parents, joue au docteur). Il développe l\'imagination, le langage et la compréhension sociale.'},

  {cat:'🎮 Le jeu & les activités', src:'Le jeu chez l\'enfant',
   q:'Vers quel âge les enfants passent-ils du jeu parallèle au jeu coopératif ?',
   opts:[
     '6 à 12 mois',
     '12 à 18 mois',
     '3 à 4 ans',
     '5 à 6 ans'
   ], ans:2,
   exp:'Le jeu parallèle (jouer côte à côte sans vraie interaction) cède progressivement la place au jeu coopératif (jouer ensemble avec un but commun) vers 3-4 ans. Le jeu associatif est une étape intermédiaire.'},

  {cat:'🎮 Le jeu & les activités', src:'Le jeu chez l\'enfant',
   q:'Quel est l\'intérêt des activités sensorielles (eau, sable, peinture) pour l\'enfant ?',
   opts:[
     'Elles occupent l\'enfant pendant que les professionnels préparent les repas',
     'Elles développent les sens, la motricité fine, la créativité et l\'exploration du monde',
     'Elles servent uniquement à préparer les apprentissages scolaires de la maternelle',
     'Elles calment les enfants agités grâce à leur effet relaxant systématique'
   ], ans:1,
   exp:'Les activités sensorielles sollicitent les 5 sens, développent la motricité fine, stimulent la curiosité et l\'exploration. Elles permettent à l\'enfant de découvrir les propriétés de la matière et d\'expérimenter librement.'},

  {cat:'🎮 Le jeu & les activités', src:'Le jeu chez l\'enfant',
   q:'Quel est le rôle du professionnel lors d\'une activité en crèche ?',
   opts:[
     'Diriger entièrement l\'activité pour que tous les enfants obtiennent le même résultat',
     'Accompagner, encourager et laisser l\'enfant explorer à son rythme sans faire à sa place',
     'Corriger immédiatement chaque erreur pour que l\'enfant progresse plus vite',
     'Observer à distance sans intervenir quelles que soient les difficultés'
   ], ans:1,
   exp:'Le rôle du professionnel : proposer, accompagner et encourager sans faire à la place. L\'enfant apprend par l\'expérimentation. Intervenir trop tôt nuit à l\'autonomie et à la confiance en soi.'},

  // === 🗣️ Communication & Relation ===
  {cat:'🗣️ Communication & Relation', src:'Communication professionnelle',
   q:'Qu\'est-ce que l\'écoute active dans la relation avec les parents ?',
   opts:[
     'Écouter les parents en prenant des notes détaillées sur un carnet',
     'Être attentif aux mots, aux émotions et au non-verbal, sans jugement ni interruption',
     'Répéter mot pour mot ce que le parent vient de dire pour confirmation',
     'Écouter uniquement les informations concernant les soins médicaux de l\'enfant'
   ], ans:1,
   exp:'L\'écoute active implique attention aux mots, au ton, aux émotions et au langage non-verbal, reformulation et absence de jugement. Elle est indispensable pour établir une relation de confiance avec les familles.'},

  {cat:'🗣️ Communication & Relation', src:'Communication professionnelle',
   q:'Qu\'est-ce que la transmissions d\'informations lors des temps de séparation/retrouvailles ?',
   opts:[
     'La lecture du dossier médical de l\'enfant par les parents',
     'L\'échange oral et/ou écrit entre parents et professionnels sur le vécu de l\'enfant dans la journée',
     'La signature du carnet de liaison par les deux parties chaque soir',
     'Le compte-rendu mensuel remis lors des réunions de parents'
   ], ans:1,
   exp:'Les transmissions (accueil le matin, retour le soir) sont des moments essentiels : le professionnel informe les parents du déroulé de la journée (repas, sommeil, comportement, moments forts) pour assurer la continuité.'},

  {cat:'🗣️ Communication & Relation', src:'Communication professionnelle',
   q:'Comment gérer un désaccord avec un parent sur la prise en charge de l\'enfant ?',
   opts:[
     'Appliquer toujours les consignes du parent sans discussion',
     'Imposer les règles de la structure sans expliquer les raisons',
     'Écouter le point de vue du parent, expliquer calmement le cadre et chercher un compromis bienveillant',
     'Escalader immédiatement le conflit vers la direction'
   ], ans:2,
   exp:'Face à un désaccord, le professionnel écoute, explique le sens des pratiques de la structure et cherche un dialogue constructif. L\'objectif est une alliance éducative, dans l\'intérêt de l\'enfant.'},

  // === 👨‍👩‍👧 Famille & Parentalité ===
  {cat:'👨‍👩‍👧 Famille & Parentalité', src:'Famille et parentalité',
   q:'Qu\'est-ce que l\'autorité parentale selon le droit français ?',
   opts:[
     'Le droit exclusif du père de prendre des décisions pour l\'enfant',
     'L\'ensemble des droits et devoirs des parents pour protéger l\'enfant et assurer son éducation',
     'L\'obligation légale pour l\'enfant d\'obéir à ses parents jusqu\'à 18 ans',
     'La garde physique de l\'enfant accordée par le juge aux affaires familiales'
   ], ans:1,
   exp:'L\'autorité parentale est l\'ensemble des droits et devoirs confiés aux parents pour protéger l\'enfant, assurer son éducation et son développement. Elle est exercée conjointement par les deux parents en règle générale.'},

  {cat:'👨‍👩‍👧 Famille & Parentalité', src:'Famille et parentalité',
   q:'Que signifie le soutien à la parentalité dans la mission des EAJE ?',
   opts:[
     'Remplacer les parents dans leur rôle éducatif quotidien',
     'Accompagner les parents dans leur rôle éducatif, renforcer leurs compétences et créer un lien de confiance',
     'Contrôler les pratiques parentales et signaler les manquements',
     'Proposer des formations obligatoires aux parents avant l\'admission de l\'enfant'
   ], ans:1,
   exp:'Le soutien à la parentalité : accompagner les parents dans leur rôle sans se substituer à eux. L\'EAJE crée une relation de confiance, valorise les compétences parentales et partage les observations sur l\'enfant.'},

  {cat:'👨‍👩‍👧 Famille & Parentalité', src:'Famille et parentalité',
   q:'Comment accueillir un enfant issu d\'une famille recomposée ou monoparentale ?',
   opts:[
     'En lui accordant une attention particulière pour compenser sa situation familiale',
     'En l\'accueillant comme tous les enfants, sans jugement sur la structure familiale',
     'En demandant une documentation détaillée sur la situation familiale à l\'admission',
     'En informant discrètement les autres parents de sa situation particulière'
   ], ans:1,
   exp:'Toutes les familles sont accueillies sans jugement ni distinction : monoparentales, recomposées, homoparentales, etc. Le professionnel respecte la diversité familiale et garantit l\'égalité de traitement.'},

  // === 📜 Réglementation EAJE ===
  {cat:'📜 Réglementation EAJE', src:'Réglementation des structures',
   q:'Quel texte réglemente les établissements d\'accueil du jeune enfant (EAJE) en France ?',
   opts:[
     'Le Code de l\'Éducation nationale',
     'Le décret "Norma" du 7 juin 2021 (dit décret Norma)',
     'La Convention Internationale des Droits de l\'Enfant',
     'Le Code du travail uniquement'
   ], ans:1,
   exp:'Le décret "Norma" du 7 juin 2021 réforme la réglementation des EAJE. Il fixe notamment les normes d\'encadrement, les qualifications requises et les conditions d\'accueil dans les crèches.'},

  {cat:'📜 Réglementation EAJE', src:'Réglementation des structures',
   q:'Quel est le taux d\'encadrement minimum en crèche pour les enfants qui ne marchent pas ?',
   opts:[
     '1 professionnel pour 3 enfants',
     '1 professionnel pour 5 enfants',
     '1 professionnel pour 8 enfants',
     '1 professionnel pour 10 enfants'
   ], ans:0,
   exp:'Selon la réglementation : 1 professionnel pour 5 enfants qui ne marchent pas (avant la réforme) — le décret Norma 2021 fixe 1 pour 5 pour les non-marcheurs et 1 pour 8 pour les marcheurs. Toujours vérifier la version en vigueur.'},

  {cat:'📜 Réglementation EAJE', src:'Réglementation des structures',
   q:'Qu\'est-ce qu\'un EAJE en France ?',
   opts:[
     'Tout établissement scolaire accueillant des enfants de 3 à 6 ans',
     'Tout établissement ou service d\'accueil d\'enfants de moins de 6 ans non scolarisés',
     'Uniquement les crèches collectives publiques de plus de 20 places',
     'Tout service de garde à domicile agréé par la CAF'
   ], ans:1,
   exp:'EAJE = Établissement d\'Accueil du Jeune Enfant. Désigne toute structure accueillant des enfants de moins de 6 ans non scolarisés : crèches collectives, familiales, parentales, haltes-garderies, jardins d\'éveil.'},

  {cat:'📜 Réglementation EAJE', src:'Réglementation des structures',
   q:'Qui est chargé de la protection maternelle et infantile (PMI) ?',
   opts:[
     'L\'Éducation nationale via les médecins scolaires',
     'Le Conseil Départemental (services de PMI)',
     'La Caisse d\'Allocations Familiales (CAF)',
     'Les hôpitaux publics via les pédiatres'
   ], ans:1,
   exp:'La PMI relève du Conseil Départemental. Elle assure le suivi médical et social des femmes enceintes, nourrissons et enfants de moins de 6 ans, et délivre les agréments pour les assistantes maternelles et EAJE.'},

  {cat:'📜 Réglementation EAJE', src:'Réglementation des structures',
   q:'Qu\'est-ce que le projet d\'établissement d\'une crèche ?',
   opts:[
     'Le document financier annuel remis à la CAF pour le financement',
     'Le document décrivant le projet éducatif, pédagogique et social de la structure',
     'Le planning mensuel de l\'équipe et les protocoles de soins',
     'Le livret d\'accueil remis aux familles lors de l\'inscription'
   ], ans:1,
   exp:'Le projet d\'établissement définit les valeurs éducatives, les pratiques pédagogiques, le fonctionnement et les objectifs de la structure. Il est obligatoire et doit être co-construit avec l\'équipe.'},

  // === ♿ Handicap & Inclusion ===
  {cat:'♿ Handicap & Inclusion', src:'Accueil des enfants en situation de handicap',
   q:'Quelle loi oblige les EAJE à accueillir les enfants en situation de handicap ?',
   opts:[
     'La loi du 5 mars 2007 sur la protection de l\'enfance',
     'La loi du 11 février 2005 pour l\'égalité des droits et des chances des personnes handicapées',
     'La loi Touraine de 2016 sur la modernisation du système de santé',
     'Le décret Norma du 7 juin 2021 sur les EAJE'
   ], ans:1,
   exp:'La loi du 11 février 2005 impose l\'accessibilité et l\'inclusion des personnes handicapées dans tous les secteurs de la vie sociale, y compris les établissements d\'accueil de la petite enfance.'},

  {cat:'♿ Handicap & Inclusion', src:'Accueil des enfants en situation de handicap',
   q:'Qu\'est-ce que l\'accueil inclusif pour un enfant avec un trouble du développement ?',
   opts:[
     'Un accueil dans un établissement spécialisé séparé de la crèche ordinaire',
     'L\'accueil de l\'enfant dans la structure ordinaire avec les adaptations nécessaires à ses besoins',
     'Un accueil à temps partiel uniquement pour éviter la fatigue de l\'enfant',
     'Un accueil conditionné à l\'obtention d\'un financement spécifique de la MDPH'
   ], ans:1,
   exp:'L\'inclusion signifie accueillir l\'enfant avec ses différences dans la structure ordinaire, en adaptant l\'environnement, les activités et l\'accompagnement. Un PAI ou un PPS peut être mis en place.'},

  {cat:'♿ Handicap & Inclusion', src:'Accueil des enfants en situation de handicap',
   q:'Quel est le rôle de la MDPH concernant les enfants en situation de handicap ?',
   opts:[
     'Accueillir directement les enfants dans ses locaux pour des soins spécialisés',
     'Évaluer les besoins, reconnaître le handicap et orienter vers des dispositifs adaptés',
     'Financer exclusivement les aménagements des locaux de la crèche',
     'Former les professionnels de crèche à la prise en charge du handicap'
   ], ans:1,
   exp:'La MDPH (Maison Départementale des Personnes Handicapées) évalue les besoins, reconnaît la situation de handicap, attribue des aides et oriente vers les structures et dispositifs adaptés (CAMSP, SESSAD, IME...).'},

  // === 🚨 Maltraitance & Protection de l'enfance ===
  {cat:'🚨 Maltraitance & Protection de l\'enfance', src:'Protection de l\'enfance',
   q:'Quelles sont les 4 formes de maltraitance reconnues ?',
   opts:[
     'Physique, verbale, scolaire et affective',
     'Physique, psychologique, sexuelle et négligence grave',
     'Physique, alimentaire, médicale et éducative',
     'Corporelle, émotionnelle, financière et sociale'
   ], ans:1,
   exp:'Les 4 formes de maltraitance : violence physique (coups, brûlures), violence psychologique (humiliations, menaces), violence sexuelle et négligence grave (abandon des besoins fondamentaux).'},

  {cat:'🚨 Maltraitance & Protection de l\'enfance', src:'Protection de l\'enfance',
   q:'Que doit faire un professionnel qui suspecte une situation de maltraitance ?',
   opts:[
     'Interroger directement l\'enfant pour obtenir des aveux et confirmer ses soupçons',
     'Attendre d\'avoir la certitude absolue avant de faire quoi que ce soit',
     'Transmettre une information préoccupante (IP) à la cellule de recueil (CRIP)',
     'En parler discrètement aux autres parents pour les mettre en garde'
   ], ans:2,
   exp:'Face à une suspicion de maltraitance, le professionnel transmet une Information Préoccupante (IP) à la CRIP (Cellule de Recueil des Informations Préoccupantes) du Conseil Départemental. Il n\'enquête pas lui-même.'},

  {cat:'🚨 Maltraitance & Protection de l\'enfance', src:'Protection de l\'enfance',
   q:'Qu\'est-ce que le syndrome du bébé secoué ?',
   opts:[
     'Une réaction à la chaleur excessive chez le nourrisson',
     'Un traumatisme crânien grave causé par le secouement d\'un nourrisson, pouvant être mortel',
     'Un état de pleurs intenses sans cause identifiable chez les moins de 3 mois',
     'Un trouble du sommeil lié à des coliques sévères chez le bébé'
   ], ans:1,
   exp:'Le syndrome du bébé secoué est un traumatisme crânien grave causé par le secouement violent d\'un nourrisson. Il peut entraîner des lésions cérébrales irréversibles, la cécité ou le décès. Jamais secouer un bébé, même pour le calmer.'},

  {cat:'🚨 Maltraitance & Protection de l\'enfance', src:'Protection de l\'enfance',
   q:'Comment réagir face à un nourrisson qui pleure de façon inconsolable ?',
   opts:[
     'Le secouer doucement pour l\'aider à se calmer plus vite',
     'Le laisser pleurer seul dans sa chambre pour ne pas le "gâter"',
     'Poser délicatement le bébé en lieu sûr et s\'accorder un moment pour se ressourcer si besoin',
     'Lui donner immédiatement un sirop calmant adapté aux nourrissons'
   ], ans:2,
   exp:'Face à un nourrisson inconsolable, si l\'adulte sent qu\'il va craquer : poser le bébé en sécurité (lit sur le dos), s\'éloigner le temps de retrouver son calme, puis reprendre la prise en charge. Ne JAMAIS secouer.'},

  // === 📚 Éveil culturel & Livres ===
  {cat:'📚 Éveil culturel & Livres', src:'L\'éveil culturel',
   q:'À partir de quel âge peut-on proposer des livres à un nourrisson ?',
   opts:[
     'À partir de 12 mois',
     'À partir de 6 mois',
     'Dès les premières semaines de vie',
     'À partir de 3 ans quand l\'enfant comprend les histoires'
   ], ans:2,
   exp:'On peut proposer des livres dès les premières semaines : livres en tissu, livres-bains, livres aux images contrastées. Le partage de livres dès le plus jeune âge favorise le lien, le langage et l\'éveil culturel.'},

  {cat:'📚 Éveil culturel & Livres', src:'L\'éveil culturel',
   q:'Pourquoi les comptines et chansons sont-elles importantes pour le développement du langage ?',
   opts:[
     'Elles permettent à l\'enfant de ne pas pleurer pendant les soins',
     'Elles développent la mémoire auditive, le rythme, le vocabulaire et la conscience phonologique',
     'Elles préparent l\'enfant à la lecture en lui apprenant l\'alphabet',
     'Elles stimulent uniquement la mémoire musicale sans lien avec le langage'
   ], ans:1,
   exp:'Les comptines développent la conscience phonologique (reconnaissance des sons), le rythme, le vocabulaire et la mémoire. Elles sont un outil majeur de prévention des difficultés de langage et d\'apprentissage.'},

  // === 🌍 Diversité & Interculturalité ===
  {cat:'🌍 Diversité & Interculturalité', src:'Interculturalité',
   q:'Comment le professionnel doit-il aborder les pratiques culturelles différentes des familles ?',
   opts:[
     'En imposant les pratiques françaises comme norme obligatoire',
     'Avec curiosité et respect, en cherchant un dialogue et un compromis dans l\'intérêt de l\'enfant',
     'En refusant toute pratique non conforme aux habitudes de la structure',
     'En demandant à la famille de s\'adapter sans poser de questions'
   ], ans:1,
   exp:'Le professionnel adopte une posture interculturelle : curiosité, respect, dialogue. Si une pratique peut nuire à l\'enfant, il explique les raisons médicales ou réglementaires et cherche un compromis bienveillant.'},

  {cat:'🌍 Diversité & Interculturalité', src:'Interculturalité',
   q:'Qu\'est-ce que le choc culturel dans le contexte de l\'accueil des familles migrantes ?',
   opts:[
     'Un conflit juridique entre les pratiques culturelles et la loi française',
     'La désorientation ressentie lors de la confrontation à une nouvelle culture, pouvant générer stress et incompréhension',
     'Un rejet délibéré des valeurs françaises par les familles étrangères',
     'Un trouble psychiatrique spécifique aux personnes immigrées'
   ], ans:1,
   exp:'Le choc culturel est la désorientation normale vécue lors de l\'adaptation à une nouvelle culture (codes, habitudes, langue). Le professionnel doit en être conscient pour accueillir les familles avec empathie et patience.'},

  // === 🍽️ Repas & Alimentation en collectivité ===
  {cat:'🍽️ Repas & Alimentation en collectivité', src:'Le repas en collectivité',
   q:'Pourquoi le temps du repas est-il un moment éducatif important en crèche ?',
   opts:[
     'Parce qu\'il permet de mesurer l\'appétit de l\'enfant et de remplir les tableaux nutritionnels',
     'Parce qu\'il favorise la socialisation, l\'autonomie, les découvertes sensorielles et le lien affectif',
     'Parce qu\'il oblige l\'enfant à rester assis et à développer sa concentration',
     'Parce qu\'il permet de vérifier que les familles respectent les régimes alimentaires prescrits'
   ], ans:1,
   exp:'Le repas en collectivité est un temps fort : découverte des goûts, autonomie progressive (tenir une cuillère, manger seul), socialisation (partager un moment) et lien affectif avec le professionnel. Jamais de forçage alimentaire.'},

  {cat:'🍽️ Repas & Alimentation en collectivité', src:'Le repas en collectivité',
   q:'Quelle attitude adopter si un enfant refuse un aliment lors du repas ?',
   opts:[
     'Insister jusqu\'à ce qu\'il goûte au moins une bouchée',
     'Respecter son refus sans le forcer, reproposer l\'aliment régulièrement sans pression',
     'Remplacer systématiquement l\'aliment refusé par un aliment qu\'il aime',
     'Signaler le refus dans le carnet de liaison comme un trouble alimentaire'
   ], ans:1,
   exp:'Forcer un enfant à manger crée des angoisses alimentaires durables. On respecte son refus, on reste positif, et on repropose l\'aliment régulièrement. La néophobie alimentaire (peur des aliments nouveaux) est normale entre 2 et 5 ans.'},

  // === 🧘 Bien-être professionnel ===
  {cat:'🧘 Bien-être professionnel', src:'Posture professionnelle',
   q:'Qu\'est-ce que la distance professionnelle dans la relation avec un enfant ?',
   opts:[
     'Rester froid et distant pour ne pas créer de liens affectifs',
     'Maintenir une relation chaleureuse tout en préservant le cadre professionnel et les limites du rôle',
     'Interdire tout contact physique pour éviter les accusations de maltraitance',
     'Traiter tous les enfants de façon identique sans tenir compte de leurs besoins individuels'
   ], ans:1,
   exp:'La juste distance professionnelle : être chaleureux, bienveillant et impliqué sans fusionner. Elle protège l\'enfant, les familles et le professionnel. Elle permet de maintenir un regard objectif et professionnel.'},

  {cat:'🧘 Bien-être professionnel', src:'Posture professionnelle',
   q:'Qu\'est-ce que l\'épuisement professionnel (burnout) et comment le prévenir en EAJE ?',
   opts:[
     'Une fatigue passagère due à un manque de sommeil les jours de garde',
     'Un syndrome d\'épuisement émotionnel, physique et mental lié à un stress chronique au travail',
     'Un conflit entre deux collègues qui altère le fonctionnement de l\'équipe',
     'Un manque de motivation temporaire après les vacances scolaires'
   ], ans:1,
   exp:'Le burnout est un épuisement profond (émotionnel, physique, mental) lié au stress chronique. Prévention : travail d\'équipe, supervisions, réunions de concertation, expression des difficultés, formation continue et soutien managérial.'},

  {cat:'🧘 Bien-être professionnel', src:'Posture professionnelle',
   q:'Pourquoi les réunions d\'équipe sont-elles importantes en crèche ?',
   opts:[
     'Pour remplir les obligations administratives imposées par le décret Norma',
     'Pour harmoniser les pratiques, partager les observations, résoudre les difficultés et co-construire le projet',
     'Pour que la directrice vérifie le travail de chaque professionnel',
     'Pour informer l\'équipe des décisions déjà prises par la direction'
   ], ans:1,
   exp:'Les réunions d\'équipe permettent : cohérence des pratiques, partage d\'observations sur les enfants, résolution collective des difficultés, formation continue informelle et construction d\'une culture professionnelle commune.'},

];
