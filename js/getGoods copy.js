const getGoods = () => {
   const links = document.querySelectorAll('.navigation-link');
   
   const getData = () => {
      fetch('https://weldberris-test-default-rtdb.firebaseio.com/db.json')
      .then(res => res.json())
      .then(data => localStorage.setItem('data', (JSON.stringify(data))))
   }
  
   links.forEach((link) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          getData();
      })
   })

   localStorage.setItem('goods', JSON.stringify([1,2,3,4,5]))

   const goods = JSON.parse(localStorage.getItem('goods'))

   localStorage.removeItem('goods')
}


getGoods()








// const getGoods = () => {
//    console.log("data")
   
//    //fetch('db/db.json') //запрос к локальной папке
//    fetch('https://weldberris-test-default-rtdb.firebaseio.com/db.json')
//       .then(res => res.json())
//       .then((data) =>{
//          console.log(data)
//       })
// }