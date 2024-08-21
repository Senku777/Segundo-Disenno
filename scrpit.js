document.addEventListener('DOMContentLoaded', function(){
    const btnVerMas=document.querySelectorAll('.btn-ver-mas');
    btnVerMas.forEach((btn)=>{
        btn.addEventListener('click', function(){
            const especieId=btn.parentNode.CDATA_SECTION_NODE.especieId;
            window.location.href=`./home/home.html?id=${especieId}`
        })
    })
})