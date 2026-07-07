import { withBase, useLang } from '@rspress/core/runtime';
import { EN_US } from './enUS';
import { KO_KR } from './koKR';
import { PT_BR } from './ptBR';
import { ZH_CN } from './zhCN';

const translations = {
  en: EN_US,
  ko: KO_KR,
  'pt-BR': PT_BR,
  zh: ZH_CN,
} as const;

export function useUrl(url: string) {
  const lang = useLang();
  return withBase(lang === 'zh' ? url : `/${lang}${url}`);
}

export function useI18n() {
  const lang = (useLang() as keyof typeof translations) || 'en';
  return (key: keyof typeof EN_US) => translations[lang][key];
}
