<script lang="ts">
 	import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button>Click me</Button>

<style lang="postcss">
  @reference "tailwindcss";

  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>