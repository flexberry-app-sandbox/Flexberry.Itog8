import {
  defineNamespace,
  defineProjections,
  Model as ДлительностьMixin
} from '../mixins/regenerated/models/i-i-s-itog8-длительность';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДлительностьMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
