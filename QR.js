const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generatebtn = document.getElementById('generatebtn');
const downloadbtn = document.getElementById('downloadbtn');

const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generatebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});

downloadbtn.addEventListener('click',(e)=>{
    let img = document.querySelector('.qr-body img');
    if(img != null){
        let imgAtr = img.getAttribute('src');
        downloadbtn.setAttribute("href",imgAtr);
    }
    else{
        downloadbtn.setAttribute("href",`${document.querySelector(`canvas`).toDataURL()}`);
    }
})

function isEmptyInput(){
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }
    // else{
    //     alert("Enter the text or URL to generate your QR code");
    // }
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");
    
}
function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",

    });
}