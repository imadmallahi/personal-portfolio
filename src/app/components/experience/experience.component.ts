import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../data/profile-data';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, FadeInDirective],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    languageService = inject(LanguageService);

    experience = computed(() => {
        return PROFILE_DATA[this.languageService.currentLanguage()].experience;
    });

    currentLang = this.languageService.currentLanguage;
}
