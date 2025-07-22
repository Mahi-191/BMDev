import { LightningElement, track } from 'lwc';
//import firstIcon from '@salesforce/resourceUrl/PGatewayBkgrund';
//import { NavigationMixin } from 'lightning/navigation';
//import login from '@salesforce/apex/LightningLoginFormController.login';

export default class DesignPage extends LightningElement {

sections = [];
sec;
renderedCallback(){
    window.addEventListener("scroll", this.navHighlighter);
    //let sections = this.template.querySelectorAll("section[id]");
    let temp=[];
    this.template.querySelectorAll("section[id]").forEach(elm => {
        console.log(elm.id.slice(0,8));
        temp.push(elm);
});

this.abc(temp);
//this.sections = sections;
    console.log('connected callback', JSON.stringify(this.sections),' hdhsd ', this.sections);
}
abc(temp){
if(temp != undefined){
    this.sections = temp;
}
else{
    console.log('value is undefined')
}
}

navHighlighter() {
//this.sections =this.template.querySelectorAll("section[id]");
  let scrollY = window.pageYOffset;
  console.log('navHighlighter', scrollY);
  console.log('connected callback efasd', JSON.stringify(this.sections),' hdhsd ', this.sections);
    this.sections.forEach(current => {
    console.log('inside loop', current);
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        this.template.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
        this.template.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}






    // //@track icon = firstIcon;
    // showParent1 = false;
    // showParent2 = false;
    // showParent3 = false;
    // sect1 = 'navColor';
    // sect2 = 'navColor';
    // sect3 = 'navColor';
    // sect4 = 'navColor';
    // sect5 = 'navColor';
    // sections = document.querySelectorAll('section');

    // handleMouseOver(event) {
    //     // console.log('event ',event.currentTarget.dataset.id);

    //     let currentId = event.currentTarget.dataset.id;

    //     //console.log('current Id :::: ',currentId);
    //     if (currentId == 'section1') {
    //         this.sect1 = 'navColor active';
    //         this.sect2 = 'navColor';
    //         this.sect3 = 'navColor';
    //         this.sect4 = 'navColor';
    //         this.sect5 = 'navColor';
    //     }
    //     else if (currentId == 'section2') {
    //         this.sect1 = 'navColor';
    //         this.sect3 = 'navColor';
    //         this.sect4 = 'navColor';
    //         this.sect5 = 'navColor';
    //         this.sect2 = 'navColor active';
    //     }
    //     else if (currentId == 'section3') {
    //         this.sect1 = 'navColor';
    //         this.sect2 = 'navColor';
    //         this.sect4 = 'navColor';
    //         this.sect5 = 'navColor';

    //         this.sect3 = 'navColor active';
    //     }
    //     else if (currentId == 'section4') {
    //         this.sect1 = 'navColor';
    //         this.sect2 = 'navColor';
    //         this.sect3 = 'navColor';
    //         this.sect5 = 'navColor';


    //         this.sect4 = 'navColor active';
    //     }
    //     else if (currentId == 'section5') {
    //         this.sect5 = 'navColor active';

    //         this.sect1 = 'navColor';
    //         this.sect2 = 'navColor';
    //         this.sect3 = 'navColor';
    //         this.sect4 = 'navColor';
    //     }
    // }
    // renderedCallback() {
    //    // console.log('All section = ', this.sections);


    //     // let sec = JSON.parse(JSON.stringify(this.sections));
    //     //console.log('Sction after stringify = ',JSON.stringify(this.sections));
    //     // console.log('Sction after parse = ',JSON.parse(this.sections));

    //   //  console.log('section before eventlistner is = ',this.template.querySelector("section").scrollIntoView());
    //    // let sect = this.sections;
    //     window.addEventListener('scroll', () => {
    //         let current = '';
    //         // let sec = this.template.querySelectorAll("[data-id='section2']");
    //         console.log('sections is = ', this.sections);
    //         // console.log('Sction after stringify = ',JSON.stringify(this.sections));
    //         // console.log('Sction after parse = ',JSON.parse(this.sections));

    //         this.sections.forEach(ele => {
    //             console.log('ele target = ', ele);
    //             const sectionTo = ele.offsetTop;
    //             console.log('Sction top is = ', sectionTo);
    //         });
    //     })


    //     // try {
    //     //     window.onscroll = () => {
    //     //         let stickysection = this.template.querySelector('.myStickyHeader');
    //     //         console.log('stickysection = ',stickysection);
    //     //         let sticky2 = stickysection.offsetTop;

    //     //         if (window.pageYOffset > sticky2) {
    //     //             stickysection.classList.add("slds-is-fixed");
    //     //             this.stickyMargin = 'margin-top:90px';
    //     //             this.contentPadding = 'padding-top:102px'
    //     //         } else {
    //     //             stickysection.classList.remove("slds-is-fixed");
    //     //             this.stickyMargin = '';
    //     //             this.contentPadding = 'padding-top:10px'
    //     //         }
    //     //     }
    //     // } catch (error) {
    //     //     console.log('error =>', error);
    //     // }
    //     // document.getElementById("myDIV").onscroll = function() {myFunction()};
    //     // window.addEventListener('scroll', () => {
    //     //     const scrol = window.scrollY;
    //     //     console.log('scrol');
    //     // })
    //     // this.template.querySelector('[id="sect2"]').addEventListener('scroll',this.myFunction)

    //     // $(window).on("scroll", function() {
    //     //     if($(window).scrollTop() > 800) {
    //     //         $(".header").addClass("active");
    //     //     } else {
    //     //         //remove the background property so it comes transparent again (defined in your css)
    //     //        $(".header").removeClass("active");
    //     //     }
    //     // });
    //     // window.scrollTo(0, this.findPosition(document.getElementById("sect3")));
    // }

    // findPosition(event) {
    //     window.addEventListener('scroll', event => console.log(`scrolled to ${event.target.scrollTop}`));
    //     console.log('inside findposition', );
    //     console.log(' finposition is = ',event.target.value);
    // }
}