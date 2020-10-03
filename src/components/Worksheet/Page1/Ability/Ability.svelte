<style>
    @import "Ability.css";
</style>

<script>
    export let ability={primary:false,name:"name",value:0, focuses:""}
</script>

<div class="container">
    <div class="ability-title" >
        <input type="checkbox" bind:checked={ability.primary} />
        <span class="ability-name">{ability.name}</span>
    </div>
    <div class="input-area">
        <textarea bind:value={ability.focuses} style="float: left;" rows="3"/>
        <input bind:value={ability.value} type="number" min="0" style="float: left;"/>
    </div>
</div>