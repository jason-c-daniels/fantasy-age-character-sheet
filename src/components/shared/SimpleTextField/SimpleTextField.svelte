<style>
    @import "SimpleTextField.css";
</style>

<script>
    export let title="";
    export let value="";
    export let width="";
    export let props={};
    export let hint="";

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
    <div  class="field-title"><span>&nbsp;{title}&nbsp;</span></div><input type="text" bind:value={value} placeholder="{hint}">
</div>
