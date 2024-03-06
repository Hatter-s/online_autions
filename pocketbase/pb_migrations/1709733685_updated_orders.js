/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jr8kv844d9lp14m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gyc7a1g2",
    "name": "is_fix_price",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jr8kv844d9lp14m")

  // remove
  collection.schema.removeField("gyc7a1g2")

  return dao.saveCollection(collection)
})
