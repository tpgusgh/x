function mappick(params){
    const RT = document.querySelector('div[name="RT"]');
            const heart = document.querySelector('div[name="heart"]');
            const timeline = document.querySelector('div[name="timeline"]');
            const subscribe = document.querySelector('div[name="subscribe"]');
            const day = document.querySelector('div[name="day"]');
            const yook = document.querySelector('div[name="yook"]');
            const suhee = document.querySelector('div[name="suhee"]');
            const HL = document.querySelector('div[name="HL"]');
            const BL = document.querySelector('div[name="BL"]');
            const GL = document.querySelector('div[name="GL"]');
            const NCP = document.querySelector('div[name="NCP"]');
            const dream = document.querySelector('div[name="dream"]');
            const write = document.querySelector('div[name="write"]');
            const picture = document.querySelector('div[name="picture"]');
            const sul = document.querySelector('div[name="sul"]');
            const sall = document.querySelector('div[name="sall"]');
            const cosplay = document.querySelector('div[name="cosplay"]');
            const mp4 = document.querySelector('div[name="mp4"]');
            const MMD = document.querySelector('div[name="MMD"]');
            const goodz = document.querySelector('div[name="goodz"]');
            const have = document.querySelector('div[name="have"]');
            const have2 = document.querySelector('div[name="have2"]');
            const sad = document.querySelector('div[name="sad"]');
            const sad2 = document.querySelector('div[name="sad2"]');
            const sad3 = document.querySelector('div[name="sad3"]');
            const age = document.querySelector('div[name="age"]');
            const age2 = document.querySelector('div[name="age2"]');
            const age3 = document.querySelector('div[name="age3"]');
            const sex = document.querySelector('div[name="sex"]');
            const sex2 = document.querySelector('div[name="sex2"]');
            const sex3 = document.querySelector('div[name="sex3"]');
            const sever = document.querySelector('div[name="sever"]');
            const sever2 = document.querySelector('div[name="sever2"]');
            const sever3 = document.querySelector('div[name="sever3"]');
            const sever4 = document.querySelector('div[name="sever4"]');
            const Mobile = document.querySelector('div[name="Mobile"]');
            const PCC = document.querySelector('div[name="PCC"]');
            const Playstation = document.querySelector('div[name="Playstation"]');
            const screenshot = document.querySelector('div[name="screenshot"]');
            const everyone = document.querySelector('div[name="everyone"]');
            const nasaun = document.querySelector('div[name="nasaun"]');
            const world = document.querySelector('div[name="world"]');
            const levelup = document.querySelector('div[name="levelup"]');
            const sevenking = document.querySelector('div[name="sevenking"]');
            const img = document.createElement("img");
if(params["fontes"] === "Pretendard"){
    if(params["map"] === "mond"){
    if(params["character"] === "캐릭터1"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/dierook.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 

        inputDiv.style.color = "#FF3131";
        canDiv.style.color = "#FF3131";
        doDiv.style.color = "#FF3131";
        ceDiv.style.color = "#FF3131";
        deDiv.style.color = "#FF3131";
        cdeDiv.style.color = "#FF3131";
        outputDiv.style.color = "#FF3131";

        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    } 
    else if(params["character"] === "캐릭터2"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/nol.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 


        inputDiv.style.color = "#D2C100";
        canDiv.style.color = "#D2C100";
        doDiv.style.color = "#D2C100";
        ceDiv.style.color = "#D2C100";
        deDiv.style.color = "#D2C100";
        cdeDiv.style.color = "#D2C100";
        outputDiv.style.color = "#D2C100";



        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    } 
    else if(params["character"] === "캐릭터3"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/risa.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 

        
        inputDiv.style.color = "#B04AFF";
        canDiv.style.color = "#B04AFF";
        doDiv.style.color = "#B04AFF";
        ceDiv.style.color = "#B04AFF";
        deDiv.style.color = "#B04AFF";
        cdeDiv.style.color = "#B04AFF";
        outputDiv.style.color = "#B04AFF";


        

        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    } 
    else if(params["character"] === "캐릭터4"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/roza.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 


        inputDiv.style.color = "#009BCB";
        canDiv.style.color = "#009BCB";
        doDiv.style.color = "#009BCB";
        ceDiv.style.color = "#009BCB";
        deDiv.style.color = "#009BCB";
        cdeDiv.style.color = "#009BCB";
        outputDiv.style.color = "#009BCB";


        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    } 
    else if(params["character"] === "캐릭터5"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/raie.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 


        inputDiv.style.color = "#CB8BFF";
        canDiv.style.color = "#CB8BFF";
        doDiv.style.color = "#CB8BFF";
        ceDiv.style.color = "#CB8BFF";
        deDiv.style.color = "#CB8BFF";
        cdeDiv.style.color = "#CB8BFF";
        outputDiv.style.color = "#CB8BFF";



        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    } 
    else if(params["character"] === "캐릭터6"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/diona.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 



        inputDiv.style.color = "#00DDFF";
        canDiv.style.color = "#00DDFF";
        doDiv.style.color = "#00DDFF";
        ceDiv.style.color = "#00DDFF";
        deDiv.style.color = "#00DDFF";
        cdeDiv.style.color = "#00DDFF";
        outputDiv.style.color = "#00DDFF";

        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    } 
    else if(params["character"] === "캐릭터7"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/mona.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 



        inputDiv.style.color = "#00076B";
        canDiv.style.color = "#00076B";
        doDiv.style.color = "#00076B";
        ceDiv.style.color = "#00076B";
        deDiv.style.color = "#00076B";
        cdeDiv.style.color = "#00076B";
        outputDiv.style.color = "#00076B";


        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    } 
    else if(params["character"] === "캐릭터8"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/blala.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 


        inputDiv.style.color = "#87ABFF";
        canDiv.style.color = "#87ABFF";
        doDiv.style.color = "#87ABFF";
        ceDiv.style.color = "#87ABFF";
        deDiv.style.color = "#87ABFF";
        cdeDiv.style.color = "#87ABFF";
        outputDiv.style.color = "#87ABFF";



        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    }
    else if(params["character"] === "캐릭터9"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/banat.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 


        inputDiv.style.color = "#FF724E";
        canDiv.style.color = "#FF724E";
        doDiv.style.color = "#FF724E";
        ceDiv.style.color = "#FF724E";
        deDiv.style.color = "#FF724E";
        cdeDiv.style.color = "#FF724E";
        outputDiv.style.color = "#FF724E";


        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    }
    else if(params["character"] === "캐릭터10"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/mika.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 


        inputDiv.style.color = "#008099";
        canDiv.style.color = "#008099";
        doDiv.style.color = "#008099";
        ceDiv.style.color = "#008099";
        deDiv.style.color = "#008099";
        cdeDiv.style.color = "#008099";
        outputDiv.style.color = "#008099";


        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    }
    else if(params["character"] === "캐릭터11"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/banty.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 


        inputDiv.style.color = "#2A9976";
        canDiv.style.color = "#2A9976";
        doDiv.style.color = "#2A9976";
        ceDiv.style.color = "#2A9976";
        deDiv.style.color = "#2A9976";
        cdeDiv.style.color = "#2A9976";
        outputDiv.style.color = "#2A9976";



        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    }
    else if(params["character"] === "캐릭터12"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/sal.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 


        inputDiv.style.color = "#35EFCD";
        canDiv.style.color = "#35EFCD";
        doDiv.style.color = "#35EFCD";
        ceDiv.style.color = "#35EFCD";
        deDiv.style.color = "#35EFCD";
        cdeDiv.style.color = "#35EFCD";
        outputDiv.style.color = "#35EFCD";



        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    }
    else if(params["character"] === "캐릭터13"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/lab.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 


        inputDiv.style.color = "#995222";
        canDiv.style.color = "#995222";
        doDiv.style.color = "#995222";
        ceDiv.style.color = "#995222";
        deDiv.style.color = "#995222";
        cdeDiv.style.color = "#995222";
        outputDiv.style.color = "#995222";

        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    }
    else if(params["character"] === "캐릭터14"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/mver.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 

        inputDiv.style.color = "#C26969";
        canDiv.style.color = "#C26969";
        doDiv.style.color = "#C26969";
        ceDiv.style.color = "#C26969";
        deDiv.style.color = "#C26969";
        cdeDiv.style.color = "#C26969";
        outputDiv.style.color = "#C26969";



        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }

    
}
    else if(params["character"] === "캐릭터15"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/ura.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 

        inputDiv.style.color = "#19BDC0";
        canDiv.style.color = "#19BDC0";
        doDiv.style.color = "#19BDC0";
        ceDiv.style.color = "#19BDC0";
        deDiv.style.color = "#19BDC0";
        cdeDiv.style.color = "#19BDC0";
        outputDiv.style.color = "#19BDC0";



        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }

    
}
    else if(params["character"] === "캐릭터16"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/kia.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 

        inputDiv.style.color = "#00FBFF";
        canDiv.style.color = "#00FBFF";
        doDiv.style.color = "#00FBFF";
        ceDiv.style.color = "#00FBFF";
        deDiv.style.color = "#00FBFF";
        cdeDiv.style.color = "#00FBFF";
        outputDiv.style.color = "#00FBFF";



        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }

    
}
    else if(params["character"] === "캐릭터17"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/clea.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 

        inputDiv.style.color = "#E14421";
        canDiv.style.color = "#E14421";
        doDiv.style.color = "#E14421";
        ceDiv.style.color = "#E14421";
        deDiv.style.color = "#E14421";
        cdeDiv.style.color = "#E14421";
        outputDiv.style.color = "#E14421";



        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }

    
}
    else if(params["character"] === "캐릭터18"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/zin.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 

        inputDiv.style.color = "#00EBA8";
        canDiv.style.color = "#00EBA8";
        doDiv.style.color = "#00EBA8";
        ceDiv.style.color = "#00EBA8";
        deDiv.style.color = "#00EBA8";
        cdeDiv.style.color = "#00EBA8";
        outputDiv.style.color = "#00EBA8";



        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }

    
}
    else if(params["character"] === "캐릭터19"){
        console.log("이걸 왜 바여");
        img.src = "./background/mond/Pretendard/piss.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 

        inputDiv.style.color = "#4D00B9";
        canDiv.style.color = "#4D00B9";
        doDiv.style.color = "#4D00B9";
        ceDiv.style.color = "#4D00B9";
        deDiv.style.color = "#4D00B9";
        cdeDiv.style.color = "#4D00B9";
        outputDiv.style.color = "#4D00B9";



        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }

    
}

}
else if(params["map"] === "riool"){
        if(params["character"] === "캐릭터18"){
        console.log("이걸 왜 바여");
        img.src = "./background/riool/Pretendard/hutao.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 

        inputDiv.style.color = "#C70000";
        canDiv.style.color = "#C70000";
        doDiv.style.color = "#C70000";
        ceDiv.style.color = "#C70000";
        deDiv.style.color = "#C70000";
        cdeDiv.style.color = "#C70000";
        outputDiv.style.color = "#C70000";



        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }

    
}
}
    else if(params["map"] === "sumeru"){
        if(params["character"] === "캐릭터5"){     
        console.log("이걸 왜 바여");
        img.src = "./background/sumeru/Pretendard/bang.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 


        inputDiv.style.color = "#4EDDFD";
        canDiv.style.color = "#4EDDFD";
        doDiv.style.color = "#4EDDFD";
        ceDiv.style.color = "#4EDDFD";
        deDiv.style.color = "#4EDDFD";
        cdeDiv.style.color = "#4EDDFD";
        outputDiv.style.color = "#4EDDFD";


        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
}
    }
    else if(params["map"] === "anyting"){
        if(params["character"] === "캐릭터4"){
        console.log("이걸 왜 바여");
        img.src = "./background/anyting/Pretendard/paymon.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 

        inputDiv.style.color = "#FF97BB";
        canDiv.style.color = "#FF97BB";
        doDiv.style.color = "#FF97BB";
        ceDiv.style.color = "#FF97BB";
        deDiv.style.color = "#FF97BB";
        cdeDiv.style.color = "#FF97BB";
        outputDiv.style.color = "#FF97BB";


        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    } 
    }
    else if(params["map"] === "phontain"){
        if(params["character"] === "캐릭터3"){
        console.log("이걸 왜 바여");
        img.src = "./background/phontain/Pretendard/rio.png";  
        img.style.width = "1000px";  // 이미지 크기 지정
        img.style.height = "auto";  // 비율 유지
        document.getElementById("imageContainer").appendChild(img);
        var outputDiv = document.getElementById('inputText');
        outputDiv.innerHTML = params["inputText"];
        outputDiv.style.fontFamily = "Pretendard-ExtraBold"; // 원하는 폰트로 설정
        outputDiv.style.fontSize = "medium"; //글자 크기임
        var inputDiv = document.getElementById("anyone");
        inputDiv.innerHTML = params["anyone"];
        inputDiv.style.fontFamily = "Pretendard-ExtraBold";
        inputDiv.style.fontSize = "medium"; 
        var canDiv = document.getElementById("me");
        canDiv.innerHTML = params["me"];
        canDiv.style.fontFamily = "Pretendard-ExtraBold";
        canDiv.style.fontSize = "medium"; 

        var doDiv = document.getElementById("level");
        doDiv.innerHTML = params["level"];
        doDiv.style.fontFamily = "Pretendard-ExtraBold";
        doDiv.style.fontSize = "medium"; 

        var ceDiv = document.getElementById("gameid");
        ceDiv.innerHTML = params["gameid"];
        ceDiv.style.fontFamily = "Pretendard-ExtraBold";
        ceDiv.style.fontSize = "small"; 

        var deDiv = document.getElementById("say");
        deDiv.innerHTML = params["say"];
        deDiv.style.fontFamily = "Pretendard-ExtraBold";
        deDiv.style.fontSize = "medium"; 

        var cdeDiv = document.getElementById("anyyy");
        cdeDiv.innerHTML = params["anyyy"];
        cdeDiv.style.fontFamily = "Pretendard-ExtraBold";
        cdeDiv.style.fontSize = "medium"; 
    
        inputDiv.style.color = "#22DAFF";
        canDiv.style.color = "#22DAFF";
        doDiv.style.color = "#22DAFF";
        ceDiv.style.color = "#22DAFF";
        deDiv.style.color = "#22DAFF";
        cdeDiv.style.color = "#22DAFF";
        outputDiv.style.color = "#22DAFF";

        if(params["RT"] === "1"){
            RT.style.display = "block"
        }
        if(params["heart"] === "1"){
            heart.style.display = "block"
        }
        if(params["timeline"] === "1"){
            timeline.style.display = "block"
        }
        if(params["subscribe"] === "1"){
            subscribe.style.display = "block"
        }
        if(params["day"] === "1"){
            day.style.display = "block"
        }
        if(params["yook"] === "1"){
            yook.style.display = "block"
        }
        if(params["suhee"] === "1"){
            suhee.style.display = "block"
        }
        if(params["HL"] === "1"){
            HL.style.display = "block"
        }
        if(params["BL"] === "1"){
            BL.style.display = "block"
        }
        if(params["GL"] === "1"){
            GL.style.display = "block"
        }
        if(params["NCP"] === "1"){
            NCP.style.display = "block"
        }
        if(params["dream"] === "1"){
            dream.style.display = "block"
        }
        if(params["write"] === "1"){
            write.style.display = "block"
        }
        if(params["picture"] === "1"){
            picture.style.display = "block"
        }
        if(params["sul"] === "1"){
            sul.style.display = "block"
        }
        if(params["sall"] === "1"){
            sall.style.display = "block"
        }
        if(params["cosplay"] === "1"){
            cosplay.style.display = "block"
        }
        if(params["mp4"] === "1"){
            mp4.style.display = "block"
        }
        if(params["MMD"] === "1"){
            MMD.style.display = "block"
        }
        if(params["goodz"] === "1"){
            goodz.style.display = "block"
        }
        if(params["have"] === "yes"){
            have.style.display = "block"
        }
        if(params["have"] === "no"){
            have2.style.display = "block"
        }
        if(params["sad"] === "bye"){
            sad.style.display = "block"
        }
        if(params["sad"] === "bob"){
            sad2.style.display = "block"
        }
        if(params["sad"] === "blak"){
            sad3.style.display = "block"
        }
        if(params["age"] === "20up"){
            age.style.display = "block"
        }
        if(params["age"] === "20down"){
            age2.style.display = "block"
        }
        if(params["age"] === "nothink"){
            age3.style.display = "block"
        }
        if(params["sex"] === "male"){
            sex.style.display = "block"
        }
        if(params["sex"] === "female"){
            sex2.style.display = "block"
        }
        if(params["sex"] === "nothanks"){
            sex3.style.display = "block"
        }
        if(params["sever"] === "Asia"){
            sever.style.display = "block"
        }
        if(params["sever"] === "Americ"){
            sever2.style.display = "block"
        }
        if(params["sever"] === "Europe"){
            sever3.style.display = "block"
        }
        if(params["sever"] === "TW/HK/MO"){
            sever4.style.display = "block"
        }
        if(params["Mobile"] === "1"){
            Mobile.style.display = "block"
        }
        if(params["PCC"] === "1"){
            PCC.style.display = "block"
        }
        if(params["Playstation"] === "1"){
            Playstation.style.display = "block"
        }
        if(params["screenshot"] === "1"){
            screenshot.style.display = "block"
        }
        if(params["everyone"] === "1"){
            everyone.style.display = "block"
        }
        if(params["nasaun"] === "1"){
            nasaun.style.display = "block"
        }
        if(params["world"] === "1"){
            world.style.display = "block"
        }
        if(params["levelup"] === "1"){
            levelup.style.display = "block"
        }
        if(params["sevenking"] === "1"){
            sevenking.style.display = "block"
        }
    } 
    }


};
}
