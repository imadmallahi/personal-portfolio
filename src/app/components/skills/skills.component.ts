import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../data/profile-data';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, FadeInDirective],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
    languageService = inject(LanguageService);

    skills = computed(() => {
        return PROFILE_DATA[this.languageService.currentLanguage()].skills;
    });

    currentLang = this.languageService.currentLanguage;
}
