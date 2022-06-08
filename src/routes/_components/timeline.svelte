<script context="module" lang="ts">
	import type { TimelineColumn as ITimelineColumn } from './timeline-column.svelte';

	export interface Timeline {
		date: Date;
		columns: ITimelineColumn[];
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { differenceInMinutes } from 'date-fns';
	import TimelineColumn from './timeline-column.svelte';
  import { MINUTES_IN_PX } from '$constants/index';
	import TimelineIntervals from './timeline-intervals.svelte';

	export let timeline: Timeline;

	let now = new Date();

	$: timelineHeightPx = differenceInMinutes(now, timeline.date) * MINUTES_IN_PX

	onMount(() => {
		const minInMs = 1000 * 60;

		const interval = setInterval(() => {
			now = new Date();
		}, minInMs);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="flex">
	<TimelineIntervals />

	<div style="height: {timelineHeightPx}px;" class="grid grid-flow-col auto-cols-fr divide-x divide-slate-800 ">
		{#each timeline.columns as column (column.id)}
			<TimelineColumn {column} />
		{/each}
	</div>
</div>


