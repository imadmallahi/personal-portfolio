import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PROFILE_DATA } from '../../data/profile-data';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FadeInDirective, ReactiveFormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    languageService = inject(LanguageService);
    private fb = inject(FormBuilder);

    contact = computed(() => {
        return PROFILE_DATA[this.languageService.currentLanguage()].contact;
    });

    currentLang = this.languageService.currentLanguage;
    t = this.languageService.translations;

    contactForm: FormGroup = this.fb.group({
        name: ['', [Validators.required]],
        subject: ['', [Validators.required]],
        message: ['', [Validators.required]]
    });

    onSubmit() {
        if (this.contactForm.valid) {
            const { name, subject, message } = this.contactForm.value;
            const email = this.contact().email;
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\n\n${message}`)}`;
            window.location.href = mailtoLink;
            this.contactForm.reset();
        }
    }
}
