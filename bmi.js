const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === " " || height < 0 || isNaN(height)){
       results.innerHTML = `Please enter a valid height ${height}`
    }
    else if(weight === " " || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }
    const guide = document.querySelector('#weight-guide')
    console.log(guide);
    const bmi = (weight / ((height * height)/10000)).toFixed(2)
    if(bmi < 18.6){
        guide.innerHTML = "Under Weight"
    }
    else if(bmi <= 24.9 ){
        guide.innerHTML = "Normal Weight"
    }
    else{
        guide.innerHTML = "Over Weight"
    }
})