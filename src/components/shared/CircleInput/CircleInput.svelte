<style>
    @import "CircleInput.css";
</style>

<script>
    import cssVars from 'svelte-css-vars';
    export let title = "";
    export let radius= "20pt";
    export let textAlign="center";
    export let value = 0;
    $: styleVars = {
        radius: radius,
        "text-align": textAlign
    };
    export let props={};
</script>

<div use:cssVars="{styleVars}" {...props}>
    <input type="number" bind:value={value}>
    <span>{title}</span>
</div>