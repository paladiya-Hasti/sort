let books=JSON.parse(localStorage.getItem("pro"))||[]


const uimaker=(datas)=>{
    document.getElementById("box").innerHTML=""
    datas.map((ele,i)=>{
        let title=document.createElement("h1")
        title.innerHTML=ele.title

        let img=document.createElement("img")
        img.src=ele.img

        let cate=document.createElement("h5")
        cate.innerHTML="cate : "+ele.cate

        let price=document.createElement("h6")
        price.innerHTML="price :"+ele.price

        let btn=document.createElement("button")
        btn.innerHTML="delete"

        btn.addEventListener("click",()=>{
            books.splice(i,1)
            uimaker(books)
        })
       
        btn.setAttribute("class","del")

       

        let div=document.createElement("div")
        div.append(title,img,cate,price,btn)

        div.setAttribute("class","box1")

        document.getElementById("box").append(div)
    })
    
    
}

uimaker(books)


let handlesort=(val)=>{


    if(val=="lth"){
        let temp=books.sort((a,b)=>a.price - b.price)
        uimaker(temp)

    }
    else{
        let temp=books.sort((a,b)=>b.price - a.price)
        uimaker(temp)

    }
}
let search=(val)=>{
    let temp= books.filter((ele)=>ele.title==val)
    uimaker(temp)

}


let handlesearch=(e)=>{
    e.preventDefault()

    let val=document.getElementById("search").value
    search(val)

}

let searchfilter=(val)=>{
    let temp= books.filter((ele)=>ele.cate==val)
    uimaker(temp)

}

document.getElementById("htl").addEventListener("click",()=>handlesort("htl"))
document.getElementById("lth").addEventListener("click",()=>handlesort("lth"))
document.getElementById("searchform").addEventListener("submit",handlesearch)
document.getElementById("guj").addEventListener("click",()=>searchfilter("guj"))
document.getElementById("eng").addEventListener("click",()=>searchfilter("eng"))
document.getElementById("hindi").addEventListener("click",()=>searchfilter("hindi"))

