Vue.component("the-lay",{
    props: ["product","theinfo"],
    template: "<a href = '#' style = 'text-decoration: none'><div id='lay'><img :src='product' width='125px' height='125px'><span id='information'>{{theinfo}}</span></div></a>",

})

let myVue = new Vue ({
    el: "#app",
    data: {
        allHere: [
        {theProduct: `../../images/pth4.jpg`, infotext: `info1`},
        {theProduct: `../../images/pth5.jpg`,infotext: `info2`},
        {theProduct: `../../images/pth6.jpg`, infotext: `info3`}]

         }
})


