/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "roipz0gqmg9jx7h",
    "created": "2024-03-13 16:43:03.337Z",
    "updated": "2024-03-13 16:43:03.337Z",
    "name": "toDateProducts",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id FROM products\nWHERE products.time_closing <= DATE('now')"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("roipz0gqmg9jx7h");

  return dao.deleteCollection(collection);
})
