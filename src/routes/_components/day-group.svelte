<script>
import { eachHourOfInterval, endOfToday, startOfDay, startOfToday } from "date-fns";

  import HourGroup from "./hour-group.svelte";
  
  const hours = eachHourOfInterval({ start: startOfToday(), end: endOfToday() })
</script>



<div class="flex gap-3">
  {#each hours as hour}
    <HourGroup />  
  {/each}
</div>

