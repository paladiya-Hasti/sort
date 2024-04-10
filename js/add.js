
 let books=JSON.parse(localStorage.getItem("pro"))||[]

const handlebook=(e)=>{
    e.preventDefault()

    let datas={
        title:document.getElementById("title").value,
        img:document.getElementById("img").value,
        cate:document.getElementById("cate").value,
        price:document.getElementById("price").value

    }
    books.push(datas)
    console.log(books);
    localStorage.setItem("pro",JSON.stringify(books))
    window.location.href="/index.html"

}

document.getElementById("data").addEventListener("submit",handlebook)