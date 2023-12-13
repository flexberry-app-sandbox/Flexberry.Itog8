import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('i-i-s-itog8-услуга'),
  затрВремя: DS.belongsTo('i-i-s-itog8-затр-время', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-itog8-услуги.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  затрВремя: {
    descriptionKey: 'models.i-i-s-itog8-услуги.validations.затрВремя.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПереченьУслугE', 'i-i-s-itog8-услуги', {
    наименование: attr('Наименование', { index: 0 })
  });

  modelClass.defineProjection('ПереченьУслугL', 'i-i-s-itog8-услуги', {
    наименование: attr('Наименование', { index: 0 })
  });

  modelClass.defineProjection('УслугиE', 'i-i-s-itog8-услуги', {
    наименование: attr('Наименование', { index: 0 }),
    затрВремя: belongsTo('i-i-s-itog8-затр-время', 'Затр время', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('УслугиL', 'i-i-s-itog8-услуги', {
    наименование: attr('Наименование', { index: 0 })
  });
};
