import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../data/profile-data';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [CommonModule, FadeInDirective],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {
    languageService = inject(LanguageService);

    education = computed(() => {
        return PROFILE_DATA[this.languageService.currentLanguage()].education;
    });

    currentLang = this.languageService.currentLanguage;
}
