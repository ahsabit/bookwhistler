// ----------------date function-------------------
var yearHolder = document.querySelector('.year');
var date = new Date();
var year = date.getFullYear();
yearHolder.innerText = year;

// ----------------Category Selector--------------
var categories = document.querySelectorAll('.category');
var selectedCate = document.querySelector('.category[href*='+category+']');
var selectedClass = "selected-category";

categories.forEach(c => {
    selectCategory(c);
});

function selectCategory(cate){
    if (cate = selectedCate) {
        if (!cate.classList.contains(selectedClass)) {
            cate.classList.add(selectedClass);
        }
    }else{
        if (cate.classList.contains(selectedClass)) {
            cate.classList.remove(selectedClass);
        }
    }
}

// ---------------------------------