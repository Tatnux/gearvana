ServerEvents.recipes(e => {
    e.remove({"input": "ad_astra:hammer"})
    e.remove({"input": "ad_astra:iron_rod"})
    e.remove({"input": "ad_astra:iron_plate"})
});

ServerEvents.tags('item', e => {
    e.remove("forge:rods/iron", "ad_astra:iron_rod")
    e.remove("forge:plate/iron", "ad_astra:iron_plate")
});