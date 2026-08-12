export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

export const referenzen: Referenz[] = [
  {
    id: "holzterrasse-stuetzmauer",
    title: "Holzterrasse auf Sandsteinmauer",
    ort: "Bad Dürkheim",
    leistung: "Terrassenbau",
    text: "Auf der bestehenden Sandsteinmauer entstand eine neue Terrassenfläche in Holzoptik. Vor dem Belag wurde die Unterkonstruktion abgedichtet und in Gefälle gesetzt, damit das Wasser sauber ablaufen kann. Der Vorher-Regler zeigt den Zustand mit verlegter EPDM-Abdichtung, bevor die Dielen kamen.",
    afterImage: "/assets/acquisition/projekte/holzdeck-01.jpg",
    beforeImage: "/assets/acquisition/baustellen/terrassendeck-im-bau-01.jpg",
    alt: "Holzterrasse auf einer Sandsteinmauer, vorher mit Abdichtung, nachher mit fertigen Terrassendielen"
  },
  {
    id: "rollrasen-trittsteinweg",
    title: "Neuanlage mit Rollrasen und Trittsteinweg",
    ort: "Bad Dürkheim",
    leistung: "Gartenneugestaltung",
    text: "Bei einem Neubaugarten wurde die Fläche eingeebnet, ein Trittsteinweg entlang des Zauns gesetzt und Rollrasen frisch verlegt. Der Rasen ist ab dem ersten Tag begehbar, der Weg macht die Kinderecke und den Geräteschuppen trockenen Fußes erreichbar.",
    afterImage: "/assets/acquisition/baustellen/gartenbaustelle-mit-rasen-und-weg-01.jpg",
    alt: "Neuer Garten mit frisch verlegtem Rollrasen und Trittsteinweg entlang des Doppelstabzauns"
  },
  {
    id: "feinsteinzeug-terrasse",
    title: "Neue Terrasse mit Feinsteinzeug",
    ort: "Bad Dürkheim",
    leistung: "Terrassenbau",
    text: "Zwischen Wohnhaus und Gartenbeet wurde eine Terrasse aus großformatigen Feinsteinzeug-Platten gesetzt. Die Fläche liegt in einem Splittbett auf verdichtetem Unterbau, mit sauberer Randeinfassung zum bestehenden Kiesstreifen und leichtem Gefälle vom Gebäude weg.",
    afterImage: "/assets/acquisition/baustellen/terrassenplatten-verlegung-01.jpg",
    alt: "Neu verlegte Terrasse aus großformatigen Feinsteinzeug-Platten am Haus"
  }
];
