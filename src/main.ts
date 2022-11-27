import './app.postcss';
import App from './App.svelte';

const target = document.querySelector('#app');
if (!target) throw new Error('No target element found');
const app = new App({
  target,
});

export default app;
