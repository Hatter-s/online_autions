/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ygspymyf1ffbze9",
    "created": "2024-03-15 12:04:33.915Z",
    "updated": "2024-03-15 12:04:33.915Z",
    "name": "productsView",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vjriofsy",
        "name": "max_offer_price",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "78wexeq3",
        "name": "current_buyer",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "select products.id, ord.offer_price as max_offer_price, ord.buyer_id as current_buyer from products \nLEFT JOIN orders as ord on products.id = ord.product_id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ygspymyf1ffbze9");

  return dao.deleteCollection(collection);
})
