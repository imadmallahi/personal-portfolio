import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { LanguageService } from '../../services/language.service';
import { PROFILE_DATA } from '../../data/profile-data';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, FadeInDirective],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
    languageService = inject(LanguageService);

    // We need profile just for stats if they were dynamic, but here data is static/mixed. 
    // Let's bring in profile data anyway.
    profile = computed(() => {
        return PROFILE_DATA[this.languageService.currentLanguage()];
    });

    currentLang = this.languageService.currentLanguage;
}
