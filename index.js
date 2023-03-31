import Vehicle from "./vehicle_class.js"

var searchButton = document.getElementById("search")
searchButton.addEventListener("click", main)

var blockButton = document.getElementById("block")

var vehicle1 = new Vehicle( 1 , 0 , 100 , true , 75 , 80 , false)
var vehicle2 = new Vehicle( 2 , 1 , 100 , false , 0 , 0 , true)

function main() {
    console.log("start main...")

    let selectedVehicle = vehicle2 //esse é o veiculo selecionado

    let id = selectedVehicle.id
    let type = selectedVehicle.typeNow
    let pos = selectedVehicle.position
    let mec = selectedVehicle.mechanicNow
    let tank = selectedVehicle.gasTank
    let speed = selectedVehicle.speed

    //show vehicle info
    document.getElementById("vehicleID").innerHTML = id
    document.getElementById("vehicleType").innerHTML = type
    document.getElementById("vehiclePosition").innerHTML = pos
    document.getElementById("vehicleMechanic").innerHTML = mec 
    document.getElementById("vehicleTank").innerHTML = tank
    document.getElementById("vehicleSpeed").innerHTML = speed

    blockButton.addEventListener("click", selectedVehicle.block)
}                            