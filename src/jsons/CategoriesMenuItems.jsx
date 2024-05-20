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
        title: "Ноутбуки",
        url: "../search?query=ноутбук",
        subsubcategory: [
          { title: "Asus", url: "../search?query=ноутбук%20asus" },
          { title: "Acer", url: "../search?query=ноутбук%20asusacer" },
          { title: "Lenovo", url: "../search?query=ноутбук%20asuslenovo" },
          { title: "Apple", url: "../search?query=macbook" },
        ],
      },
      {
        title: "Смартфони",
        url: "../search?query=телефон",
        subsubcategory: [
          { title: "Apple", url: "../search?query=iphone" },
          { title: "Samsung", url: "../search?query=samsung" },
          { title: "Lenovo", url: "../search?query=lenovo" },
        ],
      },
      {
        title: "Телевізори",
        url: "../search?query=телевізор",
        subsubcategory: [
          { title: "LG", url: "../search?query=телевізор%20lg" },
          { title: "Samsung", url: "../search?query=телевізор%20samsung" },
          { title: "Lenovo", url: "../search?query=телевізор%20lenovo" },
        ],
      },
      {
        title: "Навушники",
        url: "../search?query=навушники",
        subsubcategory: [
          { title: "JBL", url: "../search?query=навушники%20jbl" },
          { title: "Samsung", url: "../search?query=навушники%20samsung" },
          { title: "Apple", url: "../search?query=airpods" },
        ],
      },
      {
        title: "Клавіатури",
        url: "../search?query=клавіатура",
        subsubcategory: [
          { title: "Gembird", url: "../search?query=клавіатура%20gembird" },
          { title: "Samsung", url: "../search?query=клавіатура%20samsung" },
          { title: "Apple", url: "../search?query=клавіатура%20apple" },
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
        title: "Зчеплення",
        url: "../search?query=зчеплення",
        subsubcategory: [
          { title: "Honda", url: "../search?query=зчеплення%20honda" },
          { title: "Dacia", url: "../search?query=зчеплення%20dacia" },
          { title: "Daewoo", url: "../search?query=зчеплення%20daewoo" },
          { title: "Ford", url: "../search?query=зчеплення%20ford" },
          { title: "Toyota", url: "../search?query=зчеплення%20toyota" },
        ],
      },
      {
        title: "Підвіска",
        url: "../search?query=підвіска",
        subsubcategory: [
          { title: "Honda", url: "../search?query=підвіска%20honda" },
          { title: "Dacia", url: "../search?query=підвіска%20dacia" },
          { title: "Daewoo", url: "../search?query=підвіска%20daewoo" },
          { title: "Ford", url: "../search?query=підвіска%20ford" },
          { title: "Toyota", url: "../search?query=підвіска%20toyota" },
        ],
      },
      {
        title: "Запчастини для двигуна",
        url: "../search?query=двигун",
        subsubcategory: [
          { title: "Honda", url: "../search?query=двигун%20honda" },
          { title: "Dacia", url: "../search?query=двигун%20dacia" },
          { title: "Daewoo", url: "../search?query=двигун%20daewoo" },
          { title: "Ford", url: "../search?query=двигун%20ford" },
          { title: "Toyota", url: "../search?query=двигун%20toyota" },
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
        title: "Одяг для жінок",
        url: "../search?query=жіночий",
        subsubcategory: [
          { title: "Плаття", url: "../search?query=плаття" },
          { title: "Футболки", url: "../search?query=жіноча%20футболка" },
          { title: "Джинси", url: "../search?query=жіночі%20джинси" },
        ],
      },
      {
        title: "Одяг для чоловіків",
        url: "../search?query=чоловічий",
        subsubcategory: [
          { title: "Футболки", url: "../search?query=чоловіча%20футболка" },
          { title: "Джинси", url: "../search?query=чоловічі%20джинси" },
          { title: "Сорочки", url: "../search?query=чоловіча%20сорочка" },
        ],
      },
      {
        title: "Одяг для дітей",
        url: "../search?query=дитячий",
        subsubcategory: [
          { title: "Футболки", url: "../search?query=дитяча%20футболка" },
          { title: "Піжами", url: "../search?query=дитяча%20піжама" },
          { title: "Сорочки", url: "../search?query=дитяча%20сорочка" },
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
        title: "Техніка для краси",
        url: "../search?query=техніка%20для%20краси",
        subsubcategory: [
          { title: "Тримери", url: "../search?query=тример" },
          { title: "Фени", url: "../search?query=фен" },
          { title: "Електробритви", url: "../search?query=електробритва" },
        ],
      },
      {
        title: "Косметика і пафумерія",
        url: "../search?query=косметика%20і%20парфумерія",
        subsubcategory: [
          { title: "Декоративна косметика", url: "../search?query=декоративна%20косметика" },
          { title: "Чоловіча парфумерія", url: "../search?query=чоловічі%20парфуми" },
          { title: "Жіноча парфумерія", url: "../search?query=жіночі%20парфуми" },
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
        title: "Товари для кішок",
        url: "../search?query=котячий",
        subsubcategory: [
          { title: "Іграшки для котів", url: "../search?query=котяча%20іграшка" },
          { title: "Корм для кішок", url: "../search?query=котячий%20корм" },
        ],
      },
      {
        title: "Товари для собак",
        url: "../search?query=собачий",
        subsubcategory: [
          { title: "Іграшки для собак", url: "../search?query=собача%20іграшка" },
          { title: "Корм для собак", url: "../search?query=собачий%20корм" },
        ],
      },
      {
        title: "Товари для птахів",
        url: "../search?query=пташиний",
        subsubcategory: [
          { title: "Клітки для птахів", url: "../search?query=пташина%20клітка" },
          { title: "Корм для птахів", url: "../search?query=пташиний%20корм" },
        ],
      },
      {
        title: "Товари для риб",
        url: "../search?query=для%20риб",
        subsubcategory: [
          { title: "Акваріуми", url: "../search?query=акваріум" },
          { title: "Корм для риб", url: "../search?query=корм%20для%20риб" },
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
        title: "Велосипеди та аксесуари",
        url: "../search?query=велосипед",
        subsubcategory: [
          { title: "Велосипеди", url: "../search?query=велосипед" },
          { title: "Велогума", url: "../search?query=велогума" },
          { title: "Велозапчастини", url: "../search?query=велозапчастини" },
        ],
      },
      {
        title: "Ігрові види спорту",
        url: "../search?query=ігри",
        subsubcategory: [
          { title: "М'ячі", url: "../search?query=мяч" },
          { title: "Настільний теніс", url: "../search?query=теніс" },
          { title: "Бадмінтон", url: "../search?query=бадмінтон" },
        ],
      },
    ],
  },
];
