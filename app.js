/* Hazır menu ekleme yapıldı..*/
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Adana Kebap",
    category: "Turkish",
    price: 69.99,
    img:
      "https://iasbh.tmgrup.com.tr/040972/800/420/0/136/1152/740?u=https://isbh.tmgrup.com.tr/sbh/2020/03/05/en-harika-adana-kebap-tarifi-adana-kebap-nasil-yapilir-1583404717106.jpg",
    desc: `Acılı Adana Kebap.`,
  },
];


/*------------------------------------------------------------ */
/*öncelikle html dosyamızda mevcut olan alanlarımıza işlem
yapabilmek adına çektik..*/

const btnContainerDOM = document.querySelector('.btn-container')
const menuContainerDOM = document.querySelector('.section-center')

/* ----------------------------------------------------------- */

/* ----------------- Menu Butonları Oluşturma ---------------- */


/* burada butonları oluştururken aynı zamanda buton id ve elementlerini de for döngüsü ile 
oluşturdum */

const createButton = () => {
  console.log(menu.length)
  const categoryCheck = []

  /* tüm kategoriler Butonu*/
  let createAllDOM = `
  <button id="All" class="btn btn-outline-dark btn-item" type="button">
  All
</button >
  `
  btnContainerDOM.innerHTML += createAllDOM

  /* diğer kategorilerin butonları ve acaba click fonksiyonunu da burada
  yazabilir miyiz ?
  */
  for (let i = 0; i < menu.length; i++) {


    const interestingItems = new Set(categoryCheck)
    const isItemInSet = interestingItems.has(menu[i]['category'])

    if (isItemInSet) {
      null;
    }
    else {
      categoryCheck.push(menu[i]['category'])

      let newBtn = `
      <button id="${menu[i]['category']}" class="btn btn-outline-dark btn-item" type="button">
        ${menu[i]['category']}
      </button >
  `

      btnContainerDOM.innerHTML += newBtn

    }

  }

}

/* evenlistenerda mevcut olan 'domcontentloaded' sayfa tam 
yüklenmeden çalışır otomatikmen */

/* load olayı tasarım bittikten sonra ( tam olarak yüklenmiş
  bir sayfayı algılamak için kullanılır */

document.addEventListener('DomContentLoaded', createButton())
document.querySelector('#All').addEventListener('click', ListAllFoods)
document.querySelector('#Korea').addEventListener('click', ListKoreanFoods)
document.querySelector('#Japan').addEventListener('click', ListJapaneseFoods)
document.querySelector('#China').addEventListener('click', ListChineseFoods)
document.querySelector('#Turkish').addEventListener('click', ListTurkishFoods)




/* Yemek oluşturma fonksiyonu menu nesnesini içerisindeki datalardan(indis sırasıyla)
gelen değerleri çekip html formatında yerlerine yazdım.

*/
function createFoods(food) {
  let html = `
  <div class="menu-items col-lg-6 col-sm-12">
      <img class="photo" src="${food.img}" alt="${food.title}">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${food.title}</h4>
          <h4 class="price">${food.price}</h4>
        </div>
        <div class="menu-text">${food.desc}</div>
      </div>
  </div>  
  
  
  `
  return html

}

/* Burada map ile manu içerisindeki her bir nesneyi alıp yemek oluşturma 
fonksiyonuna gönderdik..
*/

function ListAllFoods() {

  let allMenu = ""

  menu.map(item => {

    allMenu += createFoods(item)
  })
  menuContainerDOM.innerHTML = allMenu

}

function ListKoreanFoods() {

  let koreanMenu = ""

  menu.map(item => {

    if (item.category == 'Korea') {
      koreanMenu += createFoods(item)
    }
  })

  menuContainerDOM.innerHTML = koreanMenu
}

function ListJapaneseFoods() {

  let japanMenu = ""

  menu.map(item => {

    if (item.category == 'Japan') {
      japanMenu += createFoods(item)

    }

  })
  menuContainerDOM.innerHTML = japanMenu
}

function ListChineseFoods() {
  let chineseMenu = ""

  menu.map(item => {

    if (item.category == 'China') {
      chineseMenu += createFoods(item)
    }

  })
  menuContainerDOM.innerHTML = chineseMenu
}
function ListTurkishFoods() {

  let turkishMenu = ''

  menu.map(item => {

    if (item.category == 'Turkish') {
      turkishMenu += createFoods(item)
    }
  })
  menuContainerDOM.innerHTML = turkishMenu
}