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
    <div class="flex-row">
        <div class="spells">
            <h2>Spells</h2>
            <div class="flex-row" style="margin-bottom: 0.5rem;margin-top:0.5rem;">
                <CircleInput title="MP" bind:value={worksheet.magicPoints}/>
                <CircleInput title="Power" bind:value={worksheet.spellPower} props={{style:"margin-left:13rem"}}/>
            </div>
            <div class="flex-row spell-list">
                <Section props={{style:"width:100%"}}>
                    <div class="flex-row spells-header" slot="title">
                        <span>Name</span>
                        <span>TN</span>
                        <span>MP</span>
                        <span>Time</span>
                        <span>Test/Notes</span>
                    </div>

                    {#each worksheet.spells as spell}
                        <div class="flex-row data">
                            <input type="text" class="input-row" bind:value={spell.name}>
                            <input type="text" class="input-row" bind:value={spell.targetNumber}>
                            <input type="text" class="input-row" bind:value={spell.magicPoints}>
                            <input type="text" class="input-row" bind:value={spell.castingTime}>
                            <input type="text" class="input-row" bind:value={spell.testOrNotes}>
                        </div>
                    {/each}

                </Section>
            </div>
        </div>
        <div style="width:0.3rem;flex-shrink: 0; flex-grow: 0"></div>
        <div class="money-and-equipment" style="flex-grow:0;flex-shrink:0;">
            <h2>Money and Equipment</h2>
            <div class="flex-row" style="margin-bottom: 0.5rem;margin-top:0.5rem;">
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
