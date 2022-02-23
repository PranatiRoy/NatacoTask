let month_1_select=document.querySelector('#month_1_pack');
let month_3_select=document.querySelector('#month_3_pack');

/*
month_1_select.addEventListener('click', () => month_1_select.style.backgroundColor = 'red');*/

month_1_select.addEventListener('click', function run() {

    const icon = this.querySelector('i');

    month_1_select.style.backgroundColor = '#5E5E61'
    month_1_select.style.border="2px solid white"
    month_3_select.style.backgroundColor = '#130F0F'
    month_3_select.style.border= 'none'

});

month_3_select.addEventListener('click', function run() {

    month_3_select.style.backgroundColor = '#5E5E61'
    month_3_select.style.border="2px solid white"
    month_1_select.style.backgroundColor = '#130F0F'
    month_1_select.style.border= 'none'
});