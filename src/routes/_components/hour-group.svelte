<script>
  import Indicator from "./indicator.svelte";

  const inactiveColor = 'bg-slate-700'
  const color = 'bg-green-500'

</script>


<div class="flex gap-[2px]">
  <Indicator color={inactiveColor} />
  <Indicator color={inactiveColor} />
  <Indicator color={inactiveColor} />
  <Indicator color={inactiveColor} />
</div>
