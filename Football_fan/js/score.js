'use strict';
(function() {
    var scores;
    $.ajax({
        headers: {
            'X-Auth-Token': '825dbab35fe94c798367d5545f987daf'
        },
        url: 'http://api.football-data.org/v1/soccerseasons/424/fixtures',
        dataType: 'json',
        type: 'GET',
    }).done(function(response) {

        scores = response;
        displayScores();
    });

    function displayScores(){
        console.log(scores);
        var len = scores.count;
        var parrent = $('.content');
        var homeTeam = '';
        var awayTeam = '';
        var homeTeamScore = 0;
        var awayTeamScore = 0 ;
        var check;
    for (let i = 0; i < len; i++) {
            awayTeam = scores.fixtures[i].awayTeamName;
            homeTeam = scores.fixtures[i].homeTeamName;
            awayTeamScore = scores.fixtures[i].result.goalsAwayTeam;
            homeTeamScore = scores.fixtures[i].result.goalsHomeTeam;
            check=checkWinner(awayTeam,homeTeam,awayTeamScore,homeTeamScore);



            parrent.append(`<div class="match">${check}</div>`);
         }
    }

})();

function checkWinner(away,home,awayScore,homeScore){
    var result = '';

    if(awayScore>homeScore){
       result = `<div class="team left">${away}</div>
		<div class="winner score">${awayScore}</div>
		<div class="team">${home}</div>
		<div class="loser score">${homeScore}</div>`;

    }else if(awayScore<homeScore){
        result = `<div class="team left">${away}</div>
		<div class="loser score">${awayScore}</div>
		<div class="team">${home}</div>
		<div class="winner score">${homeScore}</div>`;
    }
    else{
        result = `<div class="team left">${away}</div>
		<div class="neutral score">${awayScore}</div>
		<div class="team">${home}</div>
		<div class="neutral score">${homeScore}</div>`;
    }
    return result;
}

