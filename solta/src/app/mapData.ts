export interface MapIcon {
    id: string;
    x: number;
    y: number;
    title: {
      en: string;
      rs: string;
    };
    description: {
      en: string;
      rs: string;
    };
    audioSrc: string;
  }
  
  export const mapIcons: MapIcon[] = [
    {
      id: '1',
      x: 20,
      y: 30,
      title: {
        en: 'Vile Rustike',
        rs: 'Villa rusticae',
      },
      description: {
        en: 'The houses of villa rusticae that originate from the ancient age can be found in the surroundings of Donje Selo, on Rogač in the part of Banja, Gornje Selo (Starine) and in the Nečujam’s bay called Piškera. The one in Piškera also had a thermal bath. The translation of villa rusticae is a country villa, and they were homes of the roman landowners. They would live in the main house, which would be surrounded by agricultural areas. ',
        rs: 'Kuće vile rustike koje potiču iz antičkog doba mogu se naći u okolini Donjeg Sela, na Rogaču u predelu Banje, Gornjeg Sela (Starine) i u nečujamskoj uvalici Piškeri. U svom sastavu ova vila imala je i kupatilo. Pojam villa rusticae može se prevesti kao vila na selu, a one su bile dom rimskih zemljoposednika. Oni su živeli u glavnoj kući koja je bila okružena poljoprivrednim površinama. ',
      },
      audioSrc: 'vile_rustike',
    },
    {
      id: '2',
      x: 60,
      y: 50,
      title: {
        en: 'Starine',
        rs: 'Starine',
      },
      description: {
        en: 'The fortress Starine, which has two towers, originates from the antient times. It is situated at the foot of Vela Straža (the highest point of the island), near Gornje Selo. In Gornje Selo, you can also find ancient graves, as well as the remains of an ancient sarcophagus at the graveyard (the location called Stomorja).        ',
        rs: 'Tvrđava Starine sa dve kule potiče iz antičkog vremena. Nalazi se u podnožju Vele straže (najvišeg vrha ostrva), nedaleko od Gornjeg Sela. Ovde se nalaze i antički grobovi, kao i ostaci antičkog sarkofaga na groblju (lokalitet Stomorja).',
      },
      audioSrc: 'starine',
    },
    // Add more icons as needed
  ];
  
  