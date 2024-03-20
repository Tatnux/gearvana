// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', e => {
	e.create('incomplete_controller', 'create:sequenced_assembly').texture("refinedstorage:item/1k_storage_part")
})

