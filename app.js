const bgEl = document.querySelector('.bg');
const loadingEl = document.querySelector('.loading-text');

let load = 0;



const loadingFun = () => {
    load++
 if (load > 99 ){
    clearInterval(timr)
 }
   loadingEl.textContent = `${load}%`
   loadingEl.style.opacity = scale(load, 0, 100, 1, 0)
   bgEl.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

let timr = setInterval(loadingFun, 30)


const scale = (num, in_min, in_max, out_min, out_max) =>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
