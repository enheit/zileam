<script lang="ts">
	import { format, startOfToday } from 'date-fns';
	import type { Timeline as ITimeline } from '../_components/timeline.svelte';
	import Timeline from '../_components/timeline.svelte';
	import Indicator from '../_components/indicator.svelte';
	import HourGroup from '../_components/hour-group.svelte';
	import DayGroup from '../_components/day-group.svelte';
	import DayGroupLabel from '../_components/day-group-label.svelte';

	const timeline: ITimeline = {
		date: startOfToday(),
		columns: [
			{
				id: '4',
				itemsColor: 'green',
				order: 0,
				items: [
					{
						id: '1',
						startTime: new Date(),
						durationInMinutes: 0,
						done: false
					},
					{
						id: '2',
						startTime: new Date(),
						durationInMinutes: 0,
						done: false
					},
					{
						id: '3',
						startTime: new Date(),
						durationInMinutes: 0,
						done: false
					}
				]
			},
			{
				id: '3',
				itemsColor: 'pink',
				order: 1,
				items: [
					{
						id: '1',
						startTime: new Date(),
						durationInMinutes: 0,
						done: false
					},
					{
						id: '2',
						startTime: new Date(),
						durationInMinutes: 0,
						done: false
					},
					{
						id: '3',
						startTime: new Date(),
						durationInMinutes: 0,
						done: false
					}
				]
			},
			{
				id: '1',
				itemsColor: 'orange',
				order: 2,
				items: [
					{
						id: '1',
						startTime: new Date(),
						durationInMinutes: 0,
						done: false
					},
					{
						id: '2',
						startTime: new Date(),
						durationInMinutes: 0,
						done: false
					},
					{
						id: '3',
						startTime: new Date(),
						durationInMinutes: 0,
						done: false
					}
				]
			},
			{
				id: '2',
				itemsColor: '#0099ff',
				order: 3,
				items: [
					{
						id: 'a1',
						startTime: new Date(),
						durationInMinutes: 0,
						done: false
					},
					{
						id: 'a2',
						startTime: new Date(),
						durationInMinutes: 0,
						done: false
					}
				]
			}
		]
	};

	const items = ['Entertainment', 'Programming', 'YouTube', 'Hobby']
</script>

<h1 class="text-center text-slate-50 font-semibold text-4xl">{format(timeline.date, 'd MMMM')}</h1>

<div class="flex justify-center">
	<div class="flex flex-col gap-2 p-4">
		<div class="flex items-center gap-4">
			<div class="flex justify-end w-40">
			</div>

			<DayGroupLabel />

			<div class="flex w-40">
			</div>
		</div>

		{#each items as item}
			<div class="flex items-center gap-4">
				<div class="flex justify-end w-40">
					<p class="text-slate-200">{item}</p>
				</div>

				<DayGroup />

				<div class="flex w-40">
					<p class="text-xs text-slate-400">1 h. 20 min.</p>
				</div>
			</div>
		{/each}


	</div>
</div>
