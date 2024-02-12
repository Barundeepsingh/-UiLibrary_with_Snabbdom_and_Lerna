import { createComponent } from '../../packages/ui-library';


// Template function
function template(state) {
  return h('div', [
    h('h1', state.count),
    h('button', { on: { click: increment } }, 'Add')
  ]);
}

// Initial state
const initialState = { count: 0 };

// Callback function to update state
function increment() {
  component.updateState({ count: component.state.count + 1 });
}

// Create the component instance
const component = createComponent(initialState, template);

// Mount the component to the DOM
document.addEventListener('DOMContentLoaded', function () {
  const app = document.getElementById('app');
  component.mount(app);
});
