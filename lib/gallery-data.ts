export interface GalleryItem {
  src: string;
  alt: string;
}

// Curated from the acquisition pool. Team- und Baustellenaufnahmen zeigen die
// eigentliche Arbeit; die Referenzen-Sektion übernimmt die fertigen Projekte.
export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/acquisition/team/mitarbeiter-verlegen-rollrasen-01.jpg",
    alt: "Zwei Mitarbeiter verlegen Rollrasen in einem neu angelegten Garten"
  },
  {
    src: "/assets/acquisition/baustellen/treppenbau-im-garten-01.jpg",
    alt: "Baustelle einer Gartentreppe mit Holzschalung auf einer Sandsteinmauer"
  },
  {
    src: "/assets/acquisition/baustellen/gartenbaustelle-mit-erdarbeiten-01.jpg",
    alt: "Erdarbeiten für ein neues Beet mit gesetzten Randsteinen"
  },
  {
    src: "/assets/acquisition/baustellen/schalung-und-beton-auf-baustelle-01.jpg",
    alt: "Schalung und Bewehrung für einen Treppen- und Terrassenaufbau"
  },
  {
    src: "/assets/acquisition/baustellen/frisch-gestrichene-garagen-mit-gerust-01.jpg",
    alt: "Frisch gestrichene Garagenanlage mit gepflasterter Zufahrt an einem Hanggrundstück"
  }
];
