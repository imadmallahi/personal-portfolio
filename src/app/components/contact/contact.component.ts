import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../data/profile-data';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FadeInDirective],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    languageService = inject(LanguageService);

    contact = computed(() => {
        return PROFILE_DATA[this.languageService.currentLanguage()].contact;
    });

    currentLang = this.languageService.currentLanguage;
}
