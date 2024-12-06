import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Professional Health and Safety Solutions',
      subtitle: 'Protecting your workplace and employees with comprehensive safety services',
      cta: 'Get Started'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive health and safety solutions for your business',
      risk: {
        title: 'Risk Assessment',
        desc: 'Comprehensive workplace risk assessments and safety audits to identify potential hazards.'
      },
      training: {
        title: 'Safety Training',
        desc: 'Customized safety training programs and workshops for employees at all levels.'
      },
      compliance: {
        title: 'Compliance Management',
        desc: 'Ensuring your business meets all health and safety regulations and standards.'
      }
    },
    about: {
      title: 'About Our Company',
      desc: 'We are a leading health and safety consultancy firm with years of experience in providing comprehensive safety solutions. Our team of certified professionals is dedicated to creating safer workplaces across various industries.'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team of experts',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      },
      info: {
        phone: 'Phone',
        email: 'Email',
        address: 'Address'
      }
    },
    footer: {
      links: 'Quick Links',
      follow: 'Follow Us',
      rights: '© {year} Health and Safety Azerbaijan. All rights reserved.'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О нас',
      contact: 'Контакты'
    },
    hero: {
      title: 'Профессиональные решения по охране труда',
      subtitle: 'Защита вашего рабочего места и сотрудников комплексными услугами безопасности',
      cta: 'Начать'
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Комплексные решения по охране труда для вашего бизнеса',
      risk: {
        title: 'Оценка рисков',
        desc: 'Комплексная оценка рисков на рабочем месте и аудиты безопасности для выявления потенциальных опасностей.'
      },
      training: {
        title: 'Обучение безопасности',
        desc: 'Индивидуальные программы обучения и семинары по безопасности для сотрудников всех уровней.'
      },
      compliance: {
        title: 'Управление соответствием',
        desc: 'Обеспечение соответствия вашего бизнеса всем нормам и стандартам охраны труда.'
      }
    },
    about: {
      title: 'О нашей компании',
      desc: 'Мы являемся ведущей консалтинговой компанией по охране труда с многолетним опытом предоставления комплексных решений безопасности. Наша команда сертифицированных специалистов стремится создавать более безопасные рабочие места в различных отраслях.'
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Свяжитесь с нашей командой экспертов',
      form: {
        name: 'Имя',
        email: 'Email',
        message: 'Сообщение',
        send: 'Отправить'
      },
      info: {
        phone: 'Телефон',
        email: 'Email',
        address: 'Адрес'
      }
    },
    footer: {
      links: 'Быстрые ссылки',
      follow: 'Следите за нами',
      rights: '© {year} Health and Safety Azerbaijan. Все права защищены.'
    }
  },
  az: {
    nav: {
      home: 'Ana səhifə',
      services: 'Xidmətlər',
      about: 'Haqqımızda',
      contact: 'Əlaqə'
    },
    hero: {
      title: 'Peşəkar Sağlamlıq və Təhlükəsizlik Həlləri',
      subtitle: 'İş yerinizi və işçilərinizi hərtərəfli təhlükəsizlik xidmətləri ilə qoruyuruq',
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
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'az', // default locale
  fallbackLocale: 'en',
  messages
}) 