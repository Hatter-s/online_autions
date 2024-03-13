/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jr8kv844d9lp14m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fanwl6b3",
    "name": "order_status",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jr8kv844d9lp14m")

  // remove
  collection.schema.removeField("fanwl6b3")

  return dao.saveCollection(collection)
})
