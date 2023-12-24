                                              // بسم الله الرحمن الرحيم 


var SiteName = document.querySelector('#SiteName')
var SiteURL = document.querySelector('#SiteURL')
var container = [];
if (localStorage.getItem('data') != null) {
    container = JSON.parse(localStorage.getItem('data'))
    display()
}
function SiteName1() {

    container.push(SiteName.value)
    localStorage.setItem('data', JSON.stringify(container))
    display()
}
function display() {

    var sum = "";
    for (var i = 0; i < container.length; i++){
        sum +=
            `
            <tr class="text-white">
                        <td>${i + 1}</td>
                        <td>${container[i]}</td>
                        <td><button class="btn btn-dark text-white"><a href="${container[i]}" target="_blank" ><i class="fa-regular fa-eye me-1  " ></i></a>visit</button></td>
                        <td><button class= "btn btn-dark text-white"><i class="fa-solid fa-trash me-1 " onclick="delete1(${i})"></i>delete</button></td>
                        </tr>
 `
    }
    console.log(sum);
    document.getElementById('tbody').innerHTML = sum;
}
function delete1(index) {
    container.splice('index', 1)
    localStorage.setItem('data', JSON.stringify(container))
    display()
}

