export interface MapIcon {
    id: string;
    x: number;
    y: number;
    title: string;
    description: string;
    audioSrc: string;
  }
  
  export const mapIcons: MapIcon[] = [
    {
      id: '1',
      x: 20,
      y: 30,
      title: 'Vile Rustike',
      description: 'Kuće vile rustike koje potiču iz antičkog doba mogu se naći u okolini Donjeg Sela, na Rogaču u predelu Banje, Gornjeg Sela (Starine) i u nečujamskoj uvalici Piškeri. U svom sastavu ova vila imala je i kupatilo. Pojam villa rusticae može se prevesti kao vila na selu, a one su bile dom rimskih zemljoposednika. Oni su živeli u glavnoj kući koja je bila okružena poljoprivrednim površinama. ',
      audioSrc: '/audio/vile_rustike.sr.m4a',
    },
    {
      id: '2',
      x: 60,
      y: 50,
      title: 'Starine',
      description: 'Tvrđava Starine sa dve kule potiče iz antičkog vremena. Nalazi se u podnožju Vele straže (najvišeg vrha ostrva), nedaleko od Gornjeg Sela. Ovde se nalaze i antički grobovi, kao i ostaci antičkog sarkofaga na groblju (lokalitet Stomorja).',
      audioSrc: '/audio/starine.sr.m4a',
    },
    // Add more icons as needed
  ];
  
  