// Logic for the tranlation into Spanish
// Rather than using an API, this is a dictionary that contains the translated text
// Use data-key attributes for this in the HTML files

// translations
const translations = {
    // nav links
    "practice": "Áreas de práctica",
    "attorneys": "Abogados",
    "contact": "Contáctenos",
    // hero section
    "focus": "Enfocados en la justicia: Abogacía legal adaptada a sus necesidades únicas",
    "mission": "Nuestra misión es defender apasionadamente sus derechos y brindar una representación legal excepcional. Con dedicación inquebrantable y experiencia comprobada, hemos logrado resultados exitosos en numerosos casos.",
    "represent": "Orgullosamente representando a Nuevo México y la región fronteriza",
    // water section
    "water-contamination": "Contaminación del agua en Nuevo México",
    "water-info": "Si usted o sus seres queridos han sido afectados por la contaminación del agua de CRRUA, puede tener derecho a una compensación.",
    "water-updates": "Para mantenerse al día en esta lucha continua por la justicia, consulte los siguientes enlaces:",
    "water-link1": "Nuestros abogados de litigios ambientales están luchando por la justicia en la crisis de contaminación por arsénico en Nuevo México",
    "water-link2": "Residentes de Sunland Park y Santa Teresa presentan demanda contra la Autoridad Regional de Servicios Públicos de Camino Real",
    "water-link3": "Abogados organizan reunión comunitaria sobre la contaminación del agua",
    "water-link4": "Abogados inician acción legal contra la empresa de agua del condado",
    "water-link5": "Conversaciones comunitarias: Abogados discuten la lucha por el agua limpia y la 'incompetencia' de CRRUA",
    // legal section
    "legal-desc": "Nuestro bufete de abogados tiene como objetivo proporcionar una amplia gama de servicios legales para satisfacer sus necesidades. Nuestros abogados experimentados están dedicados a ofrecer resultados excepcionales y una atención personalizada a cada cliente.",
    "practice-areas": "Áreas de Práctica",
    "attorneys": "Abogados",
    // Practice section
    "practice-title": "Nuestras Áreas de Práctica",
    "practice-crimianal": "Defensa Criminal",
    "practice-criminal-desc": "En el ámbito del derecho penal, nos dedicamos a defender los derechos de las personas que enfrentan cargos criminales. Nuestro enfoque combina estrategias de defensa agresivas con un apoyo compasivo al cliente. Investigamos meticulosamente las circunstancias de cada caso, asegurando que se exploren todas las opciones legales. Ya sea negociando acuerdos de culpabilidad o defendiendo en la corte, nuestro objetivo es lograr el mejor resultado posible para nuestros clientes...",
    "learn-more": "Más información",
    "practice-civil": "Derechos Civiles",
    "practice-civil-desc": "Nuestra práctica de Derechos Civiles se dedica a proteger y defender los derechos fundamentales y las libertades garantizadas por la ley. Nos enfocamos en casos de discriminación, mala conducta policial, arrestos injustificados y violaciones de derechos constitucionales.<br><br>Creemos que todas las personas merecen un trato justo y protección igualitaria...",
    "practice-disputes": "Disputas Civiles",   
    "practice-disputes-desc": "Nuestra práctica de Derechos Civiles se dedica a proteger y defender los derechos fundamentales y las libertades garantizadas por la ley. Nos enfocamos en casos de discriminación, mala conducta policial, arrestos injustificados y violaciones de derechos constitucionales.<br><br>Creemos que todas las personas merecen un trato justo y protección igualitaria...",   
    "practice-guardianship": "Tutela", 
    "practice-guardianship-desc": "Nuestra práctica de Ley de Tutela ofrece servicios legales integrales para personas que buscan establecer la tutela de menores o adultos que no pueden cuidarse por sí mismos. Entendemos que navegar por asuntos de tutela puede ser emocionalmente complejo y legalmente desafiante, y estamos aquí para guiarlo en cada paso del proceso.<br><br>Ayudamos a nuestros clientes a comprender los aspectos legales...",   
    "practice-divorce": "Divorcio y Custodia",  
    "practice-divorce-desc": "Nuestra práctica de Ley de Divorcio está dedicada a guiar a individuos y familias a través de las complejidades del divorcio con compasión y experiencia. Entendemos que este es un momento difícil, y nuestro objetivo es brindar el apoyo y la representación legal necesarios para lograr una resolución justa y equitativa.<br><br>Manejamos todos los aspectos del proceso de divorcio, incluyendo la división de bienes, la manutención conyugal y la custodia de los hijos...",
    "practice-link": "Conozca más sobre las áreas de práctica en las que nuestro bufete de abogados se destaca.",
    // consultation section
    "consultation-title": "Agenda una consulta hoy",
    "consultation-desc": "Descubre cómo nuestros abogados experimentados pueden ayudarte con tus necesidades legales",
    "schedule": "Agendar",
    //===========================End of home page translations===========================
    // Practice page
    "practice-areas-learn": "Conozca las áreas de práctica en las que nuestra firma de abogados se destaca, ofreciendo asesoría legal experta y representación a nuestros clientes.",
    "practice-details": "Ver Detalles",
    //===========================End of practice page translations===========================
    // Attorneys page
    "attorneys-title": "Nuestros Abogados",
    "attorney-titles": "Socio / Abogado",
    "attorneys-markowski-bio": "Theodore Raymundo Markowski nació y creció en El Paso, Texas. Recibió su licenciatura en Sociología con especialización en Justicia Penal de la Northern Arizona University y su Doctorado en Jurisprudencia en Arizona Summit Law School. Durante la escuela de derecho, obtuvo experiencia en derecho civil a través de pasantías en derecho de agravios y bancarrota. Después de casi una década en Arizona, Theodore regresó a su área natal y se unió a la Oficina del Fiscal del Distrito del Condado de Doña Ana, donde procesó para el Estado de Nuevo México, perfeccionando sus habilidades de litigación y juicio a través de cientos de casos.<br><br>Durante casi cuatro años, Theodore ha estado en práctica privada, manejando una amplia gama de disputas civiles, incluyendo derecho de familia y casos de violencia doméstica. Esta experiencia lo ha hecho altamente competente en diversas áreas civiles. Su amplia experiencia, combinada con su tiempo en la fiscalía, lo convierte en un abogado seguro y capaz para abordar diversos problemas legales. Ahora está enfocado en aprovechar su experiencia diversa para lograr resultados exitosos para sus clientes en áreas comerciales emergentes, estando siempre preparado para litigar cuando sea necesario.<br><span>** Licenciado en Texas y Nuevo México</span>",
   "attorney-ruvalcaba-bio": "Carlos Ruvalcaba es un abogado experimentado que realmente se preocupa por sus clientes. Como un orgulloso estadounidense y veterano de la Fuerza Aérea de EE.UU., Carlos combina un fuerte sentido del deber con una amplia experiencia legal. Obtuvo su licenciatura en Ciencias Políticas de la Universidad de Texas en El Paso y su Doctorado en Jurisprudencia en Thomas Jefferson Law School en San Diego, California. Carlos tiene una gran experiencia en derecho penal y una ventaja única como ex fiscal. Conoce cómo funciona el sistema desde dentro, lo que le ayuda a construir una defensa sólida para sus clientes.<br><br> Carlos está comprometido a proteger sus derechos y siempre pone sus mejores intereses en primer lugar. Entiende que enfrentar cargos criminales es estresante y emocional, y está aquí para ofrecer el apoyo compasivo que necesita. Además de su experiencia en derecho penal, Carlos tiene experiencia en manejar casos de CYFD/CPS y representa activamente a padres que luchan por recuperar la custodia de sus hijos del Estado. Su dedicación y profundo conocimiento de estos casos lo convierten en un defensor poderoso para las familias.<br><br>No deje que los cargos criminales o las batallas de custodia lo abrumen. Comuníquese con Carlos Ruvalcaba hoy para una consulta y permítale ayudarle a navegar el sistema legal con confianza y cuidado.<br><span>** Licenciado en Nuevo México</span>",
    // contact page
    
    // footer links
    "links-title": "Enlaces Rápidos",
    "home": "Inicio",
    // hours
    "hours-title": "Horas de Trabajo",
    "hours-monday-thursday": "Lunes-Jueves: ",
    "hours-friday": "Viernes: ",
    "hours-saturday": "Sábado: ",
    "hours-sunday": "Domingo: ",
    "hours-appointment": "Solo con Cita",
    "hours-closed": "Cerrado",
    // copyright
    "copyright-rights": "2025 Markowski Ruvalcava Law Firm, LLC. Todos los derechos reservados.",
    "copyright-design": "Diseño por: <span>Omar Insurriaga</span>"
};