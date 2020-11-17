

let add = document.getElementById("submit");
add.addEventListener("click", function (e){
    e.preventDefault();
    pridetiUzduoti();
    deleteForm();
}, false);

let vedamLentele = document.getElementById("tableForm");

function pridetiUzduoti(){
    if (taskName.value === "" || priority.value === "" || dueDate.value === ""){
        alert ("Nera uzpildytos informacijos")
    } else if (progress.value === "") {
        alert("Prašau užpildykite formą!")
    } else {

        let eilute = document.createElement("tr");
        vedamLentele.appendChild(eilute);

        let pazymekStulpelis = document.createElement("td");
        let pazymek = document.createElement("input");
        pazymek.setAttribute("type", "checkbox")
        eilute.appendChild(pazymekStulpelis);
        pazymekStulpelis.appendChild(pazymek);

        pazymek.addEventListener("click", nubrauk);

        function nubrauk() {
            if (pazymek.checked === true) {
                stilius.style.textDecoration = "line-through";
                stilius.style.opacity = "0.50";
            } else {
                stilius.style.textDecoration = "none";
                stilius.style.opacity = "1";
            }}
        


            let task = document.getElementById("taskName").value;
            console.log(task);
            let stilius = document.createElement("td");
            stilius.innerText = task;
            eilute.appendChild(stilius);

            let priority = document.getElementById("priority").value;
            let observe = document.createElement("td");
            if (priority === "High") {
                observe.innerHTML = '<p class= "text-center border rounded-pill bg-danger" >' + priority + '</p>';
            } else if (priority === "Normal") {
                observe.innerHTML = '<p class= "text-center border rounded-pill bg-primary" >' + priority + '</p>';
            } else if (priority === "Low") {
                observe.innerHTML = '<p class= "text-center border rounded-pill bg-success" >' + priority + '</p>';
            }
            eilute.appendChild(observe);

            let data = document.getElementById("dueDate").value;
            let dataBox = document.createElement("td");
            dataBox.innerHTML = data;
            eilute.appendChild(dataBox);

            let progress = document.getElementById("progress").value;
            let progressBox = document.createElement("td");
            if (isNaN(progress) && progress !== "") {
                if (progress === "100%")
                    progressBox.innerHTML = progress + '<span class="progress"><span class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></span></span>';
                else if (progress === "75%")
                    progressBox.innerHTML = progress + '<span class="progress"><span class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></span></span>';
                else if (progress === "50%")
                    progressBox.innerHTML = progress + '<span class="progress"><span class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></span></span>';
                else if (progress === "25%")
                    progressBox.innerHTML = progress + '<span class="progress"><span class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></span></span>';
                else if (progress === "0%")
                    progressBox.innerHTML = progress + '<span class="progress"><span class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">"</span></span>';
            }
            eilute.appendChild(progressBox);

            let istrinti = document.createElement("td");
            let istrintiBtn = document.createElement("input");
            istrintiBtn.type = "button";
            istrintiBtn.id = "deleteBtn";
            istrintiBtn.name = "delete";
            istrintiBtn.value = "Delete";
            istrintiBtn.className = "btn btn-danger btn-md";
            eilute.appendChild(istrinti);
            istrinti.appendChild(istrintiBtn);

            istrintiBtn.addEventListener("click", function (e) {
                e.preventDefault();
                trintiEilute(e.target.parentNode.parentNode);

            }, false);
        }
        
    }
    
            function deleteForm() {
                let forma = document.getElementsByTagName("form")[0];
                forma.reset();
                return false;}
            

            function trintiEilute(row) {
                vedamLentele.removeChild(row);
            } 
                
      
      