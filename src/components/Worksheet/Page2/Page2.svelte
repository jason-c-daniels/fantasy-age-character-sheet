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
    <LogoBar bind:worksheet={worksheet}/>
    <div class="flex-row" >
        <div class="spells">
            <h2>Spells</h2>
            <div class="flex-row" style="margin-bottom: 1rem">
                <CircleInput title="SP" bind:value={worksheet.spellPoints}/>
                <CircleInput title="Power" bind:value={worksheet.spellPower} props={{style:"margin-left:13rem"}}/>
            </div>
            <div class="flex-row spell-list">
                <Section title="Name" props={{style:"width:15rem;flex-grow:0"}}>
                    <div class="flex-column" style="padding-left:0.3rem">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                    </div>
                </Section>
                <Section title="TN" props={{style:"width:5rem"}}>
                    <div class="flex-column">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                    </div>
                </Section>
                <Section title="MP" props={{style:"width:5rem"}}>
                    <div class="flex-column">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                    </div>
                </Section>
                <Section title="Time" props={{style:"width:6.5rem"}}>
                    <div class="flex-column">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                    </div>
                </Section>
                <Section title="Test/Notes" props={{style:"flex-grow:3;flex-shrink:1"}}>
                    <div class="flex-column" style="padding-right:0.3rem">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                        <input type="text" class="input-row">
                    </div>
                </Section>
            </div>
        </div>
        <div style="width:0.3rem;flex-shrink: 0; flex-grow: 0"></div>
        <div class="money-and-equipment" style="flex-grow:0;flex-shrink:0;">
            <h2>Money and Equipment</h2>
            <div class="flex-row" style="margin-bottom: 1rem">
                <CircleInput title="Gold" bind:value={worksheet.gold}/>
                <CircleInput title="Silver" bind:value={worksheet.silver} props={{style:"margin-left:3rem"}}/>
                <CircleInput title="Copper" bind:value={worksheet.copper} props={{style:"margin-left:3rem"}}/>
            </div>
            <Section title="Equipment">
                <div>
                    <textarea class="equipment-input" bind:value={worksheet.equipment} rows="32"/>
                </div>
            </Section>
        </div>
    </div>
</div>
