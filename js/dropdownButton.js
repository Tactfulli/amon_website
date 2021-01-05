
function displayMessage(step) {
    if(step === 1){
        var x = document.getElementById("consult-div");
        if (x.innerHTML === "") {
            x.innerHTML = "<p style='font-size:1.5rem; width:100%;height:25%'>In this 30-minute assessment call,"+
            " we will hand-in-hand undercover the <br> business challenges you are facing and see if our services can be of help.<br>"+
            "When we do, you will undergo a quick onboarding session.<br> We will then schedule a Strategy Call where we formulate your game plan.</p>";
        } else {
            x.innerHTML = "";
        }
    }else if(step === 2){
        var x = document.getElementById("strategy-div");
        if (x.innerHTML === "") {
            x.innerHTML = "<p style='font-size:1.5rem; '>During the Strategy Call, we will build a campaign strategy "+
            " together <br> by establishing clear goals and objectives.</p>";
        } else {
            x.innerHTML = "";
        }
    }else if(step === 3){
        var x = document.getElementById("campaign-div");
        if (x.innerHTML === "") {
            x.innerHTML = "<p style='font-size:1.5rem; '>After developing a creative strategy, we will then draft ad copies and creatives. "+
            "<br> Your strategy might need third-party services such as video or photoshoots. <br> Upon approval of all assets, relevant and targeted campaigns will be started.</p>";
        } else {
            x.innerHTML = "";
        }
    }else if(step === 4){
        var x = document.getElementById("launch-div");
        if (x.innerHTML === "") {
            x.innerHTML = "<p style='font-size:1.5rem; '>Here, we organize a clear testing schedule based on what is most urgent in your campaign.  <br> We modify the ads depending on performance.</p>"
        } else {
            x.innerHTML = "";
        }
    }
        
    
}





