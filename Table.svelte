<script>
	// Base component should only contain templated markup and generic logic, like headless UI
	import { onEvents, removeEvents } from './utils/events'

	/** @logic script:before */ // placeholder for compiler logic injection based on User config

	export let headers = [] // compiler automatically extracts variables based on placeholder position
	export let items = []

	/** @logic script:after */
</script>

<!-- Component Template for Compiler to inject view.json config -->
<!-- @view table:before -->
<table use:onEvents='{$$restProps}' {...removeEvents($$restProps)}>
	<thead>
	<!-- @view head:before -->
	<tr>
		{#each headers as header, h (header.id)}
			<th>
				{header.label}
				<!-- @view Header
					@param {object} header - current header data
					@param {number} h - current header index
				-->
			</th>
		{/each}
	</tr>
	<!-- @view head:after -->
	</thead>

	<tbody>
	<!-- @view body:before -->
	{#each items as item, i}
		<tr>
			{#each headers as header, h (header.id)}
				{@const cell = item[header.id]}
				<td>
					{cell}
					<!-- @view Cell -> placeholder for compiler injection
						@param {*} cell - current cell data based on `header.id`
						@param {object} item - current row/colum data
						@param {number} i - current row/colum index
						@param {object} header - current header data
						@param {number} h - current header index
					-->
				</td>
			{/each}
		</tr>
	{/each}
	<!-- @view body:after -->
	</tbody>
</table>
<!-- @view table:after -->
