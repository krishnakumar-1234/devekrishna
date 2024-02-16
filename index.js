const rightbarContainer = document.querySelector(".rightbarContainer")
const rightbar = document.querySelector('#rightbar');
const ScreenBuler = document.getElementById("ScreenBuler");
rightbar.addEventListener('click', () => {
    rightbarContainer.style.display = "block";
    ScreenBuler.style.display = "block";
})
ScreenBuler.addEventListener('click', () => {
    rightbarContainer.style.display = "none";
    ScreenBuler.style.display = "none";
})

const ButtonForCummunity = document.querySelectorAll('.ButtonForCummunity')
const CommunityContetn = document.querySelectorAll('.CommunityContetn');

// This is animation showingvalue for community 
function animation()  {
    const valuShowingForSimpleBar = document.getElementById('valuShowingForSimpleBar');
    valuShowingForSimpleBar.style.animation = "animationForCommunity 1.25s calc(1) ease-in-out alternate"
}

// This is when user Will Came on Website Than This Things all will show on The Web Page Of Communiyt
CommunityContetn[0].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr> Fullter Nagpur </p>`;
CommunityContetn[1].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr> Frontend Day Nagpur </p>`;
CommunityContetn[2].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr> Code Day Nagpur </p>`;
CommunityContetn[3].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr> CDSC WOW </p>`;
CommunityContetn[4].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr>  Think-In BITS </p>`;
ButtonForCummunity[0].style.backgroundColor = "#05A081";
ButtonForCummunity[0].style.color = "white";

function WhatIaTopicOne () {
    // This is heading changer From javaScript.
    const WhatisTopic = document.getElementById('WhatisTopic');
    WhatisTopic.innerHTML = ButtonForCummunity[0].textContent;

    // This is Content Changer From javaScript.
    CommunityContetn[0].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr>JS FullForm is JavaScript.</p>`;
    CommunityContetn[1].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr>js is a programing language we use it to give instraction to the computer.</p>`;
    CommunityContetn[2].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr>JavaScript provides eight different data types .</p>`;
    CommunityContetn[3].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr>At the very high level, there are two types of data types in javascript</p>`;
    CommunityContetn[4].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr> 1. Primitive data types:  2. Reference data types:</p>`;

    // This is button Changer Which button Was Clicked.
    ButtonForCummunity[1].style.backgroundColor = "";
    ButtonForCummunity[1].style.color = "";
    ButtonForCummunity[2].style.backgroundColor = "";
    ButtonForCummunity[2].style.color = "";


}WhatIaTopicOne()
function WhatIaTopicTwo () {
    // This is heading changer From javaScript.
    const WhatisTopic = document.getElementById('WhatisTopic');
    WhatisTopic.innerHTML = ButtonForCummunity[1].textContent;

     // This is Content Changer From javaScript.
    CommunityContetn[0].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr> CSS, often known as cascading style sheets. </p>`;
    CommunityContetn[1].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr> The three types of CSS are external, internal, and inline.</p>`;
    CommunityContetn[2].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr> External CSS is a file that HTML files will link to document</p>`;
    CommunityContetn[3].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr>nternal CSS is specified at the beginning of an HTML document.</p>`;
    CommunityContetn[4].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr>Inline CSS is written for a specific element in the HTML document.</p>`;
    
    // This is button Changer Which button Was Clicked.
    ButtonForCummunity[0].style.backgroundColor = "";
    ButtonForCummunity[0].style.color = "";
    ButtonForCummunity[1].style.backgroundColor = "#05A081";
    ButtonForCummunity[1].style.color = "white";
    ButtonForCummunity[2].style.backgroundColor = "";
    ButtonForCummunity[2].style.color = "";

}
function WhatIaTopicThree () {
    // This is heading changer From javaScript. 
    const WhatisTopic = document.getElementById('WhatisTopic');
    WhatisTopic.innerHTML = ButtonForCummunity[2].textContent;

    // This is Content Changer From javaScript.
    CommunityContetn[0].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr>HTML FullForm is Hyper Text Markup Language.</p>`;
    CommunityContetn[1].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr>HTML is the code taht used to structure of web page its content.</p>`;
    CommunityContetn[2].innerHTML = `<p class="CommunityContetn"><abbr>▷</abbr>The compnents used to design the structure of web are called HTML tag.</p>`;
    CommunityContetn[3].innerHTML = `<p class="CommunityContetn"><abbr></abbr></p>`;
    CommunityContetn[4].innerHTML = `<p class="CommunityContetn"><abbr></abbr></p>`;

    // This is button Changer Which button Was Clicked.
    ButtonForCummunity[0].style.backgroundColor = "";
    ButtonForCummunity[0].style.color = "";
    ButtonForCummunity[1].style.backgroundColor = "";
    ButtonForCummunity[1].style.color = "";
    ButtonForCummunity[2].style.backgroundColor = "#05A081";
    ButtonForCummunity[2].style.color = "white";
}

ButtonForCummunity[0].addEventListener('click', () => {
    ButtonForCummunity[0].style.backgroundColor = "#05A081";
    ButtonForCummunity[0].style.color = "white";
    animation()
    WhatIaTopicOne()



})
ButtonForCummunity[1].addEventListener('click', () => {
    animation()
    WhatIaTopicTwo();
    
})
ButtonForCummunity[2].addEventListener('click', () => {
    animation()
    WhatIaTopicThree();

    
})


// This projects for programing from javascript properties
const VeiwCode = document.querySelectorAll('#VeiwCode');
const VeiwProjects = document.querySelectorAll('#VeiwProject');
const codeOrProjectsShowing = document.getElementById('codeOrProjectsShowing');
const storeTheCodeForProjectsContainer = document.querySelector('.storeTheCodeForProjectsContainer');
const closeTab = document.getElementById('closeTab');
const CloseSecond = document.getElementById('CloseSecond');
const ProjecstName = document.getElementById('ProjecstName');


VeiwProjects.forEach(VeiwProjects => {
    VeiwProjects.addEventListener('click',  () => {
        console.log("This is working")
        storeTheCodeForProjectsContainer.style.display = "flex";
    })
});


closeTab.addEventListener('click', () => {
    storeTheCodeForProjectsContainer.style.display = 'none'
})
CloseSecond.addEventListener('click', () => {
    storeTheCodeForProjectsContainer.style.display = 'none'
})


const IframeForProjects = document.getElementById('IframeForProjects');

VeiwProjects[0].addEventListener('click',  () => {
    ProjecstName.innerHTML = "This is Build a Survey Form";
   IframeForProjects.src = "index 2.html";
})
VeiwProjects[1].addEventListener('click',  () => {
    ProjecstName.innerHTML = "This is Build a Tribute Page";

    IframeForProjects.src = "Magazine.html";
 })

 VeiwProjects[2].addEventListener('click',  () => {
    ProjecstName.innerHTML = "This is Build a Technical Documentation Page";

    IframeForProjects.src = "Dr. Norman Borlaug.html";
 })

 VeiwProjects[3].addEventListener('click',  () => {
    IframeForProjects.src = "productlanding.html";
    ProjecstName.innerHTML = "This Build a Product Landing Page";

 })
 VeiwProjects[4].addEventListener('click',  () => {
    ProjecstName.innerHTML = "This is Build a Personal Portfolio Webpage";

    IframeForProjects.src = "landing.html";
 })

