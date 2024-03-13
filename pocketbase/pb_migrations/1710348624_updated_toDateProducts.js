/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("roipz0gqmg9jx7h")

  collection.options = {
    "query": "SELECT id, time_closing FROM products\nWHERE DATE(products.time_closing) < DATE('now') "
  }

  // remove
  collection.schema.removeField("ftt0e44a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nnpvhluo",
    "name": "time_closing",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("roipz0gqmg9jx7h")

  collection.options = {
    "query": "SELECT id, time_closing FROM products\nWHERE TIME(products.time_closing) < TIME('now') "
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ftt0e44a",
    "name": "time_closing",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("nnpvhluo")

  return dao.saveCollection(collection)
})
