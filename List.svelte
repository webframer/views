<script>
	export let items
</script>

<div {...$$restProps}>
	{#each items as { Component, id, ...props } (id)}
		<svelte:component this={Component} {id} {...props} />
	{/each}
</div>
