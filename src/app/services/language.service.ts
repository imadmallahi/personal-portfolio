import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'fr';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    currentLanguage = signal<Language>('fr'); // Default to French as per resume

    toggleLanguage() {
        this.currentLanguage.update(lang => lang === 'en' ? 'fr' : 'en');
    }

    setLanguage(lang: Language) {
        this.currentLanguage.set(lang);
    }
}
