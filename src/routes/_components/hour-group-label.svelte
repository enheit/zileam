<script lang="ts">
  export let label: string
</script>

<div class="flex flex-col gap-1 w-[22px]">
  <span class="text-xs text-slate-500 -mx-1">{label}</span>

  <div class="flex justify-center gap-[5px] items-center">
    <span class="h-1 w-[1.5px] rounded-sm bg-slate-500"></span>
    <span class="h-[1px] w-[1px] bg-slate-500"></span>
    <span class="h-[1px] w-[1px] bg-slate-500"></span>
    <span class="h-[1px] w-[1px] bg-slate-500"></span>
  </div>
</div>
