let i = 0;
var namelist = ["Sunshine", "Bozzy Bee", "Dory", "Yoshi", "Bumblebee & Gemini", "Tulip and White Tiger", "Pheonix", "Olive", "Tuna"]
var joblist = ["Wood working", "Ceramics B", "Ceramics C/D", "Sewing", "STEAM", "Nature", "Sampler", "Drawing and Painting", "Clothing and Accessories"]
var job = $("#job")
var names = $(".names")

function func(){
    console.log("Success 1")
    job.text(joblist[i])
    names.text(namelist[i])
    i++
    setTimeout(() => {
    next()
    }, 5800);
}

function next(){
    console.log("Success 2")
    job.text(joblist[i])
    names.text("")

}