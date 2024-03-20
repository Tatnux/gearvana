ServerEvents.recipes(e => {

    //Controller Craft
    e.remove({output: 'refinedstorage:controller'});
    let inter = "kubejs:incomplete_controller";

    assembly("refinedstorage:controller",
        "kubejs:incomplete_controller",
        [
            crA("deploying", "minecraft:iron_nugget", inter),
            crA("deploying", "refinedstorage:advanced_processor", inter),
            crA("deploying", "minecraft:iron_nugget", inter)
        ],
        "enderio:vibrant_capacitor_bank", 3);

    function cr(type, output, input) {
        return {
            "type": "create:" + type,
            "ingredients": input,
            "results": [
                {
                    "item": inter
                }
            ]
        };
    }

    function crA(type, input, inter) {
        return cr(type, inter, [item(inter), input]);
    }

    function item(filter, count) {
        if (count === undefined) {
            count = 1;
        }
        let result = {"count": count};
        if (filter.startsWith("#")) {
            result.tag = filter.replace("#", "");
        } else {
            result.item = filter;
        }
        return result;
    }

    function assembly(output, inter, sequence, input, loops) {
        if (loops === undefined) {
            loops = 1;
        }
        e.custom({
            "type": "create:sequenced_assembly",
            "ingredient": input,
            "transitionalItem": {
                "item": inter
            },
            "sequence": sequence,
            "results": [
                {
                    "item": output
                }
            ],
            "loops": loops
        });
    }

    //Tier Craft
    let tiers = [
        {"name": 'basic', "material": 'iron_ingot', "id": rs},
        {"name": 'improved', "material": 'gold_ingot', "id": rs},
        {"name": 'advanced', "material": 'diamond', "id": rs},
        {"name": 'withering', "material": 'nether_star', "id": ed}
    ];

    function rs(s) {
        return 'refinedstorage:' + s;
    }

    function ed(s) {
        return 'extradisks:' + s;
    }

    for (let tier of tiers) {
        let tierName = `${tier.name}_processor`;
        let tierRawName = `raw_${tierName}`;

        e.remove({id: tier.id(tierName)});
        e.remove({id: tier.id(tierRawName)});

        e.recipes.create.compacting(tier.id(tierName), tier.id(tierRawName)).heated();
        e.recipes.create.mixing(tier.id(tierRawName), ['#forge:silicon', `minecraft:${tier.material}`, 'minecraft:redstone', rs('processor_binding')]).heated();

    }

    e.remove({id: rs("processor_binding")});
    e.recipes.create.compacting(rs("processor_binding"), ['2x minecraft:string', '#bookshelf:slime_balls'])



});
