/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("65ggbsvpthu4zuq")

  // remove
  collection.schema.removeField("x94ufvnu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fkqodt4m",
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
  const collection = dao.findCollectionByNameOrId("65ggbsvpthu4zuq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x94ufvnu",
    "name": "status",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("fkqodt4m")

  return dao.saveCollection(collection)
})
