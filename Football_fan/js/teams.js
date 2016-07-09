'use strict';
(function() {
    var teams;
    $.ajax({
        headers: {
            'X-Auth-Token': '825dbab35fe94c798367d5545f987daf'
        },
        url: 'http://api.football-data.org/v1/soccerseasons/424/teams',
        dataType: 'json',
        type: 'GET',
    }).done(function(response) {

        teams = response;
        displayTeams();
    });
    //function that dysplay all the teams(flag and name)
    function displayTeams() {


        var teamsNum = teams.teams.length;
		var parrent=$('.teams');
        var name='';
        for (let i = 0; i < teamsNum; i++) {
            name=teams.teams[i].name;
            name=name.replace(/\s/g,'_');
            console.log(name);
		parrent.append('<div class="tema"><img class="flag" onclick=redirect("'+name+'") src="'+
        teams.teams[i].crestUrl+'"/><h3 class="teamName">'+teams.teams[i].name +'</h3></div>');
		
        }
    }
})();
// function for redirection 
function redirect(name){

    window.location.href="../player.html?"+name;
}