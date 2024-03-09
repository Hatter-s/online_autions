/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "z8rn7dr4er2et53",
    "created": "2024-03-08 08:12:33.977Z",
    "updated": "2024-03-08 08:12:33.977Z",
    "name": "ordersView",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hilvnf0p",
        "name": "offer_price",
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
        "id": "7th4hc4p",
        "name": "is_accept",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "4hyq1a4h",
        "name": "is_fix_price",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "o7or34wi",
        "name": "buyer_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jelrnfbt",
        "name": "seller_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "i0mxb7ee",
        "name": "product_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6mpwlbrv",
        "name": "product_image",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [
            "100x300"
          ],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "qcvq5wa5",
        "name": "product_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "fv7mjfmd8yzx96s",
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
      "query": "select orders.id,orders.offer_price, orders.created, orders.is_accept, orders.is_fix_price , buyer.name as buyer_name , seller.name as seller_name , pro.name as product_name , pro.product_image, pro.id as product_id from orders \n  LEFT JOIN users AS buyer on orders.buyer_id = buyer.id\n  LEFT JOIN users as seller on orders.seller_id = seller.id\nLEFT JOIN products as pro on orders.product_id = pro.id\n  GROUP by pro.id HAVING Max(orders.offer_price)"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z8rn7dr4er2et53");

  return dao.deleteCollection(collection);
})
