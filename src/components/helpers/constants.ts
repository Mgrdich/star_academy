import type { ObjectValues } from "./types.ts";

export const IDS = {
  home: "home",
  about_us: "about_us",
  schedule: "schedule",
  fees: "fees",
  team: "team",
  register: "register",
  contact: "contact",
} as const;

export type IDS_TYPE = ObjectValues<typeof IDS>;
