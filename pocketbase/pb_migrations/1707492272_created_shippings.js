/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "65ggbsvpthu4zuq",
    "created": "2024-02-09 15:24:32.735Z",
    "updated": "2024-02-09 15:24:32.735Z",
    "name": "shippings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m6abe0ru",
        "name": "order_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "jr8kv844d9lp14m",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("65ggbsvpthu4zuq");

  return dao.deleteCollection(collection);
})
