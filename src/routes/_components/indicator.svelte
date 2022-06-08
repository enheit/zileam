<script lang="ts">
  export let color: string

  $: color = Math.random() > 0.5 ? 'bg-green-500' : color
</script>

<div class="w-1 h-5 rounded-sm {color}"></div>

