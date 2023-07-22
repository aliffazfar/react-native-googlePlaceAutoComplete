declare interface fetchPlaceDetailResponses {
  html_attributions: any[];
  result: Result;
  status: string;
}

declare interface Result {
  formatted_address: string;
  geometry: Geometry;
  name: string;
  opening_hours?: OpeningHours;
}

declare interface Geometry {
  location: Location;
  viewport: Viewport;
}

declare interface Location {
  lat: number;
  lng: number;
}

declare interface Viewport {
  northeast: Northeast;
  southwest: Southwest;
}

declare interface Northeast {
  lat: number;
  lng: number;
}

declare interface Southwest {
  lat: number;
  lng: number;
}

declare interface OpeningHours {
  open_now: boolean;
  periods?: Period[];
  weekday_text: string[];
}

declare interface Period {
  open: PeriodDetail;
  close?: PeriodDetail;
}

declare interface PeriodDetail {
  day: number;
  time: string;
}
