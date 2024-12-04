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
      title: 'Zadar',
      description: 'Zadar',
      audioSrc: '/audio/zadar.sr.m4a',
    },
    {
      id: '2',
      x: 60,
      y: 50,
      title: 'Starine',
      description: 'Starine',
      audioSrc: '/audio/starine.sr.m4a',
    },
    // Add more icons as needed
  ];
  
  