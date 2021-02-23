import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import valencia from "./images/home_images/the_valencia.jpg";
import blueberry from "./images/home_images/the_blueberry.jpg";
import dragonfruit from "./images/home_images/the_dragonfruit.jpg";
import hh1 from "./images/grid_images/happy_human1.jpg";
import hh2 from "./images/grid_images/happy_human2.jpg";
import hh3 from "./images/grid_images/happy_human3.jpg";
import hh4 from "./images/grid_images/happy_human4.jpg";
import hh5 from "./images/grid_images/happy_human5.jpg";
import hh6 from "./images/grid_images/happy_human6.jpg";
import hh7 from "./images/grid_images/happy_human7.jpg";
import hh8 from "./images/grid_images/happy_human8.jpg";
import hh9 from "./images/grid_images/happy_human9.jpg";
import hh10 from "./images/grid_images/happy_human10.jpg";
import sh1 from "./images/sliding_images/smiling_human_1.jpg";
import sh2 from "./images/sliding_images/smiling_human_2.jpg";
import sh3 from "./images/sliding_images/smiling_human_3.jpg";
import sh4 from "./images/sliding_images/smiling_human_4.jpg";
import sh5 from "./images/sliding_images/smiling_human_5.jpg";
import ci1 from "./images/blueberry_images/creator_1.jpg";
import ci2 from "./images/blueberry_images/creator_2.jpg";
import ci3 from "./images/blueberry_images/creator_3.jpg";
import blueberry_pie from "./images/blueberry_images/Blueberry-Pie.jpg";
import blueberry_icecream from "./images/blueberry_images/blueberry-Icecream.jpg";
import blueberry_smoothie from "./images/blueberry_images/Blueberry-Smoothie.jpg";

export const links = [
  {
    id: "link_1",
    url: "/",
    text: "home",
  },
  {
    id: "link_2",
    url: "/about",
    text: "about",
  },
  {
    id: "link_3",
    url: "/orange",
    text: "orange",
  },
  {
    id: "link_4",
    url: "/blueberry",
    text: "blueberry",
  },
  {
    id: "link_5",
    url: "/dragonfruit",
    text: "Dragon Fruit",
  },
  {
    id: "link_6",
    url: "/cart",
    text: "cart",
  },
];

export const social = [
  {
    id: "social_media_1",
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: "social_media_2",
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: "social_media_3",
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: "social_media_4",
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];

export const homeData = [
  {
    id: "hd1",
    title: "The Valencia",
    slogan: "Vibrant, Vivid, Victorious.",
    links: ["orange", "cart"],
    image: valencia,
    bordercolor: "#eb8034",
  },
  {
    id: "hd2",
    title: "The Rabbiteye",
    slogan: "Reliable, Regal, Radiant.",
    links: ["blueberry", "cart"],
    image: blueberry,
    bordercolor: "#3452eb",
  },
  {
    id: "hd3",
    title: "The Jaina",
    slogan: "Juicy, Jazzy, Jaunty.",
    links: ["dragonfruit", "cart"],
    image: dragonfruit,
    bordercolor: "#eb3486",
  },
];

export const gridData = [
  {
    id: 0,
    title: hh1,
    review: "Loving every bite!",
  },
  {
    id: 1,
    title: hh2,
    review: "One with the fruits!",
  },
  {
    id: 2,
    title: hh3,
    review: "Looking forward to eating this when teeth come in!",
  },
  {
    id: 3,
    title: hh4,
    review: "My expression after eating an Neet's orange!",
  },
  {
    id: 4,
    title: hh5,
    review: "Much taste, very orange!",
  },
  {
    id: 5,
    title: hh6,
    review: "Berry by berry!",
  },
  {
    id: 6,
    title: hh7,
    review: "I love these!",
  },
  {
    id: 7,
    title: hh8,
    review: "Afternoon Delight!",
  },
  {
    id: 8,
    title: hh9,
    review: "Always share with friends!",
  },
  {
    id: 9,
    title: hh10,
    review: "Puts a smile on my face!",
  },
];

export const slidingData = [
  {
    id: 1,
    image: sh1,
    name: "Pedro Pascal",
    title: "Galactic Defender",
    quote:
      "I enjoy every Neets product and my expectation of excellence continues to be unrivaled!",
  },
  {
    id: 2,
    image: sh2,
    name: "Salma Hayak",
    title: "Actress",
    quote:
      "I have only tried the oranges but I must say, without any doubt, that these are the best oranges I have ever had!",
  },
  {
    id: 3,
    image: sh3,
    name: "Marques Brownlee",
    title: "Youtuber",
    quote: "Up Up Down Down Left Right Left Right B A Neets!",
  },
  {
    id: 4,
    image: sh4,
    name: "Fred Astaire",
    title: "Actor",
    quote:
      "Beauty, Art, and Direction are all found right here in every single product!",
  },
  {
    id: 5,
    image: sh5,
    name: "Emma Watson",
    title: "Actress",
    quote:
      "I’m impressed with how quick my order was! I placed an order and then a truck immediately arrived at my house with my deliveries!",
  },
];

export const creationData = [
  {
    id: "cd1",
    title: "Blueberry Ice Cream",
    image: blueberry_icecream,
    creator_image: ci1,
    creator_desc: "Tony Stark",
    ingredients: [
      "400g blueberries, plus more for serving",
      "50g sugar",
      "1 Juice and zest of 1 lemon",
      "720 ml double cream",
      "1 can (400ml) sweetened condensed milk",
    ],
    directions: [
      "In a food processor, puree blueberries then transfer to a medium saucepan. Working over medium heat, add sugar, lemon juice, and lemon zest. Bring mixture to a boil then reduce heat. Simmer until slightly reduced, about 15 minutes.",
      "Transfer to a bowl and place in refrigerator to chill, 1 to 2 hours. ",
      "In a large bowl using a hand mixer, or in the bowl of a stand mixer fitted with the whisk attachment, beat double cream until stiff peaks form. Fold in sweetened condensed milk until fully combined, then fold in chilled blueberry puree. ",
      "Transfer to 20 x 12cm loaf pan and freeze until firm, 5 hours.",
      "Serve with fresh blueberries!",
    ],
  },
  {
    id: "cd2",
    title: "Blueberry Smoothie",
    image: blueberry_smoothie,
    creator_image: ci2,
    creator_desc: "Romona Flowers",
    ingredients: ["Blueberries", "Banana", "Avocado", "Kale", "Milk"],
    directions: ["Blend ingredients in a blender and serve!"],
  },
  {
    id: "cd3",
    title: "Blueberry Filled Pie",
    image: blueberry_pie,
    creator_image: ci3,
    creator_desc: "Clark Kent",
    ingredients: [
      "Pie dough for top and bottom 9-inch pie, chilled ",
      "2/3 cup to 3/4 cup (130 to 150 grams) granulated sugar, adjusted according to sweetness of berries",
      "1/4 cup (30 grams) cornstarch",
      "2 teaspoons freshly grated lemon zest",
      "1/8 teaspoon ground allspice",
      "1/8 teaspoon ground cinnamon",
      "1/8 teaspoon kosher salt",
      "2 pounds (900 grams) fresh blueberries (about 6 cups)",
      "1 tablespoon butter, cut into small squares",
      "1 egg yolk",
      "1 tablespoon heavy cream",
      "1 tablespoon coarse sugar, for garnish",
    ],
    directions: [
      "Prepare Bottom Crust: Roll out half of the pie dough to fit an 8- or 9-inch pie dish. To prevent the dough from sticking and to ensure uniform thickness, roll from the center of the dough outwards and keep lifting up and turning the dough a quarter turn as you roll. Check for the correct size by inverting the pie dish over the dough. The dough should be about 2 inches larger than the dish. Being careful not to stretch the dough, fit into pie dish then trim dough to within 3/4-inch of the edge of the dish. Refrigerate while you make the pie filling.",
      "Make Pie Filling: Stir sugar, cornstarch, lemon peel, allspice, cinnamon and salt in a large bowl. Add blueberries and gently toss to combine. Transfer the blueberry filling to the prepared pie crust. Refrigerate while you prepare the lattice crust.",
      "Assemble and Add Lattice Crust: Roll out the second half of dough to a similar size as before. Cut into 3/4-inch strips. Lay five strips over filled pie, parallel and equally spaced from one another. Carefully fold back the second and fourth strips then lay another strip of dough perpendicular to them. Unfold second and fourth strips over new strip. Fold back the first, third and fifth strips then lay another strip of dough perpendicular to them. Unfold the first, third and fifth strips over the new strip. Repeat until pie has been covered with a lattice crust. (Watch us do this in our video: how to make a lattice crust). Trim dough strips to 3/4-inch of the edge of dish. Fold edges of strips and bottom dough underneath itself, creating a thicker border that rests on the lip of the dish. Crimp edges. Dot the butter over the open areas of the lattice. Make egg wash by whisking egg yolk and cream together then brush over pie dough. Sprinkle tablespoon of coarse sugar over crust. Refrigerate pie 20 minutes or freeze for 5 minutes before baking.",
      "Final Steps: Heat oven to 400 degrees F. Position an oven rack in the lower third of the oven then place a baking sheet on rack. (The baking sheet will catch any drips from the pie while baking). Bake chilled pie on hot baking sheet for 20 minutes, reduce heat to 350 degrees F then continue to bake for 35 to 45 minutes, or until the crust is golden and juices in the filling are bubbling eagerly. If, while baking, the crust begins to brown too much, cover with aluminum foil and continue to bake until done. Cool 2 to 3 hours before cutting to allow filling to set.",
    ],
  },
];
