{
  // 장소 선택
  function categoryChange(area) {
    const state = document.querySelector("#state");
    const city = document.querySelector("#city");

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
      "세종자치시",
      "계룡시",
      "공주시",
      "논산시",
      "보령시",
      "서산시",
      "아산시",
      "천안시",
      "금산군",
      "당진시",
      "부여군",
      "서천군",
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
    const gyeongbuk = [
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
    const gyeongnam = [
      "거제시",
      "김해시",
      "밀양시",
      "사천시",
      "양산시",
      "진주시",
      "창원시 진해구",
      "창원시 마산합포구",
      "창원시 마산회원구",
      "창원시 성산구",
      "창원시 의창구",
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
    if (area.value == "서울특별시") {
      add = seoul;
    } else if (area.value == "인천광역시") {
      add = incheon;
    } else if (area.value == "대전광역시") {
      add = daejeon;
    } else if (area.value == "광주광역시") {
      add = gwangju;
    } else if (area.value == "대구광역시") {
      add = daegu;
    } else if (area.value == "울산광역시") {
      add = ulsan;
    } else if (area.value == "부산광역시") {
      add = busan;
    } else if (area.value == "경기도") {
      add = gyeonggi;
    } else if (area.value == "강원도") {
      add = gangwon;
    } else if (area.value == "충청북도") {
      add = chungbuk;
    } else if (area.value == "충청남도") {
      add = chungnam;
    } else if (area.value == "전라북도") {
      add = jeonbuk;
    } else if (area.value == "전라남도") {
      add = jeonnam;
    } else if (area.value == "경상북도") {
      add = gyeongbuk;
    } else if (area.value == "경상남도") {
      add = gyeongnam;
    } else if (area.value == "제주도") {
      add = jeju;
    }

    city.options.length = 1;
    // 군/구 갯수 어차피 city의 option 1개라서 없어도 상관없음

    for (const areas in add) {
      // 반복문이 돌기 전에는 값이 할당되지 않은 undefined 상태이기 때문에 const 사용해도 오류가 발생하지 않는다.
      // add에 저장한 지역[]을 areas에 반복해서 저장
      const city_option = document.createElement("option"); // HTML에 option Element 생성하는 값 저장
      city_option.value = add[areas]; // add[areas]를 사용하면 value 값을 반환한다. 반환 값 새로 생성한 option Element value에 저장
      // ex)add = ["강동구", "강서구", "강남구", "강북구"] => add중에서 areas에 저장한 값들을 차례대로 반환
      // => 강동구[areas], 강서구[areas], 강남구[areas], 강북구[areas] 반환 ex) <option value="강동구"></option>
      city_option.innerHTML = add[areas]; // 반환 값 새로 생성한 option Element innerHTML에 저장 / ex) <option value="강릉시">강릉시</option>
      city.appendChild(city_option); // HTML에서 #city(부모 노드)의 자식 노드 리스트 중 마지막 자식으로 저장한 값(cityOption)들을 붙임
    }

    city.addEventListener("change", (event) => {
      localStorage.setItem("state", state.value); // state 값 변경 시 값을 localStorage에 저장
      localStorage.setItem("city", event.target.value); // city 값 변경 시 값을 localStorage에 저장
    });
  }
}

// ------------------------------------------------------------------------------

{
  // 좌표 저장
  const savedState = localStorage.getItem("state");
  const savedCity = localStorage.getItem("city");

  // if localStorage에 city와 state 값이 있으면 localStorage에 위도와 경도 저장
  // 서울
  if (savedCity === "강남구") {
    localStorage.setItem("lat", 37.517305);
    localStorage.setItem("lng", 127.047502);
  } else if (savedCity === "강동구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.530126);
    localStorage.setItem("lng", 127.1237708);
  } else if (savedCity === "강북구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.6397819);
    localStorage.setItem("lng", 127.0256135);
  } else if (savedCity === "강서구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.550937);
    localStorage.setItem("lng", 126.849642);
  } else if (savedCity === "관악구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.4781549);
    localStorage.setItem("lng", 126.9514847);
  } else if (savedCity === "광진구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.538617);
    localStorage.setItem("lng", 127.082375);
  } else if (savedCity === "구로구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.495472);
    localStorage.setItem("lng", 126.887536);
  } else if (savedCity === "금천구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.4568644);
    localStorage.setItem("lng", 126.8955105);
  } else if (savedCity === "노원구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.654358);
    localStorage.setItem("lng", 127.056473);
  } else if (savedCity === "도봉구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.668768);
    localStorage.setItem("lng", 127.047163);
  } else if (savedCity === "동대문구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.574524);
    localStorage.setItem("lng", 127.03965);
  } else if (savedCity === "동작구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.51245);
    localStorage.setItem("lng", 126.9395);
  } else if (savedCity === "마포구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.5663245);
    localStorage.setItem("lng", 126.901491);
  } else if (savedCity === "서대문구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.579225);
    localStorage.setItem("lng", 126.9368);
  } else if (savedCity === "서초구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.483569);
    localStorage.setItem("lng", 127.032598);
  } else if (savedCity === "성동구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.563456);
    localStorage.setItem("lng", 127.036821);
  } else if (savedCity === "성북구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.5894);
    localStorage.setItem("lng", 127.016749);
  } else if (savedCity === "송파구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.5145636);
    localStorage.setItem("lng", 127.1059186);
  } else if (savedCity === "양천구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.517016);
    localStorage.setItem("lng", 126.866642);
  } else if (savedCity === "영등포구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.526436);
    localStorage.setItem("lng", 126.896004);
  } else if (savedCity === "용산구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.532527);
    localStorage.setItem("lng", 126.99049);
  } else if (savedCity === "은평구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.602784);
    localStorage.setItem("lng", 126.929164);
  } else if (savedCity === "종로구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.5735207);
    localStorage.setItem("lng", 126.9788345);
  } else if (savedCity === "중구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.563843);
    localStorage.setItem("lng", 126.997602);
  } else if (savedCity === "중랑구" && savedState === "서울특별시") {
    localStorage.setItem("lat", 37.6063242);
    localStorage.setItem("lng", 127.0925842);
  }
  // 인천
  else if (savedCity === "계양구" && savedState === "인천광역시") {
    localStorage.setItem("lat", 37.5374147);
    localStorage.setItem("lng", 126.7377757);
  } else if (savedCity === "남구" && savedState === "인천광역시") {
    localStorage.setItem("lat", 37.4635229);
    localStorage.setItem("lng", 126.6505841);
  } else if (savedCity === "남동구" && savedState === "인천광역시") {
    localStorage.setItem("lat", 37.447342);
    localStorage.setItem("lng", 126.731488);
  } else if (savedCity === "동구" && savedState === "인천광역시") {
    localStorage.setItem("lat", 37.4738846);
    localStorage.setItem("lng", 126.6432125);
  } else if (savedCity === "부평구" && savedState === "인천광역시") {
    localStorage.setItem("lat", 37.5070563);
    localStorage.setItem("lng", 126.7218378);
  } else if (savedCity === "서구" && savedState === "인천광역시") {
    localStorage.setItem("lat", 37.545449);
    localStorage.setItem("lng", 126.675994);
  } else if (savedCity === "연수구" && savedState === "인천광역시") {
    localStorage.setItem("lat", 37.4101675);
    localStorage.setItem("lng", 126.67828);
  } else if (savedCity === "중구" && savedState === "인천광역시") {
    localStorage.setItem("lat", 37.473781);
    localStorage.setItem("lng", 126.621588);
  } else if (savedCity === "강화군" && savedState === "인천광역시") {
    localStorage.setItem("lat", 37.746498);
    localStorage.setItem("lng", 126.488052);
  } else if (savedCity === "옹진군" && savedState === "인천광역시") {
    localStorage.setItem("lat", 37.446607);
    localStorage.setItem("lng", 126.63676);
  }
  // 대전
  else if (savedCity === "대덕구" && savedState === "대전광역시") {
    localStorage.setItem("lat", 36.346735);
    localStorage.setItem("lng", 127.415502);
  } else if (savedCity === "동구" && savedState === "대전광역시") {
    localStorage.setItem("lat", 36.312169);
    localStorage.setItem("lng", 127.454884);
  } else if (savedCity === "서구" && savedState === "대전광역시") {
    localStorage.setItem("lat", 36.355504);
    localStorage.setItem("lng", 127.383844);
  } else if (savedCity === "유성구" && savedState === "대전광역시") {
    localStorage.setItem("lat", 36.3623219);
    localStorage.setItem("lng", 127.3562683);
  } else if (savedCity === "중구" && savedState === "대전광역시") {
    localStorage.setItem("lat", 37.563843);
    localStorage.setItem("lng", 126.997602);
  }
  // 광주
  else if (savedCity === "광산구" && savedState === "광주광역시") {
    localStorage.setItem("lat", 35.1395085);
    localStorage.setItem("lng", 126.7936834);
  } else if (savedCity === "남구" && savedState === "광주광역시") {
    localStorage.setItem("lat", 35.1330039);
    localStorage.setItem("lng", 126.902402);
  } else if (savedCity === "동구" && savedState === "광주광역시") {
    localStorage.setItem("lat", 35.1460818);
    localStorage.setItem("lng", 126.9232859);
  } else if (savedCity === "북구" && savedState === "광주광역시") {
    localStorage.setItem("lat", 35.17406);
    localStorage.setItem("lng", 126.911963);
  } else if (savedCity === "서구" && savedState === "광주광역시") {
    localStorage.setItem("lat", 35.151969);
    localStorage.setItem("lng", 126.890272);
  }
  // 대구
  else if (savedCity === "남구" && savedState === "대구광역시") {
    localStorage.setItem("lat", 35.846);
    localStorage.setItem("lng", 128.597486);
  } else if (savedCity === "달서구" && savedState === "대구광역시") {
    localStorage.setItem("lat", 35.1330039);
    localStorage.setItem("lng", 126.902402);
  } else if (savedCity === "동구" && savedState === "대구광역시") {
    localStorage.setItem("lat", 35.886664);
    localStorage.setItem("lng", 128.635609);
  } else if (savedCity === "북구" && savedState === "대구광역시") {
    localStorage.setItem("lat", 35.885684);
    localStorage.setItem("lng", 128.582947);
  } else if (savedCity === "서구" && savedState === "대구광역시") {
    localStorage.setItem("lat", 35.871757);
    localStorage.setItem("lng", 128.559175);
  } else if (savedCity === "수성구" && savedState === "대구광역시") {
    localStorage.setItem("lat", 35.8581654);
    localStorage.setItem("lng", 128.630625);
  } else if (savedCity === "증구" && savedState === "대구광역시") {
    localStorage.setItem("lat", 35.8693404);
    localStorage.setItem("lng", 128.6062);
  } else if (savedCity === "달성군" && savedState === "대구광역시") {
    localStorage.setItem("lat", 35.7746);
    localStorage.setItem("lng", 128.431445);
  }
  // 울산
  else if (savedCity === "남구" && savedState === "울산광역시") {
    localStorage.setItem("lat", 35.543798);
    localStorage.setItem("lng", 129.330109);
  } else if (savedCity === "동구" && savedState === "울산광역시") {
    localStorage.setItem("lat", 35.504844);
    localStorage.setItem("lng", 129.416632);
  } else if (savedCity === "북구" && savedState === "울산광역시") {
    localStorage.setItem("lat", 35.582709);
    localStorage.setItem("lng", 129.361313);
  } else if (savedCity === "중구" && savedState === "울산광역시") {
    localStorage.setItem("lat", 35.56945);
    localStorage.setItem("lng", 129.3327);
  } else if (savedCity === "울주군" && savedState === "울산광역시") {
    localStorage.setItem("lat", 35.5220885);
    localStorage.setItem("lng", 129.2422295);
  }
  // 부산
  else if (savedCity === "강서구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.2122179);
    localStorage.setItem("lng", 128.98045);
  } else if (savedCity === "금정구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.243068);
    localStorage.setItem("lng", 129.0921);
  } else if (savedCity === "남구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.136577);
    localStorage.setItem("lng", 129.084163);
  } else if (savedCity === "동구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.1292746);
    localStorage.setItem("lng", 129.0453253);
  } else if (savedCity === "동래구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.1964382);
    localStorage.setItem("lng", 129.0938569);
  } else if (savedCity === "부산진구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.162913);
    localStorage.setItem("lng", 129.053157);
  } else if (savedCity === "북구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.197185);
    localStorage.setItem("lng", 128.990438);
  } else if (savedCity === "사상구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.152624);
    localStorage.setItem("lng", 128.99125);
  } else if (savedCity === "사하구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.104585);
    localStorage.setItem("lng", 128.974817);
  } else if (savedCity === "서구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.0979321);
    localStorage.setItem("lng", 129.0244125);
  } else if (savedCity === "수영구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.145694);
    localStorage.setItem("lng", 129.113186);
  } else if (savedCity === "연제구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.176242);
    localStorage.setItem("lng", 129.079764);
  } else if (savedCity === "영도구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.091199);
    localStorage.setItem("lng", 129.067875);
  } else if (savedCity === "중구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.106214);
    localStorage.setItem("lng", 129.032352);
  } else if (savedCity === "해운대구" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.163177);
    localStorage.setItem("lng", 129.163634);
  } else if (savedCity === "기장군" && savedState === "부산광역시") {
    localStorage.setItem("lat", 35.244498);
    localStorage.setItem("lng", 129.222312);
  }
  // 경기도
  else if (savedCity === "고양시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.6583981);
    localStorage.setItem("lng", 126.8319831);
  } else if (savedCity === "과천시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.4292013);
    localStorage.setItem("lng", 126.987675);
  } else if (savedCity === "광명시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.4786176);
    localStorage.setItem("lng", 126.8646504);
  } else if (savedCity === "광주시" && savedState === "경기도") {
    localStorage.setItem("lat", 35.160032);
    localStorage.setItem("lng", 126.851338);
  } else if (savedCity === "구리시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.594266);
    localStorage.setItem("lng", 127.129632);
  } else if (savedCity === "군포시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.361523);
    localStorage.setItem("lng", 126.935338);
  } else if (savedCity === "김포시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.61535);
    localStorage.setItem("lng", 126.715544);
  } else if (savedCity === "남양주시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.635985);
    localStorage.setItem("lng", 127.216467);
  } else if (savedCity === "동두천시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.903662);
    localStorage.setItem("lng", 127.060671);
  } else if (savedCity === "부천시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.5035917);
    localStorage.setItem("lng", 126.766);
  } else if (savedCity === "성남시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.4200267);
    localStorage.setItem("lng", 127.1267772);
  } else if (savedCity === "수원시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.263476);
    localStorage.setItem("lng", 127.028646);
  } else if (savedCity === "시흥시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.380177);
    localStorage.setItem("lng", 126.802934);
  } else if (savedCity === "안산시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.3219123);
    localStorage.setItem("lng", 126.8308176);
  } else if (savedCity === "안성시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.0080546);
    localStorage.setItem("lng", 127.2797732);
  } else if (savedCity === "안양시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.3942905);
    localStorage.setItem("lng", 126.9567534);
  } else if (savedCity === "양주시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.785329);
    localStorage.setItem("lng", 127.045847);
  } else if (savedCity === "오산시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.149887);
    localStorage.setItem("lng", 127.077462);
  } else if (savedCity === "용인시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.2412522);
    localStorage.setItem("lng", 127.1774916);
  } else if (savedCity === "의왕시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.3448869);
    localStorage.setItem("lng", 126.9682786);
  } else if (savedCity === "의정부시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.738083);
    localStorage.setItem("lng", 127.033753);
  } else if (savedCity === "이천시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.272342);
    localStorage.setItem("lng", 127.435034);
  } else if (savedCity === "파주시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.760186);
    localStorage.setItem("lng", 126.779883);
  } else if (savedCity === "평택시" && savedState === "경기도") {
    localStorage.setItem("lat", 36.9923537);
    localStorage.setItem("lng", 127.1126947);
  } else if (savedCity === "포천시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.894867);
    localStorage.setItem("lng", 127.2002404);
  } else if (savedCity === "하남시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.5393014);
    localStorage.setItem("lng", 127.2148742);
  } else if (savedCity === "화성시" && savedState === "경기도") {
    localStorage.setItem("lat", 37.199565);
    localStorage.setItem("lng", 126.831405);
  } else if (savedCity === "가평군" && savedState === "경기도") {
    localStorage.setItem("lat", 37.831508);
    localStorage.setItem("lng", 127.509541);
  } else if (savedCity === "양평군" && savedState === "경기도") {
    localStorage.setItem("lat", 37.491791);
    localStorage.setItem("lng", 127.487597);
  } else if (savedCity === "여주군" && savedState === "경기도") {
    localStorage.setItem("lat", 37.298342);
    localStorage.setItem("lng", 127.637082);
  } else if (savedCity === "연천군" && savedState === "경기도") {
    localStorage.setItem("lat", 38.096738);
    localStorage.setItem("lng", 127.074755);
  }
  // 강원도
  else if (savedCity === "강릉시" && savedState === "강원도") {
    localStorage.setItem("lat", 37.752175);
    localStorage.setItem("lng", 128.875836);
  } else if (savedCity === "동해시" && savedState === "강원도") {
    localStorage.setItem("lat", 37.5247583);
    localStorage.setItem("lng", 129.1142625);
  } else if (savedCity === "삼척시" && savedState === "강원도") {
    localStorage.setItem("lat", 37.4499354);
    localStorage.setItem("lng", 129.1651479);
  } else if (savedCity === "속초시" && savedState === "강원도") {
    localStorage.setItem("lat", 38.207169);
    localStorage.setItem("lng", 128.59184);
  } else if (savedCity === "원주시" && savedState === "강원도") {
    localStorage.setItem("lat", 37.3423179);
    localStorage.setItem("lng", 127.9199688);
  } else if (savedCity === "춘천시" && savedState === "강원도") {
    localStorage.setItem("lat", 37.8813739);
    localStorage.setItem("lng", 127.7300034);
  } else if (savedCity === "태백시" && savedState === "강원도") {
    localStorage.setItem("lat", 37.164132);
    localStorage.setItem("lng", 128.985735);
  } else if (savedCity === "고성군" && savedState === "강원도") {
    localStorage.setItem("lat", 38.3806154);
    localStorage.setItem("lng", 128.4678625);
  } else if (savedCity === "양구군" && savedState === "강원도") {
    localStorage.setItem("lat", 38.109992);
    localStorage.setItem("lng", 127.99);
  } else if (savedCity === "양양군" && savedState === "강원도") {
    localStorage.setItem("lat", 38.075493);
    localStorage.setItem("lng", 128.619145);
  } else if (savedCity === "영월군" && savedState === "강원도") {
    localStorage.setItem("lat", 37.183774);
    localStorage.setItem("lng", 128.46185);
  } else if (savedCity === "인제군" && savedState === "강원도") {
    localStorage.setItem("lat", 38.069732);
    localStorage.setItem("lng", 128.170352);
  } else if (savedCity === "정선군" && savedState === "강원도") {
    localStorage.setItem("lat", 37.380609);
    localStorage.setItem("lng", 128.660871);
  } else if (savedCity === "철원군" && savedState === "강원도") {
    localStorage.setItem("lat", 38.146861);
    localStorage.setItem("lng", 127.313472);
  } else if (savedCity === "평창군" && savedState === "강원도") {
    localStorage.setItem("lat", 37.37077);
    localStorage.setItem("lng", 128.390193);
  } else if (savedCity === "홍천군" && savedState === "강원도") {
    localStorage.setItem("lat", 37.697207);
    localStorage.setItem("lng", 127.888518);
  } else if (savedCity === "화천군" && savedState === "강원도") {
    localStorage.setItem("lat", 38.106181);
    localStorage.setItem("lng", 127.708216);
  } else if (savedCity === "횡성군" && savedState === "강원도") {
    localStorage.setItem("lat", 37.491803);
    localStorage.setItem("lng", 127.985022);
  }
  // 충청북도
  else if (savedCity === "제천시" && savedState === "충청북도") {
    localStorage.setItem("lat", 37.132646);
    localStorage.setItem("lng", 128.191037);
  } else if (savedCity === "청주시" && savedState === "충청북도") {
    localStorage.setItem("lat", 36.6424987);
    localStorage.setItem("lng", 127.488975);
  } else if (savedCity === "충주시" && savedState === "충청북도") {
    localStorage.setItem("lat", 36.991105);
    localStorage.setItem("lng", 127.926012);
  } else if (savedCity === "괴산군" && savedState === "충청북도") {
    localStorage.setItem("lat", 36.815381);
    localStorage.setItem("lng", 127.786704);
  } else if (savedCity === "단양군" && savedState === "충청북도") {
    localStorage.setItem("lat", 36.984539);
    localStorage.setItem("lng", 128.365589);
  } else if (savedCity === "보은군" && savedState === "충청북도") {
    localStorage.setItem("lat", 36.489455);
    localStorage.setItem("lng", 127.729485);
  } else if (savedCity === "영동군" && savedState === "충청북도") {
    localStorage.setItem("lat", 36.175047);
    localStorage.setItem("lng", 127.783423);
  } else if (savedCity === "옥천군" && savedState === "충청북도") {
    localStorage.setItem("lat", 36.3064369);
    localStorage.setItem("lng", 127.5714191);
  } else if (savedCity === "음성군" && savedState === "충청북도") {
    localStorage.setItem("lat", 36.940282);
    localStorage.setItem("lng", 127.690487);
  } else if (savedCity === "증평군" && savedState === "충청북도") {
    localStorage.setItem("lat", 36.785345);
    localStorage.setItem("lng", 127.581507);
  } else if (savedCity === "진천군" && savedState === "충청북도") {
    localStorage.setItem("lat", 36.85542);
    localStorage.setItem("lng", 127.435602);
  } else if (savedCity === "청원군" && savedState === "충청북도") {
    localStorage.setItem("lat", 36.6289675);
    localStorage.setItem("lng", 127.3758644);
  }
  // 충청남도
  else if (savedCity === "세종자치시" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.4803512);
    localStorage.setItem("lng", 127.2894325);
  } else if (savedCity === "계룡시" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.274554);
    localStorage.setItem("lng", 127.248633);
  } else if (savedCity === "공주시" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.446556);
    localStorage.setItem("lng", 127.11904);
  } else if (savedCity === "논산시" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.1872399);
    localStorage.setItem("lng", 127.0986227);
  } else if (savedCity === "보령시" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.333452);
    localStorage.setItem("lng", 126.612803);
  } else if (savedCity === "서산시" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.7849216);
    localStorage.setItem("lng", 126.4502766);
  } else if (savedCity === "아산시" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.790013);
    localStorage.setItem("lng", 127.002474);
  } else if (savedCity === "천안시" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.815147);
    localStorage.setItem("lng", 127.113892);
  } else if (savedCity === "금산군" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.108857);
    localStorage.setItem("lng", 127.488213);
  } else if (savedCity === "당진시" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.8899744);
    localStorage.setItem("lng", 126.6459003);
  } else if (savedCity === "부여군" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.275658);
    localStorage.setItem("lng", 126.909775);
  } else if (savedCity === "서천군" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.080286);
    localStorage.setItem("lng", 126.6917418);
  } else if (savedCity === "예산군" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.6808995);
    localStorage.setItem("lng", 126.8447382);
  } else if (savedCity === "청양군" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.459151);
    localStorage.setItem("lng", 126.802238);
  } else if (savedCity === "태안군" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.74561);
    localStorage.setItem("lng", 126.297913);
  } else if (savedCity === "홍성군" && savedState === "충청남도") {
    localStorage.setItem("lat", 36.601324);
    localStorage.setItem("lng", 126.660775);
  }
  // 전라북도
  else if (savedCity === "군산시" && savedState === "전라북도") {
    localStorage.setItem("lat", 35.9676263);
    localStorage.setItem("lng", 126.736875);
  } else if (savedCity === "김제시" && savedState === "전라북도") {
    localStorage.setItem("lat", 35.8035917);
    localStorage.setItem("lng", 126.8808375);
  } else if (savedCity === "남원시" && savedState === "전라북도") {
    localStorage.setItem("lat", 35.416432);
    localStorage.setItem("lng", 127.390438);
  } else if (savedCity === "익산시" && savedState === "전라북도") {
    localStorage.setItem("lat", 35.948295);
    localStorage.setItem("lng", 126.957786);
  } else if (savedCity === "전주시" && savedState === "전라북도") {
    localStorage.setItem("lat", 35.824171);
    localStorage.setItem("lng", 127.14805);
  } else if (savedCity === "정읍시" && savedState === "전라북도") {
    localStorage.setItem("lat", 35.569867);
    localStorage.setItem("lng", 126.856038);
  } else if (savedCity === "고창군" && savedState === "전라북도") {
    localStorage.setItem("lat", 35.435836);
    localStorage.setItem("lng", 126.701973);
  } else if (savedCity === "무주군" && savedState === "전라북도") {
    localStorage.setItem("lat", 36.00681);
    localStorage.setItem("lng", 127.660818);
  } else if (savedCity === "부안군" && savedState === "전라북도") {
    localStorage.setItem("lat", 35.731755);
    localStorage.setItem("lng", 126.733199);
  } else if (savedCity === "순창군" && savedState === "전라북도") {
    localStorage.setItem("lat", 35.374476);
    localStorage.setItem("lng", 127.137489);
  } else if (savedCity === "완주군" && savedState === "전라북도") {
    localStorage.setItem("lat", 35.904708);
    localStorage.setItem("lng", 127.162019);
  } else if (savedCity === "임실군" && savedState === "전라북도") {
    localStorage.setItem("lat", 35.6178286);
    localStorage.setItem("lng", 127.2890774);
  } else if (savedCity === "장수군" && savedState === "전라북도") {
    localStorage.setItem("lat", 35.647366);
    localStorage.setItem("lng", 127.5215208);
  } else if (savedCity === "진안군" && savedState === "전라북도") {
    localStorage.setItem("lat", 127.424875);
    localStorage.setItem("lng", 35.7917621);
  }
  // 전라남도
  else if (savedCity === "광양시" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.9406575);
    localStorage.setItem("lng", 127.6958987);
  } else if (savedCity === "나주시" && savedState === "전라남도") {
    localStorage.setItem("lat", 35.015814);
    localStorage.setItem("lng", 126.710814);
  } else if (savedCity === "목포시" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.811875);
    localStorage.setItem("lng", 126.3923375);
  } else if (savedCity === "순천시" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.9506984);
    localStorage.setItem("lng", 127.487243);
  } else if (savedCity === "여수시" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.760425);
    localStorage.setItem("lng", 127.662313);
  } else if (savedCity === "강진군" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.64209);
    localStorage.setItem("lng", 126.7672);
  } else if (savedCity === "고흥군" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.6047049);
    localStorage.setItem("lng", 127.275507);
  } else if (savedCity === "곡성군" && savedState === "전라남도") {
    localStorage.setItem("lat", 35.2820169);
    localStorage.setItem("lng", 127.2919779);
  } else if (savedCity === "구례군" && savedState === "전라남도") {
    localStorage.setItem("lat", 35.2025096);
    localStorage.setItem("lng", 127.4629375);
  } else if (savedCity === "담양군" && savedState === "전라남도") {
    localStorage.setItem("lat", 35.321175);
    localStorage.setItem("lng", 126.988175);
  } else if (savedCity === "무안군" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.9904886);
    localStorage.setItem("lng", 126.4817117);
  } else if (savedCity === "보성군" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.771458);
    localStorage.setItem("lng", 127.080088);
  } else if (savedCity === "신안군" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.833626);
    localStorage.setItem("lng", 126.351124);
  } else if (savedCity === "영광군" && savedState === "전라남도") {
    localStorage.setItem("lat", 35.2772127);
    localStorage.setItem("lng", 126.5120143);
  } else if (savedCity === "영암군" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.8001638);
    localStorage.setItem("lng", 126.6967961);
  } else if (savedCity === "완도군" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.3110391);
    localStorage.setItem("lng", 126.7548524);
  } else if (savedCity === "장성군" && savedState === "전라남도") {
    localStorage.setItem("lat", 35.301943);
    localStorage.setItem("lng", 126.784814);
  } else if (savedCity === "장흥군" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.681622);
    localStorage.setItem("lng", 126.9070507);
  } else if (savedCity === "진도군" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.486818);
    localStorage.setItem("lng", 126.263475);
  } else if (savedCity === "함평군" && savedState === "전라남도") {
    localStorage.setItem("lat", 35.065929);
    localStorage.setItem("lng", 126.5165816);
  } else if (savedCity === "해남군" && savedState === "전라남도") {
    localStorage.setItem("lat", 34.5740398);
    localStorage.setItem("lng", 126.5994353);
  } else if (savedCity === "화순군" && savedState === "전라남도") {
    localStorage.setItem("lat", 35.0645238);
    localStorage.setItem("lng", 126.9864771);
  }
  // 경상북도
  else if (savedCity === "경산시" && savedState === "경상북도") {
    localStorage.setItem("lat", 35.82509);
    localStorage.setItem("lng", 128.741201);
  } else if (savedCity === "경주시" && savedState === "경상북도") {
    localStorage.setItem("lat", 35.856242);
    localStorage.setItem("lng", 129.224784);
  } else if (savedCity === "구미시" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.1195987);
    localStorage.setItem("lng", 128.3443);
  } else if (savedCity === "김천시" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.1397714);
    localStorage.setItem("lng", 128.1136148);
  } else if (savedCity === "문경시" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.586522);
    localStorage.setItem("lng", 128.186787);
  } else if (savedCity === "상주시" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.411002);
    localStorage.setItem("lng", 128.159229);
  } else if (savedCity === "안동시" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.568425);
    localStorage.setItem("lng", 128.7295375);
  } else if (savedCity === "영주시" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.805667);
    localStorage.setItem("lng", 128.624063);
  } else if (savedCity === "영천시" && savedState === "경상북도") {
    localStorage.setItem("lat", 35.97326);
    localStorage.setItem("lng", 128.938613);
  } else if (savedCity === "포항시" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.0190333);
    localStorage.setItem("lng", 129.3433898);
  } else if (savedCity === "고령군" && savedState === "경상북도") {
    localStorage.setItem("lat", 35.726177);
    localStorage.setItem("lng", 128.263074);
  } else if (savedCity === "군위군" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.242945);
    localStorage.setItem("lng", 128.572657);
  } else if (savedCity === "봉화군" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.893114);
    localStorage.setItem("lng", 128.732503);
  } else if (savedCity === "성주군" && savedState === "경상북도") {
    localStorage.setItem("lat", 35.919175);
    localStorage.setItem("lng", 128.282959);
  } else if (savedCity === "영덕군" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.415034);
    localStorage.setItem("lng", 129.365267);
  } else if (savedCity === "영양군" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.6667174);
    localStorage.setItem("lng", 129.1123839);
  } else if (savedCity === "예천군" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.6468844);
    localStorage.setItem("lng", 128.4373552);
  } else if (savedCity === "울릉군" && savedState === "경상북도") {
    localStorage.setItem("lat", 37.484455);
    localStorage.setItem("lng", 130.905697);
  } else if (savedCity === "울진군" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.993087);
    localStorage.setItem("lng", 129.400394);
  } else if (savedCity === "의성군" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.3527158);
    localStorage.setItem("lng", 128.6971711);
  } else if (savedCity === "청도군" && savedState === "경상북도") {
    localStorage.setItem("lat", 35.647399);
    localStorage.setItem("lng", 128.733988);
  } else if (savedCity === "청송군" && savedState === "경상북도") {
    localStorage.setItem("lat", 36.4362793);
    localStorage.setItem("lng", 129.0571263);
  } else if (savedCity === "칠곡군" && savedState === "경상북도") {
    localStorage.setItem("lat", 35.9955753);
    localStorage.setItem("lng", 128.401679);
  }
  // 경상남도
  else if (savedCity === "거제시" && savedState === "경상남도") {
    localStorage.setItem("lat", 34.8804572);
    localStorage.setItem("lng", 128.6211703);
  } else if (savedCity === "김해시" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.228574);
    localStorage.setItem("lng", 128.889322);
  } else if (savedCity === "밀양시" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.503856);
    localStorage.setItem("lng", 128.746712);
  } else if (savedCity === "사천시" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.0034774);
    localStorage.setItem("lng", 128.0638649);
  } else if (savedCity === "양산시" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.335049);
    localStorage.setItem("lng", 129.037339);
  } else if (savedCity === "진주시" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.180325);
    localStorage.setItem("lng", 128.107646);
  } else if (savedCity === "창원시 진해구" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.13306);
    localStorage.setItem("lng", 128.710081);
  } else if (savedCity === "창원시 마산합포구" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.196874);
    localStorage.setItem("lng", 128.567863);
  } else if (savedCity === "창원시 마산회원구" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.220932);
    localStorage.setItem("lng", 128.579706);
  } else if (savedCity === "창원시 성산구" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.1983844);
    localStorage.setItem("lng", 128.7029401);
  } else if (savedCity === "창원시 의창구" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.2540033);
    localStorage.setItem("lng", 128.6401544);
  } else if (savedCity === "통영시" && savedState === "경상남도") {
    localStorage.setItem("lat", 34.85439);
    localStorage.setItem("lng", 128.433112);
  } else if (savedCity === "거창군" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.686698);
    localStorage.setItem("lng", 127.909538);
  } else if (savedCity === "고성군" && savedState === "경상남도") {
    localStorage.setItem("lat", 34.9730975);
    localStorage.setItem("lng", 128.3222643);
  } else if (savedCity === "남해군" && savedState === "경상남도") {
    localStorage.setItem("lat", 34.837707);
    localStorage.setItem("lng", 127.892475);
  } else if (savedCity === "산청군" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.415557);
    localStorage.setItem("lng", 127.873458);
  } else if (savedCity === "의령군" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.3222239);
    localStorage.setItem("lng", 128.261676);
  } else if (savedCity === "창녕군" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.544611);
    localStorage.setItem("lng", 128.492346);
  } else if (savedCity === "하동군" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.067333);
    localStorage.setItem("lng", 127.751275);
  } else if (savedCity === "함안군" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.272315);
    localStorage.setItem("lng", 128.406595);
  } else if (savedCity === "함양군" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.520536);
    localStorage.setItem("lng", 127.725245);
  } else if (savedCity === "합천군" && savedState === "경상남도") {
    localStorage.setItem("lat", 35.56666);
    localStorage.setItem("lng", 128.165799);
  }
  // 제주도
  else if (savedCity === "서귀포시" && savedState === "제주도") {
    localStorage.setItem("lat", 33.253925);
    localStorage.setItem("lng", 126.5597875);
  } else if (savedCity === "제주시" && savedState === "제주도") {
    localStorage.setItem("lat", 33.499568);
    localStorage.setItem("lng", 126.531138);
  }
}

// --------------------------------------------------------------------------------

{
  // 네이버 맵 api
  // if localStorage에 위도와 경도 값이 없으면 위도 37도 경도 127.5도로 기본 값 설정
  if (
    localStorage.getItem("lat") === null ||
    localStorage.getItem("lng") === null
  ) {
    const savedLat = "37";
    const savedLng = "127.5";
    var map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(savedLat, savedLng), // 설정한 기본 값 넣기
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      zoom: 8,
    });
  } else {
    // if localStorage에 위도와 경도 값이 있으면 저장된 위도와 경도 값 가져오기
    const savedLat = localStorage.getItem("lat");
    const savedLng = localStorage.getItem("lng");
    var map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(savedLat, savedLng), // localStorage에 가져온 값 넣기
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      zoom: 15,
    });

    var marker = new naver.maps.Marker({
      // 가져온 위도 경도에 마크 표시
      position: new naver.maps.LatLng(savedLat, savedLng),
      map: map,
    });
  }
}

// ---------------------------------------------------------------------------------

{
  // 날짜 선택
  const date_from = document.querySelector("#date_from");
  const date_to = document.querySelector("#date_to");

  function selectDate() {
    // From 값과 To 값 저장한 뒤에 비교해서 To 값이 더 적으면 날짜를 다시 선택
    const date_from_value = date_from.value;
    const date_to_value = date_to.value;
    if (date_from_value <= date_to_value) {
      localStorage.setItem("date_from", date_from_value);
      localStorage.setItem("date_to", date_to_value);
    } else {
      alert("날짜를 다시 선택해주세요.");
      date_from.value = "";
      date_to.value = "";
    }
  }
}

// --------------------------------------------------------------------------------

{
  // 여행담기
  const trip_form = document.querySelector("#trip_form");
  const trip_list = document.querySelector("#trip_list");
  const state = document.querySelector("#state");
  const city = document.querySelector("#city");

  const username = localStorage.getItem("username_inUse");

  let trips = [];

  function saveTrips() {
    localStorage.setItem(`${ username }'s trips`, JSON.stringify(trips));
  }

  function goWritePage(event) {
    event.preventDefault();
    const li = event.target.parentElement;
    const span = li.children[0].innerText;
    localStorage.setItem(`${ li.id }'s title`, span);
    localStorage.setItem("modify_id", li.id);
    localStorage.setItem("click_id", li.id);
    window.location.href = "html/write.html";
  }

  function showMyTrip(newTrip) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newTrip.id;
    span.innerText = newTrip.title;
    span.classList.add("cursor");
    span.addEventListener("click", goWritePage);
    li.appendChild(span);
    trip_list.appendChild(li);
  }

  // 새로운 값을 입력하면 화면에 그리고 저장하는 부분
  function handleTripSubmit() {
    const newTrip = `${ date_from.value }~${ date_to.value } / ${ state.value } ${ city.value }`;
    const newTripObj = {
      title: newTrip,
      id: Date.now(),
    };
    showMyTrip(newTripObj);
    trips.push(newTripObj);
    saveTrips();
  }

  trip_form.addEventListener("submit", handleTripSubmit);

  const savedTrips = localStorage.getItem(`${ username }'s trips`);

  if (savedTrips !== null) {
    const parsedToDos = JSON.parse(savedTrips);
    trips = parsedToDos;
    parsedToDos.forEach(showMyTrip);
  }

  // freepik에서 이미지 가져옴
  const images = ["1"];
  const random_image = images[Math.floor(Math.random() * images.length)];

  trip_form.setAttribute(
    "style",
    `background: url(selectimg/${ random_image }.jpg) no-repeat; background-size: cover; background-position-y: -250px`
  );
}

//----------------------------------------------------------------------------------

{
  // 여행담기 애니메이션
  date_to.addEventListener("change", selectDate);

  const add_trip = document.querySelector(".add_trip");
  const select_city = document.querySelector("#select_city");
  const trip_place = document.querySelector(".trip_place");
  const hidden_date = document.querySelector(".hidden_date");

  hidden_date.setAttribute("style", "display:none");
  trip_place.setAttribute("style", "display:none");

  function handleAddTrip() {
    if (localStorage.getItem("username_inUse") === null) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    add_trip.classList.add("hidden_add_trip");
    trip_place.setAttribute("style", "");
    trip_place.classList.add("show_trip_place");
    setTimeout(() => {
      select_city.classList.remove("visibility_city");
      select_city.classList.add("show_trip_place");
    }, 500);
  }

  add_trip.addEventListener("click", handleAddTrip);

  const select_date = document.querySelector("#select_date");
  const tripPeriod = document.querySelector(".trip_period");
  const saveBtn = document.querySelector("#save_btn");

  function cityToDate() {
    trip_place.classList.remove("show_trip_place");
    trip_place.setAttribute("style", "display:none");
    select_city.classList.remove("show_trip_place");
    select_city.setAttribute("style", "display:none");

    hidden_date.setAttribute("style", "");
    select_date.setAttribute("style", "visibility: hidden");
    saveBtn.setAttribute("style", "visibility: hidden");

    tripPeriod.classList.add("show_trip_place");
    setTimeout(() => {
      select_date.setAttribute("style", "");
      saveBtn.setAttribute("style", "");
      select_date.classList.add("show_trip_place");
      saveBtn.classList.add("show_trip_place");
    }, 800);
  }

  city.addEventListener("change", cityToDate);
}

//-------------------------------------------------------------------------------

{
  // 시/도 선택 애니메이션
  const iconFrom = document.querySelector(".iconFrom");
  const iconTo = document.querySelector(".iconTo");

  state.addEventListener("focusin", () => {
    iconFrom.classList.add("from_inRorate");
    iconFrom.classList.remove("from_outRorate");
  });

  state.addEventListener("change", () => {
    iconFrom.classList.add("from_outRorate");
    iconFrom.classList.remove("from_inRorate");
  });

  city.addEventListener("focusin", () => {
    iconTo.classList.add("to_inRorate");
    iconTo.classList.remove("to_outRorate");
  });

  city.addEventListener("change", () => {
    iconTo.classList.add("to_outRorate");
    iconTo.classList.remove("to_inRorate");
  });
}
