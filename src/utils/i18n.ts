// Internationalization (i18n) system for CNC Mastery
// Supports English (en) and Finnish (fi)
// UI strings are swapped client-side via localStorage preference

export type Locale = 'en' | 'fi';
export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'fi'];

export const translations = {
  en: {
    // Header / Navigation
    'nav.syllabus': 'Syllabus',
    'nav.gcode-ref': 'G-Code Reference',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.open-menu': 'Open menu',
    'nav.close-menu': 'Close menu',

    // Hero
    'hero.badge': 'Free Online Course',
    'hero.title1': 'Master CNC Machining',
    'hero.title2': 'Without 3 Years of School',
    'hero.description': 'A complete, structured curriculum — from shop safety to 5-axis programming. Built from NIMS, Haas, MIT OCW, and industry-standard training programs.',
    'hero.cta-syllabus': 'View Full Syllabus',
    'hero.cta-start': 'Start Learning →',

    // Stats
    'stats.modules': 'Modules',
    'stats.levels': 'Skill Levels',
    'stats.lessons': 'Lessons',
    'stats.free': 'Forever',

    // Features
    'features.title': 'Everything You Need to Learn CNC',
    'features.subtitle': 'No prior experience required. Start from the basics and work your way up to specialist-level skills.',
    'features.syllabus.title': 'Complete Syllabus',
    'features.syllabus.desc': '20 modules covering everything from shop safety to 5-axis machining — structured like a professional training program.',
    'features.gcode.title': 'G-Code & CAM',
    'features.gcode.desc': 'Learn to write G-code from scratch, then master CAD/CAM with Fusion 360 and Mastercam toolpath strategies.',
    'features.blueprint.title': 'Blueprint & GD&T',
    'features.blueprint.desc': 'Read engineering drawings, understand GD&T callouts, and apply tolerances like a professional machinist.',
    'features.industry.title': 'Industry Standards',
    'features.industry.desc': 'Curriculum aligned with NIMS certifications, Haas training, MIT OCW, and real community college programs.',

    // Curriculum
    'curriculum.title': 'Your Learning Path',
    'curriculum.subtitle': '4 levels, 20 modules — structured to take you from zero to professional-level competency.',
    'curriculum.cta': 'Explore Full Curriculum →',
    'curriculum.modules': 'modules',

    // Levels
    'level.foundation': 'Foundation',
    'level.core': 'Core CNC',
    'level.advanced': 'Advanced',
    'level.specialist': 'Specialist',
    'level.foundation.desc': 'Safety, shop math, blueprints, measurement, materials science',
    'level.core.desc': 'Manual machining, cutting tools, workholding, G-code programming',
    'level.advanced.desc': 'CAD/CAM, GD&T, setup optimization, quality systems',
    'level.specialist.desc': '5-axis machining, macro programming, Industry 4.0',

    // About teaser
    'about.title': 'Built by a Machinist, for Machinists',
    'about.text': "I'm Milan — a mechanical engineer and CNC machinist trained at Varia (Finland). I created CNC Mastery because I believe everyone deserves access to quality CNC education, not locked behind expensive schools or outdated textbooks.",
    'about.cta': 'Learn More About the Project →',

    // Footer
    'footer.tagline': 'Learn CNC machining online — from blueprint to finished part. No school required.',
    'footer.course': 'Course',
    'footer.full-syllabus': 'Full Syllabus',
    'footer.start-learning': 'Start Learning',
    'footer.gcode-ref': 'G-Code Reference',
    'footer.formulas': 'Shop Math Formulas',
    'footer.more': 'More',
    'footer.resources': 'Resources & Books',
    'footer.about': 'About',
    'footer.attribution': 'CNC Mastery. Built by Milan Khadka.',
    'footer.sources': 'Content compiled from NIMS, Haas, MIT OCW, and industry-standard curricula.',

    // Syllabus page
    'syllabus.title': 'Complete Syllabus',
    'syllabus.subtitle': '20 modules across 4 levels — everything you need to go from beginner to professional CNC machinist. Curriculum compiled from NIMS, Haas, MIT OCW, DMG MORI, and top training programs.',
    'syllabus.hours': 'hours',
    'syllabus.lessons': 'lessons',

    // Module page
    'module.lessons': 'Lessons',
    'module.coming-soon': '📝 Lessons for this module are being written. Check back soon!',
    'module.hours': 'hours',

    // Lesson page
    'lesson.objectives': '🎯 Learning Objectives',
    'lesson.prev': '← Previous Lesson',
    'lesson.next': 'Next Lesson →',
    'lesson.completed': 'Completed! →',
    'lesson.back-syllabus': 'Back to Syllabus',
    'lesson.toggle-sidebar': 'Lessons',

    // Breadcrumb
    'breadcrumb.home': 'Home',
    'breadcrumb.syllabus': 'Syllabus',

    // Theme
    'theme.toggle': 'Toggle dark/light theme',

    // Language
    'lang.toggle': 'FI',
    'lang.label': 'Switch to Finnish',
  },

  fi: {
    // Header / Navigation
    'nav.syllabus': 'Opetussuunnitelma',
    'nav.gcode-ref': 'G-koodi viite',
    'nav.resources': 'Resurssit',
    'nav.about': 'Tietoa',
    'nav.open-menu': 'Avaa valikko',
    'nav.close-menu': 'Sulje valikko',

    // Hero
    'hero.badge': 'Ilmainen verkkokurssi',
    'hero.title1': 'Hallitse CNC-koneistus',
    'hero.title2': 'Ilman 3 vuoden koulua',
    'hero.description': 'Täydellinen, jäsennelty opetussuunnitelma — työturvallisuudesta 5-akseliseen ohjelmointiin. Rakennettu NIMS-, Haas-, MIT OCW- ja alan standardiohjelmien pohjalta.',
    'hero.cta-syllabus': 'Katso opetussuunnitelma',
    'hero.cta-start': 'Aloita oppiminen →',

    // Stats
    'stats.modules': 'Moduulia',
    'stats.levels': 'Tasoa',
    'stats.lessons': 'Oppituntia',
    'stats.free': 'Ikuisesti',

    // Features
    'features.title': 'Kaikki mitä tarvitset CNC:n oppimiseen',
    'features.subtitle': 'Aiempaa kokemusta ei tarvita. Aloita perusteista ja etene asiantuntijatasolle.',
    'features.syllabus.title': 'Täydellinen opetussuunnitelma',
    'features.syllabus.desc': '20 moduulia, jotka kattavat kaiken työturvallisuudesta 5-akseliseen koneistukseen — rakennettu kuin ammatillinen koulutusohjelma.',
    'features.gcode.title': 'G-koodi & CAM',
    'features.gcode.desc': 'Opi kirjoittamaan G-koodia alusta alkaen, hallitse sitten CAD/CAM Fusion 360:llä ja Mastercamilla.',
    'features.blueprint.title': 'Piirustukset & GD&T',
    'features.blueprint.desc': 'Lue teknisiä piirustuksia, ymmärrä GD&T-merkinnät ja sovella toleransseja kuin ammattilainen.',
    'features.industry.title': 'Alan standardit',
    'features.industry.desc': 'Opetussuunnitelma noudattaa NIMS-sertifiointeja, Haas-koulutusta, MIT OCW:tä ja ammattioppilaitosten ohjelmia.',

    // Curriculum
    'curriculum.title': 'Oppimispolkusi',
    'curriculum.subtitle': '4 tasoa, 20 moduulia — rakennettu viemään sinut nollasta ammattitasolle.',
    'curriculum.cta': 'Tutustu opetussuunnitelmaan →',
    'curriculum.modules': 'moduulia',

    // Levels
    'level.foundation': 'Perusteet',
    'level.core': 'CNC-ydin',
    'level.advanced': 'Edistynyt',
    'level.specialist': 'Erikoistuminen',
    'level.foundation.desc': 'Turvallisuus, matematiikka, piirustukset, mittaus, materiaalit',
    'level.core.desc': 'Manuaalikoneistus, työkalut, kiinnitys, G-koodi ohjelmointi',
    'level.advanced.desc': 'CAD/CAM, GD&T, asetusten optimointi, laadunhallinta',
    'level.specialist.desc': '5-akselikoneistus, makro-ohjelmointi, Teollisuus 4.0',

    // About teaser
    'about.title': 'Koneistajan rakentama, koneistajille',
    'about.text': 'Olen Milan — koneinsinööri ja CNC-koneistaja, valmistunut Variasta (Suomi). Loin CNC Masteryn, koska uskon, että kaikilla on oikeus laadukkaaseen CNC-koulutukseen — ilman kalliita kouluja tai vanhentuneita oppikirjoja.',
    'about.cta': 'Lue lisää projektista →',

    // Footer
    'footer.tagline': 'Opi CNC-koneistusta verkossa — piirustuksesta valmiiseen kappaleeseen. Ei koulua tarvita.',
    'footer.course': 'Kurssi',
    'footer.full-syllabus': 'Opetussuunnitelma',
    'footer.start-learning': 'Aloita oppiminen',
    'footer.gcode-ref': 'G-koodi viite',
    'footer.formulas': 'Laskukaavat',
    'footer.more': 'Lisää',
    'footer.resources': 'Resurssit & kirjat',
    'footer.about': 'Tietoa',
    'footer.attribution': 'CNC Mastery. Tehnyt Milan Khadka.',
    'footer.sources': 'Sisältö koottu NIMS-, Haas-, MIT OCW- ja alan standardiohjelmista.',

    // Syllabus page
    'syllabus.title': 'Opetussuunnitelma',
    'syllabus.subtitle': '20 moduulia 4 tasolla — kaikki mitä tarvitset aloittelijasta ammattilaiseksi. Koottu NIMS-, Haas-, MIT OCW-, DMG MORI- ja huippukoulutusohjelmista.',
    'syllabus.hours': 'tuntia',
    'syllabus.lessons': 'oppituntia',

    // Module page
    'module.lessons': 'Oppitunnit',
    'module.coming-soon': '📝 Tämän moduulin oppitunteja kirjoitetaan parhaillaan. Tarkista pian uudelleen!',
    'module.hours': 'tuntia',

    // Lesson page
    'lesson.objectives': '🎯 Oppimistavoitteet',
    'lesson.prev': '← Edellinen oppitunti',
    'lesson.next': 'Seuraava oppitunti →',
    'lesson.completed': 'Valmis! →',
    'lesson.back-syllabus': 'Takaisin opetussuunnitelmaan',
    'lesson.toggle-sidebar': 'Oppitunnit',

    // Breadcrumb
    'breadcrumb.home': 'Etusivu',
    'breadcrumb.syllabus': 'Opetussuunnitelma',

    // Theme
    'theme.toggle': 'Vaihda tumma/vaalea teema',

    // Language
    'lang.toggle': 'EN',
    'lang.label': 'Switch to English',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

/** Get a translation string for a given locale */
export function t(key: TranslationKey, locale: Locale = defaultLocale): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}
