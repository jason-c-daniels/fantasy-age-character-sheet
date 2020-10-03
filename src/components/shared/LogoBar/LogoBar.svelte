<style>
    @import "LogoBar.css";
</style>

<script>
    import Logo from "./logo.svg"
    import {sheetName} from '../../../applicationSettings'
    import SimpleField from '../SimpleField'
    import CircleInput from "../CircleInput/CircleInput.svelte";
    import SimpleField3 from "../SimpleField3/SimpleField3.svelte";

    let worksheet_name = "";
    const unsubscribe = sheetName.subscribe(value => {
        worksheet_name = value;
    });
</script>
<div class="logo-bar" style="margin-top: -1.25rem;">
    <div class="logo" style="margin-right: 0.25rem;margin-top: 1.1rem;margin-left: -0.6rem">
        <Logo height="100%" width="100%"/>
    </div>
    <div style="margin-bottom: 0.25rem;">
        <SimpleField3 title="Name" width="12em"/>
        <SimpleField3 title="Class" width="10rem"/>
        <CircleInput title="Level" radius="1.5rem" props={{style:"margin-top:1.25rem; "}}/>
        <SimpleField3 title="Experience Points" width="14.5rem"/>
    </div>
    <SimpleField3 title="Race" width="12em"/>
    <SimpleField3 title="Background" width="13.8rem"/>
    <SimpleField3 title="Social Class" width="13.8rem"/>
</div>