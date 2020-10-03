export default function getNewWorksheet() {
    return {
        name: "",
        health:null,
        healthNotes1:"",
        healthNotes2:"",
        race:"",
        class:"",
        level:null,
        exp:null,
        move:null,
        speed:null,
        charge:null,
        run:null,
        background:"",
        socialClass:"",
        powersTalentsAndSpecializations:"",
        goalsAndTies:"",
        equipment:"",
        spells:[],
        armor:{
            type:"",
            rating:null,
            penalty:null
        },
        defense:null,
        weapons:[
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
        ],
        abilities:{
            accuracy:{name:"Accuracy", primary:false,value:null,focuses:""},
            communication:{name:"Communication", primary:false,value:null,focuses:""},
            constitution:{name:"Constitution", primary:false,value:null,focuses:""},
            dexterity:{name:"Dexterity", primary:false,value:null,focuses:""},
            fighting:{name:"Fighting", primary:false,value:null,focuses:""},
            intelligence:{name:"Intelligence", primary:false,value:null,focuses:""},
            perception:{name:"Perception", primary:false,value:null,focuses:""},
            strength:{name:"Strength", primary:false,value:null,focuses:""},
            willpower:{name:"Willpower", primary:false,value:null,focuses:""}
        },
        spellPoints:null,
        spellPower:null,
        gold:null,
        silver:null,
        copper:null


    };
}


export function validateWorksheet(worksheet) {
    let result = true;
    try {

        /* TODO: There has to be a better way.
                 like maybe a JSON DTD? */

        // for now try accessing things in a way that will throw an exception.
        let _ = worksheet.name.toString();
        _ = worksheet.abilities.accuracy;
        _ = worksheet.weapons.length;
        _ = worksheet.armor.rating;

    } catch (err) {
        console.log(err);
        result = false;
    } finally {
    }
    return result;
}