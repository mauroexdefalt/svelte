<style>
  :global(body) {
    display: flex;
  }
  :root {
    --cor-fundo: #555;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>

<script>
  import { Router, Route, Link } from 'svelte-navigator';
  import Login from './componentes/login/login.svelte';
</script>

<Router>
  <!-- <header>
    <h1>History</h1>

    <nav>
      <Link to="/">Login</Link>
      <Link to="about">Sobre</Link>
      <Link to="pokedex">Pokedex</Link>
    </nav>
  </header> -->

  <main>
   

    <Route path="/"><Login /></Route>

    <Route path="pokedex" />
  </main>
</Router>
