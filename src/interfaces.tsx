import { LatLngExpression } from "leaflet";

export interface MapProps {
  position: LatLngExpression;
}

export interface GeocodingSuggestion {
  name: string;
  center: LatLngExpression;
}

export interface SearchProps {
  onCitySelect(center: LatLngExpression): void,
}