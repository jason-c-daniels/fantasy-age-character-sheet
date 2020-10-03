<style>
    @import "LogoBar.css";
</style>

<script>
    import Logo from "./logo.svg"
    import {sheetName} from '../../../applicationSettings'
    import CircleInput from "../CircleInput";
    import SimpleField3 from "../SimpleField3";
    import SimpleField2 from "../SimpleField2";

    let worksheet_name = "";
    const unsubscribe = sheetName.subscribe(value => {
        worksheet_name = value;
    });

    export let worksheet = {}
</script>
<div class="logo-bar" style="margin-top: -1.25rem;">
    <div class="logo" style="margin-right: 0.25rem;margin-top: 1.1rem;margin-left: -0.6rem">
        <Logo height="100%" width="100%"/>
    </div>
    <div style="margin-bottom: 0.25rem;">
        <SimpleField3 title="Name" width="12em" bind:value={worksheet.name}/>
        <SimpleField3 title="Class" width="10rem" bind:value={worksheet.class}/>
        <CircleInput title="Level" radius="1.5rem" bind:value={worksheet.level}  props={{style:"margin-top:1.25rem; "}}/>
        <SimpleField2 title="Experience Points" bind:value={worksheet.experiencePoints} width="14.5rem"/>
    </div>
    <SimpleField3 title="Race" width="12em" bind:value={worksheet.race}/>
    <SimpleField3 title="Background" width="13.8rem" bind:value={worksheet.background}/>
    <SimpleField3 title="Social Class" width="13.8rem" bind:value={worksheet.socialClass}/>
</div>