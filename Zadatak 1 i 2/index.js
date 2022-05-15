function generateCars(kotaci, karoserije, lutke){
    let kotaciNum = Math.floor(kotaci / 4);
    let lutkeNum = Math.floor(lutke /2);
    console.log(Math.min(kotaciNum, karoserije, lutkeNum));

}
generateCars(2, 48, 76);