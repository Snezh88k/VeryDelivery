import { FILTER } from "./types";

export function checkFilter(text, id) {
  return {
    type: FILTER,
    data: [text, id],
  };
}
