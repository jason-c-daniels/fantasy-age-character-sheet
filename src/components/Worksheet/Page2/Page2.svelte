<style>
    @import "Page2.css";
    @import "../../styles/Page.css";
</style>

<script>

    import LogoBar from '../../shared/LogoBar';
    import getNewWorksheet from '../../../model/worksheet'
    import Section from "../../shared/Section";
    import CircleInput from "../../shared/CircleInput"
    import SimpleTextField from "../../shared/SimpleTextField";
    import SimpleNumberField from "../../shared/SimpleNumberField";

    export let worksheet = getNewWorksheet();


</script>

<div class="page">
    <LogoBar/>
    <div class="flex-row">
        <div class="spells">
            <h2>Spells</h2>
            <CircleInput title="SP"/>
            <CircleInput title="Power"/>
        </div>
        <div class="money-and-equipment">
            <h2>Money and Equipment</h2>
            <CircleInput title="GP"/>
            <CircleInput title="SP"/>
            <CircleInput title="CP"/>

        </div>
    </div>
</div>
