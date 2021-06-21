import { respondToMin, respondToMax } from './respond-to.mixin';

import { toMatchSnapshot, functionImportTest } from '@utils';

describe('respondToMin mixin', () => {
  functionImportTest(respondToMin.large);
  toMatchSnapshot(() => respondToMin.large`background-color: red;`);
});

describe('respondToMax mixin', () => {
  functionImportTest(respondToMax.large);
  toMatchSnapshot(() => respondToMax.large`background-color: red;`);
});
