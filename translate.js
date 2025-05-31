// Logic for the translation into Spanish
// Rather than using an API, this is a dictionary that contains the translated text
// Use data-key attributes for this in the HTML files

// Get saved language from localStorage or default to English
let currentLanguage = localStorage.getItem("language") || "en";

// Apply translation to all elements with data-key and translate placeholders
function applyTranslations(language) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");

    // Handle placeholder if the element supports it
    if (el.placeholder !== undefined) {
      const placeholderKey = key.startsWith("placeholder-")
        ? key
        : "placeholder-" + key;
      const originalPlaceholder =
        el.getAttribute("data-placeholder-original") || el.placeholder;

      const translatedPlaceholder =
        language === "es" && translations[placeholderKey]
          ? translations[placeholderKey]
          : originalPlaceholder;

      el.setAttribute("placeholder", translatedPlaceholder);
    }

    // Handle inner text/HTML
    const originalText = el.getAttribute("data-original") || el.innerHTML;
    const translatedText =
      language === "es" && translations[key] ? translations[key] : originalText;

    fadeTextChange(el, translatedText);
  });

  updateTranslateButton(language);
  localStorage.setItem("language", language);
}

// Save original English text and placeholders (only once)
function storeOriginalText() {
  document.querySelectorAll("[data-key]").forEach((el) => {
    if (!el.hasAttribute("data-original")) {
      el.setAttribute("data-original", el.innerHTML);
    }

    if (
      el.placeholder !== undefined &&
      !el.hasAttribute("data-placeholder-original")
    ) {
      el.setAttribute("data-placeholder-original", el.placeholder);
    }
  });
}

// Fade out, change content, and fade in
function fadeTextChange(element, newText) {
  if (
    element.tagName === "INPUT" ||
    element.tagName === "TEXTAREA" ||
    element.tagName === "SELECT"
  ) {
    // Skip changing innerHTML for form elements
    return;
  }

  element.style.transition = "opacity 0.3s";
  element.style.opacity = 0;
  setTimeout(() => {
    element.innerHTML = newText;
    element.style.opacity = 1;
  }, 300);
}

// Update toggle button with fade effect
function updateTranslateButton(language) {
  const button = document.querySelector(".translate");
  if (!button) return;

  const newLabel = language === "es" ? "English" : "Español";
  fadeTextChange(button, newLabel);
}

// Toggle between English and Spanish
function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "es" : "en";
  applyTranslations(currentLanguage);
}

// Initialize translations on page load
document.addEventListener("DOMContentLoaded", () => {
  storeOriginalText();
  applyTranslations(currentLanguage);

  const button = document.querySelector(".translate");
  if (button) {
    button.addEventListener("click", toggleLanguage);
  }
});

// translations
const translations = {
  // nav links
  practice: "Áreas de práctica",
  attorneys: "Abogados",
  contact: "Contáctenos",
  // hero section
  focus:
    "Enfocados en la justicia: Abogacía legal adaptada a sus necesidades únicas",
  mission:
    "Nuestra misión es defender apasionadamente sus derechos y brindar una representación legal excepcional. Con dedicación inquebrantable y experiencia comprobada, hemos logrado resultados exitosos en numerosos casos.",
  represent:
    "Orgullosamente representando a Nuevo México y la región fronteriza",
  // water section
  "water-contamination": "Contaminación del agua en Nuevo México",
  "water-info":
    "Si usted o sus seres queridos han sido afectados por la contaminación del agua de CRRUA, puede tener derecho a una compensación.",
  "water-updates":
    "Para mantenerse al día en esta lucha continua por la justicia, consulte los siguientes enlaces:",
  "water-link1":
    "Nuestros abogados de litigios ambientales están luchando por la justicia en la crisis de contaminación por arsénico en Nuevo México",
  "water-link2":
    "Residentes de Sunland Park y Santa Teresa presentan demanda contra la Autoridad Regional de Servicios Públicos de Camino Real",
  "water-link3":
    "Abogados organizan reunión comunitaria sobre la contaminación del agua",
  "water-link4":
    "Abogados inician acción legal contra la empresa de agua del condado",
  "water-link5":
    "Conversaciones comunitarias: Abogados discuten la lucha por el agua limpia y la 'incompetencia' de CRRUA",
  // legal section
  "legal-title": "Servicios legales integrales para sus necesidades",
  "legal-desc":
    "Nuestro bufete de abogados tiene como objetivo proporcionar una amplia gama de servicios legales para satisfacer sus necesidades. Nuestros abogados experimentados están dedicados a ofrecer resultados excepcionales y una atención personalizada a cada cliente.",
  "practice-areas": "Áreas de Práctica",
  attorneys: "Abogados",
  // Practice section
  "practice-title": "Nuestras Áreas de Práctica",
  "practice-criminal": "Defensa Criminal",
  "practice-criminal-desc":
    "En el ámbito del derecho penal, nos dedicamos a defender los derechos de las personas que enfrentan cargos criminales. Nuestro enfoque combina estrategias de defensa agresivas con un apoyo compasivo al cliente. Investigamos meticulosamente las circunstancias de cada caso, asegurando que se exploren todas las opciones legales. Ya sea negociando acuerdos de culpabilidad o defendiendo en la corte, nuestro objetivo es lograr el mejor resultado posible para nuestros clientes...",
  "learn-more": "Más información",
  "practice-civil": "Derechos Civiles",
  "practice-civil-desc":
    "Nuestra práctica de Derechos Civiles se dedica a proteger y defender los derechos fundamentales y las libertades garantizadas por la ley. Nos enfocamos en casos de discriminación, mala conducta policial, arrestos injustificados y violaciones de derechos constitucionales.<br><br>Creemos que todas las personas merecen un trato justo y protección igualitaria...",
  "practice-disputes": "Disputas Civiles",
  "practice-disputes-desc":
    "Nuestra práctica de Derechos Civiles se dedica a proteger y defender los derechos fundamentales y las libertades garantizadas por la ley. Nos enfocamos en casos de discriminación, mala conducta policial, arrestos injustificados y violaciones de derechos constitucionales.<br><br>Creemos que todas las personas merecen un trato justo y protección igualitaria...",
  "practice-guardianship": "Tutela",
  "practice-guardianship-desc":
    "Nuestra práctica de Ley de Tutela ofrece servicios legales integrales para personas que buscan establecer la tutela de menores o adultos que no pueden cuidarse por sí mismos. Entendemos que navegar por asuntos de tutela puede ser emocionalmente complejo y legalmente desafiante, y estamos aquí para guiarlo en cada paso del proceso.<br><br>Ayudamos a nuestros clientes a comprender los aspectos legales...",
  "practice-divorce": "Divorcio y Custodia",
  "practice-divorce-desc":
    "Nuestra práctica de Ley de Divorcio está dedicada a guiar a individuos y familias a través de las complejidades del divorcio con compasión y experiencia. Entendemos que este es un momento difícil, y nuestro objetivo es brindar el apoyo y la representación legal necesarios para lograr una resolución justa y equitativa.<br><br>Manejamos todos los aspectos del proceso de divorcio, incluyendo la división de bienes, la manutención conyugal y la custodia de los hijos...",
  "practice-link":
    "Conozca más sobre las áreas de práctica en las que nuestro bufete de abogados se destaca.",
  // consultation section
  "consultation-title": "Agenda una consulta hoy",
  "consultation-desc":
    "Descubre cómo nuestros abogados experimentados pueden ayudarte con tus necesidades legales",
  schedule: "Agendar",
  //===========================End of home page translations===========================
  // Practice page
  "practice-areas-learn":
    "Conozca las áreas de práctica en las que nuestra firma de abogados se destaca, ofreciendo asesoría legal experta y representación a nuestros clientes.",
  "practice-details": "Ver Detalles",
  "practice-criminal-modal": "En lo de....",
  // practice modals ...
  "modal-title-criminal-defense": "Defensa Criminal",
  "modal-description-criminal-defense": `<p>En el ámbito del derecho penal, estamos dedicados a defender los derechos de las personas que enfrentan cargos criminales. Nuestro enfoque combina estrategias de defensa agresivas con un apoyo compasivo al cliente. Investigamos meticulosamente las circunstancias de cada caso, asegurándonos de que se explore cada vía legal. Ya sea negociando acuerdos de culpabilidad o defendiendo en la corte, nuestro enfoque está en lograr el mejor resultado posible para nuestros clientes.
</p>

<p>Entendemos el impacto que los cargos criminales pueden tener en las vidas y reputaciones, y estamos comprometidos a proteger sus derechos y buscar justicia en su nombre.</p>

<h3>1) DELITOS MENORES</h3>

<p>Un delito menor es una ofensa criminal que generalmente se castiga con menos de un año de cárcel, multas, servicio comunitario o libertad condicional. Estas ofensas son menos graves que los delitos mayores pero más graves que las infracciones.</p>

<ul>
  <h3>Ejemplos incluyen:</h3>
  <li>- Agresión simple</li>
  <li>- Agresión a un miembro del hogar</li>
  <li>- Conducta desordenada</li>
  <li>- Violación de una orden de restricción</li>
</ul>

<p>Los delitos menores, aunque considerados menos graves que los delitos mayores, aún pueden tener consecuencias significativas. Por eso, nuestro objetivo es minimizar el impacto en su vida asegurando que protejamos sus derechos y logremos el mejor resultado posible para su caso.</p>

<h3>2) DELITOS GRAVES</h3>

<p>Un delito grave es una ofensa criminal seria que se castiga con más de un año en prisión. Los delitos graves a menudo se categorizan según la gravedad del delito y normalmente tienen consecuencias duraderas para los condenados.</p>

<h3>Ejemplos incluyen:</h3>
<ul>
  <li>- Delitos de drogas</li>
  <li>- Crímenes violentos: asesinato, asalto con un arma mortal, robo, etc.</li>
  <li>- Delitos sexuales</li>
  <li>- Delitos contra la propiedad: robo, incendio premeditado, etc.</li>
</ul>

<p>Cuando se enfrentan cargos por delitos graves, las consecuencias son importantes. Las condenas pueden conllevar sanciones severas que afectan a usted y a su familia durante años, por lo que es fundamental contar con representación legal experimentada.</p>

<h3>3) MANEJO BAJO LA INFLUENCIA (DUI)</h3>

<p>Nuestra práctica en leyes de DUI está dedicada a defender a personas acusadas de conducir bajo la influencia. Entendemos que un cargo de DUI puede tener consecuencias graves, incluyendo multas, suspensión de licencia y posible tiempo en la cárcel.</p>

<p>Nuestro equipo ofrece representación legal sólida en cada etapa del proceso. Investigamos a fondo las circunstancias de cada caso, desafiando la evidencia y cuestionando la validez de las pruebas de sobriedad, resultados del alcoholímetro y procedimientos de arresto.</p>

<p>Priorizamos estrategias personalizadas adaptadas a su situación única, ya sea negociando acuerdos favorables o defendiendo sus derechos en la corte. Nuestro objetivo es mitigar el impacto de los cargos de DUI en su vida, proteger sus privilegios de conducción y trabajar hacia el mejor resultado posible.</p>

<p>Con un compromiso con la excelencia y un profundo entendimiento de las leyes de DUI, estamos aquí para guiarle durante este momento desafiante.</p>

<h3>4) JUSTICIA JUVENIL</h3>

<p>Nuestra práctica en leyes juveniles está dedicada a representar a menores en asuntos legales que afectan sus vidas y futuros. Entendemos que los jóvenes pueden encontrarse en situaciones difíciles, y nuestro objetivo es brindar una representación compasiva y bien informada, adaptada a sus circunstancias.</p>

<p>Manejamos una variedad de asuntos, incluyendo casos de delincuencia, delitos de estatus y cuestiones relacionadas con el sistema de justicia juvenil. Nuestro equipo está comprometido con la protección de los derechos de los menores durante todo el proceso legal, desde las audiencias iniciales hasta las opciones de rehabilitación.</p>

<p>Adoptamos un enfoque holístico, haciendo hincapié en la educación, el apoyo y los resultados positivos. Trabajamos en estrecha colaboración con familias, escuelas y recursos comunitarios para abordar los problemas subyacentes que pueden contribuir a los desafíos legales de un menor.</p>

<p>Al priorizar la rehabilitación sobre el castigo, nos esforzamos por ayudar a nuestros jóvenes clientes a navegar sus problemas legales mientras se enfocan en su crecimiento personal y sus oportunidades futuras. Con un profundo conocimiento del derecho juvenil, estamos aquí para abogar por un futuro más brillante para cada joven que representamos.</p>
`,
  "modal-title-civil-rights": "Derechos Civiles",
  "modal-description-civil-rights": `<p>Nuestra práctica en Derecho de Derechos Civiles está comprometida con la protección y defensa de los derechos y libertades fundamentales garantizados a las personas por la ley. Nos enfocamos en casos que involucran discriminación, mala conducta policial, arrestos injustificados y violaciones de derechos constitucionales.</p>

<p>Creemos que todas las personas merecen un trato igualitario y protección bajo la ley, y trabajamos incansablemente para responsabilizar a las personas e instituciones cuando se violan esos derechos. Nuestro enfoque incluye investigaciones exhaustivas, litigios estratégicos y alcance comunitario para crear conciencia sobre los problemas de derechos civiles.</p>

<p>Representamos a clientes en diversos contextos, incluyendo discriminación laboral, derechos de vivienda y casos de libertad de expresión. Al combinar experiencia legal con una pasión por la justicia, buscamos empoderar a nuestros clientes y promover cambios sistémicos.</p>

<p>Ya sea buscando una compensación por daños individuales o abogando por reformas más amplias en los derechos civiles, nuestro compromiso es garantizar que se haga justicia y que todas las voces sean escuchadas.</p>`,
  "modal-title-civil-disputes": "Disputas Civiles",
  "modal-description-civil-disputes": `<p>Las disputas civiles pueden surgir en muchos aspectos de la vida, y a menudo implican desacuerdos entre personas, empresas u organizaciones. Entendemos que estos conflictos pueden afectar su vida y su sustento. Nuestro equipo experimentado está aquí para ayudarle a navegar las complejidades del derecho civil, proteger sus intereses y trabajar hacia una resolución justa.</p>

<p>Las disputas civiles son conflictos legales que no implican cargos penales. En cambio, se centran en resolver desacuerdos sobre derechos, responsabilidades y obligaciones.</p> 
<h3>Tipos comunes de disputas civiles incluyen:</h3>
<ul>
  <li>- Disputas contractuales: Incumplimiento de contrato, desacuerdos sobre términos o problemas de incumplimiento</li>
  <li>- Disputas de propiedad: Problemas de límites, conflictos entre arrendadores e inquilinos o disputas sobre la propiedad</li>
  <li>- Reclamaciones por lesiones personales: Solicitar compensación por lesiones causadas por negligencia</li>
</ul>

<p>Resolver disputas civiles requiere una combinación de experiencia legal, pensamiento estratégico y una defensa firme. Estamos comprometidos a obtener resultados mientras priorizamos sus objetivos. Entendemos que cada caso es único y adaptamos nuestro enfoque para satisfacer sus necesidades.</p>
`,
  "modal-title-guardianship": "Tutela",
  "modal-description-guardianship": `<p>Nuestra práctica de Ley de Tutela ofrece servicios legales integrales para personas que buscan establecer la tutela de menores o adultos que no pueden cuidarse por sí mismos. Entendemos que manejar asuntos de tutela puede ser emocionalmente complejo y legalmente desafiante, y estamos aquí para guiarle en cada paso del camino.</p>

<p>Ayudamos a nuestros clientes a comprender los requisitos legales para la tutela, incluyendo la presentación de peticiones necesarias, la recopilación de pruebas y la asistencia a audiencias judiciales. Nuestro objetivo es garantizar que se prioricen los mejores intereses de la persona que necesita tutela, ya sea un niño que necesita un entorno seguro y estable o un adulto que requiere asistencia debido a una incapacidad.</p>

<p>Además de establecer la tutela, también proporcionamos representación en asuntos relacionados con la modificación, terminación y disputas entre miembros de la familia. Enfatizamos la comunicación clara y el apoyo compasivo durante todo el proceso, reconociendo la naturaleza sensible de estos casos.</p>

<p>Con un compromiso de proteger los derechos y el bienestar de quienes representamos, nuestra práctica de Ley de Tutela se esfuerza por ofrecer soluciones efectivas que fomenten la seguridad, la estabilidad y la tranquilidad.</p>
`,
  "modal-title-divorce-custody": "Divorcio y Custodia",
  "modal-description-divorce-custody": `<p>Nuestra práctica de Derecho de Divorcio está dedicada a guiar a individuos y familias a través de las complejidades del divorcio con compasión y experiencia. Entendemos que este es un momento difícil, y nuestro objetivo es brindar el apoyo y la representación legal necesarios para lograr una resolución justa y equitativa.</p>

<p>Manejamos todos los aspectos del proceso de divorcio, incluyendo la división de bienes, la pensión alimenticia, la custodia de los hijos y el apoyo económico infantil. Nuestro enfoque se basa en comprender sus circunstancias y objetivos únicos, lo que nos permite desarrollar estrategias personalizadas que prioricen sus intereses y los de sus hijos.</p>

<p>Enfatizamos la negociación y la mediación siempre que sea posible, con el objetivo de alcanzar soluciones amistosas que minimicen el conflicto y el estrés emocional. Sin embargo, también estamos preparados para defender vigorosamente sus derechos en la corte cuando sea necesario.</p>

<p>Con un compromiso con la comunicación clara y el servicio personalizado, estamos aquí para ayudarle a navegar el proceso legal con confianza y alcanzar el mejor resultado posible para su futuro. Ya sea que esté buscando un divorcio colaborativo o necesite un defensor firme en litigio, nuestra práctica de Derecho de Divorcio está dedicada a apoyarle en cada paso del camino.</p>
`,
  // Repeat for other practice keys like "civil-rights", etc.

  //===========================End of practice page translations===========================
  // Attorneys page
  "attorneys-title": "Nuestros Abogados",
  "attorney-titles": "Socio / Abogado",
  "attorneys-markowski-bio":
    "Theodore Raymundo Markowski nació y creció en El Paso, Texas. Recibió su licenciatura en Sociología con especialización en Justicia Penal de la Northern Arizona University y su Doctorado en Jurisprudencia en Arizona Summit Law School. Durante la escuela de derecho, obtuvo experiencia en derecho civil a través de pasantías en derecho de agravios y bancarrota. Después de casi una década en Arizona, Theodore regresó a su área natal y se unió a la Oficina del Fiscal del Distrito del Condado de Doña Ana, donde procesó para el Estado de Nuevo México, perfeccionando sus habilidades de litigación y juicio a través de cientos de casos.<br><br>Durante casi cuatro años, Theodore ha estado en práctica privada, manejando una amplia gama de disputas civiles, incluyendo derecho de familia y casos de violencia doméstica. Esta experiencia lo ha hecho altamente competente en diversas áreas civiles. Su amplia experiencia, combinada con su tiempo en la fiscalía, lo convierte en un abogado seguro y capaz para abordar diversos problemas legales. Ahora está enfocado en aprovechar su experiencia diversa para lograr resultados exitosos para sus clientes en áreas comerciales emergentes, estando siempre preparado para litigar cuando sea necesario.<br><span>** Licenciado en Texas y Nuevo México</span>",
  "attorneys-ruvalcaba-bio":
    "Carlos Ruvalcaba es un abogado experimentado que realmente se preocupa por sus clientes. Como un orgulloso estadounidense y veterano de la Fuerza Aérea de EE.UU., Carlos combina un fuerte sentido del deber con una amplia experiencia legal. Obtuvo su licenciatura en Ciencias Políticas de la Universidad de Texas en El Paso y su Doctorado en Jurisprudencia en Thomas Jefferson Law School en San Diego, California. Carlos tiene una gran experiencia en derecho penal y una ventaja única como ex fiscal. Conoce cómo funciona el sistema desde dentro, lo que le ayuda a construir una defensa sólida para sus clientes.<br><br> Carlos está comprometido a proteger sus derechos y siempre pone sus mejores intereses en primer lugar. Entiende que enfrentar cargos criminales es estresante y emocional, y está aquí para ofrecer el apoyo compasivo que necesita. Además de su experiencia en derecho penal, Carlos tiene experiencia en manejar casos de CYFD/CPS y representa activamente a padres que luchan por recuperar la custodia de sus hijos del Estado. Su dedicación y profundo conocimiento de estos casos lo convierten en un defensor poderoso para las familias.<br><br>No deje que los cargos criminales o las batallas de custodia lo abrumen. Comuníquese con Carlos Ruvalcaba hoy para una consulta y permítale ayudarle a navegar el sistema legal con confianza y cuidado.<br><span>** Licenciado en Nuevo México</span>",
  // contact page
  "contact-heading": "Contáctenos",
  "need-assistance": "¿Necesita Asistencia Legal?",
  "help-description":
    "Estamos aquí para ayudarle. Puede comunicarse con nosotros durante nuestro horario de atención por teléfono o visitar nuestra oficina para una consulta. Si lo prefiere, complete el formulario de contacto a la derecha y un miembro de nuestro equipo le responderá lo antes posible.",
  "brief-description": "Descripción breve de su problema legal",
  "label-name": "Nombre",
  "label-phone": "Teléfono",
  "label-email": "Correo Electrónico",
  "label-message": "Su mensaje",
  "send-button": "Enviar Consulta",
  "legal-support-ending":
    "Esperamos poder asistirle con sus necesidades legales.",
  // Placeholder translations
  "placeholder-name": "Escriba su nombre",
  "placeholder-phone": "Escriba su número de teléfono",
  "placeholder-email": "Escriba su correo electrónico",
  "placeholder-message": "Escriba su mensaje",

  // footer links
  "links-title": "Enlaces Rápidos",
  home: "Inicio",
  // hours
  "hours-title": "Horas de Trabajo",
  "hours-mon-thurs": "Lunes-Jueves: <span>8:30AM - 5:00PM</span>",
  "hours-fri": "Viernes: <span>9:00AM - 2:00PM</span>",
  "hours-sat": "Sábado: <span>Solo con Cita</span>",
  "hours-sun": "Domingo: <span>Cerrado</span>",

  // copyright
  "copyright-rights":
    "2025 Markowski Ruvalcaba Law Firm, LLC. Todos los derechos reservados.",
  "copyright-design": "Diseño por: <span>Omar Insurriaga</span>",
};
