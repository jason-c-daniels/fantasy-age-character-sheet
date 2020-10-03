export default function getNewWorksheet() {
    return {
        name: "",
        race:"",
        class:"",
        level:1,
        exp:0,
        move:0,
        speed:0,
        charge:0,
        run:0,
        background:"",
        socialClass:"",
        powersTalentsAndSpecializations:"",
        equipment:"",
        spells:[],
        armor:{
            type:"",
            rating:0,
            penalty:0,
            defense:0
        },
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
            accuracy:{name:"Accuracy", primary:false,value:0,focuses:""},
            communication:{name:"Communication", primary:false,value:0,focuses:""},
            constitution:{name:"Constitution", primary:false,value:0,focuses:""},
            dexterity:{name:"Dexterity", primary:false,value:0,focuses:""},
            fighting:{name:"Fighting", primary:false,value:0,focuses:""},
            intelligence:{name:"Intelligence", primary:false,value:0,focuses:""},
            perception:{name:"Perception", primary:false,value:0,focuses:""},
            strength:{name:"Strength", primary:false,value:0,focuses:""},
            willpower:{name:"Willpower", primary:false,value:0,focuses:""}
        }


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