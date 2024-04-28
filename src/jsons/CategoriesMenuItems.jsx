import { BsCarFront, BsPhone, BsSuitHeart } from "react-icons/bs";
import { VscJersey } from "react-icons/vsc";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { LuDog } from "react-icons/lu";
import { PiHandSoap } from "react-icons/pi";

// БАЖАНО ЩОБ НАЗВА КАТЕГОРІЇ МАЛА +-20 СИМВОЛІВ
export const categoriesData = [
  {
    title: "Електроніка",
    id: "electronics",
    icon: <BsPhone />,
    subcategories: [
      {
        title: "Laptops",
        url: "../search?query=laptop",
        subsubcategory: [
          { title: "Asus", url: "../search?query=asus%20laptop" },
          { title: "Acer", url: "../search?query=acer%20laptop" },
          { title: "Lenovo", url: "../search?query=lenovo%20laptop" },
          { title: "Apple", url: "../search?query=macbook" },
        ],
      },
      {
        title: "Phones",
        url: "../search?query=phone",
        subsubcategory: [
          { title: "Apple", url: "../search?query=iphone" },
          { title: "Samsung", url: "../search?query=samsung" },
          { title: "Lenovo", url: "../search?query=lenovo" },
        ],
      },
      {
        title: "TVs",
        url: "../search?query=tv",
        subsubcategory: [
          { title: "LG", url: "../search?query=lg%20tv" },
          { title: "Samsung", url: "../search?query=samsung%20tv" },
          { title: "Lenovo", url: "../search?query=lenovo%20tv" },
        ],
      },
      {
        title: "Headphones",
        url: "../search?query=headphones",
        subsubcategory: [
          { title: "JBL", url: "../search?query=jbl%20headphones" },
          { title: "Samsung", url: "../search?query=samsung%20headphones" },
          { title: "Apple", url: "../search?query=airpods" },
        ],
      },
      {
        title: "Keyboards",
        url: "../search?query=keyboard",
        subsubcategory: [
          { title: "Gembird", url: "../search?query=gembird%20keyboard" },
          { title: "Samsung", url: "../search?query=samsung%20keyboard" },
          { title: "Apple", url: "../search?query=apple%20keyboard" },
        ],
      },
    ],
  },
  {
    title: "Автотовари",
    id: "autoAndParts",
    icon: <BsCarFront />,
    subcategories: [
      {
        title: "2sub1",
        url: "/test",
        subsubcategory: [
          { title: "21subsub1", url: "link" },
          { title: "21subsub2", url: "link" },
        ],
      },
      {
        title: "2sub2",
        url: "/test",
        subsubcategory: [
          { title: "22subsub1", url: "link" },
          { title: "22subsub2", url: "link" },
        ],
      },
    ],
  },
  {
    title: "Одяг та прикраси",
    id: "clothes",
    icon: <VscJersey />,
    subcategories: [
      {
        title: "1sub1",
        url: "/test",
        subsubcategory: [
          { title: "11subsub1", url: "link" },
          { title: "11subsub2", url: "link" },
        ],
      },
      {
        title: "1sub2",
        url: "/test",
        subsubcategory: [
          { title: "12subsub1", url: "link" },
          { title: "12subsub2", url: "link" },
        ],
      },
    ],
  },
  {
    title: "Краса та здоров'я",
    id: "personalCare",
    icon: <PiHandSoap />,
    subcategories: [
      {
        title: "1sub1",
        url: "/test",
        subsubcategory: [
          { title: "11subsub1", url: "link" },
          { title: "11subsub2", url: "link" },
        ],
      },
      {
        title: "1sub2",
        url: "/test",
        subsubcategory: [
          { title: "12subsub1", url: "link" },
          { title: "12subsub2", url: "link" },
        ],
      },
    ],
  },
  {
    title: "Зоотовари",
    id: "petSupplies",
    icon: <LuDog />,
    subcategories: [
      {
        title: "1sub1",
        url: "/test",
        subsubcategory: [
          { title: "11subsub1", url: "link" },
          { title: "11subsub2", url: "link" },
        ],
      },
      {
        title: "1sub2",
        url: "/test",
        subsubcategory: [
          { title: "12subsub1", url: "link" },
          { title: "12subsub2", url: "link" },
        ],
      },
    ],
  },
  {
    title: "Спорт та захоплення",
    id: "sports",
    icon: <MdOutlineSportsBasketball />,
    subcategories: [
      {
        title: "1sub1",
        url: "/test",
        subsubcategory: [
          { title: "11subsub1", url: "link" },
          { title: "11subsub2", url: "link" },
        ],
      },
      {
        title: "1sub2",
        url: "/test",
        subsubcategory: [
          { title: "12subsub1", url: "link" },
          { title: "12subsub2", url: "link" },
        ],
      },
    ],
  },
];
