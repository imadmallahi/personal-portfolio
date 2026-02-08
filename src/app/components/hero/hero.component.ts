import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../data/profile-data';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule, FadeInDirective],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {
    languageService = inject(LanguageService);

    profile = computed(() => {
        const lang = this.languageService.currentLanguage();
        return PROFILE_DATA[lang];
    });

    currentLang = this.languageService.currentLanguage;
}
