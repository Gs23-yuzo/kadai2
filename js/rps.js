





	//ボタン操作

	$('.btn').on("click", function(){
        let score = Math.round(Math.random()*2);
		let user = $(this).attr('data-score');
		
		let result =(function(){
			if(score == 0 && user == 0) return '<img src="images/hold.jpg" alt="" >';
			if(score == 0 && user == 1) return '<img src="images/ok.jpg" alt="" >';
			if(score == 0 && user == 2) return '<img src="images/ng.jpg" alt="" >';
			if(score == 1 && user == 0) return '<img src="images/ok.jpg" alt="" >';
			if(score == 1 && user == 1) return '<img src="images/hold.jpg" alt="" >';
			if(score == 1 && user == 2) return '<img src="images/ng.jpg" alt="" >';
			if(score == 2 && user == 0) return '<img src="images/ng.jpg" alt="" >';
			if(score == 2 && user == 1) return '<img src="images/ok.jpg" alt="" >';
			return '<img src="images/hold.jpg" alt="" ></div>';
		})();
		$('#g_resultArea').html(result)	

		
    });

	$(".title_btn").on("click", function(){
		$(".title_typing").toggle();
	});

var num = 0;
	$(".btn").click(function(){
		$(this).data("click", ++num);
		var click = $(this).data("click");
		if(click >= 10){
			Swal.fire(
				{
					title: 'もう、やめときな…',
					width: 600,
					padding: '3em',
					color: '#716add',
					background: '#fff url(/images/trees.png)',
					backdrop: `
					  rgb(5,3,35,0.8)
					  url("/images/nyan-cat.gif")
					  left top
					  no-repeat
					`
				  }
			  )
		}
		return false;
	});

	$('.title_typing').typed({
		strings: [
		"平日の昼間からぁゴロゴロ～ゴロゴロ。あぁ～あ、ミスチル1人募集しねぇかなぁ((￣δ・￣)ﾎｼﾞﾎｼﾞ",
		"平日の昼間からぁゴロゴロ～ゴロゴロ。あぁ～あ、ニューヨーク・ヤンキース、間違って俺と契約しねぇかなぁ((￣δ・￣)ﾎｼﾞﾎｼﾞ",
		"平日の昼間からぁゴロゴロ～ゴロゴロ。あぁ～あ、ササッと書いた落書きが1億円で売れねぇかなぁ((￣δ・￣)ﾎｼﾞﾎｼﾞ",
		"平日の昼間からぁゴロゴロ～ゴロゴロ。あぁ～あ、同じ人間ってことでレディガガ付き合ってくれねぇかなぁ((￣δ・￣)ﾎｼﾞﾎｼﾞ",
		"平日の昼間からぁゴロゴロ～ゴロゴロ。あぁ～あ、日銀が俺に資金投入してくれたらなぁ((￣δ・￣)ﾎｼﾞﾎｼﾞ",
		"平日の昼間からぁゴロゴロ～ゴロゴロ。あぁ～あ、自宅待機しただけで国民栄誉賞がもらえたらなぁ((￣δ・￣)ﾎｼﾞﾎｼﾞ",
		"平日の昼間からぁゴロゴロ～ゴロゴロ。あぁ～あ、富士そばの食券が日本国債だったらなぁ((￣δ・￣)ﾎｼﾞﾎｼﾞ",
		"平日の昼間からぁゴロゴロ～ゴロゴロ。あぁ～あ、ニキビから石油でねぇかなぁ((￣δ・￣)ﾎｼﾞﾎｼﾞ",
		"平日の昼間からぁゴロゴロ～ゴロゴロ。あぁ～あ、オヤジがトム・クルーズだったらなぁ((￣δ・￣)ﾎｼﾞﾎｼﾞ",
		"平日の昼間からぁゴロゴロ～ゴロゴロ。あぁ～あ、乳を揉むことが出会いの挨拶だったらなぁ((￣δ・￣)ﾎｼﾞﾎｼﾞ",
	],
		typeSpeed: 100,
		startDelay: 8000,
		backSpeed: 30,
		loop: true,
		loopCount: Infinity,
		showCursor: false,
		backDelay: 500
	  });