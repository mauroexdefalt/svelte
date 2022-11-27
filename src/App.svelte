


<script>
  import { Router, Route, Link } from 'svelte-navigator';
  import Login from './componentes/login/login.svelte';
</script>

<style>
  :global(body) {
    background-color: #222;
    color: #fff;
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
    <Route path="about">Mauro teste com svelter
		
	</Route>
s
    <Route path="login">Teste rota login</Route>

    <Route path="/"><Login></Login></Route>

    <Route path="pokedex">
     
    </Route>
  </main>
</Router>