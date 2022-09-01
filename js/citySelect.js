function categoryChange(area) {
  const $city = document.getElementById("city");

  const seoul = [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ];
  const incheon = [
    "계양구",
    "남구",
    "남동구",
    "동구",
    "부평구",
    "서구",
    "연수구",
    "중구",
    "강화군",
    "옹진군",
  ];
  const daejeon = ["대덕구", "동구", "서구", "유성구", "중구"];
  const gwangju = ["광산구", "남구", "동구", "북구", "서구"];
  const daegu = [
    "남구",
    "달서구",
    "동구",
    "북구",
    "서구",
    "수성구",
    "중구",
    "달성군",
  ];
  const ulsan = ["남구", "동구", "북구", "중구", "울주군"];
  const busan = [
    "강서구",
    "금정구",
    "남구",
    "동구",
    "동래구",
    "부산진구",
    "북구",
    "사상구",
    "사하구",
    "서구",
    "수영구",
    "연제구",
    "영도구",
    "중구",
    "해운대구",
    "기장군",
  ];
  const gyeonggi = [
    "고양시",
    "과천시",
    "광명시",
    "광주시",
    "구리시",
    "군포시",
    "김포시",
    "남양주시",
    "동두천시",
    "부천시",
    "성남시",
    "수원시",
    "시흥시",
    "안산시",
    "안성시",
    "안양시",
    "양주시",
    "오산시",
    "용인시",
    "의왕시",
    "의정부시",
    "이천시",
    "파주시",
    "평택시",
    "포천시",
    "하남시",
    "화성시",
    "가평군",
    "양평군",
    "여주군",
    "연천군",
  ];
  const gangwon = [
    "강릉시",
    "동해시",
    "삼척시",
    "속초시",
    "원주시",
    "춘천시",
    "태백시",
    "고성군",
    "양구군",
    "양양군",
    "영월군",
    "인제군",
    "정선군",
    "철원군",
    "평창군",
    "홍천군",
    "화천군",
    "횡성군",
  ];
  const chungbuk = [
    "제천시",
    "청주시",
    "충주시",
    "괴산군",
    "단양군",
    "보은군",
    "영동군",
    "옥천군",
    "음성군",
    "증평군",
    "진천군",
    "청원군",
  ];
  const chungnam = [
    "계룡시",
    "공주시",
    "논산시",
    "보령시",
    "서산시",
    "아산시",
    "천안시",
    "금산군",
    "당진군",
    "부여군",
    "서천군",
    "연기군",
    "예산군",
    "청양군",
    "태안군",
    "홍성군",
  ];
  const jeonbuk = [
    "군산시",
    "김제시",
    "남원시",
    "익산시",
    "전주시",
    "정읍시",
    "고창군",
    "무주군",
    "부안군",
    "순창군",
    "완주군",
    "임실군",
    "장수군",
    "진안군",
  ];
  const jeonnam = [
    "광양시",
    "나주시",
    "목포시",
    "순천시",
    "여수시",
    "강진군",
    "고흥군",
    "곡성군",
    "구례군",
    "담양군",
    "무안군",
    "보성군",
    "신안군",
    "영광군",
    "영암군",
    "완도군",
    "장성군",
    "장흥군",
    "진도군",
    "함평군",
    "해남군",
    "화순군",
  ];
  const gyeongsangbuk = [
    "경산시",
    "경주시",
    "구미시",
    "김천시",
    "문경시",
    "상주시",
    "안동시",
    "영주시",
    "영천시",
    "포항시",
    "고령군",
    "군위군",
    "봉화군",
    "성주군",
    "영덕군",
    "영양군",
    "예천군",
    "울릉군",
    "울진군",
    "의성군",
    "청도군",
    "청송군",
    "칠곡군",
  ];
  const gyeongsangnam = [
    "거제시",
    "김해시",
    "마산시",
    "밀양시",
    "사천시",
    "양산시",
    "진주시",
    "진해시",
    "창원시",
    "통영시",
    "거창군",
    "고성군",
    "남해군",
    "산청군",
    "의령군",
    "창녕군",
    "하동군",
    "함안군",
    "함양군",
    "합천군",
  ];
  const jeju = ["서귀포시", "제주시", "남제주군", "북제주군"];

  let add;

  // 만약 categoryChange의 값이 area??라면 add에 지역[] 저장
  if (area.value == "area01") {
    add = seoul;
  } else if (area.value == "area02") {
    add = incheon;
  } else if (area.value == "area03") {
    add = daejeon;
  } else if (area.value == "area04") {
    add = gwangju;
  } else if (area.value == "area05") {
    add = daegu;
  } else if (area.value == "area06") {
    add = ulsan;
  } else if (area.value == "area07") {
    add = busan;
  } else if (area.value == "area08") {
    add = gyeonggi;
  } else if (area.value == "area09") {
    add = gangwon;
  } else if (area.value == "area10") {
    add = chungbuk;
  } else if (area.value == "area11") {
    add = chungnam;
  } else if (area.value == "area12") {
    add = jeonbuk;
  } else if (area.value == "area13") {
    add = jeonnam;
  } else if (area.value == "area14") {
    add = chungbuk;
  } else if (area.value == "area15") {
    add = chungnam;
  } else if (area.value == "area16") {
    add = jeju;
  }

  $city.options.length = 1;
  // 군/구 갯수 어차피 city의 option 1개라서 없어도 상관없음

  for (const areas in add) {
    // 반복문이 돌기 전에는 값이 할당되지 않은 undefined 상태이기 때문에 const 사용해도 오류가 발생하지 않는다.
    // add에 저장한 지역[]을 areas에 반복해서 저장
    const $cityOption = document.createElement("option"); // HTML에 option Element 생성하는 값 저장
    $cityOption.value = add[areas]; // add[areas]를 사용하면 value 값을 반환한다. 반환 값 새로 생성한 option Element value에 저장
    // ex)add = ["강동구", "강서구", "강남구", "강북구"] => add중에서 areas에 저장한 값들을 차례대로 반환
    // => 강동구[areas], 강서구[areas], 강남구[areas], 강북구[areas] 반환 ex) <option value="강동구"></option>
    $cityOption.innerHTML = add[areas]; // 반환 값 새로 생성한 option Element innerHTML에 저장 / ex) <option value="강릉시">강릉시</option>
    $city.appendChild($cityOption); // HTML에서 #city(부모 노드)의 자식 노드 리스트 중 마지막 자식으로 저장한 값($cityOption)들을 붙임
  }
}