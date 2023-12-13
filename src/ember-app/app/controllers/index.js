import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.itog8.caption'),
          title: i18n.t('forms.application.sitemap.itog8.title'),
          children: [{
            link: 'i-i-s-itog8-услуги-l',
            caption: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-услуги-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-itog8-затр-время-l',
            caption: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-затр-время-l.caption'),
            title: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-затр-время-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-itog8-длительность-l',
            caption: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-длительность-l.caption'),
            title: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-длительность-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-itog8-клиент-l',
            caption: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-клиент-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-itog8-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-дир-отд-по-раб-с-кл-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-itog8-договор-l',
            caption: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-договор-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-itog8-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.itog8.i-i-s-itog8-расчет-ост-врем-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})