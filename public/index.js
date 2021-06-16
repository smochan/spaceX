console.log("JS is added")
const url = "https://api.spaceXdata.com/v3/launches?limit=100";
var ly = "";
var slch = "";
var slng = "";

async function getText(uri) {
    let x = await fetch(uri);
    let y = await x.json();
    return y;
}
async function renderFlight(){
    const fullUrl = url + ly + slch + slng;

    const data = await getText(fullUrl);
    html = "";
    data.forEach(function(d){
        html += 
        `
        <div class="flight">
        <img src=${d.links.mission_patch} alt="Image">
        <p id="title">${d.mission_name} #<span>${d.flight_number}</span></p>
        <p><strong>Mission ids:</strong></p>
        <ul>
            <li>${d.mission_id}</li>
        </ul>
        <p><strong>Launch Year:</strong>  ${d.launch_year}</p>
        <p><strong>Succesful Launch:</strong>  ${d.launch_success}</p>
        <p><strong>landing Success:</strong>   ${d.rocket.first_stage.cores[0].land_success}</p>
        </div>
        `;
    })
    $(".missions").html(html);
}

$(".ly").on("click", function(){

    const len = $(this).attr('class').length;
    if(len > 5){
        $(this).removeClass("clicked");
        ly = "";
    }
    else{
        const id = this.id;
        ly = "&launch_year=" + id;

        $(".ly").removeClass("clicked");
        $(this).addClass("clicked");
    }
    renderFlight();
})

$(".slch").on("click", function(){

    const len = $(this).attr('class').length;
    if(len > 5){
        $(this).removeClass("clicked");
        slch = "";
    }
    else{
        const bool = this.id.substring(0, (this.id.length - 3));;
        slch = "&launch_success=" + bool;

        $(".slch").removeClass("clicked");
        $(this).addClass("clicked");
    }
    renderFlight();
})

$(".slng").on("click", function(){

    const len = $(this).attr('class').length;
    if(len > 5){
        $(this).removeClass("clicked");
        slng = "";
    }
    else{
        const bool = this.id;
        slng = "&land_success=" + bool;

        $(".slng").removeClass("clicked");
        $(this).addClass("clicked");
    }
    renderFlight();
})
