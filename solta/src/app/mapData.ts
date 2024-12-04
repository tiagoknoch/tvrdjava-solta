import mapIconsData from '../../public/mapIcons.json';

export interface MapIcon {
  id: string;
  x: number;
  y: number;
  title: {
    en: string;
    sr: string;
  };
  description: {
    en: string;
    sr: string;
  };
  audioSrc: string;
}

export const mapIcons: MapIcon[] = mapIconsData;
