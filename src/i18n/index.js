import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        nav: {
            home: 'Home',
            services: 'Services',
            about: 'About',
            purpose: 'Purpose',
            why: 'Why Us',
            contact: 'Contact'
        },
        hero: {
            title: 'PROSAFETY AZERBAIJAN',
            subtitle: 'Health and Safety Consulting Company',
            trust: 'Trust your safety to us',
            cta: 'Get Started'
        },
        about: {
            title: 'About Us',
            desc: 'ProSafety Azerbaijan is a health and safety consulting firm. We offer a wide range of services to ensure workplace safety and regulatory compliance. Our experienced team helps businesses protect employees and develop a safety culture.'
        },
        purpose: {
            title: 'Purpose',
            desc: 'OCCUPATIONAL SAFETY IS A KEY FACTOR OF THE COMPANY. At ProSafety Azerbaijan, we understand that occupational health and safety are fundamental to the success of any organization. Our mission is to help businesses create and maintain safe and healthy working conditions, protecting their most valuable resources - people. We believe that a strong occupational health and safety culture is not only a regulatory requirement but also a key factor in business efficiency. By working with us, you can reduce risks, improve employee morale, and increase productivity.'
        },
        services: {
            title: 'WHAT WE OFFER',
            items: {
                policies: {
                    title: 'Policy and Procedure Development',
                    desc: 'Creating and updating health and safety policies and procedures tailored to specific organizational needs.'
                },
                training: {
                    title: 'Training and Education',
                    desc: 'Conducting employee training programs on health and safety practices.'
                },
                compliance: {
                    title: 'Regulatory Compliance Assistance',
                    desc: 'Helping businesses comply with local, national, and international health and safety regulations. Assistance in incident investigations and inspections by local authorities.'
                },
                audit: {
                    title: 'Audits and Inspections',
                    desc: 'Comprehensive reviews of health and safety practices to ensure regulatory compliance, identify gaps, and provide practical recommendations.'
                },
                systems: {
                    title: 'Safety Management Systems',
                    desc: 'Development and implementation of comprehensive safety management systems tailored to organizational needs.'
                }
            }
        },
        why: {
            title: 'WHY PROSAFETY AZERBAIJAN?',
            items: {
                experience: {
                    title: 'Experience',
                    desc: 'Years of practical knowledge and experience gained through local and international projects.'
                },
                professionalism: {
                    title: 'Professionalism',
                    desc: 'Our team consists of qualified and certified experts in their fields.'
                },
                approach: {
                    title: 'Client-Oriented Approach',
                    desc: 'We provide customized solutions that meet the specific needs of each client.'
                },
                quality: {
                    title: 'Quality Assurance',
                    desc: 'Our services fully comply with local legislation and international standards.'
                }
            }
        },
        contact: {
            title: "LET'S COLLABORATE",
            social: 'Visit our social media:',
            email: 'Write to us:',
            phone: 'Call us (WhatsApp):',
            phoneNumber: '(050) 278 98 88',
            emailAddress: 'hse@prosafetyazerbaijan.com'
        }
    },
    ru: {
        nav: {
            home: 'Главная',
            services: 'Услуги',
            about: 'О нас',
            purpose: 'Цель',
            why: 'Почему мы?',
            contact: 'Контакты'
        },
        hero: {
            title: 'PROSAFETY AZERBAIJAN',
            subtitle: 'Консалтинговая компания по охране труда и технике безопасности',
            trust: 'Доверьте свою безопасность нам',
            cta: 'Начать'
        },
        about: {
            title: 'О нас',
            desc: 'ProSafety Azerbaijan – это консалтинговая фирма по охране труда и технике безопасности. Мы предлагаем широкий спектр услуг для обеспечения безопасности на рабочем месте и соблюдения нормативных требований. Наша опытная команда помогает бизнесу защищать сотрудников и развивать культуру безопасности.'
        },
        purpose: {
            title: 'Цель',
            desc: 'ОХРАНА ТРУДА – ЭТО КЛЮЧЕВОЙ ФАКТОР КОМПАНИИ. В ProSafety Azerbaijan мы понимаем, что охрана труда и техника безопасности являются основополагающими для успеха любой организации. Наша миссия – помочь бизнесу создавать и поддерживать безопасные и здоровые рабочие условия, защищая их самые ценные ресурсы – людей. Мы верим, что сильная культура охраны труда и техники безопасности – это не только нормативное требование, но и ключевой фактор эффективности бизнеса. Сотрудничая с нами, вы можете снизить риски, улучшить моральный дух сотрудников и повысить производительность.'
        },
        services: {
            title: 'ЧТО МЫ ПРЕДЛАГАЕМ',
            items: {
                policies: {
                    title: 'Разработка политик и процедур',
                    desc: 'Создание и обновление политик и процедур по охране труда и технике безопасности, адаптированных к конкретным потребностям организации.'
                },
                training: {
                    title: 'Обучение и образование',
                    desc: 'Проведение программ по обучению сотрудников практикам охраны труда и техники безопасности.'
                },
                compliance: {
                    title: 'Помощь в соблюдении нормативных требований',
                    desc: 'Помощь бизнесу в соблюдении местных, национальных и международных нормативных требований по охране труда и технике безопасности. Содействие в расследовании инцидентов и инспекциях, проводимых местными органами власти.'
                },
                audit: {
                    title: 'Аудит и инспекции',
                    desc: 'Комплексные обзоры практик охраны труда и техники безопасности для обеспечения соответствия нормативным требованиям, выявления пробелов и предоставления практических рекомендаций.'
                },
                systems: {
                    title: 'Системы управления безопасностью',
                    desc: 'Разработка и внедрение комплексных систем управления безопасностью, адаптированных к потребностям организации.'
                }
            }
        },
        why: {
            title: 'ПОЧЕМУ PROSAFETY AZERBAIJAN?',
            items: {
                experience: {
                    title: 'Опыт',
                    desc: 'Годы практических знаний и опыта, полученные в ходе местных и международных проектов.'
                },
                professionalism: {
                    title: 'Профессионализм',
                    desc: 'Наша команда состоит из квалифицированных и сертифицированных экспертов в своих областях.'
                },
                approach: {
                    title: 'Клиентоориентированный подход',
                    desc: 'Мы предоставляем индивидуальные решения, соответствующие конкретным потребностям каждого клиента.'
                },
                quality: {
                    title: 'Гарантия качества',
                    desc: 'Наши услуги полностью соответствуют местному законодательству и международным стандартам.'
                }
            }
        },
        contact: {
            title: 'ДАВАЙТЕ СОТРУДНИЧАТЬ',
            social: 'Посетите наши социальные сети:',
            email: 'Напишите нам:',
            phone: 'Позвоните нам (WhatsApp):',
            phoneNumber: '(050) 278 98 88',
            emailAddress: 'hse@prosafetyazerbaijan.com'
        }
    },
    az: {
        nav: {
            home: 'Ana səhifə',
            services: 'Xidmətlər',
            about: 'Haqqımızda',
            purpose: 'Məqsəd',
            why: 'Niyə biz?',
            contact: 'Əlaqə'
        },
        hero: {
            title: 'Peşəkar Sağlamlıq və Təhlükəsizlik Həlləri',
            subtitle:
                'İş yerinizi və işçilərinizi hərtərəfli təhlükəsizlik xidmətləri ilə qoruyuruq',
            cta: 'Başla'
        },
        services: {
            title: 'Xidmətlərimiz',
            subtitle: 'Biznesiniz üçün hərtərəfli sağlamlıq və təhlükəsizlik həlləri',
            risk: {
                title: 'Risk Qiymətləndirməsi',
                desc: 'Potensial təhlükələri müəyyən etmək üçün hərtərəfli iş yeri risk qiymətləndirmələri və təhlükəsizlik auditləri.'
            },
            training: {
                title: 'Təhlükəsizlik Təlimi',
                desc: 'Bütün səviyyələrdə işçilər üçün xüsusi təhlükəsizlik təlim proqramları və seminarlar.'
            },
            compliance: {
                title: 'Uyğunluq İdarəetməsi',
                desc: 'Biznesinizin bütün sağlamlıq və təhlükəsizlik qaydalarına və standartlarına uyğunluğunu təmin edirik.'
            }
        },
        about: {
            title: 'Şirkətimiz haqqında',
            desc: 'Biz hərtərəfli təhlükəsizlik həlləri təmin etməkdə çoxillik təcrübəyə malik aparıcı sağlamlıq və təhlükəsizlik məsləhət şirkətiyik. Sertifikatlı mütəxəssislərdən ibarət komandamız müxtəlif sənaye sahələrində daha təhlükəsiz iş yerləri yaratmağa həsr olunub.'
        },
        contact: {
            title: 'Bizimlə əlaqə',
            subtitle: 'Ekspert komandamızla əlaqə saxlayın',
            form: {
                name: 'Ad',
                email: 'Email',
                message: 'Mesaj',
                send: 'Göndər'
            },
            info: {
                phone: 'Telefon',
                email: 'Email',
                address: 'Ünvan'
            }
        },
        footer: {
            links: 'Sürətli keçidlər',
            follow: 'Bizi izləyin',
            rights: '© {year} Health and Safety Azerbaijan. Bütün hüquqlar qorunur.'
        },
        seo: {
            title: 'Health and Safety Azerbaijan - Peşəkar SƏTƏM Məsləhət Xidmətləri',
            description: 'Azərbaycanda ekspert səviyyəli sağlamlıq və təhlükəsizlik məsləhət xidmətləri. Biznes üçün risk qiymətləndirmələri, təhlükəsizlik təlimi və uyğunluq idarəetməsi təklif edirik.'
        },
        purpose: {
            title: 'Məqsəd',
            desc: 'ƏMƏYIN TƏHLÜKƏSIZLIYI ŞIRKƏTIN ƏSAS FAKTORIDIR. ProSafety Azerbaijan olaraq, əməyin mühafizəsi və təhlükəsizlik texnikasının hər bir təşkilatın uğuru üçün fundamental olduğunu anlayırıq. Missiyamız biznesə təhlükəsiz və sağlam iş şəraiti yaratmaq və qorumaqda kömək etmək, onların ən dəyərli resurslarını - insanları qorumaqdır. İnanırıq ki, güclü əməyin mühafizəsi və təhlükəsizlik mədəniyyəti təkcə tənzimləyici tələb deyil, həm də biznes səmərəliliyinin əsas amilidir.'
        },
        why: {
            title: 'NIYƏ PROSAFETY AZERBAIJAN?',
            items: {
                experience: {
                    title: 'Təcrübə',
                    desc: 'Yerli və beynəlxalq layihələrdən əldə edilmiş çoxillik praktiki bilik və təcrübə.'
                },
                professionalism: {
                    title: 'Peşəkarlıq',
                    desc: 'Komandamız öz sahələrində ixtisaslı və sertifikatlı mütəxəssislərdən ibarətdir.'
                },
                approach: {
                    title: 'Müştəriyönümlü Yanaşma',
                    desc: 'Hər bir müştərinin xüsusi ehtiyaclarına uyğun fərdi həllər təqdim edirik.'
                },
                quality: {
                    title: 'Keyfiyyət Təminatı',
                    desc: 'Xidmətlərimiz yerli qanunvericiliyə və beynəlxalq standartlara tam uyğundur.'
                }
            }
        }
    }
}

export const i18n = createI18n({
    legacy: false,
    locale: 'az', // default locale
    fallbackLocale: 'en',
    messages
})
