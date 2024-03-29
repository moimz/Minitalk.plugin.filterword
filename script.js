/**
 * 이 파일은 미니톡 단어필터링 플러그인의 일부입니다. (https://www.minitalk.io)
 *
 * 비속어를 차단합니다.
 * 
 * @file /plugins/filterword/script.js
 * @author Arzz (arzz@arzz.com)
 * @license MIT License
 * @version 1.0.1
 * @modified 2021. 8. 17.
 */
if (Minitalk === undefined) return;

/**
 * 필터링할 단어를 아래와 같이 입력하여 주십시오.
 */
me.words = [
	"개새끼",
	"개쌔끼",
	"개때끼",
	"개세끼",
	"개색끼",
	"개색히",
	"개쉑히",
	"개쉐리",
	"개쉐이",
	"개쉑",
	"개새꺄",
	"개쌔꺄",
	"개때꺄",
	"개색꺄",
	"개새",
	"개쉐",
	"십새끼",
	"십쌔끼",
	"십때끼",
	"십세끼",
	"십색끼",
	"십색히",
	"십쉑히",
	"십쉐리",
	"십쉐이",
	"십쉑",
	"십새꺄",
	"십쌔꺄",
	"십때꺄",
	"십색꺄",
	"십새",
	"십쉐",
	"씹새끼",
	"씹쌔끼",
	"씹때끼",
	"씹세끼",
	"씹색끼",
	"씹색히",
	"씹쉑히",
	"씹쉐리",
	"씹쉐이",
	"씹쉑",
	"씹새꺄",
	"씹쌔꺄",
	"씹때꺄",
	"씹색꺄",
	"씹새",
	"씹쉐",
	"바보새끼",
	"병신새끼",
	"새끼",
	"쌔끼",
	"때끼",
	"세끼",
	"색끼",
	"색히",
	"쉑히",
	"쉐리",
	"쉑",
	"새꺄",
	"쌔꺄",
	"때꺄",
	"색꺄",
	"좆나게",
	"좃나게",
	"존나게",
	"젖나게",
	"젓나게",
	"전나게",
	"졸라게",
	"절라게",
	"좆나",
	"좃나",
	"존나",
	"젖나",
	"젓나",
	"전나",
	"졸라",
	"절라",
	"좆만한",
	"좃만한",
	"존만한",
	"젖만한",
	"젓만한",
	"좆마난",
	"좃마난",
	"존마난",
	"젖마난",
	"젓마난",
	"좆같은",
	"좃같은",
	"젖같은",
	"젓같은",
	"좆가튼",
	"좃가튼",
	"젖가튼",
	"젓가튼",
	"조까튼",
	"저까튼",
	"좆빠지게",
	"좃빠지게",
	"젖빠지게",
	"젓빠지게",
	"조빠지게",
	"저빠지게",
	"좆밥",
	"좃밥",
	"좁밥",
	"젖밥",
	"젓밥",
	"접밥",
	"조빱",
	"저빱",
	"좆까",
	"좃까",
	"젖까",
	"젓까",
	"조까",
	"저까",
	"좆도",
	"좃도",
	"젖도",
	"조또",
	"씨댕",
	"씨뎅",
	"시댕",
	"시뎅",
	"씨방새",
	"씨방쉐",
	"씨방세",
	"시방새",
	"시방쉐",
	"시방세",
	"씹탱",
	"씹창",
	"씨발",
	"씨벌",
	"씨불",
	"씨방",
	"씨바",
	"씨붕",
	"씨부",
	"씨밸",
	"씨팔",
	"씨펄",
	"씨풀",
	"씨빡",
	"씨이발",
	"씨이벌",
	"씨이불",
	"씨이방",
	"씨이바",
	"씨이붕",
	"씨이부",
	"씨이밸",
	"씨이팔",
	"씨이펄",
	"씨이풀",
	"씨이빡",
	"씹할",
	"씹팔",
	"씹펄",
	"씹풀",
	"씹빡",
	"띠발",
	"띠벌",
	"띠불",
	"띠방",
	"띠바",
	"띠붕",
	"띠밸",
	"띠팔",
	"띠펄",
	"띠풀",
	"띠이발",
	"띠이벌",
	"띠이불",
	"띠이방",
	"띠이바",
	"띠이붕",
	"띠이밸",
	"띠이팔",
	"띠이펄",
	"띠이풀",
	"시벌",
	"시팔",
	"시이발",
	"시이벌",
	"시이불",
	"시이방",
	"시이바",
	"시이붕",
	"시이부",
	"시이밸",
	"시이팔",
	"시이펄",
	"시이풀",
	"시이빡",
	"쒸발",
	"쒸벌",
	"쒸불",
	"쒸방",
	"쒸바",
	"쒸붕",
	"쒸부",
	"쒸밸",
	"쒸팔",
	"쒸펄",
	"쒸풀",
	"쒸빡",
	"쒸이발",
	"쒸이벌",
	"쒸이불",
	"쒸이방",
	"쒸이바",
	"쒸이붕",
	"쒸이부",
	"쒸이밸",
	"쒸이팔",
	"쒸이펄",
	"쒸이풀",
	"쒸이빡",
	"쉬발",
	"쉬벌",
	"쉬불",
	"쉬방",
	"쉬바",
	"쉬붕",
	"쉬부",
	"쉬밸",
	"쉬팔",
	"쉬펄",
	"쉬풀",
	"쉬빡",
	"쉬이발",
	"쉬이벌",
	"쉬이불",
	"쉬이방",
	"쉬이바",
	"쉬이붕",
	"쉬이부",
	"쉬이밸",
	"쉬이팔",
	"쉬이펄",
	"쉬이풀",
	"쉬이빡",
	"쓰발",
	"쓰벌",
	"쓰불",
	"쓰방",
	"쓰바",
	"쓰붕",
	"쓰부",
	"쓰밸",
	"쓰팔",
	"쓰펄",
	"쓰풀",
	"쓰빡",
	"쓰이발",
	"쓰이벌",
	"쓰이불",
	"쓰이방",
	"쓰이바",
	"쓰이붕",
	"쓰이부",
	"쓰이밸",
	"쓰이팔",
	"쓰이펄",
	"쓰이풀",
	"쓰이빡",
	"까대",
	"까댄",
	"니미럴",
	"니미랄",
	"니미롤",
	"니미룰",
	"니미를",
	"제기럴",
	"제기랄",
	"제기롤",
	"제기룰",
	"니기미",
	"닝기미",
	"니주가리",
	"니미",
	"쌍년",
	"썅년",
	"쌍넌",
	"썅넌",
	"쌍뇬",
	"썅뇬",
	"개년",
	"개넌",
	"개뇬",
	"쌍놈",
	"썅놈",
	"쌍넘",
	"썅넘",
	"개놈",
	"개넘",
	"썅",
	"지랄",
	"지럴",
	"지롤",
	"쥐랄",
	"쥐럴",
	"쥐롤",
	"병신",
	"븅신",
	"빙신",
	"등신",
	"벼엉신",
	"뷰웅신",
	"비잉신",
	"드응신",
	"빙시",
	"미친놈",
	"미친넘",
	"미췬놈",
	"미췬넘",
	"미친년",
	"미친뇬",
	"미친넌",
	"미췬년",
	"미췬뇬",
	"미췬넌",
	"개자식",
	"싸가지",
	"싹아지",
	"염병",
	"옘병",
	"니애미",
	"니에미",
	"c팔",
	"개같은년",
	"c8",
	"개같은놈",
	"씝할",
	"새끠",
	"세끠",
	"쉐끼",
	"새뤼",
	"쉐끼",
	"쇄끼",
	"쉐끼",
	"쇅끼",
	"씨키",
	"세키",
	"ㅅ ㅐ끼",
	"ㅅ ㅐㄲ ㅣ",
	"ㅅ ㅐ ㄲ ㅣ",
	"ㅅ ㅐ ㄱ ㄱ ㅣ",
	"새 ㄱ ㄱ ㅣ",
	"새 ㄲ ㅣ",
	"시발",
	"싀발",
	"스발",
	"스벌",
	"쉬이발",
	"쓰으방",
	"쉬빨",
	"쉬팍",
	"스벌",
	"ㅅ ㅅ ㅣ 팔",
	"ㅅ ㅅ ㅣ팔",
	"ㅆ ㅣ팔",
	"씁알",
	"씝알",
	"씹알",
	"씝탱",
	"뵹신",
	"붕신",
	"븅싄",
	"뵹싄",
	"병싄",
	"존니",
	"죶나",
	"죨라",
	"죶니",
	"죤니",
	"죤나",
	"죶마난",
	"죶같은",
	"죶가튼",
	"죶빠지게",
	"즤랄",
	"질알",
	"미친",
	"애자",
	"ㅇㅐ자",
	"ㅇㅐㅈㅏ",
	"니엠",
	"엠창",
	"믜친",
	"뮈친",
	"ㅁl친",
	"섹히",
	"색기",
	"색히",
	"병쉰",
	"뱅신",
	"뱅싄",
	"뱅쉰",
	"븽신",
	"병쉰",
	"애쟈",
	"또라이",
	"떠라이",
	"ㅆl팔",
	"ㅆl발",
	"ㄴ ㅣㅁ ㅣ",
	"ㄴlㅁl",
	"늬미",
	"니믜",
	"쓰팍",
	"씌팔",
	"씌발",
	"싀팔",
	"ㅆ1팔",
	"ㅆ1발",
	"씹8",
	"샹년",
	"상년",
	"씹년",
	"씹뇬",
	"챵녀",
	"챵년",
	"창뇬",
	"챵뇬",
	"잡뇬",
	"잡년",
	"계같은뇬",
	"개같은뇬",
	"개섹",
	"죳나",
	"니앰",
	"앰창",
	"애미",
	"씹땡",
	"씹넘",
	"씝년",
	"ㄱH뇬",
	"샹놈",
	"샹늠",
	"개색",
	"개자슥",
	"게세끼",
	"씨입년",
	"씨입뇬",
	"씌벌",
	"싀방",
	"싀봉",
	"씌방",
	"ㅆI발",
	"ㅅ1발",
	"ㅆl발",
	"ㅆi발",
	"ㄴ1ㅇH미",
	"쥐랄",
	"ㅈl랄",
	"뷩신",
	"뱅신",
	"세꺄",
	"미칀",
	"호로자슥",
	"젠장",
	"제길",
	"젱장",
	"우라질",
	"제긜",
	"젝일",
	"바부",
	"듕신",
	"새키",
	"씨벨",
	"시벵",
	"시펄",
	"씹쌔",
	"등쉬",
	"늬귀미",
	"조낸",
	"씨밝",
	"개세",
	"개샛끼",
	"개쉬끼",
	"개세끼",
	"개쓰렉기",
	"쉬키",
	"색갸",
	"세캬",
	"식키",
	"시키",
	"새캬",
	"듕시나",
	"똘아이",
	"똘추",
	"ㅁ1친",
	"ㅁ1친년",
	"뮈췬",
	"뮈친년",
	"미췐",
	"미췐년",
	"미튄",
	"및친",
	"벵신",
	"병시나",
	"병시",
	"찐따",
	"뷩시",
	"새뀌",
	"색귀",
	"셥새",
	"쉽년",
	"쉽새",
	"시바라",
	"쉽팔",
	"시밝",
	"시벨",
	"십샹",
	"ㅆ│발",
	"쒸뱅",
	"씌파",
	"씌빨",
	"씌밸",
	"씌바",
	"쒸박",
	"씨뱅",
	"c발",
	"g랄",
	"zl랄",
	"凸",
	"뉘미",
	"뉘귀미",
	"^^ㅣ발",
	"ㄱ ㅐ",
	"ㅅ ㅐㄲ ㅣ",
	"ㅅ ㅐㄱㄱㅣ",
	"ㅅ ㅐ끼",
	"ㄱH",
	"ㅅ ㅔㄲ ㅣ",
	"ㅅHㄲI",
	"ㅅH끼",
	"ㅅ ㅔㄲ ㅑ",
	"ㅅ1팔",
	"ㅆ ㅣ불",
	"ㅆㅂ",
	"ㅅㅂ",
	"씹발",
	"개`",
	"개쇄",
	"씨`발",
	"새'꺄",
	"새'끼",
	"색끼",
	"섀캬",
	"샹뇬",
	"쇄키",
	"싯팔",
	"개씹",
	"섀끼",
	"쌔기",
	"ㅁ ㅣ친",
	"ㅁl친",
	"망할",
	"씨박",
	"씨'발",
	"씨벵",
	"씨빨",
	"씨파",
	"씨브랄",
	"씨팍",
	"씹빨",
	"씹세",
	"씹쌍",
	"ㅈ1랄",
	"ㅆ ㅣ발",
	"ㅆ ㅣ방",
	"ㅆ ㅣ팔",
	"ㅆ ㅣ벌",
	"ㅆ!발",
	"ㅆㅣ발",
	"쒸벨",
	"등쉰",
	"똘츄",
	"ㄴ ㅣ미",
	"ㄴ ㅣㄱ ㅣ",
	"ㄴ1ㄱ1",
	"ㄴ1ㅁ1",
	"ㄴ1미",
	"ㄴ1 ㅇ ㅐ",
	"ㄴ1 애",
	"니M창 ",
	"니OH미",
	"뷩신",
	"뷩쉰",
	"븅쉰",
	"빙쉰",
	"시팍",
	"시빨",
	"시파",
	"시밸",
	"쉽뇬",
	"개련",
	"ㅆ1밸",
	"ㅆ1벨",
	"호구",
	"씌벨",
	"애좌",
	"씻팔",
	"ㅆ1바",
	"개샛히",
	"색휘",
	"싯끼",
	"섹키",
	"쓉년",
	"쓉창",
	"호로자식",
	"씌뱅",
	"씨팰",
	"씌댕",
	"씌뎅",
	"씹쒜",
	"엠병",
	"앰병",
	"후레자식",
	"후레자슥",
	"호로년",
	"후레년",
	"씹빠",
	"뻑큐",
	"빠큐",
	"ㅃr큐",
	"개섀끼",
	"개샹련",
	"니뮈럴",
	"늬기미",
	"앰창",
	"엠창",
	"쓰박",
	"씨부랄",
	"씹샹",
	"연병",
	"시밟",
	"뒤져",
	"짜져",
	"꺼져",
	"집어쳐",
	"당근이지",
	"말밥이지",
	"말밥",
	"직딩",
	"고딩어",
	"고딩",
	"중딩",
	"초딩",
	"뻘쭘",
	"뽀작",
	"아작",
	"재수없어",
	"밥맛이야",
	"대가리",
	"눈깔",
	"아가리",
	"후까시",
	"깐죽",
	"구라",
	"잡놈",
	"아햏햏",
	"뒤질래",
	"디질래",
	"아갈",
	"닥쳐",
	"허접",
	"흐접",
	"허좁",
	"흐좁",
	"호좁",
	"호로",
	"찌질이",
	"낙태아",
	"다방년",
	"호모",
	"뷁",
	"섋",
	"긔지",
	"엿먹어",
	"개자지",
	"개보지",
	"애비자지",
	"애미보지",
	"자지",
	"잠지",
	"보지",
	"섹스",
	"공알",
	"좆",
	"좇",
	"좃",
	"젖",
	"빨통",
	"딸딸이",
	"딸따리",
	"빠구리",
	"빠굴이",
	"빠굴",
	"빠순이",
	"빠수니",
	"사까시",
	"불알",
	"부랄",
	"번섹",
	"번쌕",
	"번쎅",
	"떡치기",
	"후장",
	"섹스",
	"색스",
	"쎅스",
	"쌕스",
	"쉑스",
	"섹쓰",
	"색쓰",
	"쎅쓰",
	"쌕쓰",
	"쉑쓰",
	"창녀",
	"창년",
	"갈보",
	"개싑창",
	"죷",
	"죳",
	"좆나",
	"좇나",
	"존나",
	"죤나",
	"욧나",
	"쟈지",
	"죠또",
	"죵나",
	"자쥣",
	"죠빠",
	"쫓까",
	"죡쳐",
	"보쥐",
	"쟘쥐",
	"꼬추",
	"꼬츄",
	"강간",
	"걸레년",
	"곧휴",
	"쟘지",
	"ㅈ ㅏㅈ ㅣ",
	"ㅈ ㅏ지",
	"자쥐",
	"잠쥐",
	"쟘쥐",
	"보'지",
	"섹'스",
	"유두",
	"유방",
	"차앙년",
	"창ㄴ ㅕ",
	"창뇬",
	"촹년",
	"촹뇬",
	"폰섹",
	"ㅃㅏ구리",
	"ㅃr굴",
	"고츄",
	"붕알",
	"폰색",
	"죠까",
	"sex",
	"fuck",
	"fuk",
	"porno",
	"dildo",
	"pussy",
	"shit",
	"bitch",
	"anal",
	"fetish",
	"lesbien",
	"bastard",
	"cunt",
	"damn",
	"asshole",
	"귀두",
	"뽕알"
];

// 메시지를 필터링한다.
Minitalk.on("beforeSendMessage",function(minitalk,message) {
	var reg = new RegExp("(" + me.words.join("|") + ")","g");
	
	// 필터링된 단어가 포함되어 있는 경우
	if (message.search(reg) >= 0) {
		// 필터링된 단어를 * 로 변경한다.
		var message = message.replace(reg,function(word) {
			return "*".repeat(word.length);
		});
		
		
		// 필터링이 완료된 메시지를 서버로 전송하고, 메시지 전송을 중단한다.
		Minitalk.socket.sendMessage("message",message,true);
		
		// 입력창을 초기화한다.
		Minitalk.ui.setInputVal("");
		
		return false;
	}
});