import React from 'react';
import { render } from 'react-dom';

import { App } from './App';
import { data } from './data/recipes';

render( <App title='Recipe' recipes={data} />, document.getElementById('root') );
