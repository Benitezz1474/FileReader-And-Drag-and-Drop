//HTML nodes
const inputFile = document.getElementById("inputFile")
const dropZone = document.querySelector(".dropZone")
const loadBarProgress = document.querySelector(".loadBar_progress")
const text_progress = document.querySelector(".loadBar_progress h4")
const file_title = document.getElementById("file_title")

// this is css root vars
const root = document.documentElement.style

//HTML nodes addEventListenner
dropZone.addEventListener("click",()=> inputFile.click())

dropZone.addEventListener("dragenter",()=> dropZone.classList.toggle("dropZoneHover"))

dropZone.addEventListener("dragover",(e)=> e.preventDefault())


//code optimitation

let fileName

const getFileAndProgressModific=(fileA)=>{

  const file = fileA

  fileName = file.name

  text_progress.style.color = "#fff";
  
  const fileReaderApi = new FileReader()
  
  fileReaderApi.readAsDataURL(file) //async
  
  
  fileReaderApi.addEventListener("progress",(e)=>{
    
    const {loaded, total} = e
    
    const widthProgressBar =  parseInt( ((loaded * 100) / total)) //get progress in porcentaje ( % )
        
    // loadBarProgress.style.width = widthProgressBar+"%"
    
    root.setProperty("--width", widthProgressBar+"%")

    text_progress.innerHTML = widthProgressBar + "%"
    
})

  fileReaderApi.addEventListener("load",()=>{
  
    root.setProperty("--bgColor", "rgb(8, 161, 18)")
    console.log(fileName)
    file_title.innerHTML = fileName

  })


}


dropZone.addEventListener("drop",(e)=> {
  e.preventDefault()

  const file = e.dataTransfer.files[0]

  getFileAndProgressModific(file)
 
 
})

dropZone.addEventListener("dragleave",()=> dropZone.classList.toggle(".dropZone") )

inputFile.addEventListener("change",(e)=>{
  
const file = e.target.files[0]

getFileAndProgressModific(file)


})




