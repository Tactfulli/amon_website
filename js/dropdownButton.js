
function displayMessage(step) {
    if(step === 1){
        var x = document.getElementById("consult-div");
        if (x.innerHTML === "") {
            x.innerHTML = "<p style='font-size:1.5rem; width:100%;height:25%'>In this 30-minute assessment call,"+
            " we will together undercover the <br> business challenges you are facing and see if our services can be of help.</p>";
        } else {
            x.innerHTML = "";
        }
    }else if(step === 2){
        var x = document.getElementById("creative-div");
        if (x.innerHTML === "") {
            x.innerHTML = "<p style='font-size:1.5rem; '>Within 24 hours of signing the contract, "+
            "you will undergo a quick onboarding session.<br> We will then schedule a Strategy Call where we formulate your game plan. </p>";
        } else {
            x.innerHTML = "";
        }
    }else if(step === 3){
        var x = document.getElementById("strategy-div");
        if (x.innerHTML === "") {
            x.innerHTML = "<p style='font-size:1.5rem; '>During the Strategy Call, we will build a campaign strategy "+
            " hand-in-hand <br> by establishing clear goals and objectives.</p>";
        } else {
            x.innerHTML = "";
        }
    }else if(step === 4){
        var x = document.getElementById("campaign-div");
        if (x.innerHTML === "") {
            x.innerHTML = "<p style='font-size:1.5rem; '>After developing a creative strategy, we will then draft ad copies and creatives. "+
            "<br> Your strategy might need third-party services to gather assets such as video or photoshoots.</p>";
        } else {
            x.innerHTML = "";
        }
    }else if(step === 5){
        var x = document.getElementById("launch-div");
        if (x.innerHTML === "") {
            x.innerHTML = "<p style='font-size:1.5rem; '>Upon approval of all assets, relevant and targeted campaigns will be started. <br> Here, we establish a clear testing schedule based on what is most urgent in your campaign.</p>"
            
        } else {
            x.innerHTML = "";
        }
    }else if(step === 6){
        var x = document.getElementById("optimize-div");
        if (x.innerHTML === "") {
            x.innerHTML = "<p style='font-size:1.5rem; '>As we learn what’s working and what’s not working, "+
            "we optimize and iterate new ads accordingly.</p>";
        } else {
            x.innerHTML = "";
        }
    }
}





