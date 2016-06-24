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
		var perrent=$('.teams');
        for (let i = 0; i < teamsNum; i++) {
		perrent.append('<div><img class="flag" onclick=redirect("'+teams.teams[i].name+'") src="'
		+teams.teams[i].crestUrl+'"/><h2 class="teamName">'+teams.teams[i].name +'</h2></div>');
		
        }
    }
})()
// function for redirection 
function redirect(name){
window.location.href="C:/Users/Tester/Desktop/index.html?"+name;
}