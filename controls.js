class Controls{
  constructor(type){
    this.forward = false
    this.left = false
    this.right = false
    this.reverse = false

    switch(type){
      case "KEYS":
        this.#addInputs()
        break;

      case "DUMMY":
        this.forward =true
        break;
    }

    this.#addInputs()
  }
  
  #addInputs(){
    document.onkeydown = (e)=>{
      switch(e.key){
        case "w":
          this.forward=true
        break;

        case "a":
          this.left=true
        break;

        case "d":
          this.right=true
        break;

        case "s":
          this.reverse=true
        break;
      }
      console.table(this)
    }
      // Add event listener for keyup to handle de-pressing keys
      document.onkeyup = (e)=>{
        switch(e.key){
          case "w":
            this.forward=false
          break;
    
          case "a":
            this.left=false
          break;
    
          case "d":
            this.right=false
          break;
    
          case "s":
            this.reverse=false
          break;
        }
        console.table(this)
      }
  }
}
