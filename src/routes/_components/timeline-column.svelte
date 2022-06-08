<script context="module" lang="ts">
  import type { Item } from "./timeline-item.svelte"

  export interface TimelineColumn {
    id: string
    order: number,
    itemsColor: string
    items: Item[]
  }
</script>

<script lang="ts">
  import TimelineItem from "./timeline-item.svelte";

  export let column: TimelineColumn
</script>

<div class="w-10 p-1">
  {#each column.items as item (item.id)}
    <TimelineItem {item} color={column.itemsColor} />
  {/each}
</div>
