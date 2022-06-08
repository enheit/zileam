<script lang="ts">
  import { eachHourOfInterval, endOfToday, format, startOfToday } from "date-fns";
  import HourGroupLabel from "./hour-group-label.svelte";

  const hours = eachHourOfInterval({ start: startOfToday(), end: endOfToday() })
</script>

<div class="flex gap-3">
  {#each hours as hour}
    <HourGroupLabel label={format(hour, 'HH')} />
  {/each} 
</div>