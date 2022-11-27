<style>
  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }

  header{
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
</style>

<script>
  import { Router, Route, Link } from 'svelte-navigator';
  import { DarkMode } from 'flowbite-svelte';
  import Login from './componentes/login/login.svelte';
</script>

<main>
<header class="header">
  <DarkMode />
</header>
<Router>
  <main>
    <Route path="/"><Login/></Route>    
  </main>
</Router>
</main>
