'use strict';
(function() {
    var players;
    $.ajax({
        url: 'http://localhost:8080/data/players.json',
        dataType: 'json',
        type: 'GET',
    }).done(function(response) {

        players=response;
        displayPlayers(players);
    });
    
})();
    function displayPlayers(players){
        var teamName=getParam();
        var len=players.teams.length;
        
        var players=players.teams;
        for(let i = 0;i < len;i++){
            if(players[i].team == teamName){
                player(players[i]);
                break;
            }

        }
    }

    function getParam() {
        return window.location.search.substring(1);
    }   

    function player(player){
        var perrent = $('.players');
        for(let x in player.players){
            perrent.append('<div class="singlePlayer"><h3>Name : '+ player.players[x].name + '</h3><p>Position :' +
                player.players[x].position + '</p><p>Birth date :' + player.players[x][11] + '</p><p>League :' +
                 player.players[x].league + '</p><p class="bio">' + /*player.players[x].bio +*/ '</p></div>');
        }
    }    