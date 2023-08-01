var producto = [];
var precio = [];


function card() {
//TOMAMOS  SU  VALOR Y SE LO ASIGNAMOS A UNA VARIABLE
    var producto = document.getElementById("bebidas").value;
    var cantidad = document.getElementById("cantidad").value;

    var contenedoraux = document.getElementById("contenedor");
    var elem = document.getElementById("div1");
    contenedoraux.removeChild(elem);

        switch (producto) {

            
            case "gin":
                precio = [" ", "3.000", "$32.000", "$30.000", "$25.000", "$32.000", "$34.000"];
                break;



            case "cervezas":
                precio = [" ", "$1.200", "$1.200", "$1.200", "$1.200", "$1.200", "$1.200"];
                break;




            case "vinos":
                precio = [" ", "$2.000", "$2.000", "$2.000", "$2.000", "$2.000", "$2.000"];
                break;
            default:
                break;
        }

            //LA CANTIDAD DE VUELTAS SON LA CANTIDAD DE CARDS QUE EL USUARIO QUIERE APRETAR
    for (var i = 1; i <= cantidad; i++) {
        //CREAMOS EL PRIMER DIV
             var div0 = document.createElement("div")
             div0.className = "row gx-5";
             div0.id = "div1"
             contenedoraux.appendChild(div0)
        
        var contenedor1 = document.getElementById("div1")
        var div1 = document.createElement("div")
        div1.className = "col-5"
        div1.id = "div1" + i
        contenedor1.appendChild(div1)

        var div1b = document.getElementById("div1" + i)
        var div2 = document.createElement("div")
        div2.className = "p-3"
        div2.id = "div2" + i
        div1b.appendChild(div2)

        var div2b = document.getElementById("div2" + i)
        var div3 = document.createElement("div")
        div3.className = "card"
        div3.id = "div3" + i
        div2b.appendChild(div3)

        var div3b = document.getElementById("div3" + i)
        var div4 = document.createElement("div")
        div4.className = "card"
        div4.style = "width: 18rem"
        div3b.appendChild(div4)

        var div5 = document.createElement("img")
        div5.src = "/img/" + producto + i + ".jpg"
        div5.className = "card-img-top"
        div5.alt = "..."
        div3b.appendChild(div5)

        var div6 = document.createElement("div")
        div6.className = "card-body"
        div6.id = "div6" + i
        div3b.appendChild(div6)
        
        var div6b = document.getElementById("div6" + i)
        var div7 = document.createElement("h4")
        div7.className = "card-title"
        div7.innerHTML = "bebidas"
        div6b.appendChild(div7)

        var div8 = document.createElement("p")
        div8.className = "card-text"
        div8.innerHTML = producto
        div6b.appendChild(div8)

        var div9=document.createElement("p")
        div9.innerHTML = "precio" + precio[i]
        div6b.appendChild(div9)

        var div10=document.createElement("p")
        div6b.appendChild(div10)

        var button = document.createElement("button");
        button.className = "btn btn-primary"
        button.innerHTML = "comprar"
        div10.appendChild(button);



    }

}




