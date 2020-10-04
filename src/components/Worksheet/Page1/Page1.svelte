<style>
    @import "Page1.css";
    @import "../../styles/Page.css";
</style>

<script>

    import LogoBar from '../../shared/LogoBar';
    import getNewWorksheet from '../../../model/worksheet'
    import Section from "../../shared/Section";
    import CircleInput from "../../shared/CircleInput"
    import Ability from "./Ability"
    import SimpleTextField from "../../shared/SimpleTextField";
    import SimpleNumberField from "../../shared/SimpleNumberField";

    export let worksheet = getNewWorksheet();

</script>

<div class="page">
    <LogoBar bind:worksheet={worksheet}/>
    <div class="flex-row">
        <div class="abilities">
            {#if !!worksheet && !!worksheet.abilities}
                <Ability bind:ability={worksheet.abilities.accuracy}/>
                <Ability bind:ability={worksheet.abilities.communication}/>
                <Ability bind:ability={worksheet.abilities.constitution}/>
                <Ability bind:ability={worksheet.abilities.dexterity}/>
                <Ability bind:ability={worksheet.abilities.fighting}/>
                <Ability bind:ability={worksheet.abilities.intelligence}/>
                <Ability bind:ability={worksheet.abilities.perception}/>
                <Ability bind:ability={worksheet.abilities.strength}/>
                <Ability bind:ability={worksheet.abilities.willpower}/>
            {/if}
        </div>
        <div>
            <div class="armor-move-and-health flex-row">
                <Section title="Armor & Defense" width="12em" props={{style:"flex-grow:2;flex-shrink:2"}}>
                    <div class="flex-column content">
                        <SimpleTextField title="Armor Type" bind:value={worksheet.armor.type}/>
                        <SimpleNumberField title="Rating (AR)" bind:value={worksheet.armor.rating}/>
                        <SimpleNumberField title="Penalty (AP)" bind:value={worksheet.armor.penalty}/>
                        <SimpleNumberField title="Defense" hint="10 + Dex + Shield Bonus"
                                           bind:value={worksheet.defense}/>
                    </div>
                </Section>
                <Section title="Movement" props={{style:"flex-grow:2;flex-shrink:2"}}>
                    <div class="flex-column content-middle" style="height: 100%">
                        <SimpleNumberField title="Speed" bind:value={worksheet.speed}/>
                        <SimpleNumberField title="Move" hint="Speed - AP" bind:value={worksheet.move}/>
                        <SimpleNumberField title="Charge" hint="1/2 x Move" bind:value={worksheet.charge}/>
                        <SimpleNumberField title="Run" hint="2 x Move" bind:value={worksheet.run}/>
                    </div>
                </Section>
                <Section title="Health" props={{style:"flex-grow:1;flex-shrink:0; width:8rem"}}>
                    <textarea style="width:100%;resize: none;height:2.9rem;border: none; overflow: hidden" rows="3"
                              bind:value={worksheet.healthNotes1}/>
                    <textarea style="width:60%;resize: none;height:2.8rem;border: none; overflow: hidden" rows="3"
                              bind:value={worksheet.healthNotes2}/>
                    <div class="points" style="float: right;margin-right:-0.08rem;margin-bottom:-0.08rem;z-index: 1">
                        <CircleInput title="Max" bind:value={worksheet.health}/>
                    </div>
                </Section>
            </div>
            <div class="flex-row">
                <Section title="Powers, Talents, and Specializations"
                         props={{style:"margin-top:0.3rem;flex-grow:5;flex-shrink:0"}}>
                    <textarea style="border-top:none;border-color:black;border-width:1pt; resize: none; width:100%"
                              rows="15" bind:value={worksheet.powersTalentsAndSpecializations}/>
                </Section>
                <Section title="Concept, Goals & Ties" props={{style:"margin-top:0.3rem;flex-grow:1;flex-shrink:3;width:25%"}}>
                    <textarea
                            style="border-top:none;border-left: none;border-color:black;border-width:1pt; resize: none; width:100%"
                            rows="15" bind:value={worksheet.goalsAndTies}/>
                </Section>
            </div>
            <div class="flex-row weapons">
                <Section props={{style:"width:100%"}}>
                    <div class="flex-row weapons-header" slot="title">
                        <span>Weapon</span>
                        <span>Attack Roll</span>
                        <span>Damage</span>
                        <span>Short Range</span>
                        <span>Long Range</span>
                        <span>Reload Time</span>
                    </div>

                    {#each worksheet.weapons as weapon}
                        <div class="flex-row data">
                            <input type="text" class="input-row" bind:value={weapon.name}>
                            <input type="text" class="input-row" bind:value={weapon.attackRoll}>
                            <input type="text" class="input-row" bind:value={weapon.damage}>
                            <input type="text" class="input-row" bind:value={weapon.shortRange}>
                            <input type="text" class="input-row" bind:value={weapon.longRange}>
                            <input type="text" class="input-row" bind:value={weapon.reloadTime}>
                        </div>
                    {/each}
                </Section>
            </div>
        </div>
    </div>
</div>
