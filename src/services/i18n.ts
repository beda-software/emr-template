import { i18n } from '@lingui/core';
import { en } from 'make-plural/plurals';

import { messages as enMessagesEmr } from '@beda.software/emr/dist/locale/en/messages';

import { messages as enMessages } from '../locale/en/messages';

type locale = 'en';

const localMap = {
    en: { ...enMessagesEmr,...enMessages },
};

export const locales = {
    en: 'English',
};

i18n.loadLocaleData({
    en: { plurals: en },
});

export const getCurrentLocale = () => {
    return (localStorage.getItem('locale') || 'en') as locale;
};

export const setCurrentLocale = (locale: string) => {
    localStorage.setItem('locale', locale);
};

export function dynamicActivate(locale: locale) {
    const messages = localMap[locale];

    if (messages) {
        i18n.load(locale, messages);
    }
    i18n.activate(locale);
}
