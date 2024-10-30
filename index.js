function handleMapChange(){
    var gen = document.forms["gen"];
    var characterSelect = gen.character;

    characterSelect.innerHTML = '';

    if(gen.map.value === "mond"){
        characterSelect.innerHTML = `
            <option value="캐릭터2">노엘</option>
            <option value="캐릭터1">다이루크</option>
            <option value="캐릭터6">디오나</option>
            <option value="캐릭터4">로자리아</option>
            <option value="캐릭터3">리사</option>
            <option value="캐릭터7">모나</option>
            <option value="캐릭터10">미카</option>
            <option value="캐릭터8">바바라</option>
            <option value="캐릭터9">베넷</option>
            <option value="캐릭터11">벤티</option>
            <option value="캐릭터12">설탕</option>
            <option value="캐릭터13">알베도</option>
            <option value="캐릭터14">엠버</option>
            <option value="캐릭터15">유라</option>
            <option value="캐릭터16">케이아</option>
            <option value="캐릭터17">클레</option>
            <option value="캐릭터18">진</option>
            <option value="캐릭터19">피슬</option>
            <option value="캐릭터5">레이저</option>
            
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
            <option value="캐릭터14">중운</option>
            <option value="캐릭터15">치치</option>
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
        `;
    }
    else if(gen.map.value === "sena"){
        characterSelect.innerHTML = `
            <option value="1">도토레</option>
            <option value="2">산드로네</option>
            <option value="3">시뇨라</option>
            <option value="4">아를레키노</option>
            <option value="5">카피타노</option>
            <option value="6">콜롬비나</option>
            <option value="7">타르탈리아</option>
            <option value="8">판탈로네</option>
            <option value="9">풀치넬라</option>
            <option value="10">피에로</option>
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
      textBox.value= '';
    }
  }



  function changeFont() {
    const selectedFont = document.gen.fontes.value; // 선택한 폰트 값을 가져옴
    const textInput = document.getElementById('fonter'); // 텍스트 박스 요소를 가져옴

    // 선택한 폰트에 따라 텍스트 박스의 폰트 패밀리 변경
    if (selectedFont === "ONE POP") {
      textInput.style.fontFamily = "'ONE Mobile POP'";  // 정확한 폰트 이름 사용
    } 
    else if (selectedFont === "Pretendard") {
      textInput.style.fontFamily = "'Pretendard-ExtraBold'";  // 정확한 폰트 이름 사용
    }
    else if(selectedFont === "textbase"){
        textInput.style.fontFamily = "''";
    }
  }
  function sendDataBefore(){
    let checkbox = document.getElementById("RT");
    if(checkbox.checked){
        checkbox.value=1
    }
    else{
        checkbox.value=0
    }
    
    let checkboxs = document.getElementById("heart");
    if(checkboxs.checked){
        checkboxs.value=1
    }
    else{
        checkboxs.value=0
    }
    
    let timeline = document.getElementById("timeline");
    if(timeline.checked){
        timeline.value=1
    }
    else{
        timeline.value=0
    }

    let subscribe = document.getElementById("subscribe");
    if(subscribe.checked){
        subscribe.value=1
    }
    else{
        subscribe.value=0
    }


    let day = document.getElementById("day");
    if(day.checked){
        day.value=1
    }
    else{
        day.value=0
    }

    let yook = document.getElementById("yook");
    if(yook.checked){
        yook.value=1
    }
    else{
        yook.value=0
    }

    let suhee = document.getElementById("suhee");
    if(suhee.checked){
        suhee.value=1
    }
    else{
        suhee.value=0
    }

    let HL = document.getElementById("HL");
    if(HL.checked){
        HL.value=1
    }
    else{
        HL.value=0
    }

    let BL = document.getElementById("BL");
    if(BL.checked){
        BL.value=1
    }
    else{
        BL.value=0
    }

    let GL = document.getElementById("GL");
    if(GL.checked){
        GL.value=1
    }
    else{
        GL.value=0
    }


    let NCP = document.getElementById("NCP");
    if(NCP.checked){
        NCP.value=1
    }
    else{
        NCP.value=0
    }

    let dream = document.getElementById("dream");
    if(dream.checked){
        dream.value=1
    }
    else{
        dream.value=0
    }

    let write = document.getElementById("write");
    if(write.checked){
        write.value=1
    }
    else{
        write.value=0
    }
    let picture = document.getElementById("picture");
    if(picture.checked){
        picture.value=1
    }
    else{
        picture.value=0
    }
    let sul = document.getElementById("sul");
    if(sul.checked){
        sul.value=1
    }
    else{
        sul.value=0
    }
    let sall = document.getElementById("sall");
    if(sall.checked){
        sall.value=1
    }
    else{
        sall.value=0
    }

    let cosplay = document.getElementById("cosplay");
    if(cosplay.checked){
        cosplay.value=1
    }
    else{
        cosplay.value=0
    }


    let mp4 = document.getElementById("mp4");
    if(mp4.checked){
        mp4.value=1
    }
    else{
        mp4.value=0
    }

    let MMD = document.getElementById("MMD");
    if(MMD.checked){
        MMD.value=1
    }
    else{
        MMD.value=0
    }

    let goodz = document.getElementById("goodz");
    if(goodz.checked){
        goodz.value=1
    }
    else{
        goodz.value=0
    }
    let have = document.getElementsByName("have");
    let selectedValue;

    for(let i = 0; i < have.length; i++) {
        if (have[i].checked) {
            selectedValue = have[i].value;
            break;
        }
    }

    // 이제 selectedValue에 선택된 'have'의 값이 저장됩니다.
    console.log(selectedValue); // 'yes' 또는 'no'

    let Mobile = document.getElementById("Mobile");
    if(Mobile.checked){
        Mobile.value=1
    }
    else{
        Mobile.value=0
    }
    let PCC = document.getElementById("PCC");
    if(PCC.checked){
        PCC.value=1
    }
    else{
        PCC.value=0
    }
    let Playstation = document.getElementById("Playstation");
    if(Playstation.checked){
        Playstation.value=1
    }
    else{
        Playstation.value=0
    }
    let screenshot = document.getElementById("screenshot");
    if(screenshot.checked){
        screenshot.value=1
    }
    else{
        screenshot.value=0
    }
    let everyone = document.getElementById("everyone");
    if(everyone.checked){
        everyone.value=1
    }
    else{
        everyone.value=0
    }
    let nasaun = document.getElementById("nasaun");
    if(nasaun.checked){
        nasaun.value=1
    }
    else{
        nasaun.value=0
    }


    let world = document.getElementById("world");
    if(world.checked){
        world.value=1
    }
    else{
        world.value=0
    }
    let levelup = document.getElementById("levelup");
    if(levelup.checked){
        levelup.value=1
    }
    else{
        levelup.value=0
    }
    let sevenking = document.getElementById("sevenking");
    if(sevenking.checked){
        sevenking.value=1
    }
    else{
        sevenking.value=0
    }

    let fontaa = document.getElementsByName("fontes")[0]; // select 요소를 가져옴
    let selectedValues = fontaa.options[fontaa.selectedIndex].value;
    
    console.log(selectedValues); // 선택된 option의 값이 출력됨
    sendData()

  
  }
  function sendData() {
    var gen = document.forms["gen"];
    var RT = gen.RT.value;
    var map = gen.map.value;
    var gameid = gen.gameid.value;
    var character = gen.character.value;
    var heart = gen.heart.value;
    var timeline = gen.timeline.value;
    var subscribe = gen.subscribe.value;
    var day = gen.day.value;
    var yook = gen.yook.value;
    var suhee = gen.suhee.value;
    var HL = gen.HL.value;
    var BL = gen.BL.value;
    var GL = gen.GL.value;
    var NCP = gen.NCP.value;
    var dream = gen.dream.value;
    var write = gen.write.value;
    var picture = gen.picture.value;
    var sul = gen.sul.value;
    var sall = gen.sall.value;
    var cosplay = gen.cosplay.value;
    var mp4 = gen.mp4.value;
    var MMD = gen.MMD.value;
    var goodz = gen.goodz.value;
    var anyone = gen.anyone.value;
    var me = gen.me.value;
    var have = gen.have.value;
    var inputText = gen.inputText.value;
    var sad = gen.sad.value;
    var age = gen.age.value;
    var sex = gen.sex.value;
    var level = gen.level.value;
    var sever = gen.sever.value;
    var Mobile = gen.Mobile.value;
    var PCC = gen.PCC.value;
    var Playstation = gen.Playstation.value;
    var screenshot = gen.screenshot.value;
    var everyone = gen.everyone.value;
    var nasaun = gen.nasaun.value;
    var world = gen.world.value;
    var levelup = gen.levelup.value;
    var sevenking = gen.sevenking.value;
    var anyyy = gen.anyyy.value;
    var say = gen.say.value;
    var fontes = gen.fontes.value;




    // 새로운 페이지로 데이터 전송 (GET 방식으로 URL에 포함)
    var url = "output.html?map=" + encodeURIComponent(map) + 
    "&gameid=" + encodeURIComponent(gameid) + 
    "&character=" + encodeURIComponent(character) + 
    "&RT=" + encodeURIComponent(RT) + 
    "&heart=" + encodeURIComponent(heart) + 
    "&timeline=" + encodeURIComponent(timeline) +
    "&subscribe=" + encodeURIComponent(subscribe) +
    "&day=" + encodeURIComponent(day) +
    "&yook=" + encodeURIComponent(yook) + 
    "&suhee=" + encodeURIComponent(suhee) + 
    "&HL=" + encodeURIComponent(HL) + 
    "&BL=" + encodeURIComponent(BL) +
    "&GL=" + encodeURIComponent(GL) +
    "&NCP=" + encodeURIComponent(NCP) +
    "&dream=" + encodeURIComponent(dream) +
    "&write=" + encodeURIComponent(write) +
    "&picture=" + encodeURIComponent(picture) + 
    "&sul=" + encodeURIComponent(sul) + 
    "&sall=" + encodeURIComponent(sall) +
    "&cosplay=" + encodeURIComponent(cosplay) +
    "&mp4=" + encodeURIComponent(mp4) +
    "&MMD=" + encodeURIComponent(MMD) +
    "&goodz=" + encodeURIComponent(goodz) +
    "&anyone=" + encodeURIComponent(anyone) +
    "&me=" + encodeURIComponent(me) +
    "&have=" + encodeURIComponent(have) +
    "&inputText=" + encodeURIComponent(inputText) +
    "&sad=" + encodeURIComponent(sad) +
    "&age=" + encodeURIComponent(age) +
    "&sex=" + encodeURIComponent(sex) +
    "&level=" + encodeURIComponent(level) +
    "&sever=" + encodeURIComponent(sever) +
    "&Mobile=" + encodeURIComponent(Mobile) +
    "&PCC=" + encodeURIComponent(PCC) +
    "&Playstation=" + encodeURIComponent(Playstation) +
    "&screenshot=" + encodeURIComponent(screenshot) +
    "&everyone=" + encodeURIComponent(everyone) +
    "&nasaun=" + encodeURIComponent(nasaun) +
    "&world=" + encodeURIComponent(world) +
    "&levelup=" + encodeURIComponent(levelup) +
    "&sevenking=" + encodeURIComponent(sevenking) +
    "&anyyy=" + encodeURIComponent(anyyy) +
    "&say=" + encodeURIComponent(say) +
    "&fontes=" + encodeURIComponent(fontes);
    window.location.href = url;
}


function myFunction() {
    handleMapChange()
    changeFont()
    
}

function playsound(){
    var audio = new Audio('./sounds/playsound.mp3');
    audio.play().catch(error => {
        console.error('Error playing the audio:', error);
    });
}
