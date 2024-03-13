/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("roipz0gqmg9jx7h")

  collection.options = {
    "query": "SELECT id, time_closing FROM products\nWHERE products.time_closing <= TIME('now') "
  }

  // remove
  collection.schema.removeField("gvo3wxqq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0lzdcrrr",
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
    "query": "SELECT id, time_closing FROM products\nWHERE TIME(products.time_closing) - TIME('now') <= 0"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gvo3wxqq",
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
  collection.schema.removeField("0lzdcrrr")

  return dao.saveCollection(collection)
})
