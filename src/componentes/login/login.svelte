<style>
</style>

<script>
  import { Input, Label, Helper, Button } from 'flowbite-svelte';   
</script>

<div class="grid gap-6 mb-6 md:grid-rows-2 ">  
  <div class="mb-6">
    <Input type="text" id="first_name" placeholder="email@email.com" required />
  </div>
  <div class="mb-6">
    <Input type="password" id="password" placeholder="•••••••••" required />
  </div>
  <div class="mb-6">
    <Button class="w-full"  color="alternative">Login</Button>
  </div>
</div>
