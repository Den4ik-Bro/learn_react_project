import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

// const jsonData = [
//     {
//         "mainId": "Sparks_Guitar_BottlePhone",
//         "displayName": "Fender Stratocaster",
//         "displayDescription": "Forever ahead of its time.",
//         "displayType": "Item Bundle",
//         "mainType": "sparks_guitar",
//         "offerId": "v2:/6990cf9809665eca3c7cfb15f4bd93a86c96a54659c82bcd77a170751fe11145",
//         "devName": "[VIRTUAL]1 x Fender Stratocaster for 800 MtxCurrency",
//         "displayAssets": [
//             {
//                 "displayAsset": "DAv2_Guitar_BottlePhone",
//                 "materialInstance": "MI_Guitar_BottlePhone",
//                 "primaryMode": "Sparks",
//                 "url": "https://media.fortniteapi.io/images/displayAssets/v2/Sparks/DAv2_Guitar_BottlePhone/MI_Guitar_BottlePhone.png",
//                 "flipbook": null,
//                 "background_texture": null,
//                 "background": "https://media.fortniteapi.io/images/shop/6990cf9809665eca3c7cfb15f4bd93a86c96a54659c82bcd77a170751fe11145/v2/MI_Guitar_BottlePhone/background.png",
//                 "full_background": "https://media.fortniteapi.io/images/shop/6990cf9809665eca3c7cfb15f4bd93a86c96a54659c82bcd77a170751fe11145/v2/MI_Guitar_BottlePhone/info.en.png"
//             }
//         ],
//         "firstReleaseDate": "2024-03-14",
//         "previousReleaseDate": "2024-03-18",
//         "giftAllowed": true,
//         "buyAllowed": true,
//         "price": {
//             "regularPrice": 800,
//             "finalPrice": 800,
//             "floorPrice": 800
//         },
//         "rarity": {
//             "id": "Uncommon",
//             "name": "UNCOMMON"
//         },
//         "series": null,
//         "banner": null,
//         "offerTag": null,
//         "granted": [
//             {
//                 "id": "Sparks_Guitar_BottlePhone",
//                 "type": {
//                     "id": "sparks_guitar",
//                     "name": "Guitar"
//                 },
//                 "name": "Fender Stratocaster",
//                 "description": "Forever ahead of its time.",
//                 "rarity": {
//                     "id": "Uncommon",
//                     "name": "UNCOMMON"
//                 },
//                 "series": null,
//                 "images": {
//                     "icon": "https://media.fortniteapi.io/images/d68412c21a422804523725f5ad544c23/transparent.png",
//                     "featured": null,
//                     "background": "https://media.fortniteapi.io/images/cosmetics/d68412c21a422804523725f5ad544c23/v2/background.png",
//                     "icon_background": "https://media.fortniteapi.io/images/cosmetics/d68412c21a422804523725f5ad544c23/v2/icon_background.png",
//                     "full_background": "https://media.fortniteapi.io/images/cosmetics/d68412c21a422804523725f5ad544c23/v2/info.en.png"
//                 },
//                 "juno": {
//                     "icon": null
//                 },
//                 "video": null,
//                 "audio": null,
//                 "gameplayTags": [
//                     "Cosmetics.Filter.Sparks.Season.02",
//                     "Cosmetics.Source.Season29.BattlePass"
//                 ],
//                 "set": null
//             }
//         ],
//         "priority": -1,
//         "section": {
//             "id": "RockOutWithFender.99",
//             "name": "Rock Out With Fender",
//             "category": "Take Your Stage",
//             "landingPriority": 0
//         },
//         "groupIndex": 0,
//         "storeName": "BRWeeklyStorefront",
//         "tileSize": "Normal",
//         "categories": []
//     },
//     {
//         "mainId": "EID_Guitar_StompAround",
//         "displayName": "Windmill Stomp",
//         "displayDescription": "Grind it up.",
//         "displayType": "Emote",
//         "mainType": "emote",
//         "offerId": "v2:/832b2c9ee36cf7208eac92d09f2121954f9822593ab3b05bcc14f7ba1eed286e",
//         "devName": "[VIRTUAL]1 x Windmill Stomp for 200 MtxCurrency",
//         "displayAssets": [
//             {
//                 "displayAsset": "DAv2_EID_Guitar_StompAround",
//                 "materialInstance": "MI_EID_Guitar_StompAround",
//                 "primaryMode": "BattleRoyale",
//                 "url": "https://media.fortniteapi.io/images/displayAssets/v2/BattleRoyale/DAv2_EID_Guitar_StompAround/MI_EID_Guitar_StompAround.png",
//                 "flipbook": null,
//                 "background_texture": null,
//                 "background": "https://media.fortniteapi.io/images/shop/832b2c9ee36cf7208eac92d09f2121954f9822593ab3b05bcc14f7ba1eed286e/v2/MI_EID_Guitar_StompAround/background.png",
//                 "full_background": "https://media.fortniteapi.io/images/shop/832b2c9ee36cf7208eac92d09f2121954f9822593ab3b05bcc14f7ba1eed286e/v2/MI_EID_Guitar_StompAround/info.en.png"
//             }
//         ],
//         "firstReleaseDate": "2024-03-14",
//         "previousReleaseDate": "2024-03-18",
//         "giftAllowed": true,
//         "buyAllowed": true,
//         "price": {
//             "regularPrice": 200,
//             "finalPrice": 200,
//             "floorPrice": 200
//         },
//         "rarity": {
//             "id": "Uncommon",
//             "name": "UNCOMMON"
//         },
//         "series": null,
//         "banner": null,
//         "offerTag": null,
//         "granted": [
//             {
//                 "id": "EID_Guitar_StompAround",
//                 "type": {
//                     "id": "emote",
//                     "name": "Emote"
//                 },
//                 "name": "Windmill Stomp",
//                 "description": "Grind it up.",
//                 "rarity": {
//                     "id": "Uncommon",
//                     "name": "UNCOMMON"
//                 },
//                 "series": null,
//                 "images": {
//                     "icon": "https://media.fortniteapi.io/images/3f74acd4fca6a0d9e9edc52ebeac4c1f/transparent.png",
//                     "featured": "https://media.fortniteapi.io/images/3f74acd4fca6a0d9e9edc52ebeac4c1f/full_featured.png",
//                     "background": "https://media.fortniteapi.io/images/cosmetics/3f74acd4fca6a0d9e9edc52ebeac4c1f/v2/background.png",
//                     "icon_background": "https://media.fortniteapi.io/images/cosmetics/3f74acd4fca6a0d9e9edc52ebeac4c1f/v2/icon_background.png",
//                     "full_background": "https://media.fortniteapi.io/images/cosmetics/3f74acd4fca6a0d9e9edc52ebeac4c1f/v2/info.en.png"
//                 },
//                 "juno": {
//                     "icon": null
//                 },
//                 "video": null,
//                 "audio": null,
//                 "gameplayTags": [
//                     "Cosmetics.EmoteType.Dance",
//                     "Cosmetics.Filter.Season.28",
//                     "Cosmetics.Filter.Sparks"
//                 ],
//                 "set": null
//             }
//         ],
//         "priority": -2,
//         "section": {
//             "id": "RockOutWithFender.99",
//             "name": "Rock Out With Fender",
//             "category": "Take Your Stage",
//             "landingPriority": 0
//         },
//         "groupIndex": 0,
//         "storeName": "BRWeeklyStorefront",
//         "tileSize": "Normal",
//         "categories": []
//     },
//     {
//         "mainId": "Sparks_Bass_HeadphoneJack",
//         "displayName": "Fender Precision Bass",
//         "displayDescription": "The bass that spawned a thousand imitations.",
//         "displayType": "Item Bundle",
//         "mainType": "sparks_bass",
//         "offerId": "v2:/4d7030e386f62ed01b6d44168cc31655b6fc46cdb333513898b7d6573dfb6d67",
//         "devName": "[VIRTUAL]1 x Fender Precision Bass for 800 MtxCurrency",
//         "displayAssets": [
//             {
//                 "displayAsset": "DAv2_Bass_HeadphoneJack",
//                 "materialInstance": "MI_Bass_HeadphoneJack",
//                 "primaryMode": "Sparks",
//                 "url": "https://media.fortniteapi.io/images/displayAssets/v2/Sparks/DAv2_Bass_HeadphoneJack/MI_Bass_HeadphoneJack.png",
//                 "flipbook": null,
//                 "background_texture": null,
//                 "background": "https://media.fortniteapi.io/images/shop/4d7030e386f62ed01b6d44168cc31655b6fc46cdb333513898b7d6573dfb6d67/v2/MI_Bass_HeadphoneJack/background.png",
//                 "full_background": "https://media.fortniteapi.io/images/shop/4d7030e386f62ed01b6d44168cc31655b6fc46cdb333513898b7d6573dfb6d67/v2/MI_Bass_HeadphoneJack/info.en.png"
//             }
//         ],
//         "firstReleaseDate": "2024-03-14",
//         "previousReleaseDate": "2024-03-18",
//         "giftAllowed": true,
//         "buyAllowed": true,
//         "price": {
//             "regularPrice": 800,
//             "finalPrice": 800,
//             "floorPrice": 800
//         },
//         "rarity": {
//             "id": "Uncommon",
//             "name": "UNCOMMON"
//         },
//         "series": null,
//         "banner": null,
//         "offerTag": null,
//         "granted": [
//             {
//                 "id": "Sparks_Bass_HeadphoneJack",
//                 "type": {
//                     "id": "sparks_bass",
//                     "name": "sparks_bass"
//                 },
//                 "name": "Fender Precision Bass",
//                 "description": "The bass that spawned a thousand imitations.",
//                 "rarity": {
//                     "id": "Uncommon",
//                     "name": "UNCOMMON"
//                 },
//                 "series": null,
//                 "images": {
//                     "icon": "https://media.fortniteapi.io/images/d798c97c9df5d5447422e3fcd32db972/transparent.png",
//                     "featured": null,
//                     "background": "https://media.fortniteapi.io/images/cosmetics/d798c97c9df5d5447422e3fcd32db972/v2/background.png",
//                     "icon_background": "https://media.fortniteapi.io/images/cosmetics/d798c97c9df5d5447422e3fcd32db972/v2/icon_background.png",
//                     "full_background": "https://media.fortniteapi.io/images/cosmetics/d798c97c9df5d5447422e3fcd32db972/v2/info.en.png"
//                 },
//                 "juno": {
//                     "icon": null
//                 },
//                 "video": null,
//                 "audio": null,
//                 "gameplayTags": [
//                     "Cosmetics.Filter.Sparks.Season.02"
//                 ],
//                 "set": null
//             }
//         ],
//         "priority": -3,
//         "section": {
//             "id": "RockOutWithFender.99",
//             "name": "Rock Out With Fender",
//             "category": "Take Your Stage",
//             "landingPriority": 0
//         },
//         "groupIndex": 0,
//         "storeName": "BRWeeklyStorefront",
//         "tileSize": "Normal",
//         "categories": []
//     },
//     {
//         "mainId": "EID_Bass_ShootKickJump",
//         "displayName": "Kick It",
//         "displayDescription": "Get your kicks.",
//         "displayType": "Emote",
//         "mainType": "emote",
//         "offerId": "v2:/f6c4ad2f89533dcf5cda650cc5f568512448892a80f51c8bd2f9fdeea6f6f8d2",
//         "devName": "[VIRTUAL]1 x Kick It for 200 MtxCurrency",
//         "displayAssets": [
//             {
//                 "displayAsset": "DAv2_EID_Bass_ShootKickJump",
//                 "materialInstance": "MI_EID_Bass_ShootKickJump",
//                 "primaryMode": "BattleRoyale",
//                 "url": "https://media.fortniteapi.io/images/displayAssets/v2/BattleRoyale/DAv2_EID_Bass_ShootKickJump/MI_EID_Bass_ShootKickJump.png",
//                 "flipbook": null,
//                 "background_texture": null,
//                 "background": "https://media.fortniteapi.io/images/shop/f6c4ad2f89533dcf5cda650cc5f568512448892a80f51c8bd2f9fdeea6f6f8d2/v2/MI_EID_Bass_ShootKickJump/background.png",
//                 "full_background": "https://media.fortniteapi.io/images/shop/f6c4ad2f89533dcf5cda650cc5f568512448892a80f51c8bd2f9fdeea6f6f8d2/v2/MI_EID_Bass_ShootKickJump/info.en.png"
//             }
//         ],
//         "firstReleaseDate": "2024-03-14",
//         "previousReleaseDate": "2024-03-18",
//         "giftAllowed": true,
//         "buyAllowed": true,
//         "price": {
//             "regularPrice": 200,
//             "finalPrice": 200,
//             "floorPrice": 200
//         },
//         "rarity": {
//             "id": "Uncommon",
//             "name": "UNCOMMON"
//         },
//         "series": null,
//         "banner": null,
//         "offerTag": null,
//         "granted": [
//             {
//                 "id": "EID_Bass_ShootKickJump",
//                 "type": {
//                     "id": "emote",
//                     "name": "Emote"
//                 },
//                 "name": "Kick It",
//                 "description": "Get your kicks.",
//                 "rarity": {
//                     "id": "Uncommon",
//                     "name": "UNCOMMON"
//                 },
//                 "series": null,
//                 "images": {
//                     "icon": "https://media.fortniteapi.io/images/2be977ab3cb98edbd6724ebf06a9186f/transparent.png",
//                     "featured": "https://media.fortniteapi.io/images/2be977ab3cb98edbd6724ebf06a9186f/full_featured.png",
//                     "background": "https://media.fortniteapi.io/images/cosmetics/2be977ab3cb98edbd6724ebf06a9186f/v2/background.png",
//                     "icon_background": "https://media.fortniteapi.io/images/cosmetics/2be977ab3cb98edbd6724ebf06a9186f/v2/icon_background.png",
//                     "full_background": "https://media.fortniteapi.io/images/cosmetics/2be977ab3cb98edbd6724ebf06a9186f/v2/info.en.png"
//                 },
//                 "juno": {
//                     "icon": null
//                 },
//                 "video": null,
//                 "audio": null,
//                 "gameplayTags": [
//                     "Cosmetics.EmoteType.Dance",
//                     "Cosmetics.Filter.Season.28",
//                     "Cosmetics.Filter.Sparks"
//                 ],
//                 "set": null
//             }
//         ],
//         "priority": -4,
//         "section": {
//             "id": "RockOutWithFender.99",
//             "name": "Rock Out With Fender",
//             "category": "Take Your Stage",
//             "landingPriority": 0
//         },
//         "groupIndex": 0,
//         "storeName": "BRWeeklyStorefront",
//         "tileSize": "Normal",
//         "categories": []
//     },
//     {
//         "mainId": "SID_Placeholder_145",
//         "displayName": "Rain On Me",
//         "displayDescription": "",
//         "displayType": "Item Bundle",
//         "mainType": "sparks_song",
//         "offerId": "v2:/c7c13d65c8fb527b199eb5ab87a3ebed9b80c2517523932b51792c8e802bc4cd",
//         "devName": "[VIRTUAL]1 x TBD (SID_Placeholder_145) for 500 MtxCurrency",
//         "displayAssets": [
//             {
//                 "displayAsset": "virtual",
//                 "materialInstance": "hdavfy8ufdnrh6oq-blur-512x615-7d9aa5c4123a",
//                 "primaryMode": "BattleRoyale",
//                 "url": "https://media.fortniteapi.io/images/displayAssets/visualids/hdavfy8ufdnrh6oq-blur-512x615-7d9aa5c4123a.jpg",
//                 "flipbook": null,
//                 "background_texture": null,
//                 "background": "https://media.fortniteapi.io/images/shop/c7c13d65c8fb527b199eb5ab87a3ebed9b80c2517523932b51792c8e802bc4cd/v2/hdavfy8ufdnrh6oq-blur-512x615-7d9aa5c4123a/background.png",
//                 "full_background": "https://media.fortniteapi.io/images/shop/c7c13d65c8fb527b199eb5ab87a3ebed9b80c2517523932b51792c8e802bc4cd/v2/hdavfy8ufdnrh6oq-blur-512x615-7d9aa5c4123a/info.en.png"
//             }
//         ],
//         "firstReleaseDate": "2024-02-22",
//         "previousReleaseDate": "2024-03-18",
//         "giftAllowed": true,
//         "buyAllowed": true,
//         "price": {
//             "regularPrice": 500,
//             "finalPrice": 500,
//             "floorPrice": 500
//         },
//         "rarity": {
//             "id": "Uncommon",
//             "name": "UNCOMMON"
//         },
//         "series": null,
//         "banner": null,
//         "offerTag": {
//             "id": "sparksjamloop",
//             "text": "Perform a Jam Track on the Festival Main Stage. Or, bust out your own Jam off the Main Stage with the Track's 4 Jam Loops!"
//         },
//         "granted": [
//             {
//                 "id": "SID_Placeholder_145",
//                 "type": {
//                     "id": "sparks_song",
//                     "name": "Jam Track"
//                 },
//                 "name": "Rain On Me",
//                 "description": "",
//                 "rarity": {
//                     "id": "Uncommon",
//                     "name": "UNCOMMON"
//                 },
//                 "series": null,
//                 "images": {
//                     "icon": null,
//                     "featured": null,
//                     "background": null,
//                     "icon_background": null,
//                     "full_background": null
//                 },
//                 "juno": {
//                     "icon": null
//                 },
//                 "video": null,
//                 "audio": null,
//                 "gameplayTags": [],
//                 "set": null
//             }
//         ],
//         "priority": -1,
//         "section": {
//             "id": "JamTracks.97",
//             "name": "Jam Tracks",
//             "category": "Take Your Stage",
//             "landingPriority": 0
//         },
//         "groupIndex": 0,
//         "storeName": "BRWeeklyStorefront",
//         "tileSize": "Small",
//         "categories": []
//     }]

const Shop = () => {
  const {loading, orders, alertName, isBasketShow, setGoods} = useContext(ShopContext)

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={orders.length}/>
      {loading ? <Preloader /> : <GoodsList/>}
      {isBasketShow && (
        <BasketList/>
      )}
      {alertName && <Alert name={alertName}/>}
    </main>
  );
};

export { Shop };
