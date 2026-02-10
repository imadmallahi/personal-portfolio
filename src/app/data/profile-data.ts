import { MultiLangProfile } from '../models/profile.model';

export const PROFILE_DATA: MultiLangProfile = {
    fr: {
        name: 'IMAD EL MALLAHI',
        title: 'INGÉNIEUR LOGICIEL FULLSTACK',
        contact: {
            email: 'mellahi.imad1@gmail.com',
            phone: '+33 7 59 60 77 79',
            linkedin: 'https://www.linkedin.com/in/imad-el-mallahi/',
            github: 'https://github.com/imadmallahi',
            location: 'Paris, France'
        },
        experience: [
            {
                role: 'Consultant Full Stack',
                company: 'ILINQSOFT SASU Chez Bnp Paribas',
                period: 'Février 2025 - Présent',
                location: 'Paris, France',
                description: 'En tant que Consultant, je conçois et développe des applications bancaires performantes pour la banque Bnp Paribas.',
                achievements: [
                    'Concevoir et implémenter des modules à développer',
                    'Gestion de l’interface utilisateur avec Angular Material',
                    'Implémentation de couches de sécurité',
                    'Implémenter, tester, et assurer le support',
                    'Configuration de rapports de couverture de tests avec SonarQube',
                    'Rédaction de tests unitaires (JUnit 5)',
                    'Optimisation des performances via la décomposition en modules chargés de manière différée'
                ],
                technologies: ['Java 17', 'Spring Boot 3.X', 'Angular 16', 'Jenkins', 'GitLab', 'JFROG', 'Oracle Database', 'SonarQube']
            },
            {
                role: 'Ingénieur Fullstack Confirmé',
                company: 'Eviden chez TDF',
                period: 'Décembre 2024 - Février 2025',
                location: 'Casablanca, Maroc',
                description: 'En tant que Full Stack chez Eviden, je conçois et développe des applications pour télédiffusion de la France performantes et mets en place des solutions pour la gestion des projets et l’expression de besoin.',
                achievements: [
                    'Conception de l’architecture hexagonale',
                    'Création de l’API principale du projet avec Spring Boot la gestion des gabarits',
                    'Gestion des incidents de production',
                    'Conception de l’interface utilisateur avec Angular Material',
                    'Implémentation de couches de sécurité avec Keycloak',
                    'Implémenter, tester, et assurer le support'
                ],
                technologies: ['Java 21', 'Spring Boot 3.X', 'Angular 17', 'Jenkins', 'GitLab', 'MongoDB', 'Oracle Database', 'SonarQube', 'Kafka']
            },
            {
                role: 'Ingénieur Fullstack',
                company: 'EURAFRIC INFORMATION chez BMCE et BES',
                period: 'Septembre 2022 - Décembre 2024',
                location: 'Casablanca, Maroc',
                description: 'En tant que Développeur Full Stack chez EAI, je conçois et développe des applications bancaires performantes et mets en place des solutions d’automatisation pour garantir leur conformité aux standards stricts de Bank of Africa.',
                achievements: [
                    '2024 : Mise en place d’un système d’automatisation de la saisie des ordres de virement en masse, utilisant l’OCR pour l’extraction',
                    '2023 : Mise en place d’un système KYC pour garantir la fiabilité des informations saisies par les agents de BMCE',
                    'Conception de l’architecture initiale du projet',
                    'Création de l’API principale du projet avec Spring Boot',
                    'Gestion des incidents de production',
                    'Développement de fonctionnalités complexes, notamment des jobs Spring Batch pour le traitement intensif des données',
                    'Conception de l’interface utilisateur avec Angular Material',
                    'Implémentation de couches de sécurité avec JWT et Spring Security',
                    'Implémenter, tester, et assurer le support des solutions déployées avec ABBYY OCR'
                ],
                technologies: ['Java 8', 'Spring Boot 2.X', 'Angular 14', 'TypeScript', 'SQL Server', 'Jenkins', 'GitLab', 'ABBYY OCR', 'Oracle Database', 'SonarQube', 'Scrum']
            },
            {
                role: 'Java Consultant',
                company: 'Corporate Software chez EAI',
                period: 'Septembre 2021 - Septembre 2022',
                location: 'Casablanca, Maroc',
                description: 'Conception, développement, et mise en production de solutions Java, incluant l’automatisation des processus métier par l’intégration d’outils OCR pour améliorer l’efficacité opérationnelle.',
                achievements: [
                    'Développement d’une application utilisant Spring Boot et Angular pour la recherche des redevables sur la base de données de la BMCE',
                    'Développement de graphiques avec la bibliothèque NGX-Charts',
                    'Mise en production web service pour l’app mobile DabaTransfert',
                    'Migration vers Angular 15',
                    'Configuration de rapports de couverture de tests avec SonarQube',
                    'Rédaction de tests unitaires (JUnit 5)',
                    'Optimisation des performances via la décomposition en modules chargés de manière différée'
                ],
                technologies: ['Java 8', 'Angular 14', 'Git', 'GitLab CI/CD', 'TypeScript', 'NGX-CHARTS', 'Angular Material', 'Bootstrap', 'SonarQube', 'Swagger', 'Jira']
            },
            {
                role: 'Ingénieur Fullstack',
                company: 'E-marketing Solution',
                period: 'Février 2021 - Septembre 2021',
                location: 'Fès, Maroc',
                description: 'Développement d’applications web pour la gestion des réquisitions et la création de guides d’achat en e-marketing.',
                achievements: [
                    'Conception de l’architecture initiale du projet',
                    'Création de services RESTful pour gérer les données des guides d’achat en utilisant Spring Boot',
                    'Création de l’API principale du projet avec Spring Boot',
                    'Gestion de la base de données SQL Server',
                    'Implémentation de couches de sécurité avec JWT et Spring Security',
                    'Mise en place d’un système de journalisation Log4j2',
                    'Revue de code et organisation d’ateliers',
                    'Rédaction de guides techniques et fonctionnels et résolution des incidents signalés par les utilisateurs'
                ],
                technologies: ['Java', 'Spring Boot', 'Spring Security', 'SonarQube', 'Angular', 'GitLab CI/CD', 'JUnit', 'Postman', 'Swagger', 'Scrum']
            },
            {
                role: 'Ingénieur Java',
                company: 'Freelance',
                period: 'Mars 2020 - Septembre 2020',
                location: 'Bruxelles, Belgique',
                description: 'Conception et développement d’une application web Java EE pour optimiser la gestion des stocks et coordonner efficacement les livraisons de colis.',
                achievements: [
                    'Développement des servlets et des EJB pour gérer la logique métier',
                    'La gestion des stocks (ajout, suppression, mise à jour des articles)',
                    'Maintenance corrective des anomalies',
                    'Rédaction et correction de spécifications fonctionnelles et techniques',
                    'Optimisation des requêtes SQL pour des opérations rapides et fiables'
                ],
                technologies: ['Java', 'Maven', 'Hibernate', 'JSP', 'Git', 'Wildfly8', 'Heroku']
            }
        ],
        education: [
            {
                degree: 'Master Web Intelligence et Sciences Des Données',
                institution: 'Faculté des Sciences Dhar El Mahraz de Fès',
                period: '2018 - 2020',
                location: 'Fes, Maroc'
            },
            {
                degree: 'Licence en Sciences Mathématiques et Informatiques',
                institution: 'Faculté des Sciences Dhar El Mahraz de Fès',
                period: '2018',
                location: 'Fes, Maroc'
            },
            {
                degree: 'Diplôme d’Études Universitaires Scientifiques et Techniques',
                institution: 'Faculté des Sciences et Techniques de Fes (FSTF)',
                period: '2015-2017',
                location: 'Fes, Maroc'
            }
        ],
        skills: [
            {
                name: 'Langages de programmation',
                skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++']
            },
            {
                name: 'Technologies Web',
                skills: ['Spring', 'EJB', 'JSF', 'Swagger', 'Angular', 'React']
            },
            {
                name: 'Outils de test et qualité',
                skills: ['JUnit 5', 'Mockito', 'JMeter', 'SonarQube']
            },
            {
                name: 'DevOps, Cloud et Test',
                skills: ['GitLab CI', 'Wildfly 24', 'WebSphere', 'Docker']
            },
            {
                name: 'Bases de données',
                skills: ['SQL Server', 'MySQL', 'Oracle']
            },
            {
                name: 'Environnements',
                skills: ['Eclipse', 'IntelliJ', 'VSCode', 'Postman']
            },
            {
                name: 'Conception et méthodologie',
                skills: ['UML', 'Merise', 'POO', 'SCRUM', 'Kanban']
            },
            {
                name: 'Langues',
                skills: ['Anglais', 'Français', 'Arabe']
            }
        ],
        languages: ['Anglais', 'Français', 'Arabe']
    },
    en: {
        name: 'IMAD EL MALLAHI',
        title: 'FULLSTACK SOFTWARE ENGINEER',
        contact: {
            email: 'mellahi.imad1@gmail.com',
            phone: '+33 7 59 60 77 79',
            linkedin: 'https://www.linkedin.com/in/imad-el-mallahi/',
            github: 'https://github.com/imadmallahi',
            location: 'Paris, France'
        },
        experience: [
            {
                role: 'Full Stack Consultant',
                company: 'ILINQSOFT SASU at Bnp Paribas',
                period: 'February 2025 - Present',
                location: 'Paris, France',
                description: 'As a Consultant, I design and develop high-performance banking applications for Bnp Paribas.',
                achievements: [
                    'Design and implement development modules',
                    'Manage user interface with Angular Material',
                    'Implement security layers',
                    'Implement, test, and provide support',
                    'Configure test coverage reports with SonarQube',
                    'Write unit tests (JUnit 5)',
                    'Optimize performance via lazy loaded modules'
                ],
                technologies: ['Java 17', 'Spring Boot 3.X', 'Angular 16', 'Jenkins', 'GitLab', 'JFROG', 'Oracle Database', 'SonarQube']
            },
            {
                role: 'Confirmed Fullstack Engineer',
                company: 'Eviden at TDF',
                period: 'December 2024 - February 2025',
                location: 'Casablanca, Morocco',
                description: 'As a Full Stack Engineer at Eviden, I design and develop high-performance broadcasting applications for France and implement solutions for project management and requirements expression.',
                achievements: [
                    'Design of hexagonal architecture',
                    'Creation of the main project API with Spring Boot for template management',
                    'Production incident management',
                    'User interface design with Angular Material',
                    'Implementation of security layers with Keycloak',
                    'Implement, test, and provide support'
                ],
                technologies: ['Java 21', 'Spring Boot 3.X', 'Angular 17', 'Jenkins', 'GitLab', 'MongoDB', 'Oracle Database', 'SonarQube', 'Kafka']
            },
            {
                role: 'Fullstack Engineer',
                company: 'EURAFRIC INFORMATION at BMCE and BES',
                period: 'September 2022 - December 2024',
                location: 'Casablanca, Morocco',
                description: 'As a Full Stack Developer at EAI, I design and develop high-performance banking applications and implement automation solutions to ensure compliance with strict Bank of Africa standards.',
                achievements: [
                    '2024: Implementation of a mass transfer order entry automation system using OCR for extraction',
                    '2023: Implementation of a KYC system to ensure reliability of information entered by BMCE agents',
                    'Initial project architecture design',
                    'Creation of main project API with Spring Boot',
                    'Production incident management',
                    'Development of complex features, including Spring Batch jobs for intensive data processing',
                    'User interface design with Angular Material',
                    'Implementation of security layers with JWT and Spring Security',
                    'Implement, test, and provide support for deployed solutions with ABBYY OCR'
                ],
                technologies: ['Java 8', 'Spring Boot 2.X', 'Angular 14', 'TypeScript', 'SQL Server', 'Jenkins', 'GitLab', 'ABBYY OCR', 'Oracle Database', 'SonarQube', 'Scrum']
            },
            {
                role: 'Java Consultant',
                company: 'Corporate Software at EAI',
                period: 'September 2021 - September 2022',
                location: 'Casablanca, Morocco',
                description: 'Design, development, and deployment of Java solutions, including business process automation via OCR integration to improve operational efficiency.',
                achievements: [
                    'Development of an application using Spring Boot and Angular for debtor search in the BMCE database',
                    'Development of charts with NGX-Charts library',
                    'Web service deployment for DabaTransfert mobile app',
                    'Migration to Angular 15',
                    'Configuration of test coverage reports with SonarQube',
                    'Writing unit tests (JUnit 5)',
                    'Performance optimization via lazy loaded modules'
                ],
                technologies: ['Java 8', 'Angular 14', 'Git', 'GitLab CI/CD', 'TypeScript', 'NGX-CHARTS', 'Angular Material', 'Bootstrap', 'SonarQube', 'Swagger', 'Jira']
            },
            {
                role: 'Fullstack Engineer',
                company: 'E-marketing Solution',
                period: 'February 2021 - September 2021',
                location: 'Fes, Morocco',
                description: 'Development of web applications for requisition management and creation of e-marketing buying guides.',
                achievements: [
                    'Initial project architecture design',
                    'Creation of RESTful services to manage buying guide data using Spring Boot',
                    'Creation of main project API with Spring Boot',
                    'SQL Server database management',
                    'Implementation of security layers with JWT and Spring Security',
                    'Implementation of Log4j2 logging system',
                    'Code review and workshop organization',
                    'Writing technical and functional guides and resolving user-reported incidents'
                ],
                technologies: ['Java', 'Spring Boot', 'Spring Security', 'SonarQube', 'Angular', 'GitLab CI/CD', 'JUnit', 'Postman', 'Swagger', 'Scrum']
            },
            {
                role: 'Java Engineer',
                company: 'Freelance',
                period: 'March 2020 - September 2020',
                location: 'Brussels, Belgium',
                description: 'Design and development of a Java EE web application to optimize stock management and efficiently coordinate package deliveries.',
                achievements: [
                    'Development of servlets and EJBs to manage business logic',
                    'Stock management (adding, removing, updating items)',
                    'Corrective maintenance of anomalies',
                    'Writing and correcting functional and technical specifications',
                    'Optimization of SQL queries for fast and reliable operations'
                ],
                technologies: ['Java', 'Maven', 'Hibernate', 'JSP', 'Git', 'Wildfly8', 'Heroku']
            }
        ],
        education: [
            {
                degree: 'Master in Web Intelligence and Data Science',
                institution: 'Faculty of Sciences Dhar El Mahraz of Fes',
                period: '2018 - 2020',
                location: 'Fes, Morocco'
            },
            {
                degree: 'Bachelor in Mathematical and Computer Sciences',
                institution: 'Faculty of Sciences Dhar El Mahraz of Fes',
                period: '2018',
                location: 'Fes, Morocco'
            },
            {
                degree: 'Diploma of University Studies in Science and Technology',
                institution: 'Faculty of Sciences and Technology of Fes (FSTF)',
                period: '2015-2017',
                location: 'Fes, Morocco'
            }
        ],
        skills: [
            {
                name: 'Programming Languages',
                skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++']
            },
            {
                name: 'Web Technologies',
                skills: ['Spring', 'EJB', 'JSF', 'Swagger', 'Angular', 'React']
            },
            {
                name: 'Testing & Quality Tools',
                skills: ['JUnit 5', 'Mockito', 'JMeter', 'SonarQube']
            },
            {
                name: 'DevOps, Cloud & Test',
                skills: ['GitLab CI', 'Wildfly 24', 'WebSphere', 'Docker']
            },
            {
                name: 'Databases',
                skills: ['SQL Server', 'MySQL', 'Oracle']
            },
            {
                name: 'Environments',
                skills: ['Eclipse', 'IntelliJ', 'VSCode', 'Postman']
            },
            {
                name: 'Design & Methodology',
                skills: ['UML', 'Merise', 'OOP', 'SCRUM', 'Kanban']
            },
            {
                name: 'Languages',
                skills: ['English', 'French', 'Arabic']
            }
        ],
        languages: ['English', 'French', 'Arabic']
    }
};
