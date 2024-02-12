// Inside your UI library package

// Import Snabbdom and necessary functions
import { init } from 'snabbdom/init';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { h } from 'snabbdom/h';

// Initialize Snabbdom
const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

// UI Library component
export const createComponent = (initialState, templateFunction)=> {
  let state = initialState;
  let vnode = templateFunction(state);

  function updateState(newState) {
    state = { ...state, ...newState };
    const newVnode = templateFunction(state);
    patch(vnode, newVnode);
    vnode = newVnode;
    console.log('State updated:', state);
  }

  function mount(parentNode) {
    patch(parentNode, vnode);
    console.log('Component mounted');
  }

  return { updateState, mount };
}
