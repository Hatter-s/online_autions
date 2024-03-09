/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jr8kv844d9lp14m")

  // remove
  collection.schema.removeField("kkt7dval")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hm4pxizm",
    "name": "status",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kkt7dval",
    "name": "is_accept",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("hm4pxizm")

  return dao.saveCollection(collection)
})
