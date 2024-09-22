function handleMapChange(){
    var gen = document.forms["gen"];
    var characterSelect = gen.character;

    characterSelect.innerHTML = '';

    if(gen.map.value === "mond"){
        characterSelect.innerHTML = `
            <option value="캐릭터1">다이루크</option>
            <option value="캐릭터2">노엘</option>
            <option value="캐릭터3">리사</option>
            <option value="캐릭터4">로자리아</option>
            <option value="캐릭터5">레이저</option>
            <option value="캐릭터6">디오나</option>
            <option value="캐릭터7">모나</option>
            <option value="캐릭터8">바바라</option>
            <option value="캐릭터9">베넷</option>
            <option value="캐릭터10">미카</option>
            <option value="캐릭터11">벤티</option>
            <option value="캐릭터12">설탕</option>
            <option value="캐릭터13">알베도</option>
            <option value="캐릭터14">엠버</option>
            <option value="캐릭터15">유라</option>
            <option value="캐릭터16">케이아</option>
            <option value="캐릭터17">클레</option>
            <option value="캐릭터18">진</option>
            <option value="캐릭터19">피슬</option>
            
        `;
    }
    else if(gen.map.value === "riool"){
        characterSelect.innerHTML = `
            <option value="캐릭터1">각청</option>
            <option value="캐릭터2">감우</option>
            <option value="캐릭터3">백출</option>
            <option value="캐릭터4">북두</option>
            <option value="캐릭터5">소</option>
            <option value="캐릭터6">신염</option>
            <option value="캐릭터7">야란</option>
            <option value="캐릭터8">신학</option>
            <option value="캐릭터9">연비</option>
            <option value="캐릭터10">요요</option>
            <option value="캐릭터11">운근</option>
            <option value="캐릭터12">응광</option>
            <option value="캐릭터13">종려</option>
            <option value="캐릭터14">치치</option>
            <option value="캐릭터15">중운</option>
            <option value="캐릭터16">행추</option>
            <option value="캐릭터17">향릉</option>
            <option value="캐릭터18">호두</option> 
        `;
    }
    else if(gen.map.value === "enazma"){
        characterSelect.innerHTML = `
            <option value="캐릭터1">고로</option>
            <option value="캐릭터2">라이덴 쇼군</option>
            <option value="캐릭터3">사유</option>
            <option value="캐릭터4">산고노미야 코코미</option>
            <option value="캐릭터5">시노부</option>
            <option value="캐릭터6">야에미코</option>
            <option value="캐릭터7">요이미야</option>
            <option value="캐릭터8">이토</option>
            <option value="캐릭터9">카미사토 아야카</option>
            <option value="캐릭터10">카미사토 아야토</option>
            <option value="캐릭터11">카에데하라 카즈하</option>
            <option value="캐릭터12">쿠죠 사라</option>
            <option value="캐릭터13">키라라</option>
            <option value="캐릭터14">토마</option>
            <option value="캐릭터15">헤이조</option>
        `;
    }
    else if(gen.map.value === "sumeru"){
        characterSelect.innerHTML = `
            <option value="캐릭터1">나히다</option>
            <option value="캐릭터2">닐루</option>
            <option value="캐릭터3">데히야</option>
            <option value="캐릭터4">도리</option>
            <option value="캐릭터5">방랑자</option>
            <option value="캐릭터6">레일라</option>
            <option value="캐릭터7">사이노</option>
            <option value="캐릭터8">알하이탐</option>
            <option value="캐릭터9">카베</option>
            <option value="캐릭터10">캔디스</option>
            <option value="캐릭터11">콜레이</option>
            <option value="캐릭터12">타이나리</option>
            <option value="캐릭터13">파루잔</option>
        `;
    }
    else if(gen.map.value === "phontain"){
        characterSelect.innerHTML = `
            <option value="캐릭터1">나비아</option>
            <option value="캐릭터2">느비예트</option>
            <option value="캐릭터3">라이오슬리</option>
            <option value="캐릭터4">리넷</option>
            <option value="캐릭터5">리니</option>
            <option value="캐릭터6">샤를로트</option>
            <option value="캐릭터7">슈브르즈</option>
            <option value="캐릭터8">푸리나</option>
            <option value="캐릭터9">프레미네</option>
        `;
    }
    else if(gen.map.value === "anyting"){
        characterSelect.innerHTML = `
            <option value="캐릭터1">데인슬레이프</option>
            <option value="캐릭터2">루미네</option>
            <option value="캐릭터3">아이테르</option>
            <option value="캐릭터4">페이몬</option>
            <option value="캐릭터5">에일로이</option>
            <option value="캐릭터6">도토레</option>
            <option value="캐릭터7">산드로네</option>
            <option value="캐릭터8">시뇨라</option>
            <option value="캐릭터9">아를레키노</option>
            <option value="캐릭터10">카피타노</option>
            <option value="캐릭터11">콜롬비나</option>
            <option value="캐릭터12">타르탈리아</option>
            <option value="캐릭터13">판탈로네</option>
            <option value="캐릭터14">풀치넬라</option>
            <option value="캐릭터15">피에로</option>
        `;
    }
}


function doyouhave() {
    const selectedValue = document.querySelector('input[name="have"]:checked').value;
    
    const textBox = document.getElementById('inputText');
    
    if (selectedValue === 'yes') {
      textBox.readOnly = false;
    } else {
      textBox.readOnly = true;
    }
  }