// Hare - the written chapters. English text is Caleb's original manuscript,
// unedited. Spanish is a translation of it.

export interface Block {
  /** 'p' = plain paragraph, 'i' = italic passage in the manuscript */
  t: 'p' | 'i'
  x: string
}

export interface Figure {
  /** index of the block this image is placed before */
  at: number
  side: 'left' | 'right'
  src: string
}

export interface Chapter {
  slug: string
  n: string
  enHead: string
  esHead: string
  enPart: string
  esPart: string
  /** official YouTube video ids for the two dubs */
  ytEn: string
  ytEs: string
  figures: Figure[]
  en: Block[]
  es: Block[]
}

export interface SealedChapter {
  n: number
  enHead: string
  esHead: string
}

export const chapters: Chapter[] = [
  {
    slug: "chapter-1",
    n: "01",
    enHead: "Chapter 1. Life and Death",
    esHead: "Capítulo 1. Vida y Muerte",
    enPart: "",
    esPart: "",
    ytEn: "GnoijEWWcl0",
    ytEs: "ae4ty1JeG34",
    figures: [
      { at: 6, side: "right", src: "/images/mother.jpg" },
      { at: 22, side: "left", src: "/images/pig-coat.png" },
    ],
    en: [
      { t: "p", x: "The screen is black. You hear panicked heavy deep breathing. Its a female in labour. She's begging and pleading for her tormentors to stop. \"N.. noo ... no please....... Please stop.\"" },
      { t: "p", x: "Screen opens to show a female in labour. She is the rabbit kind. The wasted. One of the hares. The ones who don't belong. They were driven from society during the reformation. The reformation that transformed the world as we know it, from the chaotic disgusting mess marked by war and blackness to a new clean, orderly kind. This is what the Leaders teach us." },
      { t: "p", x: "Back to the female. She is young. Too young to be this pregnant. Too young to be raising a child... if that were even possible.. Which it's not." },
      { t: "p", x: "Screen pans out to display her tormentor. Looking straight into the camera. He is old. A doctor or scientist with a stereotypical white lab coat and glasses. He is from the legion of great Hogs who led the reorganizing of what we knew.. Into something else." },
      { t: "p", x: "He is clean shaven.. Bearing the wrinkles of time across his face. His eyes look at you, but there is seemingly nothing there. Nothing natural is left. A deadness in his countenance that shouldn't exist on the faces of the living." },
      { t: "p", x: "In his hand he holds a syringe. Calmingly he reassures the female that this and only this is the path to redemption.. To becoming clean. \"Soon\" he speaks lightly.. \"Soon you will understand. It will all make sense.. You are.. So important.\"" },
      { t: "p", x: "\"Please sir.. Please.. I'm in so much pain.. Please don't do this\" she pleads.. Knowing full well it is futile to even attempt to bargain with this race.. These.. Leaders. She knows the unspeakable horrors they have inflicted on her kind since far before she was born.. Long have they feared this race." },
      { t: "p", x: "He turns his attention to another spot in the room where under the lights there is something like an aquarium. There are tubes running in and out of it. Inside under a thick layer of mist there appears to be something very alien looking. Almost like a wild fungi all twisted and gnarled around itself. The fruiting bodies look nothing like any fungi she has ever seen on god's green earth. This was something very different." },
      { t: "p", x: "Beside the aquarium is a small cage with a rat inside. She cannot understand the rat's language but she can hear the terror in its screams. The doctor reaches into the rat's cage with stainless steel tongs, forcibly snagging the rat in its clutches. The rat is screaming as he opens up the aquarium with the mysterious lifeform inside, dropping the rat in and quickly shutting the door." },
      { t: "p", x: "The rat looks around for any sort of escape. He is sweating pure fear." },
      { t: "p", x: "Suddenly a dark cloud of mist emerges from the lifeform, hovering just above the floor of the aquarium, wrapping itself around the poor animal." },
      { t: "p", x: "The camera zooms in towards the rats eyes and we see tiny tendrils of the mist coalesce around the rats eys, seeping violently now into the rats body. Seizures overcome his little body thrashing about as blood is ejected from his mouth and eyes. The seizing gets more and more violent until just as quickly as it started, it stops." },
      { t: "p", x: "Peace quickly replaces thrashing and a sudden calmness takes over the rat's body like a strong dose of anesthetic. The rat's eyes have become a cloudy white, yet he appears to see with full awareness." },
      { t: "p", x: "It is at this point that the doctor reaches back into the aquarium, yet now only with his bare hands and gently lifts out the now gentle animal. There is nothing but quiet compliance on the face of the animal as the doctor places him on a small stainless platform. Taking the syringe, he inserts the needle deep into the rat's abdomen. There are no cries of pain. No hesitation." },
      { t: "p", x: "He draws a full syringe of blood from the rat's body cavity, but... something is wrong.." },
      { t: "p", x: "What should be a deep crimson red blood is instead an opaque white, almost milky substance." },
      { t: "p", x: "After completely retracting the needle, the new compliant animal just stands there. No emotion. No urgency. No panic. Almost as if it were dead though it looks fully alive." },
      { t: "p", x: "Turning his attention back to the pregnant female who is shackled to the hospital bed, he walks towards her as a look of horror captures her face. the awareness of what is truly going on hits her like a bullet to the brain." },
      { t: "p", x: "Lifting the towel that was covering her abdomen, he reveals her swollen pregnant belly." },
      { t: "p", x: "\"Please..\" she whimpers. \"Please dont hurt me...please dont hurt my...\"" },
      { t: "p", x: "She is panicking.. Breathing fast and heavy \"No.. no.. no no nooooo\"" },
      { t: "p", x: "Slowly, methodically, and without any hesitation, he pushes the needle into her belly, piercing the skin and driving downward, through the uterus, directly into the little body inside, emptying the syringe completely." },
      { t: "p", x: "Her breath catches.. As if frozen.. She can't suck in any air" },
      { t: "p", x: "Terror has overcome the girl now and she blacks out. Nothing is written. Nothing is recorded" },
      { t: "p", x: "She awakens the next day still tethered to the bed, but a weakness has taken over her body. A deep powerful nausea erupts inside her and she violently empties what little contents were in her stomach off the side of the bed. Her eyes are deeply hollowed. She somehow looks like she has aged 20 years" },
      { t: "p", x: "She is dying. She knows it. She would pray to god, but she knows that if he was listening he surely didn't care..at best." },
      { t: "p", x: "At worst she would be talking to a cosmic sadist who delights in the suffering of little ones." },
      { t: "p", x: "A few hours go by and quickly she deteriorates." },
      { t: "p", x: "The doctor returns to the room followed by assistants in lab coats." },
      { t: "p", x: "\"Prepare unit dash two seven for immediate extraction. Both of you restrain the patient this time. Only the infant's life matters. Once complete, transmit the specimen to immediate life support, and dispose of the surrogate as always.\"" },
      { t: "p", x: "Walking directly to her bed, they restrain her, but there is little to restrain." },
      { t: "p", x: "Surgery is started immediately to harvest the child from her uterus before she expires. They use no anesthetic to dull the pain." },
      { t: "p", x: "As they cut into her, her eyes barely register the pain." },
      { t: "p", x: "She bleeds out. She is gone." },
      { t: "p", x: "The still child is breathing, but there is no crying or panic. He is transmitted to an incubator by the assistants. There are others in other incubators. Many others." },
      { t: "p", x: "Cut to black" },
      { t: "p", x: "It is the middle of the night. About 2:30AM. An explosion thunders through the laboratory. The lights flicker as armed, masked figures lunge into the laboratory urgently pouring flammable liquids all over the floors and tables. Destruction is the goal. Complete destruction." },
      { t: "p", x: "One of the figures walks towards the incubators peering inside... only one body inside is still moving. Immediately they are recognized as infants. The figure pulls their mask down. She is a young female.. the same kind as the child's mother. She looks down at the baby inside the incubator, recognizing it as her kind.. She is overcome with pity and rage as it floods through her emotions looking at all the dead." },
      { t: "p", x: "\"THIS ONE IS ALIVE! ITS STILL ALIVE\" she screams to the others, breathing heavily" },
      { t: "p", x: "They all gather around the incubator as she picks up the baby, wriggling in her hands. He is still so small." },
      { t: "p", x: "\"But how?\" Some of the others ask. \"This has never happened,,It can't happen. It shouldnt be possible..\" they talk amongst themselves." },
      { t: "p", x: "The camera is focused now on the woman holding the child. It pans up from the child in her arms to her face." },
      { t: "p", x: "\"I knew it would happen..i begged god.. I begged him. I didnt think he would say yes... thank you... god thank you\" as she tears up with joy" },
      { t: "p", x: "Fade to black" },
    ],
    es: [
      { t: "p", x: "La pantalla está en negro. Se oye una respiración pesada, profunda, en pánico. Es una hembra en trabajo de parto. Está rogando y suplicándoles a sus torturadores que paren. \"N.. nooo ... no por favor....... Por favor paren.\"" },
      { t: "p", x: "La pantalla se abre y muestra a una hembra en trabajo de parto. Es de la clase conejo. Los desechados. Una de las liebres. Los que no pertenecen. Fueron expulsados de la sociedad durante la reforma. La reforma que transformó el mundo tal como lo conocemos, de aquel desastre caótico y asqueroso marcado por la guerra y la negrura a una clase nueva, limpia, ordenada. Esto es lo que nos enseñan los Líderes." },
      { t: "p", x: "De vuelta a la hembra. Es joven. Demasiado joven para estar así de embarazada. Demasiado joven para criar a un hijo... si eso fuera siquiera posible.. Que no lo es." },
      { t: "p", x: "La pantalla se abre y muestra a su torturador. Mirando directo a la cámara. Es viejo. Un doctor o científico con la típica bata blanca y lentes. Es de la legión de los grandes Cerdos que dirigieron la reorganización de lo que conocíamos.. En otra cosa." },
      { t: "p", x: "Está bien afeitado.. Cargando las arrugas del tiempo por toda la cara. Sus ojos te miran, pero aparentemente no hay nada ahí. No queda nada natural. Una muerte en su semblante que no debería existir en el rostro de los vivos." },
      { t: "p", x: "En la mano sostiene una jeringa. Con calma le asegura a la hembra que este y solo este es el camino a la redención.. A volverse limpia. \"Pronto\" dice suavemente.. \"Pronto vas a entender. Todo va a tener sentido.. Eres.. Tan importante.\"" },
      { t: "p", x: "\"Por favor señor.. Por favor.. Tengo tanto dolor.. Por favor no haga esto\" suplica.. Sabiendo perfectamente que es inútil siquiera intentar negociar con esta raza.. Estos.. Líderes. Ella conoce los horrores indecibles que le han infligido a los suyos desde mucho antes de que ella naciera.. Mucho tiempo le han temido a esta raza." },
      { t: "p", x: "Él dirige su atención a otro punto de la sala donde bajo las luces hay algo parecido a un acuario. Hay tubos que entran y salen de él. Adentro, bajo una capa espesa de neblina, parece haber algo de aspecto muy ajeno. Casi como un hongo silvestre todo retorcido y nudoso sobre sí mismo. Los cuerpos fructíferos no se parecen a ningún hongo que ella haya visto en la verde tierra de dios. Esto era algo muy distinto." },
      { t: "p", x: "Al lado del acuario hay una jaula pequeña con una rata adentro. Ella no puede entender el idioma de la rata pero sí puede oír el terror en sus chillidos. El doctor mete la mano en la jaula con unas pinzas de acero inoxidable, atrapando a la fuerza a la rata entre ellas. La rata está chillando mientras él abre el acuario con la forma de vida misteriosa adentro, dejando caer a la rata y cerrando la puerta rápido." },
      { t: "p", x: "La rata mira alrededor buscando cualquier tipo de escape. Está sudando puro miedo." },
      { t: "p", x: "De pronto una nube oscura de neblina emerge de la forma de vida, flotando justo encima del piso del acuario, envolviéndose alrededor del pobre animal." },
      { t: "p", x: "La cámara se acerca a los ojos de la rata y vemos pequeños zarcillos de la neblina agruparse alrededor de los ojos de la rata, filtrándose ahora violentamente dentro del cuerpo de la rata. Convulsiones se apoderan de su cuerpecito, sacudiéndolo mientras la sangre le sale expulsada por la boca y los ojos. Las convulsiones se vuelven más y más violentas hasta que, tan rápido como empezaron, paran." },
      { t: "p", x: "La paz reemplaza rápido a las sacudidas y una calma repentina se apodera del cuerpo de la rata como una dosis fuerte de anestesia. Los ojos de la rata se han vuelto de un blanco nublado, y aun así parece ver con plena conciencia." },
      { t: "p", x: "Es en este punto que el doctor vuelve a meter la mano en el acuario, pero ahora solo con las manos desnudas, y levanta con suavidad al ahora dócil animal. No hay nada más que obediencia callada en la cara del animal mientras el doctor lo coloca sobre una pequeña plataforma de acero inoxidable. Tomando la jeringa, inserta la aguja profundo en el abdomen de la rata. No hay gritos de dolor. Ni vacilación." },
      { t: "p", x: "Extrae una jeringa llena de sangre de la cavidad del cuerpo de la rata, pero... algo está mal.." },
      { t: "p", x: "Lo que debería ser una sangre roja carmesí profunda es en cambio una sustancia blanca opaca, casi lechosa." },
      { t: "p", x: "Después de retirar la aguja por completo, el nuevo animal obediente simplemente se queda ahí parado. Sin emoción. Sin urgencia. Sin pánico. Casi como si estuviera muerto aunque se ve completamente vivo." },
      { t: "p", x: "Volviendo su atención a la hembra embarazada que está encadenada a la camilla, camina hacia ella mientras una expresión de horror se apodera de su cara. la conciencia de lo que en verdad está pasando le pega como una bala en el cerebro." },
      { t: "p", x: "Levantando la toalla que le cubría el abdomen, deja al descubierto su vientre hinchado de embarazo." },
      { t: "p", x: "\"Por favor..\" gimotea. \"Por favor no me lastime...por favor no lastime a mi...\"" },
      { t: "p", x: "Está entrando en pánico.. Respirando rápido y pesado \"No.. no.. no no nooooo\"" },
      { t: "p", x: "Lento, metódico, y sin ninguna vacilación, empuja la aguja dentro de su vientre, perforando la piel y bajando, atravesando el útero, directo al cuerpito de adentro, vaciando la jeringa por completo." },
      { t: "p", x: "Se le corta la respiración.. Como congelada.. No puede jalar nada de aire" },
      { t: "p", x: "El terror se ha apoderado de la muchacha ahora y se desmaya. Nada queda escrito. Nada queda registrado" },
      { t: "p", x: "Despierta al día siguiente todavía amarrada a la camilla, pero una debilidad se ha apoderado de su cuerpo. Una náusea profunda y poderosa le estalla adentro y vacía violentamente el poco contenido que quedaba en su estómago por el costado de la camilla. Tiene los ojos profundamente hundidos. De alguna manera se ve como si hubiera envejecido 20 años" },
      { t: "p", x: "Se está muriendo. Lo sabe. Le rezaría a dios, pero sabe que si él estaba escuchando de seguro no le importaba..en el mejor de los casos." },
      { t: "p", x: "En el peor, estaría hablándole a un sádico cósmico que se deleita en el sufrimiento de los pequeños." },
      { t: "p", x: "Pasan unas horas y rápidamente se deteriora." },
      { t: "p", x: "El doctor vuelve a la sala seguido de asistentes en batas de laboratorio." },
      { t: "p", x: "\"Preparen la unidad guion dos siete para extracción inmediata. Los dos sujeten a la paciente esta vez. Solo importa la vida del infante. Una vez completado, transmitan el espécimen a soporte vital inmediato, y desechen a la sustituta como siempre.\"" },
      { t: "p", x: "Caminando directo a su camilla, la sujetan, pero hay poco que sujetar." },
      { t: "p", x: "La cirugía empieza de inmediato para cosechar al niño de su útero antes de que expire. No usan anestesia para calmar el dolor." },
      { t: "p", x: "Mientras la abren, sus ojos apenas registran el dolor." },
      { t: "p", x: "Se desangra. Se fue." },
      { t: "p", x: "El niño quieto está respirando, pero no hay llanto ni pánico. Es transmitido a una incubadora por los asistentes. Hay otros en otras incubadoras. Muchos otros." },
      { t: "p", x: "Corte a negro" },
      { t: "p", x: "Es mitad de la noche. Como las 2:30AM. Una explosión truena por todo el laboratorio. Las luces parpadean mientras figuras armadas y enmascaradas se lanzan dentro del laboratorio derramando con urgencia líquidos inflamables por todos los pisos y las mesas. La destrucción es el objetivo. Destrucción completa." },
      { t: "p", x: "Una de las figuras camina hacia las incubadoras y se asoma adentro... solo un cuerpo adentro sigue moviéndose. De inmediato los reconocen como infantes. La figura se baja la máscara. Es una hembra joven.. de la misma clase que la madre del niño. Mira al bebé dentro de la incubadora, reconociéndolo como de los suyos.. La invaden la lástima y la rabia mientras le inundan las emociones al mirar a todos los muertos." },
      { t: "p", x: "\"¡ESTE ESTÁ VIVO! TODAVÍA ESTÁ VIVO\" les grita a los otros, respirando pesado" },
      { t: "p", x: "Todos se juntan alrededor de la incubadora mientras ella levanta al bebé, retorciéndose en sus manos. Todavía es tan pequeño." },
      { t: "p", x: "\"¿Pero cómo?\" preguntan algunos de los otros. \"Esto nunca ha pasado,,No puede pasar. No debería ser posible..\" hablan entre ellos." },
      { t: "p", x: "La cámara está enfocada ahora en la mujer que sostiene al niño. Sube desde el niño en sus brazos hasta su cara." },
      { t: "p", x: "\"Sabía que iba a pasar..le rogué a dios.. Le rogué. No pensé que fuera a decir que sí... gracias... dios gracias\" mientras se le llenan los ojos de lágrimas de alegría" },
      { t: "p", x: "Fundido a negro" },
    ],
  },
  {
    slug: "chapter-2-1",
    n: "02",
    enHead: "Chapter 2. The World of War",
    esHead: "Capítulo 2. El Mundo de la Guerra",
    enPart: "Part 1",
    esPart: "Parte 1",
    ytEn: "pyST2Z_2II8",
    ytEs: "4hQ5hbQhSUE",
    figures: [
      { at: 4, side: "right", src: "/images/daniel.jpg" },
      { at: 21, side: "left", src: "/images/motherandson.jpg" },
    ],
    en: [
      { t: "p", x: "A bright field of yellow canola flowers is overshadowed by a dark blue sky. It is strangely warm even though a storm brews on the horizon." },
      { t: "p", x: "The camera pans out and we see a line of weary guerilla fighters walking together. Their clothes are tattered and old. Though they normally wear masks, they are in safe territory so each soldier has forsaken their headgear so they can talk and sing freely and feel the warmth of the sun against their skin. Though these fighters are young, some even teenagers, they are battle scarred and appear much older than their years." },
      { t: "p", x: "They walk in a line. Sometimes singing. Sometimes pestering each other with insults." },
      { t: "p", x: "\"You couldn't hit your face with your own hand\", one mocked. \"Brother I don't even want to know where your hand has been.\" The other returned. \"Your mom knows..\" He shot back as the others laughed." },
      { t: "i", x: "All is in good spirit however as this gamey pack of creatures are more like siblings. Any one of them would take a bullet for each other and they all know it. Their strength is working seamlessly as a group." },
      { t: "i", x: "One of the members carries with her a prize. A small bundle she carries close to her chest. It makes no sound. Her face is a mixture of fear and pride. Knowing she must deliver this package to relative safety before the enemy knows it's missing. Or clues in on where it went. There aren't many plausible options and she knows it. Extrapolation would be a matter of minutes for the Leaders. They are smart. Smarter than any other living thing. Their cold calculations are unencumbered by trivial things like empathy or mercy. No, theirs is a merciless bureaucracy, an order that serves only an unrelenting lust for a stronger position. An impenetrable one." },
      { t: "i", x: "Deep inside she knows how unlikely it is they will win this war. The hopelessness is at the tip of everyone's mind. You can catch it in their eyes from time to time. Because it's really just a matter of time before the inevitable..." },
      { t: "i", x: "But none of that.. Those thoughts have a tendency of decreasing motivation. And if we need anything right now, it is motivation. A reason to keep going." },
      { t: "i", x: "Besides.. She has a prize. And her heart tells her this prize may turn the tide." },
      { t: "i", x: "She hopes... She hopes." },
      { t: "p", x: "A short montage commences where we watch the baby grow among the tribe. A whole season passes. From summer to winter, to fall and then all the way around." },
      { t: "p", x: "The baby is now an older child. Akin to a 12 year old human child. He is bold, running around the perimeter of the safety zone with some of the other children. Exploring the woods and the streams and ghost towns blown out and decayed from artillery shelling, bombing, gunfire.." },
      { t: "p", x: "He picks up a handful of old spent rounds. Fascinated by what ghosts hide behind the decay of the past." },
      { t: "p", x: "This is the furthest he has ever been away from the tribe. About an hour away from the central village buried deep in the forest where the elders protect the young and live in relative peace." },
      { t: "p", x: "The buildings in the town are barely standing. Mostly partial walls and caved in roofs, if there are roofs at all. There are bones strewn about with the rusting corroded metal parts of old weaponry and small armoured vehicles missing wheels and other parts that were either destroyed in battle or looted by any of the many roaming hoards of hopeless creatures who come out at night looking for something.. Anything that could be traded for food or cigarettes.." },
      { t: "p", x: "\"We shouldn't be here.. A girl said to him... \"What.. are you scared?\" He teased her" },
      { t: "p", x: "\"I don't know, guys,\" muttered Bram, nervously kicking a small stone in the rubble. \"We should head back. This place feels wrong.\"" },
      { t: "p", x: "\"Stop worrying,\" said SIlas \"There's nothing out here but old bones and junk.\"" },
      { t: "p", x: "Bram shot a glance at a broken-down tank missing its turret. \"That 'junk' used to kill people,\" he said quietly, eying the rusted metal. \"My dad said these old weapons are haunted by the spirits of the ones they took.\"" },
      { t: "p", x: "Silas just laughed, tapping the hat's stiff brim. \"We can handle ghosts,\" he teased, puffing out his chest. \"Besides, we came here to explore. Don't tell me you're all ready to run home already.\"" },
      { t: "p", x: "\"I do,\" Bram insisted, crouching beside a fallen wall and sifting through the rubble. \"There's a reason elders warn us never to come here.\"" },
      { t: "p", x: "He is not supposed to be this far out. His mother has warned him many times of the dangers lurking far away from the central village.. But he is curious. He has always been curious. Even in his dreams he longs for adventure.. To be able to fight with the other troops or hunt for food and supplies.. *He looks up to the elder males of the tribe. Especially the senior, Daniel.*" },
      { t: "i", x: "Long had he watched Daniel in fascination.. In part it was simply because the tribe looks up to Daniel with a type of hidden respect you can feel amongst all the others. He is the oldest of his kind, which is not saying much as no real elders exist anymore... Death has always come easy to the weak and the sick.." },
      { t: "i", x: "Daniel has a deep scar that cuts across his face from top left to bottom right, right through his nose and lips. Years ago this mark was given to him by one of the wild monsters that hunt the world. These beasts were a type of enormity that the boy would not actually have a frame of reference for as he's never seen one in person.. Probably a good thing even though the idea excites him.." },
      { t: "i", x: "According to the other members of the tribe, Daniel barely lived through the encounter, though he fired off every round in his rifle deep into the belly of this beast. In fact it was only chance that when the tribe went looking for him that they stumbled on the monster's cave, searching inside they saw what appeared to be Daniel's lifeless bloody body. Why the monster hadn't already consumed the body no one knows, but the tribe members created a diversion to lure the beast out while others ran inside to rescue the body." },
      { t: "i", x: "They boy had heard this story many times from the other tribe members, and it was always consistent with the details so he believed it." },
      { t: "i", x: "Apparently Daniel was still alive after all this, so they brought him to the tribe's medical officer.. A shaaman really as there was little to no real medical technology available to them other than bandages and cutting tools... some needles and thread to stitch up wounds and a few precious cases of antibiotics stolen from the Leaders during raids on their infrastructure." },
      { t: "i", x: "He developed a deep infection and nobody thought he would survive the night, yet a few days later he emerged from the infirmary on crutches. Very weak, but alive." },
      { t: "i", x: "He was the only one of his kind known to ever escape the clutches of one of these monsters alive and live to talk about it. So of course he became the most interesting person in the tribe overnight. Everytime he tells the tale he makes sure everyone knows the other tribe members who rescued him, as he would not have survived otherwise.. This was one of the many examples of Daniel's humility and love for his others." },
      { t: "i", x: "Daniel was also known for his courage in battle.. There were many stories of his bravery in the face of raging fires and bullet storms to rescue other members who were otherwise trapped in hopeless battles against the forces of the Leaders. Really he should not be alive." },
      { t: "i", x: "The boy feared and admired Daniel." },
      { t: "p", x: "The boy and his friends explored the ghost town going through buildings and basements, turning over old tables and chairs to find old junk from whatever battle passed through this place like a wildfire. So many bones... who know what animal they came from... Old uniforms from soldiers of the Leader's army.. He picks up an old officer's hat and marches around, impressing his friends.. *He has never seen an officer from the Leader's forces..nor had he seen a soldier. No monsters.. No real danger.. So his imagination ran wild with the stories told over and over by the members of his tribe.. And his mother. His mother would put him to bed every night with stories by the firelite.*" },
      { t: "i", x: "He remembered when she told him about the Leaders..." },
      { t: "i", x: "A long time ago... before the world burned, most of the animals lived in relative peace.. Though there were always monsters in the wild, they were not regarded as evil, even though they would maul and consume our kind from time to time, we knew it was part of life and there was a balance. It was sad that someone died, but it was not wrong. Not any more wrong than drowning in the ocean or dying from infection.. It was just the way things were" },
      { t: "i", x: "The smartest animals in the world were the great Hogs. They were so smart, that other animals would often seek them out for help and advice. They were organized and even managed to create impenetrable shelters that no monster could break through. They invented weapons that nobody could even dream of.. Guns, machines that could travel further and faster than horses, medical technology to heal their sick." },
      { t: "i", x: "This race thrived and lived long lives that were not possible for the other animals." },
      { t: "i", x: "But the other animals regarded the great Hogs with reverence and admiration as they would learn from them.. The world was more peaceful and a period of great safety emerged under their leadership.. They soon became known as the Leaders to all the animals.." },
      { t: "i", x: "But an internal war was growing amidst the society of great Hogs.. Factions between two sides with two very different visions for the future. One of the leaders took great exception to the Leaders sharing technology and wisdom with the other animals.. He viewed the other animals as inferior persons who should be used only to serve the Hogs and their people. He envisioned an economy where tokens would be used as a means of trade amongst all the animals, with a portion of this new money being claimed back to the Leadership so they could grow more powerful." },
      { t: "i", x: "After this, the new Leader began a campaign of blaming all the hardships in the great Hog society on a group of animals that roamed the countryside for free.. The Hares." },
      { t: "i", x: "To be fair, the Hogs never really liked the Hares. They often refused to participate as the other animals would. They kept to their own. They had their own customs, their own religions, but this was never more than a mostly minor annoyance amongst the Leaders who were rather more focused on bigger more pertinent issues." },
      { t: "i", x: "The new Leader drove this wedge harder. Blaming the Hares for the economic hardships that afflicted the poorer classes of the Hog society. And the message started to resonate." },
      { t: "i", x: "One day a young girl for their society was found dead in the woods at the hands of one of the great wild monsters. A death hadn't been recorded amongst the society of Hogs in more than two generations. She was brutally mauled." },
    ],
    es: [
      { t: "p", x: "Un campo brillante de flores amarillas de canola queda ensombrecido por un cielo azul oscuro. Hace un calor extraño aunque una tormenta se arma en el horizonte." },
      { t: "p", x: "La cámara se abre y vemos una fila de guerrilleros agotados caminando juntos. Su ropa está hecha jirones y vieja. Aunque normalmente usan máscaras, están en territorio seguro así que cada soldado se ha quitado el casco para poder hablar y cantar libremente y sentir el calor del sol contra la piel. Aunque estos combatientes son jóvenes, algunos incluso adolescentes, están marcados por la batalla y se ven mucho más viejos de lo que son." },
      { t: "p", x: "Caminan en fila. A veces cantando. A veces molestándose unos a otros con insultos." },
      { t: "p", x: "\"No le pegarías a tu propia cara ni con tu propia mano\", se burló uno. \"Hermano, ni quiero saber dónde ha estado tu mano.\" le devolvió el otro. \"Tu mamá sí sabe..\" le respondió mientras los demás se reían." },
      { t: "i", x: "Todo es de buen ánimo sin embargo porque esta manada montaraz de criaturas son más como hermanos. Cualquiera de ellos recibiría una bala por el otro y todos lo saben. Su fuerza es funcionar sin fisuras como grupo." },
      { t: "i", x: "Una de las integrantes carga con ella un premio. Un bulto pequeño que lleva pegado al pecho. No hace ningún ruido. Su cara es una mezcla de miedo y orgullo. Sabiendo que debe entregar este paquete a una seguridad relativa antes de que el enemigo sepa que falta. O se dé cuenta de a dónde fue. No hay muchas opciones plausibles y ella lo sabe. Deducirlo sería cuestión de minutos para los Líderes. Son inteligentes. Más inteligentes que cualquier otro ser vivo. Sus cálculos fríos no están estorbados por cosas triviales como la empatía o la misericordia. No, la suya es una burocracia despiadada, un orden que sirve solo a un ansia implacable por una posición más fuerte. Una impenetrable." },
      { t: "i", x: "Muy adentro ella sabe lo poco probable que es que ganen esta guerra. La desesperanza está en la punta de la mente de todos. Se les alcanza a ver en los ojos de vez en cuando. Porque en realidad es solo cuestión de tiempo antes de lo inevitable..." },
      { t: "i", x: "Pero nada de eso.. Esos pensamientos tienen la tendencia de bajar la motivación. Y si algo necesitamos ahora mismo, es motivación. Una razón para seguir." },
      { t: "i", x: "Además.. Ella tiene un premio. Y su corazón le dice que este premio puede cambiar el rumbo." },
      { t: "i", x: "Ella espera... Ella espera." },
      { t: "p", x: "Comienza un montaje corto donde vemos al bebé crecer entre la tribu. Pasa una estación entera. De verano a invierno, a otoño y luego toda la vuelta." },
      { t: "p", x: "El bebé ahora es un niño más grande. Parecido a un niño humano de 12 años. Es atrevido, corriendo por el perímetro de la zona de seguridad con algunos de los otros niños. Explorando los bosques y los arroyos y los pueblos fantasma reventados y podridos por el bombardeo de artillería, las bombas, los disparos.." },
      { t: "p", x: "Recoge un puñado de casquillos viejos. Fascinado por los fantasmas que se esconden detrás de la podredumbre del pasado." },
      { t: "p", x: "Esto es lo más lejos que ha estado jamás de la tribu. Como a una hora de la aldea central enterrada en lo profundo del bosque donde los ancianos protegen a los jóvenes y viven en relativa paz." },
      { t: "p", x: "Los edificios del pueblo apenas siguen en pie. En su mayoría paredes a medias y techos hundidos, si es que hay techos. Hay huesos regados junto con las piezas de metal oxidado y corroído de armamento viejo y vehículos blindados pequeños a los que les faltan ruedas y otras partes que o fueron destruidas en la batalla o saqueadas por cualquiera de las muchas hordas errantes de criaturas sin esperanza que salen de noche buscando algo.. Cualquier cosa que se pueda cambiar por comida o cigarros.." },
      { t: "p", x: "\"No deberíamos estar aquí.. le dijo una niña... \"Qué.. ¿tienes miedo?\" la molestó él" },
      { t: "p", x: "\"No sé, muchachos,\" murmuró Bram, pateando nervioso una piedrita entre los escombros. \"Deberíamos regresar. Este lugar se siente mal.\"" },
      { t: "p", x: "\"Deja de preocuparte,\" dijo SIlas \"Aquí afuera no hay nada más que huesos viejos y chatarra.\"" },
      { t: "p", x: "Bram le echó un vistazo a un tanque destartalado al que le faltaba la torreta. \"Esa 'chatarra' antes mataba gente,\" dijo en voz baja, mirando el metal oxidado. \"Mi papá decía que estas armas viejas están embrujadas por los espíritus de los que se llevaron.\"" },
      { t: "p", x: "Silas nada más se rió, dándole golpecitos al ala tiesa del sombrero. \"Podemos con unos fantasmas,\" lo molestó, sacando el pecho. \"Además, vinimos aquí a explorar. No me digas que ya están todos listos para correr a casa.\"" },
      { t: "p", x: "\"Yo sí,\" insistió Bram, agachándose junto a una pared caída y escarbando entre los escombros. \"Por algo los ancianos nos advierten que nunca vengamos aquí.\"" },
      { t: "p", x: "No se supone que esté tan lejos. Su madre le ha advertido muchas veces de los peligros que acechan lejos de la aldea central.. Pero es curioso. Siempre ha sido curioso. Hasta en sus sueños anhela la aventura.. Poder pelear con las otras tropas o cazar por comida y suministros.. *Admira a los machos mayores de la tribu. Sobre todo al veterano, Daniel.*" },
      { t: "i", x: "Mucho tiempo había observado a Daniel con fascinación.. En parte era simplemente porque la tribu mira a Daniel con un tipo de respeto escondido que se siente entre todos los demás. Es el más viejo de los suyos, lo cual no es decir mucho porque ya no existen ancianos de verdad... La muerte siempre le ha llegado fácil a los débiles y a los enfermos.." },
      { t: "i", x: "Daniel tiene una cicatriz profunda que le cruza la cara de arriba a la izquierda hasta abajo a la derecha, justo por la nariz y los labios. Hace años esta marca se la dio uno de los monstruos salvajes que cazan por el mundo. Estas bestias eran un tipo de enormidad para la que el niño en realidad no tendría un marco de referencia porque nunca ha visto una en persona.. Probablemente algo bueno aunque la idea lo emociona.." },
      { t: "i", x: "Según los otros integrantes de la tribu, Daniel apenas sobrevivió al encuentro, aunque descargó cada bala de su rifle profundo en la panza de esta bestia. De hecho fue solo por casualidad que cuando la tribu fue a buscarlo se toparon con la cueva del monstruo, y buscando adentro vieron lo que parecía ser el cuerpo sin vida y ensangrentado de Daniel. Por qué el monstruo no se había comido ya el cuerpo nadie lo sabe, pero los miembros de la tribu crearon una distracción para sacar a la bestia mientras otros corrieron adentro a rescatar el cuerpo." },
      { t: "i", x: "El niño había escuchado esta historia muchas veces de los otros miembros de la tribu, y siempre era consistente en los detalles así que se la creía." },
      { t: "i", x: "Al parecer Daniel seguía vivo después de todo esto, así que lo llevaron al oficial médico de la tribu.. Un chamán en realidad porque había poca o ninguna tecnología médica de verdad disponible para ellos aparte de vendas y herramientas de corte... unas agujas e hilo para coser heridas y unas pocas cajas preciosas de antibióticos robadas a los Líderes durante asaltos a su infraestructura." },
      { t: "i", x: "Le dio una infección profunda y nadie pensó que sobreviviría la noche, y aun así unos días después salió de la enfermería en muletas. Muy débil, pero vivo." },
      { t: "i", x: "Era el único de los suyos que se supiera que hubiera escapado vivo de las garras de uno de estos monstruos y vivido para contarlo. Así que por supuesto se volvió la persona más interesante de la tribu de la noche a la mañana. Cada vez que cuenta la historia se asegura de que todos sepan de los otros miembros de la tribu que lo rescataron, porque de otro modo no habría sobrevivido.. Este era uno de los muchos ejemplos de la humildad de Daniel y del amor por los suyos." },
      { t: "i", x: "Daniel también era conocido por su valor en la batalla.. Había muchas historias de su valentía frente a incendios furiosos y tormentas de balas para rescatar a otros miembros que de otro modo quedaban atrapados en batallas sin esperanza contra las fuerzas de los Líderes. En realidad no debería estar vivo." },
      { t: "i", x: "El niño le temía a Daniel y lo admiraba." },
      { t: "p", x: "El niño y sus amigos exploraron el pueblo fantasma entrando a edificios y sótanos, volteando mesas y sillas viejas para encontrar chatarra vieja de cualquiera que fuera la batalla que pasó por este lugar como un incendio forestal. Tantos huesos... quién sabe de qué animal venían... Uniformes viejos de soldados del ejército del Líder.. Recoge un sombrero viejo de oficial y marcha por ahí, impresionando a sus amigos.. *Nunca ha visto a un oficial de las fuerzas del Líder..ni había visto a un soldado. Ningún monstruo.. Ningún peligro real.. Así que su imaginación se desbocaba con las historias contadas una y otra vez por los miembros de su tribu.. Y su madre. Su madre lo acostaba todas las noches con historias junto a la luz del fuego.*" },
      { t: "i", x: "Se acordaba de cuando ella le contó de los Líderes..." },
      { t: "i", x: "Hace mucho tiempo... antes de que el mundo ardiera, la mayoría de los animales vivía en relativa paz.. Aunque siempre hubo monstruos en el monte, no se les consideraba malvados, aunque despedazaran y devoraran a los nuestros de vez en cuando, sabíamos que era parte de la vida y que había un equilibrio. Era triste que alguien muriera, pero no estaba mal. No más mal que ahogarse en el mar o morir de una infección.. Simplemente así eran las cosas" },
      { t: "i", x: "Los animales más inteligentes del mundo eran los grandes Cerdos. Eran tan inteligentes, que los otros animales seguido los buscaban por ayuda y consejo. Eran organizados e incluso lograron crear refugios impenetrables que ningún monstruo podía romper. Inventaron armas que nadie podría ni soñar.. Pistolas, máquinas que podían viajar más lejos y más rápido que los caballos, tecnología médica para curar a sus enfermos." },
      { t: "i", x: "Esta raza prosperó y vivió vidas largas que no eran posibles para los otros animales." },
      { t: "i", x: "Pero los otros animales veían a los grandes Cerdos con reverencia y admiración porque aprendían de ellos.. El mundo era más pacífico y surgió un periodo de gran seguridad bajo su liderazgo.. Pronto se les conoció como los Líderes entre todos los animales.." },
      { t: "i", x: "Pero una guerra interna estaba creciendo dentro de la sociedad de los grandes Cerdos.. Facciones entre dos bandos con dos visiones muy distintas del futuro. Uno de los líderes se opuso rotundamente a que los Líderes compartieran tecnología y sabiduría con los otros animales.. Veía a los otros animales como personas inferiores que debían usarse solo para servir a los Cerdos y a su gente. Imaginaba una economía donde se usarían fichas como medio de intercambio entre todos los animales, con una porción de este dinero nuevo reclamada de vuelta al Liderazgo para que pudieran volverse más poderosos." },
      { t: "i", x: "Después de esto, el nuevo Líder comenzó una campaña culpando de todas las penurias de la sociedad de los grandes Cerdos a un grupo de animales que vagaba libre por el campo.. Las Liebres." },
      { t: "i", x: "Para ser justos, a los Cerdos nunca les cayeron muy bien las Liebres. Seguido se negaban a participar como lo hacían los otros animales. Se mantenían entre los suyos. Tenían sus propias costumbres, sus propias religiones, pero esto nunca fue más que una molestia mayormente menor entre los Líderes que estaban más bien enfocados en asuntos más grandes y más pertinentes." },
      { t: "i", x: "El nuevo Líder metió esta cuña más duro. Culpando a las Liebres de las penurias económicas que afligían a las clases más pobres de la sociedad de los Cerdos. Y el mensaje empezó a calar." },
      { t: "i", x: "Un día una muchacha joven de su sociedad fue encontrada muerta en el bosque a manos de uno de los grandes monstruos salvajes. No se había registrado una muerte entre la sociedad de los Cerdos en más de dos generaciones. Fue despedazada brutalmente." },
    ],
  },
  {
    slug: "chapter-2-2",
    n: "02",
    enHead: "Chapter 2. The World of War",
    esHead: "Capítulo 2. El Mundo de la Guerra",
    enPart: "Part 2",
    esPart: "Parte 2",
    ytEn: "jSb00sZzRY0",
    ytEs: "waj2SOy_Fj0",
    figures: [
      { at: 30, side: "right", src: "/images/daniel3.jpg" },
    ],
    en: [
      { t: "i", x: "Her body was found by travelers the next day and brought back to the city." },
      { t: "i", x: "An investigation was started immediately to find out how such a tragedy could possibly happen." },
      { t: "i", x: "It turned out that the little girl was playing at the edge of the city and wandered off from her friends to follow a small fluffy hare. The hare was the cutest thing she had ever seen, so she chased it through the field towards the woods. The story was recalled by the other kids with her that day as they saw her run off and.. Well that story basically tells itself." },
      { t: "i", x: "It wasn't long before the new Leader seized on this story and used it to condemn the Hares. The people were angry and he knew it. He used it. The girl was set up as a martyr.. A god like figure that some of the people began to worship.. Shrines were erected around the city and a movement was started." },
      { t: "i", x: "The others amongst the Leaders were utterly horrified by this new development as they had always shunned religious thinking in favour of science. Data. That could be measured and replicated. This new force was non falsifiable.. You could not recon with it. And it was gaining steam among the people." },
      { t: "i", x: "A famine took over the land as rain became scarce and crops started to die. The new religion growing among the people looked at this as a failure of science." },
      { t: "i", x: "The new Leader rode this wave of resentment against the skeptical class and by the next election, won a massive majority and mandate byt eh people. The new people. The new ideas. The new religion." },
      { t: "i", x: "The deified girls face was monumented around the city and countryside and fundamentally became the religion of state." },
      { t: "i", x: "But the new Leader was not religious. It was simply a means to an end. He neither worshiped the girl nor cared about her story beyond how it could be used to launch him into power. And thus, he succeeded with his wicked plan." },
      { t: "i", x: "The Hares were immediately singled out as animals or pests to be disposed of. He turned the people's anger against them and blamed the Hares and the scientists for the famine that was still plaguing society." },
      { t: "i", x: "War soon broke out, with the old Leaderhip and their supporters against the new powerful Leader and his forces." },
      { t: "i", x: "The Great Hogs were at war. The world was at war. And every animal was drawn into it whether they wanted to or not." },
      { t: "i", x: "But many of the other animals, including the hares sided with the Scientists and after a few years the war began to turn against the new leader and it looked as if hope may be at the horizon soon" },
      { t: "i", x: "Thus the new Leader ordered his soldiers to hunt the countryside for any advantage that may turn the tides in his favour. Venturing into all 4 corners of the earth, these troops scoured the ma, investigating every rumour.. Every theory.. everything" },
      { t: "i", x: "A small village many days walk away from the central city of the Leaders sat just at the foot of the Great Grandfather Mountains. These mountains were very old.. Very very old." },
      { t: "i", x: "A deep set of caves ran under the mountains, but the locals knew not to ever venture inside as many stories of animals getting lost forever inside them are told by the elders to their children." },
      { t: "i", x: "But it is not because these caves go deep and branch off at many points into the darkness, rather there is something dangerous that lies in the deep. Something unearthly. Something that drove their ancestors mad" },
      { t: "i", x: "And it was exactly this that motivated the Leader's troops into the darkness to investigate. And it is there that they disappeared.. Almost all of them." },
      { t: "i", x: "Weeks after the troops disappeared without communication the Leadership sent out a new investigating party to find them. They searched at all entrances of the caves and roamed the foothills. After many days searching, nearly ready to give up, they stumbled on a lone figure hobbling weakly through a small village.. The villagers ran from this figure hiding in their homes, screaming in fear at the other locals. \"PLAGUE!\" they yelled \"SICKNESS SICKNESS!" },
      { t: "i", x: "It became clear as the soldiers approached that this figure was once like them. One of the Noble Hogs.. the Leaders. But this figure was a decayed, emaciated visage of its former self.. The skin had turned from pink to sickly green and almost black.. The hair had fallen out. The eyes were sunken and puss festered out of open sores around his body." },
      { t: "i", x: "As the soldiers drew near, their captain ordered them to approach no further as the figure turned to face them directly. His hands were clasped tightly as if to shield something within.." },
      { t: "i", x: "He drops to his knees, whispering horsley \"its...inside...inside..\" And just like that, whatever life was left in him expired and he collapsed to the ground as if he was made of only paper." },
      { t: "i", x: "The commanding officer drew near and with his rifle, pried open the hands of the deceased figure, only to reveal something that looked like a very small fungal like growth.. yet more alien.. Like nothing he had ever seen on this earth.. Its fruiting body was jet black with fluorescent yellow tendrils reaching away from it. These tendrils moved on their own.. Almost like they were vibrating together." },
      { t: "i", x: "The officer collected the sample in a small pouch, leaving the deceased body on the ground" },
      { t: "i", x: "Little did he know that the contents in that pouch would be instrumental in turning the tides of war in a way so catastrophic and unpredictable that the world would change.. Of course the world is always changing.. But not like this.. Never like this." },
      { t: "i", x: "The boy remembered this story vividly. He remembered his mother reciting it by the firelight. He remembered her words as she described this little alien thing that the Leaders discovered and its terrifying power weaponized by the new Leader during the war.. Almost completely wiping out the other Great Hogs.. the scientists." },
      { t: "i", x: "It was no mere chemical weapon, though it had this effect in spades, but it could infect a single organism in a village that would in turn utterly devastate the entire village without the attackers so much as lifting a finger. There were many stories of an infected animal almost bursting apart with tendrils as long as 3 tanks lined up, ripping and tearing the flesh of any creature in its wake. Creatures would explode in a pool of blood as these alien like arms destroyed any moving thing, infecting new hosts which would carry on until the entire village was covered in the blood and body parts of the innocent lives shredded by this monstrous force. Even the little children were shown no mercy as their legs and arms were torn from their bodies, with new tendriles reaching out from the wounds.." },
      { t: "i", x: "This force would ultimately stop once the entire village was destroyed.. Somehow.. Always under the control of the new Leader. But how... How could such a devastating force be controlled.. How." },
      { t: "i", x: "The boy often had nightmares of these wire like tendrils, though he had never seen them in real life. So many dreams of exploding bodies and pools of blood running like a river. So much suffering. So much crying.. \"God... God please..\"." },
      { t: "i", x: "Now it definitely occurred to the boy the incredible dangers that were in this dark world, and how this danger would exponentially increase as he ventured further and further from the central safe area. But, sometimes a child is meant to disobey their parents.. For better.. Or for.. Worse." },
      { t: "p", x: "As the boy marched there in the old officer's hat, trying to impress his friends, none of them saw, or expected, or smelled the massive body that was approaching behind them. And that might be for the best." },
      { t: "p", x: "In front of the boy, watching his entertaining gestures was a young girl hanging on his every word." },
      { t: "p", x: "And just like that, powerful horizontal jaws with long tusks on both sides reached down, almost out of nowhere, severing her body in the middle.. Lifting her upper body up to the monster's full height, the boy watched as its powerful jaws crunched down on her quickly dying body with the awful finality of a killing blow. She then disappeared down the beast's throat." },
      { t: "p", x: "Paralyzed with fear the boy and the other children did not move.. Until almost by some mystical forces, their legs and voices grew power and they scattered and screamed.. But the beast was not done. Though it's size was 20-30 times their own, it somehow moved faster than them and was quickly upon another, tearing the child's face clear off its head and goring his abdomen with its tusks." },
      { t: "p", x: "The monster was a horrifying creature resembling a huge bear with a mastodon's tusks, but with jaws opening horizontally instead of vertically.. Its eyes could barely be seen under its thick dark hair... the monster stunk like dead rotting corpses." },
      { t: "p", x: "Picking the kids off one by one and bludgeoning their little bodies, the beast then turned towards the boy, but there was nowhere for the boy to run.. This was it.. It's over.. His short little life was going to end in the ugliest, most terrifying way and he knew it.." },
      { t: "p", x: "The beast approached with its tusks.. And just as it went in for the kill, something happened.. Something very unexpected.. Something very very .. odd." },
      { t: "p", x: "Lying with his back against the ground, preparing for his final moment, the boy's chest explodes open, with blood spraying everywhere.. But it was not the beast.. Something quickly emerged from inside the boy, reaching out towards the beast. Like dark blackened wires, there were 5, 10, 20 of these long protruding branches extending out of the his chest now wrapping themselves around the giant beast." },
      { t: "p", x: "The beast used its awesome physical strength to try to release itself, but some of the black wires reached down, plunging themselves into the ground as some sort of support or leverage as they clamped down and squeezed the beast.. They squeezed harder and harder as if powered by some sort of hydraulic machine.. The boys watched as they crushed the beast and blood gushed out of its sides.. Dying.. Suffocating." },
      { t: "p", x: "Looking down the boy saw these very wiry arms still connected to something inside his body. The pain of his torn open chest cavity suddenly hitting him like a truck.. He screamed as he looked inside to see his own heart beating with little black wires running around and through it." },
      { t: "p", x: "Sometimes too much can happen for the brain to manage and it does a reboot. By some mercy of the gods, this occasionally happens during the worst of things. And it happened to the boy that day" },
      { t: "p", x: "Black." },
      { t: "p", x: "Eyes slowly opening. Blinking to see sunlight and a face staring down at him. It was the other boy from the safe zone that had tagged along.. Still alive." },
      { t: "p", x: "He lurched upwards grabbing his chest. His shirt was torn open, but his chest was... fine? He searched his whole body frantically for injury and found nothing." },
      { t: "p", x: "\"What happened, where are the others?\" he asked in a panic. The other child's face filled with tears \"they're dead.. There's nothing left.. THERE'S NOTHING LEFT\"" },
      { t: "p", x: "The boy rose to look around.. Surveying the landscape there was dried blood everywhere and the body parts of other children strewn around like garbage littering the grass and rocks. And there, in the centre of it all was the wrangled, strangled corpse of the monster." },
      { t: "p", x: "\"What happened?...\" he said out loud.. Looking down at his chest, not knowing if he was in a dream, a nightmare, or an even more frightening reality. \"..what happened..\"" },
      { t: "p", x: "Cut to black." },
    ],
    es: [
      { t: "i", x: "Su cuerpo fue encontrado por viajeros al día siguiente y llevado de vuelta a la ciudad." },
      { t: "i", x: "Se inició una investigación de inmediato para averiguar cómo podía llegar a pasar semejante tragedia." },
      { t: "i", x: "Resultó que la niñita estaba jugando en la orilla de la ciudad y se alejó de sus amigas siguiendo a una pequeña liebre esponjada. La liebre era la cosa más tierna que había visto en su vida, así que la persiguió por el campo hacia el bosque. La historia la contaron los otros niños que estaban con ella ese día porque la vieron irse corriendo y.. Bueno esa historia básicamente se cuenta sola." },
      { t: "i", x: "No pasó mucho antes de que el nuevo Líder se agarrara de esta historia y la usara para condenar a las Liebres. La gente estaba enojada y él lo sabía. Lo usó. La niña fue convertida en mártir.. Una figura como de dios que parte de la gente empezó a adorar.. Se levantaron santuarios por toda la ciudad y comenzó un movimiento." },
      { t: "i", x: "Los demás entre los Líderes quedaron absolutamente horrorizados por este nuevo desarrollo porque siempre habían rechazado el pensamiento religioso a favor de la ciencia. Datos. Que se pudieran medir y replicar. Esta nueva fuerza no era falsable.. No se podía lidiar con ella. Y estaba agarrando fuerza entre la gente." },
      { t: "i", x: "Una hambruna se apoderó de la tierra mientras la lluvia se volvía escasa y los cultivos empezaban a morir. La nueva religión que crecía entre la gente vio esto como un fracaso de la ciencia." },
      { t: "i", x: "El nuevo Líder montó esta ola de resentimiento contra la clase escéptica y para la siguiente elección ganó una mayoría enorme y un mandato de la gente. La gente nueva. Las ideas nuevas. La religión nueva." },
      { t: "i", x: "La cara de la niña deificada fue monumentada por toda la ciudad y el campo y fundamentalmente se volvió la religión del estado." },
      { t: "i", x: "Pero el nuevo Líder no era religioso. Era simplemente un medio para un fin. Ni adoraba a la niña ni le importaba su historia más allá de cómo podía usarse para lanzarlo al poder. Y así, tuvo éxito con su plan malvado." },
      { t: "i", x: "Las Liebres fueron señaladas de inmediato como animales o plagas de las que había que deshacerse. Volteó la ira de la gente contra ellas y culpó a las Liebres y a los científicos de la hambruna que todavía azotaba a la sociedad." },
      { t: "i", x: "Pronto estalló la guerra, con el viejo Liderazgo y sus partidarios contra el nuevo Líder poderoso y sus fuerzas." },
      { t: "i", x: "Los Grandes Cerdos estaban en guerra. El mundo estaba en guerra. Y cada animal fue arrastrado a ella quisiera o no." },
      { t: "i", x: "Pero muchos de los otros animales, incluidas las liebres, se pusieron del lado de los Científicos y después de unos años la guerra empezó a voltearse contra el nuevo líder y parecía que la esperanza podía estar pronto en el horizonte" },
      { t: "i", x: "Así que el nuevo Líder ordenó a sus soldados que rastrearan el campo buscando cualquier ventaja que pudiera cambiar el rumbo a su favor. Aventurándose a los 4 rincones de la tierra, estas tropas peinaron el mapa, investigando cada rumor.. Cada teoría.. todo" },
      { t: "i", x: "Una aldea pequeña a muchos días de camino de la ciudad central de los Líderes estaba justo al pie de las Grandes Montañas Abuelo. Estas montañas eran muy viejas.. Muy muy viejas." },
      { t: "i", x: "Un conjunto profundo de cuevas corría por debajo de las montañas, pero los locales sabían que nunca había que aventurarse adentro porque los ancianos les cuentan a sus hijos muchas historias de animales que se pierden para siempre dentro de ellas." },
      { t: "i", x: "Pero no es porque estas cuevas vayan profundo y se ramifiquen en muchos puntos hacia la oscuridad, más bien es que hay algo peligroso que yace en lo profundo. Algo de otro mundo. Algo que volvió locos a sus antepasados" },
      { t: "i", x: "Y fue exactamente esto lo que motivó a las tropas del Líder a meterse en la oscuridad a investigar. Y es ahí donde desaparecieron.. Casi todos." },
      { t: "i", x: "Semanas después de que las tropas desaparecieran sin comunicación el Liderazgo mandó una nueva partida de investigación a encontrarlos. Buscaron en todas las entradas de las cuevas y recorrieron las faldas. Después de muchos días buscando, ya casi listos para rendirse, se toparon con una figura solitaria que cojeaba débilmente por una aldea pequeña.. Los aldeanos corrían de esta figura escondiéndose en sus casas, gritando de miedo a los otros locales. \"¡PLAGA!\" gritaban \"¡ENFERMEDAD ENFERMEDAD!" },
      { t: "i", x: "Se volvió claro mientras los soldados se acercaban que esta figura alguna vez fue como ellos. Uno de los Nobles Cerdos.. los Líderes. Pero esta figura era una imagen podrida y demacrada de lo que fue.. La piel se le había puesto de rosa a un verde enfermizo y casi negro.. El pelo se le había caído. Los ojos hundidos y el pus le supuraba de llagas abiertas por todo el cuerpo." },
      { t: "i", x: "Mientras los soldados se acercaban, su capitán les ordenó que no avanzaran más porque la figura se volteó a encararlos directamente. Tenía las manos apretadas fuerte como para proteger algo adentro.." },
      { t: "i", x: "Cae de rodillas, susurrando con voz ronca \"está...adentro...adentro..\" Y así nada más, la vida que le quedara se le acabó y se desplomó al suelo como si estuviera hecho solo de papel." },
      { t: "i", x: "El oficial al mando se acercó y con su rifle le abrió a la fuerza las manos a la figura muerta, solo para revelar algo que parecía un crecimiento muy pequeño como de hongo.. pero más ajeno.. Como nada que hubiera visto jamás en esta tierra.. Su cuerpo fructífero era negro azabache con zarcillos amarillos fluorescentes que se estiraban hacia afuera. Estos zarcillos se movían solos.. Casi como si vibraran juntos." },
      { t: "i", x: "El oficial recogió la muestra en una bolsita, dejando el cuerpo muerto en el suelo" },
      { t: "i", x: "Poco sabía que el contenido de esa bolsita sería fundamental para cambiar el rumbo de la guerra de una manera tan catastrófica e impredecible que el mundo cambiaría.. Claro que el mundo siempre está cambiando.. Pero no así.. Nunca así." },
      { t: "i", x: "El niño se acordaba de esta historia vívidamente. Se acordaba de su madre recitándola junto a la luz del fuego. Se acordaba de sus palabras mientras describía esta cosita ajena que los Líderes descubrieron y su poder aterrador convertido en arma por el nuevo Líder durante la guerra.. Casi eliminando por completo a los otros Grandes Cerdos.. los científicos." },
      { t: "i", x: "No era un mero arma química, aunque tenía ese efecto de sobra, sino que podía infectar a un solo organismo en una aldea que a su vez devastaría por completo la aldea entera sin que los atacantes movieran ni un dedo. Había muchas historias de un animal infectado casi reventándose en zarcillos tan largos como 3 tanques en fila, desgarrando y rasgando la carne de cualquier criatura a su paso. Las criaturas explotaban en un charco de sangre mientras estos brazos como de otro mundo destruían toda cosa que se moviera, infectando nuevos huéspedes que seguirían hasta que la aldea entera quedara cubierta de la sangre y los pedazos de cuerpo de las vidas inocentes destrozadas por esta fuerza monstruosa. Ni a los niños pequeños se les mostró misericordia mientras sus piernas y brazos eran arrancados de sus cuerpos, con nuevos zarcillos saliendo de las heridas.." },
      { t: "i", x: "Esta fuerza al final se detenía una vez que la aldea entera quedaba destruida.. De algún modo.. Siempre bajo el control del nuevo Líder. Pero cómo... Cómo podía controlarse una fuerza tan devastadora.. Cómo." },
      { t: "i", x: "El niño seguido tenía pesadillas de estos zarcillos como alambres, aunque nunca los había visto en la vida real. Tantos sueños de cuerpos explotando y charcos de sangre corriendo como un río. Tanto sufrimiento. Tanto llanto.. \"Dios... Dios por favor..\"." },
      { t: "i", x: "Ahora sí se le ocurrió definitivamente al niño los peligros increíbles que había en este mundo oscuro, y cómo este peligro aumentaría exponencialmente mientras se aventurara más y más lejos del área segura central. Pero, a veces un niño está destinado a desobedecer a sus padres.. Para bien.. O para.. Mal." },
      { t: "p", x: "Mientras el niño marchaba ahí con el sombrero viejo de oficial, tratando de impresionar a sus amigos, ninguno de ellos vio, ni esperó, ni olió el cuerpo enorme que se acercaba detrás de ellos. Y eso quizá sea lo mejor." },
      { t: "p", x: "Frente al niño, viendo sus gestos entretenidos, había una niña colgada de cada palabra suya." },
      { t: "p", x: "Y así nada más, unas mandíbulas horizontales poderosas con colmillos largos a ambos lados bajaron, casi de la nada, partiéndole el cuerpo a la mitad.. Levantando la mitad superior de su cuerpo a toda la altura del monstruo, el niño vio cómo sus mandíbulas poderosas se cerraban de golpe sobre su cuerpo que moría rápido con la finalidad horrible de un golpe mortal. Después ella desapareció garganta abajo de la bestia." },
      { t: "p", x: "Paralizados de miedo el niño y los otros niños no se movieron.. Hasta que casi por unas fuerzas místicas, sus piernas y sus voces agarraron poder y se dispersaron y gritaron.. Pero la bestia no había terminado. Aunque su tamaño era 20-30 veces el de ellos, de algún modo se movía más rápido que ellos y pronto estuvo encima de otro, arrancándole la cara de la cabeza al niño y corneándole el abdomen con sus colmillos." },
      { t: "p", x: "El monstruo era una criatura horrorosa que parecía un oso enorme con colmillos de mastodonte, pero con las mandíbulas abriéndose horizontalmente en vez de verticalmente.. Sus ojos apenas se alcanzaban a ver bajo su pelo grueso y oscuro... el monstruo apestaba a cadáveres podridos." },
      { t: "p", x: "Cazando a los niños uno por uno y aporreando sus cuerpecitos, la bestia se volteó entonces hacia el niño, pero no había a dónde correr para el niño.. Esto era todo.. Se acabó.. Su cortita vida iba a terminar de la manera más fea y más aterradora y él lo sabía.." },
      { t: "p", x: "La bestia se acercó con sus colmillos.. Y justo cuando iba por el golpe mortal, algo pasó.. Algo muy inesperado.. Algo muy muy .. raro." },
      { t: "p", x: "Tirado de espaldas contra el suelo, preparándose para su momento final, el pecho del niño estalla y se abre, con sangre rociando por todos lados.. Pero no fue la bestia.. Algo salió rápido de adentro del niño, estirándose hacia la bestia. Como alambres negros oscurecidos, había 5, 10, 20 de estas ramas largas que sobresalían saliendo de su pecho ahora envolviéndose alrededor de la bestia gigante." },
      { t: "p", x: "La bestia usó su asombrosa fuerza física para tratar de soltarse, pero algunos de los alambres negros bajaron, clavándose en el suelo como una especie de soporte o palanca mientras se cerraban y apretaban a la bestia.. Apretaron más y más fuerte como si los impulsara una especie de máquina hidráulica.. Los niños vieron cómo aplastaban a la bestia y la sangre le brotaba por los costados.. Muriendo.. Asfixiándose." },
      { t: "p", x: "Mirando hacia abajo el niño vio estos brazos muy alambrados todavía conectados a algo dentro de su cuerpo. El dolor de su cavidad torácica abierta de golpe pegándole de repente como un camión.. Gritó mientras miraba adentro y veía su propio corazón latiendo con alambritos negros corriendo alrededor y a través de él." },
      { t: "p", x: "A veces puede pasar demasiado para que el cerebro lo maneje y hace un reinicio. Por alguna misericordia de los dioses, esto pasa de vez en cuando durante lo peor de las cosas. Y le pasó al niño ese día" },
      { t: "p", x: "Negro." },
      { t: "p", x: "Ojos abriéndose despacio. Parpadeando para ver la luz del sol y una cara mirándolo desde arriba. Era el otro niño de la zona segura que se había venido con ellos.. Todavía vivo." },
      { t: "p", x: "Se levantó de golpe agarrándose el pecho. Tenía la camisa rasgada y abierta, pero su pecho estaba... ¿bien? Se buscó por todo el cuerpo frenéticamente alguna herida y no encontró nada." },
      { t: "p", x: "\"¿Qué pasó, dónde están los demás?\" preguntó en pánico. La cara del otro niño se llenó de lágrimas \"están muertos.. No queda nada.. NO QUEDA NADA\"" },
      { t: "p", x: "El niño se levantó a mirar alrededor.. Examinando el paisaje había sangre seca por todos lados y los pedazos de cuerpo de los otros niños regados como basura tirada por el pasto y las rocas. Y ahí, en el centro de todo estaba el cadáver retorcido y estrangulado del monstruo." },
      { t: "p", x: "\"¿Qué pasó?...\" dijo en voz alta.. Mirándose el pecho, sin saber si estaba en un sueño, una pesadilla, o una realidad aún más aterradora. \"..qué pasó..\"" },
      { t: "p", x: "Corte a negro." },
    ],
  },
]

/** Chapters not posted yet. Titles fill in as Caleb sends them. */
export const sealedChapters: SealedChapter[] = [
  { n: 3, enHead: "Chapter 3. The General's Motorcade", esHead: "Capítulo 3. La Caravana del General" },
  { n: 4, enHead: "Chapter 4.", esHead: "Capítulo 4." },
  { n: 5, enHead: "Chapter 5.", esHead: "Capítulo 5." },
  { n: 6, enHead: "Chapter 6.", esHead: "Capítulo 6." },
  { n: 7, enHead: "Chapter 7.", esHead: "Capítulo 7." },
  { n: 8, enHead: "Chapter 8.", esHead: "Capítulo 8." },
  { n: 9, enHead: "Chapter 9.", esHead: "Capítulo 9." },
  { n: 10, enHead: "Chapter 10.", esHead: "Capítulo 10." },
  { n: 11, enHead: "Chapter 11.", esHead: "Capítulo 11." },
  { n: 12, enHead: "Chapter 12.", esHead: "Capítulo 12." },
]

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find(c => c.slug === slug)
}

export function wordCount(blocks: Block[]): number {
  return blocks.reduce((n, b) => n + b.x.trim().split(/\s+/).length, 0)
}

export function readingMinutes(blocks: Block[]): number {
  return Math.max(1, Math.round(wordCount(blocks) / 220))
}

/** Verbatim opening of a chapter, cut on a sentence boundary. Nothing rewritten. */
export function opening(blocks: Block[], sentences = 2): string {
  const txt = blocks[0]?.x ?? ''
  let out = '', count = 0
  for (let i = 0; i < txt.length; i++) {
    out += txt[i]
    if (txt[i] === '.' && (i + 1 >= txt.length || txt[i + 1] === ' ')) {
      while (i + 1 < txt.length && txt[i + 1] === '.') { i++; out += txt[i] }
      if (++count >= sentences) break
    }
  }
  return out.trim()
}
