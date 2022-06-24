<script>
	export let items
	export let row = false
</script>

<div class={row ? 'row': 'col'} {...$$restProps}>
	{#each items as { Component, ...props } (props.id)}
		{#if typeof Component === 'string'}
			<svelte:element this={Component} {...props} />
		{:else}
			<svelte:component this={Component} {...props} />
		{/if}
	{/each}
</div>
