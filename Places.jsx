import React from 'react';
import styles from'./places.module.css';
import Card from './Card';

const Places = () => {
   let  products=[
        {
            'id':1,
            'img':'https://media.cntraveler.com/photos/5cb63a516b5c4dca7b5ec156/master/w_1600%2Cc_limit/Victoria-Falls-Zambia-Zimbabwe_GettyImages-507449285.jpg',
            'Title':'Victoria Falls, Zambia and Zimbabwe',
            'Rating': 5,
            'Price':500,
            'Description':'The world’s largest waterfall,  The clearest views of the 500 million liters of water that pour over the falls every 60 seconds.'

        },
        {
            'id':11,
            'img':'https://www.civitatis.com/blog/wp-content/uploads/2021/08/salto-angel.jpg',
            'Title':'Tugela Falls, South Africa',
            'Rating':4.5,
            'Price':450,
            'Description':'Drakensberg Mountains of South Africa. There lies Tugela Falls, second on the list of 10 of the world’s tallest waterfalls, with a combined total drop of 948 meters.'

        },
        {
            'id':12,
            'img':'https://www.civitatis.com/blog/wp-content/uploads/2021/08/cataratas-niagara.jpg',
            'Title':'Skógafoss, Iceland',
            'Rating':4.5,
            'Price':450,
            'Description':'The Skógafoss waterfall is one of Iceland’s most popular attractions. This impressive waterfall, featuring a drop of more than 60 meters, '

        },
      
     
       
        {
            'id':3,
            'img':'https://media.cntraveler.com/photos/628fd7349febef1a2422785f/master/w_1600%2Cc_limit/Monteverde-Costa-Rica-GettyImages-467010064.jpg',
            'Title':'Monteverde Cloud Forest, Costa Rica',
            'Rating': 5,
            'Price': 500,
            'Description':'Costa Rica is known for its biodiversity, and the Monteverde Cloud Forest Reserve alone acts as proof.'

        },
        {
            'id':7,
            'img':'https://media.cntraveler.com/photos/628fdc599febef1a24227863/master/w_1600%2Cc_limit/Cocora-GettyImages-511770465.jpg',
            'Title':'Valle de Cocora, Colombia',
            'Rating':4.5,
            'Price':400,
            'Description':'Valle de Cocora is one of the most beautiful landscapes in Colombia—and that’s saying something. The park (about a 7-hour drive west of Bogotá) is filled with the tallest palm trees in the world at nearly 200 feet'

        },
        {
            'id':8,
            'img':'https://i0.wp.com/files.tripstodiscover.com/files/2015/01/Butchart-Gardens.jpg?resize=784%2c588',
            'Title':'The Butchart Gardens  Canada',
            'Rating':4.5,
            'Price':400,
            'Description':'One of the top display gardens in the world, The Butchart Gardens on Vancouver Island — known as Canadas “City of Gardens”'

        },
        {
            'id':9,
            'img':'https://media.cntraveler.com/photos/5eb1ce3b4623d48988c218f6/master/w_1600%2Cc_limit/Rakotzbrucke-GettyImages-538162756.jpg',
            'Title':'Rakotzbrücke, Germany',
            'Rating':5,
            'Price':450 ,
            'Description':'Hidden in Kromlaus Azalea and Rhododendron Park, just a two-hour drive southeast of Berlin, Rakotzsee (Rakotz Lake) is home to one of the most fairytale'

        },
        {
            'id':4,
            'img':'https://media.cntraveler.com/photos/60f0aca7c28e94c67dd51ed4/master/w_1600%2Cc_limit/Georgia-GettyImages-827099710.jpg',
            'Title':'Caucasus Mountains, Georgia',
            'Rating': 5,
            'Price':500,
            'Description':'For adventurous travelers who have grown tired of the crowded mountain trails in the Alps or or reservation-only vineyards in France, Georgia has everything you need and then some (yes, including wine). '

        },
      
        {
            'id':6,
            'img':'https://media.cntraveler.com/photos/605967821b01d7e74b70528d/master/w_1600%2Cc_limit/IsleOfSkye-GettyImages-1160979608.jpg',
            'Title':'Isle of Skye, Scotland',
            'Rating':4.5,
            'Price':400,
            'Description':'With fairy pools and endless undulations of hills, the magical Isle of Skye is the stuff dreams are made of. While the nature here is timeless, the island also has a food scene that’s totally modern'

        },
      
      
       
        {
            'id':10,
            'img':'https://media.cntraveler.com/photos/628fd4f0efcfc365de2c45f2/master/w_1600%2Cc_limit/Trolltunga-GettyImages-177425034.jpg',
            'Title':'Trolltunga, Norway',
            'Rating':4.5,
            'Price':450,
            'Description':'The protruding rock sits about 2,300 feet above Lake Ringedalsvatnet, tempting travelers to inch out to the edge.'

        },
        {
            'id':5,
            'img':'https://www.touropia.com/gfx/d/best-national-parks-in-the-world/goreme_national_park.jpg',
            'Title':'Goreme National Park',
            'Rating': 4.5,
            'Price':400,
            'Description':'Goreme National Park, a remote and colorful landscape made up of dramatic rock formations in Cappadocia in central Turkey. '

        },
        {
            'id':2,
            'img':'https://media.cntraveler.com/photos/5c1aa572a546ef283d217353/master/w_1600%2Cc_limit/Halong-Bay_GettyImages-111646837.jpg',
            'Title':'Ha Long Bay, Vietnam',
            'Rating': 5,
            'Price':500,
            'Description':'Ha Long Bay, located in northeast Vietnam, is beloved for its blue waters and spread of limestone islands, all occupied by tropical trees and wildlife. '

        },
     
      
      
    ];
  return (
    <div className= {styles.main}>
       {
        products.map(product=>
            <Card product= {product}/>
        )
       }

    </div>
  )
}

export default Places