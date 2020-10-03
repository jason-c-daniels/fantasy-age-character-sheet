<style>
    @import "SimpleField2.css";
</style>

<script>
    export let title="";
    export let value="";
    export let width="";
    export let props={};
    if (!!width) {
        if (!!props.style) {
            props.style = props.style + `width:${width}`;
        }
        else
        {
            props.style= `width:${width}`;
        }
    }
</script>

<div {...props} class="container">
    <div  class="field-title"><span>&nbsp;{title}&nbsp;</span></div>
    <input type="number" min="0" bind:value={value}>
</div>
