ServerEvents.recipes(e => {
    e.smelting("enderio:silicon", "#forge:dusts/quartz");

    replaceTag("forge:silicon", "enderio:silicon")

    function replaceTag(tag, item){
        e.replaceInput({input: "#" + tag}, "#" + tag, item);
        e.remove({not: {output: item}, output: "#" + tag});
    }


});