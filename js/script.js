let col = document.querySelectorAll(".col")
let col1 = document.querySelector("#one")
let col2 = document.querySelector("#two")
let col3 = document.querySelector("#three")
let col4 = document.querySelector("#four")
let col5 = document.querySelector("#five")
let col6 = document.querySelector("#six")
let col7 = document.querySelector("#seven")
let col8 = document.querySelector("#eight")
let col9 = document.querySelector("#nine")
let coler = col1.style.backgroundColor
let n = 2
col.forEach(li =>
    li.onclick = function() {

        console.log(n)
        if (n % 2 == 0) {
            this.textContent = "X"
            this.style.backgroundColor = "red"
        } else {

            this.textContent = "O"
            this.style.backgroundColor = "blue"
        }
        n++

        if (col1.textContent === "X" && col2.textContent === "X" && col3.textContent === "X") {

            Swal.fire('RED WINSS....')
        } else if (col4.textContent === "X" && col5.textContent === "X" && col6.textContent === "X") {
            Swal.fire('RED WINSS....')

        } else if (col7.textContent === "X" && col8.textContent === "X" && col9.textContent === "X") {

            Swal.fire('RED WINSS....')
        } else if (col1.textContent === "X" && col4.textContent === "X" && col7.textContent === "X") {

            let ok = document.querySelector(".swal2-confirm swal2-styled")
            Swal.fire('RED WINSS....')
            ok.onclick = function() {
                console.log("heloo mother fuckker")
            }
        } else if (col2.textContent === "X" && col5.textContent === "X" && col8.textContent === "X") {

            Swal.fire('RED WINSS....')
        } else if (col9.textContent === "X" && col6.textContent === "X" && col3.textContent === "X") {

            Swal.fire('RED WINSS....')
        } else if (col1.textContent === "X" && col5.textContent === "X" && col9.textContent === "X") {

            Swal.fire('RED WINSS....')
        } else if (col3.textContent === "X" && col5.textContent === "X" && col7.textContent === "X") {

            Swal.fire('RED WINSS....')
        }


        if (col1.textContent === "O" && col2.textContent === "O" && col3.textContent === "O") {

            Swal.fire('BLUE WINSS...')
        } else if (col4.textContent === "O" && col5.textContent === "O" && col6.textContent === "O") {
            Swal.fire('BLUE WINSS...')

        } else if (col7.textContent === "O" && col8.textContent === "O" && col9.textContent === "O") {

            Swal.fire('BLUE WINSS...')
        } else if (col1.textContent === "O" && col4.textContent === "O" && col7.textContent === "O") {

            Swal.fire('BLUE WINSS...')
        } else if (col2.textContent === "O" && col5.textContent === "O" && col8.textContent === "O") {

            Swal.fire('BLUE WINSS...')
        } else if (col9.textContent === "O" && col6.textContent === "O" && col3.textContent === "O") {

            Swal.fire('BLUE WINSS...')
        } else if (col1.textContent === "O" && col5.textContent === "O" && col9.textContent === "O") {

            Swal.fire('BLUE WINSS...')
        } else if (col3.textContent === "O" && col5.textContent === "O" && col7.textContent === "X") {

            Swal.fire('BLUE WINSS....')
        }



    });