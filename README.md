# OpenCircuit Component Models

A curated, machine-readable catalog of educational electronic component models. The first release includes 15 passive, source, switching, semiconductor, optoelectronic, IC and load models plus search, validation and safe parameter instantiation APIs.

```js
import {searchModels,instantiateModel} from '@opencircuitlabs/component-models';
const led=searchModels('red light')[0];
const instance=instantiateModel(led.id,{forwardVoltage:2});
```

Values use SI units. Models are simplified for learning and prototyping, not production sign-off. Run `npm test`. MIT licensed; individual future vendor models may carry additional provenance fields.
