<script context="module" lang="ts">
  export interface Item {
    id: string
    startTime: Date
    durationInMinutes: number
    done: false
  }
</script>

<script lang="ts">
  export let item: Item
  export let color: string

  const hourInPx = 60 * 5
</script>

<div style="background-color: {color}; height: {hourInPx}px;" class="rounded-lg my-1" />
