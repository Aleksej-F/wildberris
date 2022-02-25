const getGoods = () => {
   const links = document.querySelectorAll('.navigation-link');
   
   const getData = () => {
      fetch('db/db.json')
      .then(res => res.json())
      .then(data => localStorage.setItem('data', (JSON.stringify(data))))
   }
  
   links.forEach((link) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          getData();
      })
   })

   
}


getGoods()