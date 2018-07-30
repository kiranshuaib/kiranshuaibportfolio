$(document).ready(function() {
	// import view port library function
	jQuery.extend(verge);

	// smooth scrolling of viewport to target
	$('a[href^="#"]').click(function(event) {
		event.preventDefault();
		$('html,body').animate(
			{
				scrollTop: $(this.hash).offset().top - 50,
			},
			900
		);
	});

	$('#down').click(function() {
		$('html,body').animate(
			{
				scrollTop: $('#about').offset().top - 50,
			},
			900
		);
	});

	var currentTime = new Date();
	var year = currentTime.getFullYear();

	// data for the portfolio cards front and back
	var projectData = [
		{
			title: 'Indecision App',
			text:
				'<p>A React JS project,  The user can enter options to decide between them. An app will randomly decide for the user which option to choose</p> <strong>Code:</strong> React, Sass, babel<br> <strong>Layout:</strong> Bootstrap.',
			image: ['./images/IndecisionApp.png'],
			site: [['Live Site', 'fa-link', 'http://kiran.shuaib.ca/IndecisionApp']],
		},
		{
			title: 'Mark Down Previewer',
			text:
				'<p>A FreeCodeCamp project, <a href="https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer" target="_blank"><i>Build a Markdown Previewer </i></a>. The user can enter the GitHub flavored markdown into the editor, the text is rendered as HTML in the preview.</p> <strong>Code:</strong> React, Sass, babel<br> <strong>Layout:</strong> Bootstrap<br> <strong>Data:</strong> Marked library.',
			image: ['./images/MarkdownPriewer.png'],
			site: [['CodePen', 'fa-codepen', 'https://codepen.io/kiranshuaib/pen/xzbLea']],
		},
		{
			title: 'Quotes',
			text:
				'<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-build-a-random-quote-machine" target="_blank"><i>Build a Random Quote Machine</i></a>. The user is able to show a new random quote and send that quote to Twitter. <strong>Quotes</strong> was designed and optimized to be a mobile web app first.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br> <strong>Fonts:</strong> Font-awesome<br> <strong>Data:</strong> random famous quotes API',
			image: ['./images/Quotes2.png'],
			site: [['CodePen', 'fa-codepen', 'https://codepen.io/kiranshuaib/full/wPQeBG/']],
		},
		{
			title: 'Wiki Search',
			text:
				'<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-build-a-wikipedia-viewer" target="_blank"><i>Build a Wikipedia Viewer</i></a>. A user can search Wikipedia entries in a search box and see the resulting Wikipedia entries.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br><strong>Data:</strong> Wikipedia API',
			image: ['./images/Wikipedia-Search.png'],
			site: [['CodePen', 'fa-codepen', 'https://codepen.io/kiranshuaib/full/GyjPLe/']],
		},
		{
			title: 'Pomodoro Timer',
			text:
				'<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-build-a-pomodoro-clock" target="_blank"><i>Build a Pomodoro Clock</i></a>. A user can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed. <strong>Pomodoro Timer</strong> was designed and optimized to be a mobile web app first.</p> <strong>Code:</strong> HTML5, HTML5 Canvas, CSS3, Javascript, jQuery, ion.sound<br> <strong>Layout:</strong> Bootstrap, HTML5 Canvas<br> <strong>Fonts:</strong> IcoMoon',
			image: ['./images/Promodoro.png'],
			site: [['CodePen', 'fa-codepen', 'https://codepen.io/kiranshuaib/full/GyjPLe/']],
		},
		{
			title: 'Local Weather',
			text:
				'<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/zipline-show-the-local-weather" target="_blank"><i>Show the Local Weather</i></a>. A user can see the weather in my current location.. <strong>Local Weather</strong> was designed and optimized to be a mobile web app first.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery<br> <strong>Layout:</strong> Bootstrap<br> <strong>Images:</strong> flickr.com<br> <strong>Fonts:</strong> Climacons, Open Sans<br> <strong>Data:</strong> Open Weather Map API, IP-API.com Geolocation API',
			image: ['./images/localWeather.png'],
			site: [['CodePen', 'fa-codepen', 'https://codepen.io/kiranshuaib/pen/QayVYM']],
		},
		{
			title: 'Tic-Tac-Toe',
			text:
				'<p>A FreeCodeCamp project, <a href="https://www.freecodecamp.com/challenges/build-a-tic-tac-toe-game" target="_blank"><i>Build a Tic Tac Toe Game</i></a>. The user can play a game of Tic Tac Toe with the computer.</p> <strong>Code:</strong> HTML5, CSS3, Javascript, jQuery',
			image: ['./images/TicTacToe.png'],
			site: [['CodePen', 'fa-codepen', 'https://codepen.io/kiranshuaib/full/gvRxgv/']],
		},
	];

	// add listener to all the cards for click flipping
	function addListener() {
		var cards = document.querySelectorAll('.card.effect_click');

		for (var i = 0; i < cards.length; i++) {
			clickListener(cards[i]);
		}

		function clickListener(card) {
			card.addEventListener('click', function() {
				this.classList.toggle('flipped');
			});
		}
	}

	// create, populate and show portfolio project cards
	function showProjectCards() {
		var html = '';

		projectData.forEach(function(project) {
			html += '<div class="col-sm-6 col-md-4">';
			html += '<div class="card effect_click"><div class="card_front">';
			html += '<figure><img class="img-responsive" src="' + project.image[0] + '">';
			html += '<figcaption class="project-title">';
			html += project.title;
			html += '</figcaption></figure></div>';

			html += '<div class="card_back"><figure>';
			html += '<div class="project-title">' + project.title + '</div>';
			html += '<figcaption">';
			html += '<div class="project-body">' + project.text + '</div>';
			html +=
				'<div><a data-toggle="tooltip" title="' +
				project.site[0][0] +
				'" data-placement="top" href="' +
				project.site[0][2] +
				'" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0"><i class="fa ' +
				project.site[0][1] +
				'" aria-hidden="true"></i></a>';

			if (typeof project.site[1] !== 'undefined') {
				html +=
					'<a data-toggle="tooltip" title="' +
					project.site[1][0] +
					'" data-placement="top" href="' +
					project.site[1][2] +
					'" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1"><i class="fa ' +
					project.site[1][1] +
					'" aria-hidden="true"></i></a>';
			}

			html += '</div></figcaption></figure></div>';
			html += '</div>';
			html += '</div>';
		});

		$('#theProjects').append(html);
		addListener();
	}

	showProjectCards();
	$('.copyright').append('<span>© ' + year + ' Kiran Shuaib. All rights reserved</span>');

	// turn on bootstrap tooltips
	$('[data-toggle="tooltip"]').tooltip();
});
