<style>
</style>

<script>
  import { Input, Label, Helper, Button , DarkMode} from 'flowbite-svelte';   
</script>

<div class="grid gap-6 mb-6 md:grid-rows-2 ">
  <DarkMode />
  <div class="mb-6">
    <Input type="text" id="first_name" placeholder="email@email.com" required />
  </div>
  <div class="mb-6">
    <Input type="password" id="password" placeholder="•••••••••" required />
  </div>
  <div class="mb-6">
    <Button color="alternative">Login</Button>
  </div>
</div>
