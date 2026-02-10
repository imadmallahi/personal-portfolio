import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS, TranslationKeys } from '../translations';

export type Language = 'en' | 'fr';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    currentLanguage = signal<Language>('en'); // Default to English

    translations = computed<TranslationKeys>(() => {
        return TRANSLATIONS[this.currentLanguage()];
    });

    toggleLanguage() {
        this.currentLanguage.update(lang => lang === 'en' ? 'fr' : 'en');
    }

    setLanguage(lang: Language) {
        this.currentLanguage.set(lang);
    }
}
