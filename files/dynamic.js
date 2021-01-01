Vue.component("the-lay",{
    props: ["product","theinfo"],
    template: "<div id='lay'><img :src='product' width='125px' height='125px'><span id='information'>{{theinfo}}</span></div>",

})

let myVue = new Vue ({
    el: "#app",
    data: {
        allHere: [
        {theProduct: `images/pth1.jpg`, infotext: `info1`},
        {theProduct: `images/pth2.jpg`,infotext: `info2`},
        {theProduct: `images/pth3.jpg`, infotext: `info3`}]

         }
})
