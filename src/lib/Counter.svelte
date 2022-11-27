<script lang="ts">
  let count = 0;
  let timeout: ReturnType<typeof setTimeout>;
  let delay = 100;

  const add = (current: number, amount = 1): number => current + amount;

  const handleHold = (event: MouseEvent) => {
    if (event.type === 'mousedown') {
      if (event.button === 2) {
        timeout = setTimeout(() => {
          count = 0;
        }, 1000);
        return;
      }
      timeout = setTimeout(() => {
        count = add(count);
        if (delay > 30) delay -= 10;
        handleHold(event);
      }, delay);
    } else {
      clearTimeout(timeout);
      delay = 100;
    }
  };

  const handleOnClick = () => {
    count = add(count);
  };

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    count = add(count, -1);
    delay = 100;
  };
</script>

<button
  title="Hold to add multiple, click once with right click to decrease one, hold to reset"
  on:click="{handleOnClick}"
  on:contextmenu="{handleContextMenu}"
  on:mousedown="{handleHold}"
  on:mouseup="{handleHold}"
>
  count is {count}
</button>
