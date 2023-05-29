const Links = document.querySelectorAll(".Links")
  const fileDiv = document.querySelector("#fileContent")
  const Title = document.querySelector("#fileName")
const Card = document.querySelector(".card")
  console.log(Links)

  Links.forEach(item=>{
    item.addEventListener("click",(event)=>{
      event.preventDefault()
      
      const fileName = event.target.id
      
      fetch(`./books/${fileName}.txt`).then(response => response.text())
      .then((content)=>{
        //Remove line breaks and carriage returns and replaces with <br> tags
        content = content.replace(/\r?\n/g, "<br>");
        
          Title.innerHTML=event.target.innerHTML
          fileDiv.innerHTML = content
          Card.classList.add("book_loaded")

        })
      
    })
  })
