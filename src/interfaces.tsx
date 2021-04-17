import { LatLngTuple } from "leaflet";

export interface MapProps {
  position: LatLngTuple;
  boundaries: LatLngTuple[];
  places: any[];
}

export interface GeocodingSuggestion {
  _id: string;
  name: string;
  center: LatLngTuple;
  borders: LatLngTuple[];
}

export interface SearchProps {
  onCitySelect(center: LatLngTuple, polygon: LatLngTuple[]): void,
}