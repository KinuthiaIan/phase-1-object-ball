
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
  function numPointsScored(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      if (game[teamKey].players[playerName]) {
        return game[teamKey].players[playerName].points;
      }
    }
    return null; 
  }

   function shoeSize(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      if (game[teamKey].players[playerName]) {
        return game[teamKey].players[playerName].shoe;
      }
    }
    return null; 
  }

  function teamColors(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
      if (game[teamKey].teamName === teamName) {
        return game[teamKey].colors;
      }
    }
    return null;
  
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  function playerNumbers(teamName) {
    const game = gameObject();
    for (const teamKey in game) {
      if (game[teamKey].teamName === teamName) {
        const players = game[teamKey].players;
        return Object.values(players).map((player) => player.number);
      }
    }
    return null;
  }
  
  function playerStats(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
      if (game[teamKey].players[playerName]) {
        return game[teamKey].players[playerName];
      }
    }
    return null;
  }
  function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = 0;
    let maxRebounds = 0;
    let playerName = '';
  
    for (const teamKey in game) {
      const players = game[teamKey].players;
      for (const player in players) {
        if (players[player].shoe > maxShoeSize) {
          maxShoeSize = players[player].shoe;
          maxRebounds = players[player].rebounds;
          playerName = player;
        }
      }
    }
    return maxRebounds;
  }
  
  function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let playerName = '';
  
    for (const teamKey in game) {
      const players = game[teamKey].players;
      for (const player in players) {
        if (players[player].points > mostPoints) {
          mostPoints = players[player].points;
          playerName = player;
        }
      }
    }
    return playerName;
  }
  
  function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
  
    for (const teamKey in game) {
      const players = game[teamKey].players;
      for (const player in players) {
        if (teamKey === 'home') {
          homePoints += players[player].points;
        } else if (teamKey === 'away') {
          awayPoints += players[player].points;
        }
      }
    }
  
    if (homePoints > awayPoints) {
      return game.home.teamName;
    } else if (awayPoints > homePoints) {
      return game.away.teamName;
    } else {
      return 'It\'s a tie!';
    }
  }
  
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';
    for (const teamKey in game) {
      const players = game[teamKey].players;
      for (const player in players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  
  function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = playerWithLongestName();
    let mostSteals = 0;
  
    for (const teamKey in game) {
      const players = game[teamKey].players;
      for (const player in players) {
        if (players[player].steals > mostSteals) {
          mostSteals = players[player].steals;
        }
      }
    }
  
    return game.home.players[longestName].steals === mostSteals ||
      game.away.players[longestName].steals === mostSteals;
  }
  
  console.log(numPointsScored("Alan Anderson"));
  console.log(shoeSize("Alan Anderson"));
  console.log(teamColors("Brooklyn Nets"));
  console.log(teamNames());
  console.log(playerNumbers("Brooklyn Nets"));
  console.log(playerStats("Alan Anderson"));
  console.log(bigShoeRebounds());
  console.log(mostPointsScored());
  console.log(winningTeam());
  console.log(playerWithLongestName());
  console.log(doesLongNameStealATon());
  