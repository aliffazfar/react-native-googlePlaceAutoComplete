declare interface fetchPlacesResponses {
  predictions: Prediction[];
  status: string;
}

declare interface Prediction {
  description: string;
  matched_substrings: MatchedSubstring[];
  place_id: string;
  reference: string;
  structured_formatting: StructuredFormatting;
  terms: Term[];
  types: string[];
}

declare interface MatchedSubstring {
  length: number;
  offset: number;
}

declare interface StructuredFormatting {
  main_text: string;
  main_text_matched_substrings: MainTextMatchedSubstring[];
  secondary_text: string;
}

declare interface MainTextMatchedSubstring {
  length: number;
  offset: number;
}

declare interface Term {
  offset: number;
  value: string;
}
