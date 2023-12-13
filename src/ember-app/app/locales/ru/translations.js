import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISItog8ДирОтдПоРабСКлLForm from './forms/i-i-s-itog8-дир-отд-по-раб-с-кл-l';
import IISItog8ДлительностьLForm from './forms/i-i-s-itog8-длительность-l';
import IISItog8ДоговорLForm from './forms/i-i-s-itog8-договор-l';
import IISItog8ЗатрВремяLForm from './forms/i-i-s-itog8-затр-время-l';
import IISItog8КлиентLForm from './forms/i-i-s-itog8-клиент-l';
import IISItog8РасчетОстВремLForm from './forms/i-i-s-itog8-расчет-ост-врем-l';
import IISItog8УслугиLForm from './forms/i-i-s-itog8-услуги-l';
import IISItog8ДирОтдПоРабСКлEForm from './forms/i-i-s-itog8-дир-отд-по-раб-с-кл-e';
import IISItog8ДлительностьEForm from './forms/i-i-s-itog8-длительность-e';
import IISItog8ДоговорEForm from './forms/i-i-s-itog8-договор-e';
import IISItog8ЗатрВремяEForm from './forms/i-i-s-itog8-затр-время-e';
import IISItog8КлиентEForm from './forms/i-i-s-itog8-клиент-e';
import IISItog8РасчетОстВремEForm from './forms/i-i-s-itog8-расчет-ост-врем-e';
import IISItog8УслугиEForm from './forms/i-i-s-itog8-услуги-e';
import IISItog8ДирОтдПоРабСКлModel from './models/i-i-s-itog8-дир-отд-по-раб-с-кл';
import IISItog8ДлительностьModel from './models/i-i-s-itog8-длительность';
import IISItog8ДоговорModel from './models/i-i-s-itog8-договор';
import IISItog8ЗатрВремяModel from './models/i-i-s-itog8-затр-время';
import IISItog8КлиентModel from './models/i-i-s-itog8-клиент';
import IISItog8ОказУслугModel from './models/i-i-s-itog8-оказ-услуг';
import IISItog8РасчетОстВремModel from './models/i-i-s-itog8-расчет-ост-врем';
import IISItog8УслугиModel from './models/i-i-s-itog8-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-itog8-дир-отд-по-раб-с-кл': IISItog8ДирОтдПоРабСКлModel,
    'i-i-s-itog8-длительность': IISItog8ДлительностьModel,
    'i-i-s-itog8-договор': IISItog8ДоговорModel,
    'i-i-s-itog8-затр-время': IISItog8ЗатрВремяModel,
    'i-i-s-itog8-клиент': IISItog8КлиентModel,
    'i-i-s-itog8-оказ-услуг': IISItog8ОказУслугModel,
    'i-i-s-itog8-расчет-ост-врем': IISItog8РасчетОстВремModel,
    'i-i-s-itog8-услуги': IISItog8УслугиModel
  },

  'application-name': 'Itog8',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Itog8',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Itog8',
          title: 'Itog8'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        itog8: {
          caption: 'Itog8',
          title: 'Itog8',
          'i-i-s-itog8-услуги-l': {
            caption: 'Услуги',
            title: ''
          },
          'i-i-s-itog8-затр-время-l': {
            caption: 'Затр время',
            title: ''
          },
          'i-i-s-itog8-длительность-l': {
            caption: 'Длительность',
            title: ''
          },
          'i-i-s-itog8-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-itog8-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-itog8-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-itog8-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-itog8-дир-отд-по-раб-с-кл-l': IISItog8ДирОтдПоРабСКлLForm,
    'i-i-s-itog8-длительность-l': IISItog8ДлительностьLForm,
    'i-i-s-itog8-договор-l': IISItog8ДоговорLForm,
    'i-i-s-itog8-затр-время-l': IISItog8ЗатрВремяLForm,
    'i-i-s-itog8-клиент-l': IISItog8КлиентLForm,
    'i-i-s-itog8-расчет-ост-врем-l': IISItog8РасчетОстВремLForm,
    'i-i-s-itog8-услуги-l': IISItog8УслугиLForm,
    'i-i-s-itog8-дир-отд-по-раб-с-кл-e': IISItog8ДирОтдПоРабСКлEForm,
    'i-i-s-itog8-длительность-e': IISItog8ДлительностьEForm,
    'i-i-s-itog8-договор-e': IISItog8ДоговорEForm,
    'i-i-s-itog8-затр-время-e': IISItog8ЗатрВремяEForm,
    'i-i-s-itog8-клиент-e': IISItog8КлиентEForm,
    'i-i-s-itog8-расчет-ост-врем-e': IISItog8РасчетОстВремEForm,
    'i-i-s-itog8-услуги-e': IISItog8УслугиEForm
  },

});

export default translations;
