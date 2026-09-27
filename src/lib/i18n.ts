import en from "@/messages/en.json";
import id from "@/messages/id.json";
import { Locale } from "./constants";

export const getMessages = (locale: Locale) => {
  return locale === "id" ? id : en;
};
